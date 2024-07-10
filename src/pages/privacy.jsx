import React from 'react';
import Link from 'next/link';

const privacy_content = {
    bg_img: "/assets/img/cta/cta-bg.jpg",
    title: "Privacy Policy",
   description: <>At CodeCafeLab, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (codecafelab.com) and any related services. Please read this policy carefully to understand our practices regarding your personal data.</>,
   btn_text: "Learn More",
   privacyPolicy: (
      <>
         <p>
            Your privacy is important to us. This Privacy Policy outlines how CodeCafeLab collects, uses, maintains, and discloses information collected from users (each, a "User") of the codecafelab.com website ("Site"). This privacy policy applies to the Site and all products and services offered by CodeCafeLab.
         </p>
         <h4>1. Information Collection</h4>
         <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, respond to a survey, subscribe to a newsletter, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, credit card information.
         </p>
         <h4>2. How We Use Collected Information</h4>
         <p>
            CodeCafeLab may collect and use Users personal information for the following purposes:
            - To improve customer service
            - To personalize user experience
            - To improve our Site
            - To process payments
            - To send periodic emails
         </p>
         <h4>3. Protection of Information</h4>
         <p>
            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
         </p>
         <h4>4. Changes to This Privacy Policy</h4>
         <p>
            CodeCafeLab has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
         </p>
         <h4>5. Your Acceptance of These Terms</h4>
         <p>
            By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
         </p>
         <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            <Link href="/contact">Contact Us</Link>.
         </p>
      </>
   ),
}

const { bg_img, title, description, btn_text, privacyPolicy } = privacy_content;

const PrivacyPolicyArea = () => {
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
                           <div className="privacy-policy">
                              {privacyPolicy}
                           </div>
                           <Link href="/privacy">
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

export default PrivacyPolicyArea;
