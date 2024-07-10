import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import Link from "next/link";
import useMultipleAnime from "@/hooks/useMultipleAnime";
import { SocialLinksTwo } from "@/common/social-links";
import Image from "next/image";
import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const TeamArea = () => {
  const { dataRef } = useMultipleAnime();
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/team`);
        console.log(response.data);
        setTeamData(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="tp-team-area tp-team-inner pt-100 pb-75">
        <div className="container">
          <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tp-team-section-box text-center">
                  <h5 className="inner-section-subtitle pb-10">
                    Talented Team
                  </h5>
                  <h3 className="tp-section-title mb-0 text-black">
                    Meet our Team Members
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row" ref={dataRef}>
            {teamData.slice(0, 9).map((item, i) => (
              <div
                key={i}
                data-index={i}
                className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-${item.date} team-inner-border-right`}
              >
                <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                  <div className="tp-team-img">
                    <Image style={{ width: "100%", height: "200px" }} className="w-100" src={`${baseUrl}${item.image}`} alt="Portfolio Thumbnail" width={400} height={50} />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="/team-details">{item.name}</Link>
                    </h4>
                    <span>{item.job_title}</span>
                  </div>
                  <div className="tp-team-social">
                    <SocialLinksTwo />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;
