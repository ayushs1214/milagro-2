import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import OurStoryImage from "../images/our.png"; // New image
import "../styles/animation.css";
import News from "./news";

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    <div
      style={{
        background:
          "rgb(2,0,36)",
        background:
          "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
        background:
          "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
        filter:
          "progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#01668d',GradientType=1)"
      }}
    >
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "100%",
          overflow: "hidden"
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src={OurStoryImage}
            alt="Our Story"
            style={{
              objectFit: "cover",
              
              width: "600px",
              height: "500px"
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            ref={textRef}
            style={{
              position: "relative",
              top: "40%",
              transform: "translateY(-50%)",
              color: "white",
              paddingRight: "40px"
            }}
          >
            <h1 style={{ fontSize: "80px", marginBottom: "80px" }}>
              Our Story
            </h1>
              </div>
        </div>
      </div>
      <br />
      <Box sx={{ my: 5, ml: 40, mr: 40, "& h4": { mb: 2 } }}>
        <p style={{ color: "white" ,  wordSpacing:"4px"}}>
          Fintech Platform incepted in December 2021 headquartered in Kolkata, India finurl.com is formed to sell financial service primarily focusing on Indian internet users, starting with the financial vertical. Enhancing its financial hands to all major locations of the country. FinURL is an online focused digital and instant loan aggregator platform with a vision to solve India’s underserved credit needs.
          <br /><br />
          Via our liaison with banks, NBFCs, and FinTechs, and our extensive distribution reach, we provide optimal solutions to lenders to grow efficiently and borrowers to avail their unmet credit needs. Finurl.com is an online portal of Finwurl Enterprises Private Limited which helps make finance available at the fingertips for every earning individual of India.
          <br /><br />
          We started with the aim of making the complete loan process as easy as possible so that every individual can have access to credit easily. Finwurl Enterprises Private Limited is one of the major digital lending platforms in the country which uses technology and analytics tools for analyzing and processing customers' loan applications so that we can help our customers get money with minimum documents in their account in as little as 48 hours.
          <br /><br /><br /><br />
        </p>
      </Box>
      <center>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "40px",
            maxWidth: "900px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px", marginLeft: "20px" }}>
            <div style={{ flex: 1, marginRight: "30px", border: "1px", padding: "30px", background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)', opacity:'0.75' , borderRadius:"10px", height:"200px"}}>
              <p><h3>VISION</h3><br />The only vision of Finwurl Enterprises Private Limited. is to provide the loan to every customer approaching it, either through our lending or from other financial institutions where ever he is eligible.</p>
            </div>
            <div style={{ flex: 1, marginLeft: "30px", border: "1px", padding: "30px", background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)', opacity:'0.75', borderRadius:"10px", height:"200px" }}>
              <p><h3>MISSION</h3><br />Help fulfil the dreams and aspirations of fellow Indians, no matter how much they earn, what occupation they have or where they live.</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <div style={{ flex: 1 }}></div>
            <div style={{ flex: 2, border: "1px", marginTop: "50px", padding: "35px", background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)', opacity:'0.75', borderRadius:"10px" }}>
              <p><h3>MOTTO</h3><br />We want to impact maximum number of lives by providing them with a wider access to financial services, through use of technology and by putting in trust in our customers. We aspire to serve thousands of customers by 2021 and many more customers by 2024.</p>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
          <br /><br />
        
      </div>
        </center>
      <br />
      <br />
    </div>
  );
};

export default About;


