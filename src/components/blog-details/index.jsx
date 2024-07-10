import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import BreadcrumbSix from "@/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import Banner from "./banner";
import PostboxArea from "./postbox-area";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBlogData = async () => {
        try {
          const response = await axios.get(`${baseUrl}/blogs/${id}`);
          setBlogData(response.data);
        } catch (error) {
          console.error('Error fetching blog data:', error);
        }
      };
      fetchBlogData();
    }
  }, [id]);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix />
            <Banner />
            <PostboxArea blogData={blogData} /> {/* Pass the blogData instead of just blogId */}
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
