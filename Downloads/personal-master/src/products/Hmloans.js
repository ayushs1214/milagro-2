import React from 'react';
import './index1.css';
import Dosa from "../images/robx.png";
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

  return (
    
    <><div style={{
          background: "rgb(2,0,36)",
          background: "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#01668d',GradientType=1)"
      }}>
        <div className="pscontainer"style={{ overflowX: 'hidden' }}>
        <div style={{ height: "70vh",  overflow: "hidden" }}>
              <img
                  src={Dosa}
                  alt="Our Story"
                  style={{ width: "100%", height: "400px" , paddingLeft:"90px"}} />
                  <h1
  className="animation-text"
  style={{
    color: "white",
    textAlign: "center",
    position: "absolute",
    top: "40%",
    left: "10%",
    transform: "translate(-50%, -50%)",
    animation: "slideInDown 2s ease-in-out",
    animationFillMode: "forwards",
    fontSize:"60px"
  }}
>
  Home Loan
</h1>

          </div>
          <br />
          <br></br><br></br>
              <p style={{ color: "white", wordSpacing: "4px" , marginLeft:"20px"}}>
              You can get a home loan of up to ₹15 Crores at affordable interest rates starting at 8.50% per annum. That’s not all. The tenure of up to 30 years allows you to optimise repayment to suit your financial capabilities. Read on to learn more about home loans and find out how to apply for one.
                  <br /><br /><br></br>
              </p>
              <h1 className="text" style={{ color: "white", textAlign: "center"}}>Home Loan Details</h1><br></br>
          <br></br>
          <p style={{ color: "white", wordSpacing: "4px", marginLeft:"20px", marginRight:"20px" }}>On FinURL, you may locate some of the greatest housing loan companies in India. To choose which offer best suits you, examine the home loan interest rates and offers from lending partners.
</p><br></br>
            <center>
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
          </center>
          <br></br>
<br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>Compare and Apply for Home Loan Online</h1><br></br><br></br>
            <p style={{ color: "white", wordSpacing: "4px" , marginLeft:"20px", marginRight:"20px"}}>Comparing loan offers before you apply is a smart way to ensure that you get the best deal. In order to compare, check the interest rate, maximum loan amount, tenure, and charges on the loan.
<br></br>
Here are the details of home loans from our partners:</p>
            <br></br><br></br>
            <center>
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
          </center>
          <br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>How to Apply for Home Loan</h1><br></br><br></br>
            <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", listStyle:"none", color: "white" }}>
                <p style={{ color: "white", wordSpacing: "4px" }}>With advancements in the fintech industry, applying for a housing loan is now easier than ever. Just enter a few basic details to fill out the online application form and upload the required documents.
<br></br><br></br>
Here are the steps to apply for a home loan on FinURL.</p> <br></br>
            <li><b>1. Through the website:</b>  <ul><li>Enter the required details in the application form.</li>
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
            <li><b>2. Through the FinURL App:</b> <ul><li>Enter your personal and employment details to check the right loan offer.</li>
<li>
Select the loan offer that works best for you.</li>
<li>
Enter the preferred loan amount and tenure.</li>
<li>
Upload the required documents for verification.</li>
<li>
After submitting the application, the lender will conduct a background check. After verification, a representative from your chosen lender will contact you. </li></ul></li><br />
            </ul>
            <br></br><br></br>
            < Hmdoc />
          <br></br>
          </div></div></>
          
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
