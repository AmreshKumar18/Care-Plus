import React, { useEffect, useRef, useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

import cpr from "../assets/cpr.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const AwarnessDetails = () => {
  const [awarnessDetails, setAwarnessDetails] = useState([]);
  const { id } = useParams();
  const getAwarnessDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/awarness-details/${id}`
      );
      setAwarnessDetails(res.data.awarnessDetails);
      console.log(res.data.awarnessDetails);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  //
  const htmlDescription = awarnessDetails.description || "";
  const [count, setCount] = useState(0);
  const hasVisited = useRef(false);
  useEffect(() => {
    if (hasVisited.current) return;

    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;

    setCount(initialCount + 1);
    localStorage.setItem("pageVisits", initialCount + 1);

    hasVisited.current = true;
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    getAwarnessDetails();
  }, []);

  //
  const shareUrl = window.location.href; // The current page URL
  const title = "Check this out!";

  return (
    <>
      <div className=" container mt-24 w-full">
        <h1 className="awarness_title mb-5">{awarnessDetails.heading}</h1>
        <div className="awarness_details flex justify-between mb-5">
          <div>
            <div>
              <p>Published By:</p>
              <span>{awarnessDetails.published}</span>
            </div>
            <div>
              <p>Written by:</p>
              <span>{awarnessDetails.written}</span>
            </div>
            <div>
              <p>Views:</p>
              <span>{count}</span>
            </div>
            <div>
              <p>Print in PDF:</p>
              <div>
                <FaFilePdf size={22} />
              </div>
            </div>
          </div>
          <div className="share_icon" style={{ display: "flex", gap: "10px" }}>
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              summary={title}
              source={shareUrl}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
        <div className="awarness_img mb-5">
          <img
            src={`http://localhost:4000/${awarnessDetails.image}`}
            alt=""
            className=" w-full rounded-2xl h-screen"
          />
        </div>
        <div className="awarness_description">
          <h1>Description: </h1>
          <div dangerouslySetInnerHTML={{ __html: htmlDescription }} />
        </div>
        <div>image</div>
      </div>
    </>
  );
};

export default AwarnessDetails;
