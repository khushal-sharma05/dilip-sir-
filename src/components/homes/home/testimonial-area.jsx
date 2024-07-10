import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Image from 'next/image';

const testimonial_content = {
    bg_img: "/assets/img/testimonial/testi-bg-3-1.png",
    title: <><span>Kind Words</span><br />from our Customers</>
};

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const { bg_img, title } = testimonial_content;

// Slider settings
const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const TestimonialArea = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`${baseUrl}/reviews`);
                setTestimonialData(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <>
            <div className="tp-testimonial-area tp-testimonial-3-mlr pb-110">
                <div className="tp-testimonial-3-bg pt-110 fix"
                    style={{ backgroundImage: `url(${bg_img})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-testimonial-3-section-box d-flex justify-content-between align-items-end mb-60">
                                    <h3 className="tp-section-title-3 text-white">{title}</h3>
                                    <div className="tp-test-arrow d-flex pb-10">
                                        <button
                                            onClick={() => sliderRef.current?.slickPrev()}
                                            type="button" className="slick-prev"><i className="fal fa-angle-left"></i></button>
                                        <button
                                            onClick={() => sliderRef.current?.slickNext()}
                                            type="button" className="slick-next"><i className="fal fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tp-testimonial-3-slider-wrapper">
                        <div className="container-fluid g-0">
                            <div className="row g-0">
                                <div className="col-12">
                                    <Slider
                                        ref={sliderRef} {...settings}
                                        className="tp-testimonial-3-slider-active"
                                    >
                                        {testimonialData.map((item, i) => (
                                            <div key={i} className="tp-testimonial-wrapper">
                                                <div className="tp-testimonial-3-item d-flex justify-content-between align-items-center">
                                                    <div className="tp-testimonial-3-content-box">
                                                        <div className="tp-testimonial-3-review">
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                            <span><i className="fas fa-star"></i></span>
                                                        </div>
                                                        <p>{item.description}</p>
                                                        <div className="tp-testimonial-3-author-info d-flex align-items-center">
                                                            <div className="tp-testimonial-3-sm-thumb d-md-none">
                                                                <Image src={`${baseUrl}${item.image}`} alt="theme-pure" width={300} height={80} />
                                                            </div>
                                                            <div>
                                                                <h5>{item.name}</h5>
                                                                <span>{item.title}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tp-testimonial-3-thumb d-none d-md-block">
                                                        <Image
                                                            src={`${baseUrl}${item.image}`}
                                                            alt={item.name}
                                                            width={150}
                                                            height={150}
                                                            style={{ objectFit: 'cover', }}
                                                        />

                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialArea;
