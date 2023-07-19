import React from 'react';
import { Link } from "react-router-dom";
import hand from "../images/hand.png"
import './Newsletter.css';
const Newsletter = () => (
  <div className="newss">
          <div style={{ display: 'flex' }}>
          <div  className="box" style={{ flex: '2' }} >
            
     
        <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", paddingTop:"10px", paddingBottom:"20px"}}>
            <li><h1 className="h1news">Let’s try our services now!</h1> </li>
            <li> <p className="pn">Everything you need to accept card payments and grow your business
      anywhere on the planet. </p> </li>
      <li>
      <Link to="" style={{paddingLeft:"20px", paddingBottom:"10px"}}>
           <button className="btnn" >GET STARTED</button>
        </Link>
      </li>
          </ul>
          </div>
          <div style={{ flex: '2' }}>
            <img src={hand} alt="touch" style={{height: "85%",float:"right", paddingTop:"20px", }} />
          </div>
        </div>
      </div>

);

export default Newsletter;