import React from 'react';
import "../styles/HomeStyles.css";
import "../products/index1.css";
import Dosa from "../images/about3.png";
function CreditScore() {
  const data2 = [
    {  name: '750 or more', value: 'Very good' },
    {  name: '701-750', value: 'Fair' },
    {  name: '601-700', value: 'Low' },
    {  name: '300-600', value: 'Very Low' },
    {  name: 'NA/NH', value: '‘Not Applicable’ or ‘No History’' }
  ];
  
  return (
    <div style={{
          background: "rgb(2,0,36)",
          background: "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#01668d',GradientType=1)"
      }}>
          <div style={{ height: "60vh", width: "100%", overflow: "hidden" }}>
              <img
                  src={Dosa}
                  alt="Our Story"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <br />
          <br></br><br></br>
            <p className="ps" style={{ color: "white", wordSpacing: "4px"}}>
            A credit score or CIBIL score, is a 3-digit numerical score representing your creditworthiness. CIBIL score ranges from 300 – 900, where 900 is the highest.  This score indicates how well you manage your credit. In simple terms, this score helps lenders determine whether you will be able to repay the loan in the given tenure or not. Higher the score, higher are your chances of loan or card approval.
            A credit bureau calculates this credit score depending on your credit history and mix, among other factors. The most common bureau in India is TransUnion CIBIL. Apart from that, CRIF High Mark, Experian and Equifax are a few other bureaus responsible for calculating credit scores in India.
                  <br /><br />
              </p>
          
          <br></br><br></br>
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>  How to Check My CIBIL Score</h1><br></br><br></br>
            <ul className=""style={{ marginLeft: "30px", justifyContent: "left", listStyle:"outside", color: "white" }}>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}>You can check your CIBIL score through Bajaj Markets for free. You simply need to follow these steps to check your free CIBIL score:</p> <br></br>
            <li className="psl"><b>Step 1:</b>  Visit the CIBIL Score product page. You will find a form at the top of the page.</li><br />
            <li className="psl"><b>Step 2:</b> Enter a few personal details, such as your employment type, name, PAN, mobile number, date of birth and more</li><br />
            <li className="psl"><b>Step 3:</b> Agree to the terms and conditions.</li><br />
            <li className="psl"><b>Step 4:</b>  Click on 'PROCEED WITH OTP'.</li><br />
            <li className="psl"><b>Step 5:</b>  Enter the OTP sent to your registered mobile number.</li><br />
            <p  className="ps" style={{ color: "white", wordSpacing: "4px" }}>Upon verification of details, you will be able to view your free credit score. You will also receive a free credit report.</p> <br></br>
            </ul><br></br>
            <br></br><br></br>
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>What are the Details Required to Check CIBIL Score</h1><br></br><br></br>
            <ul className="psl"style={{ justifyContent: "left", listStyle:"outside", color: "white" }}>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}>To check your CIBIL score, you must provide some basic details. These include:</p> <br></br>
            <li className="psl"><b>Step 1:</b>  Your personal information, such as name, address, date of birth, mobile number and more</li><br />
            <li className="psl"><b>Step 2:</b> Type of employment, i.e., whether you are salaried or self-employed</li><br />
            <li className="psl"><b>Step 3:</b> Your monthly income or annual turnover.</li><br />
            <li className="psl"><b>Step 4:</b> Your PAN</li><br />
            </ul>
         
          <br></br>
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>CIBIL Score Range </h1><br></br><br></br>
            <center>
              <table>
                  <thead>
                      <tr>
                          
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table>
          </center>
          <br></br><br></br><br />
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>How is Credit Score Calculated?</h1><br></br>
            <ul className=""style={{ marginLeft: "30px", justifyContent: "left", listStyle:"outside", color: "white" }}>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}>Credit bureaus consider several factors before calculating your credit score. Here are a few factors that affect your credit score:</p> <br></br>
            <li className="psl"><b>History of loan repayment:</b>  Timely loan repayment can boost your credit score significantly. At the same time, if you default on your loan repayments, your credit score will fall. </li><br />
            <li className="psl"><b>Age of credit history</b> The age of your credit history is another crucial factor affecting your CIBIL score. If you have availed of credit cards or loans for a long time and have repaid them consistently, you will have a high credit score.</li><br />
            <li className="psl"><b>Credit utilisation ratio</b> It is the percentage of the credit limit that you use every month. Ideally, you should not use more than 30% of your credit card's limit to maintain a healthy credit score.</li><br />
            </ul>
            <br></br><br></br>
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>Why Do Lenders Check Credit Scores? </h1><br></br>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}> The credit score is a common eligibility parameter when you apply for loans. Having said that, when lenders run a credit check, they try to assess what kind of a borrower you are. In this regard, your credit history helps them know how well you have managed loans and credit cards in the past. 
            Thus, irregular debt payments and maxed-out credit cards might pose you as a risky borrower, hampering your creditworthiness.
            </p>
            <br></br><br></br><br />
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>How do you Check your CIBIL Score with an Aadhaar Card?</h1><br></br>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}> While you can provide your Aadhaar Card for checking CIBIL score as an ID proof on the CIBIL website, at present, it is not possible to check your CIBIL score using Aadhaar Card only. Since your credit score is linked to your PAN card, you need to provide your PAN to check this score.
            </p>
            <br></br><br></br><br />
            <h1 className='text-gradient' style={{ color: "white", textAlign: "center"}}>Difference between Credit Reports, Credit Scores and CIBIL Scores </h1><br></br>
            <p className="ps" style={{ color: "white", wordSpacing: "4px" }}> Credit score and CIBIL score exhibit the same definition. However, the credit score that TransUnion CIBIL provides is called the CIBIL score. Apart from that, you can check your credit score through other bureaus, which include Experian, Equifax and more. 
            Now, a CIBIL score is different from a report, given the fact that CIBIL or credit score is just the numerical representation of your creditworthiness. On the other hand, a credit report contains comprehensive credit details.
            </p>
            <br></br><br></br>
            
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
  
export default CreditScore;