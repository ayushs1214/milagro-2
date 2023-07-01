import React from 'react';
import { Link } from "react-router-dom";
import hand from "../images/HAND2.png"
import './side.css';
const side = () => (
  <div className="side">
    <div style={{ display: 'column'  }}>
      <div className="box" style={{ flex: 'column' , height: "400px", width: "100px", paddingTop:"10px"}}>
        <ul className="list" style={{ marginLeft: "30px", justifyContent: "left", paddingTop: "10px", paddingBottom: "0px" , height: "100px", width: "200px"}}>
          <li><h1 className="h1news">Let’s try our services now!</h1></li>
          <li><p className="pn">Everything you need to accept card payments and grow your business anywhere on the planet.</p></li>
          <li>
            <Link to="/home" style={{ paddingLeft: "20px",}}>
              <button className="btnn">GET STARTED</button>
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ flex: 'column' }}>
        <img src={hand} alt="touch" style={{ height: "100px",  paddingLeft:"45.3px" }} />
      </div>
    </div>
  </div>
);

export default side;