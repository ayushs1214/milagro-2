import React from "react";
// import Layout from "./../components/Layout/Layout";
import "../styles/about.css";
import Inc from "../images/loan1.png";
import Score from "../images/dec1.png";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import Cred from "./cred";

const credit = () => {
  return (
    // <Layout>
      <div className="root"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        {/* First Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 50,
            paddingLeft: 25,
            paddingRight: 25,
          }}
        >
          {/* First Box */}
          <div
            style={{
              flex: "1 1 20%",
              border: "1px white",
              padding: 6,
              height: 500,
              marginRight: 25,
              boxShadow: "0 0 5px white",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            className="zoom-out"
          >
            <img
              src={Inc}
              alt="Inc"
              style={{
                width: "100%",
                height: "60%",
                marginBottom: 20,
              }}
            />
            <p className="credit" style={{ color: "white" }}>
              <center>
                <u >
                  <Link to="/credit1" style={{ color: "grey"}}>What Increases Your Total Loan Balance?</Link>
                </u>
                <p className="credit_title" style={{ padding: 20, fontSize:"16.5px" }}>
                  When you take on debt, the loan balance can grow over time.
                  Understanding the factors that push your loan balance higher
                  can help you...
                </p>
              </center>
            </p>
          </div>

          {/* Second Box */}
          <div
            style={{
              flex: "1 1 20%",
              border: "1px white",
              padding: 6,
              height: 500,
              marginLeft: 25,
              boxShadow: "0 0 5px white",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            className="zoom-out"
          >
            <img
              src={Score}
              alt="Score"
              style={{
                width: "100%",
                height: "60%",
                marginBottom: 20,
              }}
            />
            <p className="credit" style={{ color: "white",  }}>
              <center>
                <u  >
                <Link to="/credit2" style={{ color: "grey"}}>Why Did My Credit Score Drop?</Link>
                </u>
                <p className="credit_title"style={{ padding: 20, fontSize:"16.5px" }}>
                  Credit scores can drop for a variety of reasons, from a credit
                  report error to a missed debt payment. These are the main
                  reasons...
                </p>
              </center>
            </p>
          </div>
        </div>
        <br></br><Cred /><br></br>
      </div>
    
  );
};

export default credit;