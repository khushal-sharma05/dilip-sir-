import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import ProjectDetails from "@/components/project-details";

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"CodeCafeLab - It solutions"} />
            <ProjectDetails />
        </Wrapper>
    );
};

export default index;
