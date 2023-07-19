import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
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
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    
    <div className="bg-black">
    <div className="h-3/4 overflow-hidden">
      <img src={Dosa} alt="Our Story" className="w-[100%] h-[40%]" />
      <div className="absolute lg:top-1/2 left-1/2 md:top-2/5  lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Professional Loan
          </h1>
        </div>
    </div>
    <br />
    <br />
    <br />
   <div className="pscontainer overflow-x-hidden">
              <p className="ps text-white" style={{ wordSpacing: "4px" }}>
              A professional loan is a financial instrument that allows professionals like doctors, chartered accountants to access capital that can be used for to fulfil requirements, without pledging any collateral. The requirements can include expanding the office, purchasing new equipment and much more.
<br></br><br></br>
A self-employed professional loan can help you take your career and practice to the next level. In fact, applying for a professional loan on Bajaj Markets  is beneficial as you can get quick approval along with customised offers. You can access these offers if you are a doctor, chartered accountant or any other professional to get the funds you need to grow your business. 
<br></br><br></br>
Furthermore, you need only submit minimal documentation, making it easier to avail. Here’s what you need to know about this financial offering.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className=" psloan">Professional Loan Interest Rates</h1><br></br>
            <div className="table-container1 overflow-x-auto">
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
              </div>
          </center>
          <br></br>
          <br></br>
        <p className="ps text-white" style={{ wordSpacing: "4px" }}>*The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.
</p>
<br></br>
            <h1 className="psloan text-center pt-10" >How to Apply for a Professional Loan</h1><br></br>
            <ul className="list pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
                <p className="text-white ps" >Follow these steps to apply for a professional loan </p> <br></br>
            <li style={{wordWrap:"break-word"}}><b>Step 1:</b> Click on the ‘Apply Now’ on this page.</li><br />
            <li><b>Step 2:</b> Fill in a few essential details, such as your profession, mobile number, date of birth, name and pin code.</li><br />
            <li><b>Step 3:</b> Receive an OTP in your registered number and check your offer.</li><br />
            <li><b>Step 4:</b> Complete the verification process and submit the required documents upon approval.</li><br />
            <li><b>Step 5:</b> Get the loan amount credited to your account within a few minutes after the approval of your application.</li><br />
            </ul>
            <br></br>
            < Prodoc />
          <br></br>
            <h1 className="psloan text-white text-center pt-10">Why Do You Need a Professional Loan?</h1><br></br>
            <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
            <li>As a doctor, you may want to set up your clinic for private practice. This requires a considerable amount of capital to start.</li><br />
            <li>Being a professional, you already have a place to practise but may be looking to expand or scale it. This can include renovations, looking for new locations, and employing more staff.</li><br />
            <li>Keeping yourself updated with the latest technological advancements is essential. A professional loan can help you purchase new equipment or machinery and stay updated in your professional practice.</li><br />
            </ul>
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
  

export default Table;
