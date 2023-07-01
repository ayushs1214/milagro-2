import React from 'react';
import './index1.css';
import Dosa from "../images/robx.png";
import Prodoc from "../products/prodoc";
function Table() {
  const data1 = [
    {  name: 'Interest rate', value: 'Starting from 12% to 20%' },
    {  name: 'Processing Fee', value: 'Up to 4.72% of the loan amount' },
    {  name: 'Bounce charges', value: '₹1,500 (Inclusive of applicable taxes)' },
    {  name: 'Penal interest', value: 'Any delay in payment of EMI shall attract penal interest at the rate of 3.5% per month on the EMI outstanding from the date of default until the receipt of the EMI' },
    {  name: 'Outstation collection charges', value: '₹65 + GST' },
    {  name: 'Prepayment/ charges', value: <ul style={{listStyle:"none"}}><li>Term Loan - 4% plus applicable taxes on the outstanding loan amount payable by you on the date of such full prepayment</li><li>Flexi Loan -  4% plus applicable taxes of the total withdrawable amount as per the repayment schedule, on the date of such full prepayment.</li></ul> },
    {  name: 'Part-payment charge', value: <ul style={{listStyle:"none"}}><li>Term Loan - 2% plus applicable taxes on the amount part- prepaid</li> <li>Flexi Loan - Nil</li> </ul>},
    {  name: 'Annual Maintenance Charges', value: <ul style={{listStyle:"none"}}><li>Term Loan - Nil</li> <li>Flexi Loan - 0.25% plus applicable taxes </li> </ul>}

  ];


  return (
    
    <><div style={{
          background: "rgb(2,0,36)",
          background: "-moz-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "-webkit-linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(1,19,39,1) 100%, rgba(1,34,71,1) 100%, rgba(0,212,255,1) 100%, rgba(1,7,18,1) 100%, rgba(1,36,73,1) 100%, rgba(1,57,95,1) 100%, rgba(1,102,141,1) 100%)",
          filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#020024',endColorstr='#01668d',GradientType=1)"
      }}>
        
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
  Professional Loan
</h1>

          </div>
          <br />
          <br></br><br></br>
          <div className="pscontainer"style={{ overflowX: 'hidden' }}>
              <p style={{ color: "white", wordSpacing: "4px" , marginLeft:"20px"}}>
              A professional loan is a financial instrument that allows professionals like doctors, chartered accountants to access capital that can be used for to fulfil requirements, without pledging any collateral. The requirements can include expanding the office, purchasing new equipment and much more.
<br></br><br></br>
You can advance your professional career and practise with the aid of a self-employed professional loan. In reality, submitting an application for a professional loan on FinURL is advantageous since you might receive speedy approval and tailored offers. If you are a doctor, chartered accountant, or any other type of professional, you can take advantage of these incentives to receive the money you need to expand your business.
<br></br><br></br>
Furthermore, you need only submit minimal documentation, making it easier to avail. Here’s what you need to know about this financial offering.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>Professional Loan Interest Rates</h1><br></br>
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest rate</th>
                          <th>Starting from 12% to 20%</th> */}
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
          <br></br>
        <p style={{ color: "white", wordSpacing: "4px", marginLeft:"20px", marginRight:"20px" }}>*The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.
</p>
<br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>How to Apply for a Professional Loan</h1><br></br><br></br>
            <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", listStyle:"none", color: "white" }}>
                <p style={{ color: "white", wordSpacing: "4px" }}>Follow these steps to apply for a professional loan </p> <br></br>
            <li><b>Step 1:</b> Click on the ‘Apply Now’ on this page.</li><br />
            <li><b>Step 2:</b> Fill in a few essential details, such as your profession, mobile number, date of birth, name and pin code.</li><br />
            <li><b>Step 3:</b> Receive an OTP in your registered number and check your offer.</li><br />
            <li><b>Step 4:</b> Complete the verification process and submit the required documents upon approval.</li><br />
            <li><b>Step 5:</b> Get the loan amount credited to your account within a few minutes after the approval of your application.</li><br />
            </ul>
            <br></br><br></br>
            < Prodoc />
          <br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>Why Do You Need a Professional Loan?</h1><br></br><br></br>
            <ul style={{  justifyContent: "left", listStyle:"outside", color: "white" , marginLeft:"20px",  padding:"10px"}}>
            <li>As a doctor, you may want to set up your clinic for private practice. This requires a considerable amount of capital to start.</li><br />
            <li>Being a professional, you already have a place to practise but may be looking to expand or scale it. This can include renovations, looking for new locations, and employing more staff.</li><br />
            <li>Keeping yourself updated with the latest technological advancements is essential. A professional loan can help you purchase new equipment or machinery and stay updated in your professional practice.</li><br />
            </ul>
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
  

export default Table;
