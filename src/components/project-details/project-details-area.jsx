import React from 'react';
import Image from 'next/image';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import SEO from '@/common/seo';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const ProjectDetailsArea = ({ projectData }) => {
   console.log("pddddd===>  ", projectData)
   useIsomorphicLayoutEffect(() => {
      ScrollTrigger.create({
         trigger: ".social-box-pin",
         start: "top 10%",
         end: "bottom 60%",
         pin: ".social-box-pin",
         pinSpacing: false
      });
   }, []);

   if (!projectData) {
      return <p>Loading project details... </p>;
   }

   const { name, title, description, category, image } = projectData;

   return (

      <div className="pd-details-area pt-100 pb-100">
         <SEO pageTitle={title} />

         <div className="container">
            <div className="row g-0">
               <div className="col-xl-2 col-lg-2 social-box-pin">
                  <div className="pd-details-social-box text-lg-center text-start p-relative">
                     <div className="pd-details-social-title">
                        <span>Share This <br />Story</span>
                     </div>
                     <div className="pd-details-social">
                        <SocialLinks />
                     </div>
                  </div>
               </div>
               <div className="col-xl-10 col-lg-10 ">
                  <div className="pd-details-info">
                     <h4 className="pd-details-title">{title}</h4>
                  </div>
                  <div className="pd-details-wrapper">

                     {image && (
                        <div className="pd-details-image">
                           <Image src={`${baseUrl}${image}`} alt={title} width={800} height={500} />
                        </div>
                     )}
                  </div>
                  <div>
                     <div className="pd-details-info">
                        <p><strong>{name} </strong> </p>
                        <p>{description}</p>
                     </div>
                     <p><strong>Category:</strong> {category}</p>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectDetailsArea;
