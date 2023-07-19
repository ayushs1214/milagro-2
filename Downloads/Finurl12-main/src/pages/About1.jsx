import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import OurStoryImage from "../images/our.png";
import "../styles/animation.css";
import News from "./news";

const About1 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col lg:flex-row h-90vh">
        <div className="flex-1">
          <img
            src={OurStoryImage}
            alt="Our Story"
            className="object-cover w-1/2"
          />
        </div>
        <div className="flex-1">
          <div
            ref={textRef}
            className="relative pt:10 top-2/4 transform -translate-y-2/4 text-white pr-6 lg:pr-40 text-center lg:text-center"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <h1 className="font-semibold pt:10 text-4xl lg:text-7xl mb-8 lg:mb-16" >Our Story</h1>
          </div>
        </div>
      </div>
      <Box sx={{ my: 5, ml: 10, mr:10,mt:5 , lg: { ml: -40, mr: -40 }, "& h4": { mb: 2 } }}>
        <p className="text-white leading-8 text-justify">
          Fintech Platform incepted in December 2021 headquartered in Kolkata, India finurl.com is formed to sell financial service primarily focusing on Indian internet users, starting with the financial vertical. Enhancing its financial hands to all major locations of the country. FinURL is an online focused digital and instant loan aggregator platform with a vision to solve India’s underserved credit needs.
          <br /><br />
          Via our liaison with banks, NBFCs, and FinTechs, and our extensive distribution reach, we provide optimal solutions to lenders to grow efficiently and borrowers to avail their unmet credit needs. Finurl.com is an online portal of Finwurl Enterprises Private Limited which helps make finance available at the fingertips for every earning individual of India. 
          <br /><br />
          We started with the aim of making the complete loan process as easy as possible so that every individual can have access to credit easily. Finwurl Enterprises Private Limited is one of the major digital lending platforms in the country which uses technology and analytics tools for analyzing and processing customers' loan applications so that we can help our customers get money with minimum documents in their account in as little as 48 hours.
          <br /><br /><br /><br />
        </p>
      </Box>
      <center>
        <div className="max-w-3xl mx-auto mt-8 lg:mt-16 text-center mx-10">
          <div className="flex flex-col md:flex-row justify-center mb-8">
            <div className="flex-1 md:mr-4 p-6 bg-gradient-to-tr from-teal-100 to-teal-500 bg-opacity-75 rounded-lg">
              <h3 className="text-xl md:text-2xl mb-4">VISION</h3>
              <p>The only vision of Finwurl Enterprises Private Limited is to provide the loan to every customer approaching it, either through our lending or from other financial institutions wherever they are eligible.</p>
            </div>
            <div className="flex-1 md:ml-4 mt-8 md:mt-0 p-6 bg-gradient-to-tr from-teal-100 to-teal-500 bg-opacity-75 rounded-lg">
              <h3 className="text-xl md:text-2xl mb-4">MISSION</h3>
              <p>Help fulfil the dreams and aspirations of fellow Indians, no matter how much they earn, what occupation they have, or where they live.</p>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex-1"></div>
            <div className="flex-2 p-6 md:p-9 mt-1 md:mt-2 bg-gradient-to-tr from-teal-100 to-teal-500 bg-opacity-75 rounded-lg">
              <h3 className="text-xl md:text-2xl mb-4">MOTTO</h3>
              <p>We want to impact the maximum number of lives by providing them with wider access to financial services, through the use of technology and by putting trust in our customers. We aspire to serve thousands of customers by 2021 and many more customers by 2024.</p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </center>
      <br />
      <br />
    </div>
  );
};

export default About1;