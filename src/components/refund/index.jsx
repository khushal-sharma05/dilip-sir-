import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFive from "@/layout/footers/footer-5";
import TermsArea from "./refund";
import HeaderThree from "@/layout/headers/header-3";
import Refund from "./refund";

const Career = () => {

    return (
        <>
            <HeaderThree />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Refund />
                    </main>
                    <FooterFive style_contact={true} style_team={true} />
                </div>
            </div>
        </>
    );
};

export default Career;
