import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState([]);
  const originalItemsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/projects`);
        console.log(response.data);
        setItems(response.data);
        originalItemsRef.current = response.data; // Store original data in useRef
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const categories = [
    "All",
    ...new Set(originalItemsRef.current.map((item) => item.category)),
  ];

  const setActive = (cateItem) => {
    setActiveCategory(cateItem);
  };

  return (
    <div className="portfolio-area pt-100 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="portfolio-filter masonary-menu text-center mb-35">
              {categories.map((cate, i) => (
                <button
                  onClick={() => setActive(cate)}
                  key={i}
                  className={`${cate === activeCategory ? "active" : ""}`}
                >
                  <span>{cate}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="row grid">
          {originalItemsRef.current.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 grid-item cat1 cat4 cat3 cat5">
              <div className="inner-project-item mb-30">
                <Link href={`/project-details/${item._id}`}>
                  <div className="inner-project-img fix p-relative">
                    <Image style={{ width: "100%", height: "200px" }} className="w-100" src={`${baseUrl}${item.image}`} alt="Portfolio Thumbnail" width={400} height={50} />
                  </div>
                </Link>

                <div className="inner-project-content">
                  <p className="">{item.name}</p>
                  <p className="">{item.category}</p>

                  <span className="inner-project-category-title">
                    <Link href={`/project-details/${item._id}`}>{item.title}</Link>
                  </span>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
