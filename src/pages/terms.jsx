import React from 'react';
import Link from 'next/link';

const terms_content = {
   bg_img: "/assets/img/cta/cta-bg.jpg",
   title: "Terms & Conditions",
   description: <>Welcome to CodeCafeLab! We are committed to providing you with a great experience, while ensuring your privacy and security. Please read these terms carefully before using our services.</>,
   btn_text: "Read More",
   termsAndConditions: (
      <>
         <p>
            By accessing or using CodeCafeLab's services, you agree to be bound by these Terms & Conditions. Please review them carefully. If you do not agree to these terms, you may not access or use our services. Our Terms & Conditions are subject to change without notice, so please check back periodically for updates. If you have any questions about these terms, please <Link href="/contact">contact us</Link>.
         </p>
         <h4>1. User Agreement</h4>
         <p>
            CodeCafeLab offers a variety of services and products through its website (codecafelab.com). By using these services, you agree to comply with all applicable laws and regulations.
         </p>
         <h4>2. Privacy Policy</h4>
         <p>
            Your privacy is important to us. Please review our <Link href="/privacy">Privacy Policy</Link> to understand how we collect, use, and disclose information about you.
         </p>
         <h4>3. Intellectual Property</h4>
         <p>
            All content on this website, including text, graphics, logos, button icons, images, audio clips, and software, is the property of CodeCafeLab and is protected by international copyright laws. You may not use or reproduce any of this content without our express permission.
         </p>
         <h4>4. Limitation of Liability</h4>
         <p>
            CodeCafeLab is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services or inability to use our services.
         </p>
         <h4>5. Governing Law</h4>
         <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of [Your Country], without regard to its conflicts of law principles.
         </p>
         <p>
            Thank you for choosing CodeCafeLab. If you have any questions about these terms, please contact us.
         </p>
      </>
   ),
}

const { bg_img, title, description, btn_text, termsAndConditions } = terms_content;

const TermsArea = () => {
   return (
      <>
         <div className="tp-cta-area p-relative">
            <div className="tp-cta-grey-bg grey-bg-2"></div>
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="tp-cta-bg" style={{ backgroundImage: `url(${bg_img})` }}>
                        <div className="tp-cta-content tp-inner-font text-center">
                           <h3 className="tp-section-title text-white">{title}</h3>
                           <p>{description}</p>
                           <div className="terms-and-conditions">
                              {termsAndConditions}
                           </div>
                           <Link href="/terms">
                              {btn_text} 
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default TermsArea;
