import ClockIcon from '@/svg/clock-icon';
import LocationIconThree from '@/svg/location-icon-3';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;


const JobArea = ({ style_carrer }) => {

   const [jobData, setJobData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${baseUrl}/careers`);
            console.log("Career Details----->", response.data);
            setJobData(response.data);
         } catch (error) {
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, []);

   // const { sub_title, title, carrer_title, carrer_info, job_info } = jobData;
   const { name, title, description, date, image } = jobData;



   return (
      <>
         <div className="job-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="job-section-box text-center mb-40">

                     </div>
                  </div>
               </div>
               {jobData.map((item, i) =>
                  <div key={i} className="job-post-box">
                     <div className="row align-items-center">
                        <div className=" col-lg-5 col-md-4">
                           <div className="job-post-info d-flex justify-content-start align-items-center">
                              <div className="job-post-category">
                                 <span>{item.category}</span>
                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-4 col-md-5">
                           <div className="job-post-wrapper d-flex align-items-center">
                              <div className="job-post-time d-flex align-items-center">
                                 <ClockIcon />
                                 <span>{item.name}</span>

                                 {/* <span>{item.job_time}</span> */}
                              </div>
                              <div className="job-post-location d-flex align-items-center">
                                 <LocationIconThree />
                                 <span>{item.title}</span>
                                 <span>{item.description}</span>

                              </div>
                           </div>
                        </div>
                        <div className=" col-lg-3 col-md-3">
                           <div className="job-post-apply-btn text-start text-md-end">
                              <Link className="tp-btn-inner tp-btn-hover alt-color-orange"
                                 href="/career-details"><span>Apply</span> <b></b>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               )
               }
            </div>
         </div>
      </>
   );
};

export default JobArea;