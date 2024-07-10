import useTitleAnimation from '@/hooks/useTitleAnimation';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import img from "../../../../public/assets/img/service/sv-dashbord.png";
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// console.log("local url", baseUrl)
const service_content = {
    title: "Browse our portfolio",
    sub_title: <>Explore our diverse range of projects
        showcasing our commitment to excellence
        and innovation. See how we've helped brands
        achieve their goals with creative solutions
        and cutting-edge technology.</>,
    bg_img: "/assets/img/service/sv-bg.jpg",
    title_2: <>Data Analysis <br /> Tools & Methods</>,
    des: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
    btn_text: "Work with Us",
};
const { title, sub_title, bg_img, title_2, des, btn_text } = service_content;

const ServicesArea = () => {
    const [serviceData, setServiceData] = useState([]);
    const titleRef = useRef(null);

    useTitleAnimation(titleRef);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/services`);
                setServiceData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="tp-service__area p-relative fix">
                <div className="tp-service__grey-shape grey-bg"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div ref={titleRef} className="tp-service__section-box tp__title_anime mb-50 text-center tp-title-anim">
                                <h2 className="tp-section-title">{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceData.slice(0, 5).map((item, i) =>
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                                <div className="tp-service__item mb-30">
                                    <div style={{ maxWidth: '100%', height: '150px', overflow: 'hidden', borderRadius:"10px" }} className="tp-service__icon">
                                        <Image src={`${baseUrl}${item.image}`} alt="theme-pure" width={300} height={80} />
                                    </div>
                                    <div className="tp-service____title-box">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="tp-service__content">
                                        <h3 className="tp-service__title-sm tp-yellow-color"><Link href="/service-details">{item.title}</Link></h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tp-service__link">
                                        <Link href="/service-details">
                                            <RightArrow />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
                            <div className="tp-service__dashboard"
                                style={{ backgroundImage: `url(${bg_img})` }} >
                                <div className="tp-service__top-content">
                                    <h3 className="tp-service__title-white">{title_2}</h3>
                                    <p>{des}</p>
                                    <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="/project-details">
                                        <span>{btn_text}</span>
                                        <b></b>
                                    </Link>
                                </div>
                                <div className="tp-service__dashdboard-sm-img">
                                    <Image className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s"
                                        src={img} alt="theme-pure" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesArea;
