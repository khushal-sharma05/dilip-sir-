import useMultipleAnime from '@/hooks/useMultipleAnime';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const feature_content = {
    title: <>Our <span> Services </span></>,
    des: <>Unlock the power of digital  <span>for your</span> brand with our complete <br /> suite of services.</>,
    integraton_title: "What you will get",
    integraton_des: <>Unlock the power of digital  <span>for your</span> brand with our complete <br /> suite of services.</>,
};
const { title, des, integraton_title, integraton_des } = feature_content;

const FeatureArea = ({ style_integraton }) => {
    const [featureData, setFeatureData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/products`);
                setFeatureData(response.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={`tp-feature-area ${style_integraton ? "pt-100 pb-30" : "grey-bg-3 pt-120 pb-110"}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tp-feature-five-section-box text-center mb-40">
                            {style_integraton ? (
                                <>
                                    <h3 className="tp-section-title-5 text-black">
                                        <span>{integraton_title}</span>
                                    </h3>
                                    <p>{integraton_des}</p>
                                </>
                            ) : (
                                <>
                                    <h3 className="tp-section-title-5 text-black">{title}</h3>
                                    <p>{des}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row gx-0 tp-feature-five-wrapper-main">
                    {featureData.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="tp-feature-five-wrapper">
                                <div className={`tp-feature-five-item tp-feature-five-item-${item.name} text-center z-index`}>
                                    <div className="tp-feature-five-icon p-relative">
                                        <Image src={`${baseUrl}${item.image}`} alt="theme-pure" width={100} height={100} />
                                        <div className={`tp-feature-five-shape-color tp-feature-five-shape-color-${item.color}`}></div>
                                    </div>
                                    <div className="tp-feature-five-content">
                                        <h4 className="tp-feature-five-title-sm">{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tp-feature-five-btn">
                                        <Link className="tp-btn-purple" href="/service-details">Learn More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tp-feature-five-link text-center">
                            <span>Check out all of our <Link href="/service-details">All features</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureArea;
