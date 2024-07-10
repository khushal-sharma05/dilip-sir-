// import portfolio_blog from '@/data/portfolio-blog';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;


const setting = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 3,
        },
        '992': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 1,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}


const Portfolio = () => {

    const [portfolio_blog, setPortfolio_blog] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/blogs`);
                console.log("blog-Details----->", response.data);
                setPortfolio_blog(response.data);
             } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="blog-grid-inner grey-bg pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-blog-title mb-40 text-center">
                                <h4>Related Posts</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="blog-details-slider-wrapper">
                                <Swiper {...setting} className="swiper-container blog-slider-active pb-50">
                                    {portfolio_blog.map((item, i) =>
                                        <SwiperSlide key={i} className="swiper-slide">
                                            <div className="tp-blog-item">
                                                <div className="tp-blog-thumb fix">
                                                    <Link href="#">
                                                        <Image style={{ width: "100%", height: "200px" }} className="w-100" src={`${baseUrl}${item.image}`} alt="Portfolio Thumbnail" width={400} height={50} />
                                                    </Link>
                                                </div>
                                                <div className="tp-blog-content">
                                                    <div className="tp-blog-meta d-flex align-items-center">
                                                        <div className="tp-blog-category category-color-1">
                                                            <span>{item.category}</span>
                                                        </div>
                                                        <div className="tp-blog-date">
                                                            <span>{item.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="tp-blog-title-box">
                                                        <Link className="tp-blog-title-sm" href="#">{item.title}</Link>
                                                    </div>
                                                    <div className="tp-blog-author-info-box d-flex align-items-center">
                                                        <div className="tp-blog-avata">
                                                            {/* <Image src={item.avata_img} alt="theme-pure" /> */}
                                                        </div>
                                                        <div className="tp-blog-author-info">
                                                            <h5>{item.name}</h5>
                                                            {/* <span>{item.job_title}</span> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;