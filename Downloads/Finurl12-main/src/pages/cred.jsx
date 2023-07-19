import React from 'react';
import { Link } from "react-router-dom";
import hand from "../images/hand.png"
import './Newsletter.css';
import styles from "../style";
// import {Footer, Navbar } from "../Components";
const cred = () => (
  <div className="root">
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Navbar /> */}
      </div>
    </div>
  <div className="newss">
          <div style={{ display: 'flex' , height:'15rem'}}>
          <div  className="box" style={{ flex: '2' }} >
            
     
        <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", paddingTop:"10px", paddingBottom:"20px"}}>
            <li><h1 className="h1news">Check Your Credit Score Now!</h1> </li>
            <li> <p className="pn"> </p> </li>
      <li>
      <Link to="/creditscore" style={{paddingLeft:"20px", paddingBottom:"10px"}}>
           <button className="btnn">CHECK NOW</button>
        </Link>
      </li>
          </ul>
          </div>
          <div style={{ flex: '2' }}>
            <img src={hand} alt="touch" style={{height: "85%",float:"right", paddingTop:"20px", }} />
          </div>
        </div>
      </div>
  </div> </div>
);

export default cred;