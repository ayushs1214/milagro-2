import React from 'react';
import { Link } from "react-router-dom";
import './side.css';
import hand from "../images/HAND2.png"

const side = () => (
  <div className="sidebg rounded-2xl sm:w-50  md:w-60  xl:w-80   sm:h-200 md:h-200 lg:h-200 xl:h-200 xl:ml-20 md:ml-10 ">
    <div>
      <div className=" h-96 w-full pr-10">
        <ul className=" ml-5 justify-start pt-10 pb-0">
          <li>
            <h1 className="h1news font-bold text-white text-xl tracking-wider leading-2">Let’s try our services now!</h1>
          </li> <br />
          <li>
            <p className="pn font-normal text-gray-500 ">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </li>
          <li>
            <Link to="/" className="pl-5 sm:pb-15">
              <button className="btnn   px-5 rounded-full font-semibold outline-none border-none text-black bg-gradient-to-r from-teal-200 via-teal-300 to-teal-500 hover:bg-transparent hover:border-2 hover:border-primary transition-all duration-300">GET STARTED</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-end sm:pt-20">
        <img src={hand} alt="touch" className="hand h-13" />
      </div>
    </div>
  </div>
);

export default side;
