import React, { useEffect, useRef } from "react";
import "../styles/HomeStyles.css";
import "../products/index1.css";
import Dosa from "../images/L1.jpg";
function CreditScore() {
  const data2 = [
    {  name: '750 or more', value: 'Very good' },
    {  name: '701-750', value: 'Fair' },
    {  name: '601-700', value: 'Low' },
    {  name: '300-600', value: 'Very Low' },
    {  name: 'NA/NH', value: '‘Not Applicable’ or ‘No History’' }
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);
  return (
    <div className="bg-black">
    <div className="h-3/4 overflow-hidden">
      <img src={Dosa} alt="Our Story" className="w-[100%] h-[40%]" />
      <div className="absolute top-1/2 left-1/2 lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Credit Score
          </h1>
        </div>
    </div>
    <br />
    <br />
    <br />
    <div className="pscontainer overflow-x-hidden">
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>
            A credit score or CIBIL score, is a 3-digit numerical score representing your creditworthiness. CIBIL score ranges from 300 – 900, where 900 is the highest.  This score indicates how well you manage your credit. In simple terms, this score helps lenders determine whether you will be able to repay the loan in the given tenure or not. Higher the score, higher are your chances of loan or card approval.
            A credit bureau calculates this credit score depending on your credit history and mix, among other factors. The most common bureau in India is TransUnion CIBIL. Apart from that, CRIF High Mark, Experian and Equifax are a few other bureaus responsible for calculating credit scores in India.
                  <br /><br />
              </p>
          
          <br></br>

          <center></center>
            <h1 className=" psloan text-center pt-10">  How to Check My CIBIL Score</h1><br></br>
            <ul className=" pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>You can check your CIBIL score through Bajaj Markets for free. You simply need to follow these steps to check your free CIBIL score:</p> <br></br>
            <li className="psl"><b>Step 1:</b>  Visit the CIBIL Score product page. You will find a form at the top of the page.</li>
            <li className="psl"><b>Step 2:</b> Enter a few personal details, such as your employment type, name, PAN, mobile number, date of birth and more</li>
            <li className="psl"><b>Step 3:</b> Agree to the terms and conditions.</li>
            <li className="psl"><b>Step 4:</b>  Click on 'PROCEED WITH OTP'.</li>
            <li className="psl"><b>Step 5:</b>  Enter the OTP sent to your registered mobile number.</li><br />
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>Upon verification of details, you will be able to view your free credit score. You will also receive a free credit report.</p> <br></br>
            </ul>
            <br></br>
           
            <h1 className=" psloan text-center pt-10">What are the Details Required to Check CIBIL Score</h1><br></br>
            <ul className=" pslist"style={{ justifyContent: "left", listStyle:"none", color: "white" }}>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>To check your CIBIL score, you must provide some basic details. These include:</p> <br></br>
            <li className="psl"><b>Step 1:</b>  Your personal information, such as name, address, date of birth, mobile number and more</li>
            <li className="psl"><b>Step 2:</b> Type of employment, i.e., whether you are salaried or self-employed</li>
            <li className="psl"><b>Step 3:</b> Your monthly income or annual turnover.</li>
            <li className="psl"><b>Step 4:</b> Your PAN</li>
            </ul>
         
          <br></br>
            <h1 className=" psloan text-center pt-10">CIBIL Score Range </h1><br></br>
            <center>
            <div className="table-container1 overflow-x-auto">
     <div className='table1'>    <table className="text-white">
                  <thead>
                      <tr>
                          
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
                  </table> </div> 
        </div>
          </center>
          <br></br>
            <h1 className=" psloan text-center pt-10">How is Credit Score Calculated?</h1><br></br>
            <ul className=" pslist "  style={{  listStyle: "outside", color: "white", wordWrap:"break-word" }}>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>Credit bureaus consider several factors before calculating your credit score. Here are a few factors that affect your credit score:</p> <br></br>
            <li className="psl"><b>History of loan repayment:</b>  Timely loan repayment can boost your credit score significantly. At the same time, if you default on your loan repayments, your credit score will fall. </li>
            <li className="psl"><b>Age of credit history</b> The age of your credit history is another crucial factor affecting your CIBIL score. If you have availed of credit cards or loans for a long time and have repaid them consistently, you will have a high credit score.</li>
            <li className="psl"><b>Credit utilisation ratio</b> It is the percentage of the credit limit that you use every month. Ideally, you should not use more than 30% of your credit card's limit to maintain a healthy credit score.</li>
            </ul>
            <br></br>
            <h1 className=" psloan text-center pt-10">Why Do Lenders Check Credit Scores? </h1><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}> The credit score is a common eligibility parameter when you apply for loans. Having said that, when lenders run a credit check, they try to assess what kind of a borrower you are. In this regard, your credit history helps them know how well you have managed loans and credit cards in the past. 
            Thus, irregular debt payments and maxed-out credit cards might pose you as a risky borrower, hampering your creditworthiness.
            </p>
            <br></br><br></br><br />
            <h1 className=" psloan text-center pt-10">How do you Check your CIBIL Score with an Aadhaar Card?</h1><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}> While you can provide your Aadhaar Card for checking CIBIL score as an ID proof on the CIBIL website, at present, it is not possible to check your CIBIL score using Aadhaar Card only. Since your credit score is linked to your PAN card, you need to provide your PAN to check this score.
            </p>
            <br></br><br></br><br />
            <h1 className=" psloan text-center pt-10">Difference between Credit Reports, Credit Scores and CIBIL Scores </h1><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}> Credit score and CIBIL score exhibit the same definition. However, the credit score that TransUnion CIBIL provides is called the CIBIL score. Apart from that, you can check your credit score through other bureaus, which include Experian, Equifax and more. 
            Now, a CIBIL score is different from a report, given the fact that CIBIL or credit score is just the numerical representation of your creditworthiness. On the other hand, a credit report contains comprehensive credit details.
            </p>
            <br></br><br></br>
            
          </div></div>
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
  
export default CreditScore;