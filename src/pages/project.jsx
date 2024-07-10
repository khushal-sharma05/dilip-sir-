import React from "react";
import SEO from "../common/seo";
import Project from "../components/project";
import Wrapper from "../layout/wrapper";

const indx = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"CodeCafeLab - It solutions"} />
      <Project />
    </Wrapper>
  );
};

export default indx;
