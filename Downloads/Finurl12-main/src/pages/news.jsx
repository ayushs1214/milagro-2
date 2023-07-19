import React from 'react';
import { Link } from "react-router-dom";
import hand from "../images/hand.png";

const news = () => (
  <div className="news">
    <div className="flex flex-col md:flex-row">
      <div className="box md:flex-2">
        <ul className="list pl-8 pt-10 pb-20">
          <li>
            <h1 className="h1news text-white">Let’s try our services now!</h1>
          </li>
          <li>
            <p className="pn text-gray-500">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </li>
          <li className="pt-5">
            <Link to="/home">
              <button className="btnn">GET STARTED</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:flex-2">
        <img src={hand} alt="touch" className="h-85 pt-20" />
      </div>
    </div>
  </div>
);

export default news;
