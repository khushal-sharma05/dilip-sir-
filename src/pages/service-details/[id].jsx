import SEO from "@/common/seo";
import ServiceDetails from "@/components/service-details";
import React from "react";
import Wrapper from '../../layout/wrapper'


const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"CodeCafeLab - It solutions"} />
            <ServiceDetails />
        </Wrapper>
    );
};

export default index;
