import React from 'react';
import Inc from '../images/fin8.jpg';
import Score from '../images/fin20.jpg';
import { Link } from 'react-router-dom';
import { CTA } from '../Components';
import "../products/index1.css";

const credit = () => {
  return (
    <div className=" pscontainer bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:gap-4 md:px-4">
        {/* First Box */}
        <Link to="/credit1" className="text-gray-500 hover:text-gray-700 py-2">
        <div className="border-2 border-gray rounded-lg p-4 md:w-4/5 transform transition-all  duration-300 hover:scale-90">
          <img src={Inc} alt="Inc" className="w-full h-2/5 mb-4" />
          <p className="text-gray-500">
            <u>
              <Link to="/credit1" className="text-gray-500 hover:text-gray-700">
                What Increases Your Total Loan Balance?
              </Link>
            </u>
          </p>
          <p className="text-white">
            When you take on debt, the loan balance can grow over time. Understanding the factors that push your loan balance higher can help you...
          </p>
        </div>
        </Link>

        {/* Second Box */}
        <Link to="/credit2" className="text-gray-500 hover:text-gray-700 py-2">
        <div className="border-2 border-white rounded-lg p-4 md:w-4/5 transform transition-all duration-300 hover:scale-90">
          <img src={Score} alt="Score" className="w-full h-2/5 mb-4" />
          <p className="text-gray-500">
            <u>
              <Link to="/credit2" className="text-gray-500 hover:text-gray-700">
                Why Did My Credit Score Drop?
              </Link>
            </u>
          </p>
          <p className="text-white">
            Credit scores can drop for a variety of reasons, from a credit report error to a missed debt payment. These are the main reasons...
          </p>
        </div>
        </Link>
      </div>
      <br></br>
      <CTA />
      <br></br>
      <br></br><br></br>
    </div>
  );
};

export default credit;
