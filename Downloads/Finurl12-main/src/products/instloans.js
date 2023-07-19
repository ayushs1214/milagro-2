import React, { useEffect, useRef } from "react";
import './index1.css';
import { Card, Typography } from "@material-tailwind/react";
import Dosa from "../images/L1.jpg";
import "../styles/animation.css";
import Psdoc from "../products/psdoc";

function Table() {
  const data1 = [
    { name: 'Interest Rate', value: '10.49% p.a. onwards' },
    { name: 'Processing Fee', value: 'Between 0.5% and 2.50% of the loan amount' },
    { name: 'Loan Amount Range', value: 'Up to ₹50 Lakhs' },
    { name: 'Loan tenure', value: '1 to 6 years' },
    { name: 'Prepayment Charges', value: '2-3% of the outstanding loan amount' },
    { name: 'Late Payment Charges', value: '2% of the due amount' }
  ];
  const data2 = [
    { name: 'MONEYWIDE', value: 'ROI 14%' },
    { name: 'Faircent', value: 'ROI 15%' },
    { name: 'Paysense', value: 'ROI 14%' },
    { name: 'IIFL BL', value: 'ROI 12%' },
    { name: 'IIFL PL', value: 'ROI 12%' },
    { name: 'Privo', value: 'ROI 15%' },
    { name: 'FLEXI LOAN', value: 'ROI 12%' },
    { name: 'NIRA', value: 'ROI 14%' },
    { name: 'KreditBee', value: 'ROI 15%' },
    { name: 'TATACAPITAL', value: 'ROI 12%' }
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    <div className="bg-black">
      <div className="h-3/4 overflow-hidden">
        <img src={Dosa} alt="Our Story" className="w-[100%] h-[30%]" />
        <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl  lg:text-6xl"
          >
            Instant Loan
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="pscontainer overflow-x-hidden">
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>
          A Instant Loan is an unsecured form of credit that one can avail to meet any financial requirement. Be it funding your next foreign trip, renovating your home, or meeting unforeseen medical expenses, an instant Instant Loan can be your ultimate respite. Those who need loans in this day and age can easily apply online at Bajaj Markets and can get the best Instant Loan offers in India.
          <br />
          <br />
        </p>
        <br />
        <center>
        <h1 className=" psloan">Instant Loan Details</h1>
        <br />
        <div className="table-container1 overflow-x-auto">
          <table className="text-white">
            <tbody>
              {data1.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
            </tbody>
          </table>  
        </div></center>
        <br />
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>
          *The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.
          <br />
          <br />
          At Bajaj Markets, we connect you with the best Instant loan lending partners across India. You can compare Instant loans and pick from the best lenders based on your convenience and apply for an instant loan on terms that you deem to be favorable.
        </p>
        <br />
        <h1 className="psloan text-center pt-10">Compare Instant Loans & Apply Online</h1>
        <br />
        <p className="text-white ps" >
          <center>Compare Instant loan interest rates of some of the leading Indian lenders right away. Their borrowing rates are as follows:</center>
        </p>
        <br />
        <center> 
          
           <div className="table-container1 overflow-x-auto">
     <div className='table1'>    <table className="text-white">
            <tbody>
              {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
            </tbody>
          </table> </div> 
        </div>
        
        
         </center>
        <br />
        <h1 className="psloan text-center pt-10">How to Apply Instant Loan Online</h1>
        <br />
       <center><ul className="list pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
          <li style={{wordWrap:"break-word"}}><b>Step 1:</b> Fill up the application form online at the top of the page with your Instant and professional details.</li>
          <br />
          <li><b>Step 2:</b> Choose the loan amount you desire from the lending partner</li>
          <br />
          <li><b>Step 3:</b> Provide all the required documents and the application form for verification.</li>
          <br />
          <li><b>Step 4:</b> Once your loan is approved, the amount will get disbursed to your bank account within 24 hours.</li>
          <br />
        </ul></center> 
        <br />
        < Psdoc />
        <br />
        <h1 className="psloan text-white text-center pt-10">Where Can a Instant Loan be Used?</h1>
        <br />
        <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
          <li><b>Wedding:</b> With the help of a marriage loan, you can take care of the seemingly endless list of expenses that one has to incur during weddings. Or you can also go about planning post-marriage trips with ease, knowing that you have enough money to take care of a majority of expenses.</li>
          <br />
          <li><b>Travel:</b> You can fulfill your desire to travel to that dream destination with the help of a travel loan. You should easily be able to manage the expenses, such as the likes of flight tickets and hotel bookings, among others.</li>
          <br />
          <li><b>Home Renovation:</b> If you have been trying to give your home a makeover, an instant Instant loan can help you do just that. Courtesy of the money that you avail of as a Instant loan, you will be able to manage the necessary expenses connected to home renovation and repair. Moreover, you can repay it over a flexible tenure of your choice.</li>
          <br />
          <li><b>Higher Education:</b> A Instant loan can also be used to pay for higher education. Instant loans are generally taken to meet expenses such as course fees, travel-related costs, and lodging/accommodation charges, among others.</li>
          <br />
          <li><b>Medical Exigency:</b> A medical emergency can lead to financial trouble. Such emergencies can also force you to ask for assistance from your family and friends. To deal with such an emergency, you can apply for a Instant loan for medical emergencies.</li>
          <br />
          <li><b>Buying Expensive Gadgets:</b> Consumer durable loans, yet another type of Instant loan, will provide you with the funds to purchase the gadgets you desire. You can use a consumer durable loan to purchase that TV you have always wanted, that mobile phone you have had your eyes on, or even that speaker system that will turn your home into a happening party area.</li>
          <br />
        </ul>
      </div>
    </div>
  );
}

function TableRow({ name, value }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
}

export default Table;