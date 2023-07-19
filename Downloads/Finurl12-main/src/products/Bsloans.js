import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
import Bsdoc from "../products/bsdoc";
function Table() {
  const data1 = [
    {  name: 'Bajaj Finance Limited', value: '18% onwards', age:'72 months' },
    {  name: 'Lendingkart Finance Limited', value: '15% onwards' , age:'36 months'},
    {  name: 'KreditBee', value: ' 15% onwards', age:'9 months ' },
    {  name: 'FlexiLoans', value: '12% onwards', age:'36 months' },
    {  name: 'IIFL', value: '16.50% onwards', age:'60 months'},
    {  name: 'InCred', value: '20% onwards', age:'48 months' },
    {  name: 'AYE Finance', value: '28% onwards', age:'36 months'},
    {  name: 'Indifi', value: '16% onwards', age:'36 months'}

  ];
  const data2 = [
    {  name: 'Interest Rate', value: 'Starting from 12% p.a' },
    {  name: 'Processing Fee', value: '2-3% of Loan amount' },
    {  name: 'Loan tenure', value: 'Up to 72 months' },
    {  name: 'Pre-closure Charges', value: '4% of principal outstanding amount + GST' },
    {  name: 'Eligibility Criteria', value: '₹ 90,000 turnover for 3 months' },
    {  name: 'Loan Amount', value: '₹ 25,000 to ₹50 Lakhs' },
    {  name: 'Instalments', value: 'Flexible Monthly/Bi-weekly' }
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
            Business Loan
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
          <div className="pscontainer"style={{ overflowX: 'hidden' }}>
              <p className="ps text-white" style={{ wordSpacing: "4px" }}>
              A Business Loan is an unsecured loan that can be used for a new or existing enterprise. Whether it is expanding your business to new locations, purchasing advanced machinery, hiring new staff, or clearing all your debts, a Business Loan is a great choice. Today, many banks and non-banking financial companies (NBFC) offer quick business loans at competitive interest rates. If you are eligible and have the required documents in place, you can enjoy the best-curated deals and get instant approval on Business Loan.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className="psloan" > Our Business Loan Partners</h1><br></br>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          <th>Our Partners</th>
                          <th>Interest Rate Range</th>
                          <th>Maximum Tenure</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data1.map((row, index) => (
                <TableRow1 key={index} name={row.name} value={row.value} age={row.age} />
              ))}
                  </tbody>
              </table> </div>
          </center>

<br></br>
            <h1 className="psloan text-center pt-10">Business Loan Fees & Interest Rates</h1><br></br><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>Bajaj Markets provides access to well-curated new business loans that attract a nominal rate of interest. Thus, you enjoy affordable EMIs throughout the loan tenure. Follow the listed table to view the interest rate and charges applicable on a business loan: </p>
            <br></br><br></br>
            <center>
            <div className="table-container1 overflow-x-auto">
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest Rate</th>
                          <th>Starting from 12% p.a</th> */}
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table> 
              </div>
          </center>
          <br></br>
            <h1 className="psloan text-center pt-10">How to Apply for Business Loan</h1><br></br><br></br>
            <ul  className="list pslist" style={{  listStyle: "none", color: "white", wordWrap:"break-word" }}>
                <p style={{ color: "white", wordSpacing: "4px" }}>Applying for a new business loan online on is now really simple. Just follow these steps:</p> <br></br>
            <li><b>Step 1:</b> Visit the Online Platform: Visit the FinURL website, select the category titled ‘Business Loans’ in the ‘Loans’ section and click on ‘Apply Now.’

</li><br />
            <li><b>Step 2:</b> Online Form Filling: Fill in your personal and business details.</li>
            <li><b>Step 3:</b> Select Your Lending Partner: From the list of loan offers, select a business loan from your preferred partner.</li>
            <li><b>Step 4:</b> Specify Loan Details: Choose your preferred loan amount and repayment tenure.</li>
            <li><b> Step 5: </b>Required Documents: Upload the scanned copies of all the required documents.</li>
            <li><b> Step 6: </b>Approval & Disbursal: Submit your application; post verification and approval, the money would be disbursed to your account.</li>
            </ul>
            <br></br><br></br>
            < Bsdoc />
          <br></br><br></br><br></br>
            <h1 className="psloan text-center pt-10">Reasons To Apply For a Business Loan</h1><br></br><br></br>
            <p className="ps text-white" style={{ wordSpacing: "4px" }}>If your business is in need of funds and you want to avail a quick business loan, apply online for this facility easily today. However, if you’re not sure about getting a business loan for your venture, here are some reasons why this kind of funding may be the right choice. </p><br></br>
            <ul className="psl text-white" style={{ justifyContent: "left", listStyle: "outside", color: "white", textAlign:"justify" }}>
            <li><b>Increased Working Capital:</b> Working capital is the term used to refer to the funds you have to meet your business’s short-term obligations. There are special working capital business loans available for this very purpose. By availing this facility, you can improve liquidity in your business and meet your working capital requirements easily. </li><br />
            <li><b>Business Expansion:</b> Over time, as you scale up your business, you will need to expand your venture in different ways. This includes the launch of a new product or service, the opening of a new branch, the purchase of new equipment and machinery as well as renting out new office spaces. All of this requires additional funding, and business loans can help you with this. </li><br />
            <li><b>Credit Building :</b> Business loans can also help with credit building for the future. Each time you repay the EMIs due on your business loan promptly, you give your business credit score (or personal credit score, in case of a sole proprietorship or the likes) a boost. This will make it easier for you to obtain more credit facilities for your business in the future. </li><br />
            <li><b>Improved Business Marketing:</b> Marketing is another aspect of business that requires a sizable budget. To get word of your business out to your target audience and to achieve higher lead conversion, you need a robust marketing plan. Business loans can give you access to the funds needed to promote your business better and expand your customer base. </li><br />
            <li><b>Upgradation of Your Workforce:</b>With a business loan, you can also expand and/or upgrade your workforce to meet the growing needs of your business. The funds borrowed can help you hire new recruits or pay existing employees a higher salary when a hike is due. It can also fund the upskilling or reskilling of your workforce as and when needed.</li><br /><br />
            </ul>
            </div>
          </div>
         
          
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
  function TableRow({ name, value}) {
    return (
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    );
  }

export default Table;
