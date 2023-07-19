import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
import Hmdoc from "../products/hmdoc";
function Table() {
  const data1 = [
    {  name: 'Interest Rate', value: '8.50% p.a. onwards' },
    {  name: 'Loan Amount', value: 'Up to ₹15 Crores' },
    {  name: 'Repayment tenure', value: 'Up to 30 years' },
    {  name: 'Processing Fee', value: 'Between 0.5% and 6% of the loan amount' },
    {  name: 'Part-payments', value: 'Must be at least 2 months’ EMI or more' },
    {  name: 'Foreclosure', value: 'Possible after 6 -12 EMIs, as per lender’s terms' }

  ];
  const data2 = [
    {  name: 'Bajaj Housing Finance Limited', value: '8.85% p.a. onwards', age:<ul style={{listStyle:"none"}}><li>Amount - ₹2.5 Cr</li><li>Tenure - 30 Years</li></ul> },
    {  name: 'PNB Housing Finance Limited', value: '8.75% p.a. onwards', age: <ul style={{listStyle:"none"}}><li>Amount - ₹15 Cr</li><li>Tenure - 30 Years</li></ul> },
    {  name: 'ICICI Bank', value: '9.00% p.a. onwards', age:<ul style={{listStyle:"none"}}><li>Amount - ₹5 Cr</li><li>Tenure - 30 Years</li></ul>  },
    {  name: 'Home First Finance Company', value: '9.50% p.a. onwards', age:<ul style={{listStyle:"none"}}><li>Amount - ₹40 Lakhs</li><li>Tenure - 20 Years</li></ul>  },
    {  name: 'Union Bank of India', value: '8.50% p.a. onwards' , age:<ul style={{listStyle:"none"}}><li>Amount - ₹15 Cr</li><li>Tenure - 30 Years</li></ul> },
    {  name: 'LIC Housing Finance', value: '8.65% p.a. onwards' , age:<ul style={{listStyle:"none"}}><li>Amount - ₹15 Cr</li><li>Tenure - 30 Years</li></ul> },
    {  name: 'Shubham Housing Finance', value: '10.90% p.a. onwards' , age:<ul style={{listStyle:"none"}}><li>Amount - ₹50 Lakhs</li><li>Tenure - 25 Years</li></ul> },
    {  name: 'Shriram Housing Finance', value: '11.50% p.a. onwards' , age:<ul style={{listStyle:"none"}}><li>Amount - ₹10 Cr</li><li>Tenure - 25 Years</li></ul> }
  ];
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);
  return (
    
    <><div className="bg-black">
    <div className="h-3/4 overflow-hidden">
      <img src={Dosa} alt="Our Story" className="w-[100%] h-[40%]" />
      <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Home Loan
          </h1>
        </div>
    </div>
    <br />
    <br />
    <br />
          <div className="pscontainer overflow-x-hidden">
              <p className="text-white ps" >
              You can get a home loan of up to ₹15 Crores at affordable interest rates starting at 8.50% per annum. That’s not all. The tenure of up to 30 years allows you to optimise repayment to suit your financial capabilities. Read on to learn more about home loans and find out how to apply for one.
                  <br /><br />
              </p>
              <h1 className="psloan text-center pt-10">Home Loan Details</h1><br></br>
          <br></br>
          <p className="text-white ps" >You can find some of the best housing loan providers in India on Bajaj Markets. You can compare the home loan interest rates and offers from lending partners to choose the one that best suits you.</p><br></br>
            <center>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest Rate</th>
                          <th>8.50% p.a. onwards</th> */}
                      </tr>
                  </thead>
                  <tbody>
                  {data1.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table>
              </div>
          </center>
          <br></br>
<br></br>
            <h1 className="psloan text-center pt-10">Compare and Apply for Home Loan Online</h1><br></br><br></br>
            <p className="text-white ps" >Comparing loan offers before you apply is a smart way to ensure that you get the best deal. In order to compare, check the interest rate, maximum loan amount, tenure, and charges on the loan.
<br></br>
Here are the details of home loans from our partners:</p>
            <br></br><br></br>
            <center>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          <th>Home Loan Providers</th>
                          <th>Interest Rates</th>
                          <th>Maximum Loan Amount/Tenure</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow1 key={index} name={row.name} value={row.value} age={row.age} />
              ))}
                  </tbody>
              </table>
              </div>
          </center>
          <br></br>
            <h1 className="psloan text-center pt-10">How to Apply for Home Loan</h1><br></br>
            <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
                <p className="text-white ps" >With advancements in the fintech industry, applying for a housing loan is now easier than ever. Just enter a few basic details to fill out the online application form and upload the required documents.
<br></br><br></br>
Here are the steps to apply for a home loan on Bajaj Markets.</p> <br></br>
            <li style={{listStyle: "none",}}><b>1. Through the website:</b>  <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}><li>Enter the required details in the application form.</li>
<li>
Choose your preferred lending partner.</li>
<li>
Estimate your borrowing power.</li>
<li>
Mention Property Details.</li>
<li>
Get Loan Approval. </li>
<li>
The application will be verified, post the approval.</li>
<li>
While the verification process is being completed you will be asked to pay the processing fee online. Then you will receive the sanction letter after which your property will be evaluated. After a successful legal check, you will receive the home loan amount in your bank account.</li></ul></li><br />
            <li  style={{listStyle: "none",}}><b>2. Through the FinURL App:</b> <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}><li>Enter your personal and employment details to check the right loan offer.</li>
<li>
Select the loan offer that works best for you.</li>
<li>
Enter the preferred loan amount and tenure.</li>
<li>
Upload the required documents for verification.</li>
<li>
After submitting the application, the lender will conduct a background check. After verification, a representative from your chosen lender will contact you. </li></ul></li>
            </ul>
         
            < Hmdoc />
          <br></br>
          </div>     </div></>
          
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
  function TableRow1({ name, value, age }) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
        <td>{age}</td>
      </tr>
    );
  }
  

export default Table;
