import SEO from "@/common/seo";
import Integrations from "@/components/integrations";
import Wrapper from "@/layout/wrapper";
import React from "react";
 

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Integrations />
    </Wrapper>
  );
};

export default index;
