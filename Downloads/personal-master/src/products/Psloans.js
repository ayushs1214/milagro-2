import React from 'react';
import './index1.css';
import Dosa from "../images/robx.png";
import Psdoc from "../products/psdoc";

function Table() {
  const data1 = [
    {  name: 'Interest Rate', value: '10.49% p.a. onwards' },
    {  name: 'Processing Fee', value: 'Between 0.5% and 2.50% of the loan amount' },
    {  name: 'Loan Amount Range', value: 'Up to ₹50 Lakhs' },
    {  name: 'Loan tenure', value: '1 to 6 years' },
    {  name: 'Prepayment Charges', value: '2-3% of the outstanding loan amount' },
    {  name: 'Late Payment Charges', value: '2% of the due amount' }

  ];
  const data2 = [
    {  name: 'MONEYWIDE', value: 'ROI 14%' },
    {  name: 'Faircent', value: 'ROI 15%' },
    {  name: 'Paysense', value: 'ROI 14%' },
    {  name: 'IIFL BL', value: 'ROI 12%' },
    {  name: 'IIFL PL', value: 'ROI 12%' },
    {  name: 'Privo', value: 'ROI 15%' },
    {  name: 'FLEXI LOAN', value: 'ROI 12%' },
    {  name: 'NIRA', value: 'ROI 14%' },
    {  name: 'KreditBee', value: 'ROI 15%' },
    {  name: 'TATACAPITAL', value: 'ROI 12%' }
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
  Personal Loan
</h1>

          </div>
          <br />
          <br></br><br></br>
          <div className="pscontainer"style={{ overflowX: 'hidden' }}>
              <p className="ps"style={{ color: "white", wordSpacing: "4px" }}>
              One can use a personal loan, an unsecured form of borrowing, to fulfil any financial need. An quick personal loan can be your best option for supporting future international travel, home improvements, or unanticipated medical costs. Today's borrowers can effortlessly apply online at FinURL to receive the best Personal Loan deals available in India.
                  <br /><br />
              </p>
          <br></br>
            <center>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}> Personal Loan Details</h1><br></br>
              <table>
                  <thead>
                      <tr>
                          {/* <th>Interest Rate</th>
                          <th>10.49% p.a. onwards</th> */}
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
        <p className="ps" style={{ color: "white", wordSpacing: "4px", }}>*The interest rates and associated charges can vary from one lending partner to the other and are subject to policy changes of the partner.

 <br></br>
 <br></br>

 We at FinURL can put you in touch with the best personal loan lenders in India. You can compare personal loans, choose the best lenders based on convenience, and submit an application for an immediate loan with conditions you find agreeable.</p>
<br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>Compare Personal Loans & Apply Online</h1><br></br><br></br>
            <p style={{ color: "white", wordSpacing: "4px" , marginLeft:"20px", marginRight:"20px"}}><center>Compare personal loan interest rates of some of the leading Indian lenders right away. Their borrowing rates are as follows:</center></p>
            <br></br><br></br>
            <center>
              <table>
                  <thead>
                      <tr>
                          <th>Our partners</th>
                          <th>Interest Rate Change</th>
                      </tr>
                  </thead>
                  <tbody>
                  {data2.map((row, index) => (
                <TableRow key={index} name={row.name} value={row.value} />
              ))}
                  </tbody>
              </table>
          </center>
          <br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>How to Apply Personal Loan Online</h1><br></br><br></br>
            <ul className="list ps"style={{ marginLeft: "30px",  listStyle:"none", color: "white" }}>
                <p className="ps" style={{ color: "white", wordSpacing: "4px"}}></p>
            <li ><b>Step 1:</b>  Fill up the application form online at the top of the page with your personal and professional details.</li><br />
            <li><b>Step 2:</b> Choose the loan amount you desire from the lending partner (subject to eligibility) and add a suitable loan tenure to get instant approval.</li><br />
            <li><b>Step 3:</b> Provide all the required documents and the application form for verification..</li><br />
            <li><b>Step 4:</b> Once your loan is approved, the amount will get disbursed to your bank account within 24 hours.</li><br />
            </ul>
            <br></br><br></br>
            < Psdoc />
          <br></br><br></br><br></br>
            <h1 className="text" style={{ color: "white", textAlign: "center"}}>Where Can a Personal Loan be Used?</h1><br></br><br></br>
            <ul style={{  justifyContent: "left", listStyle:"outside", color: "white" , marginLeft:"20px",  padding:"10px"}}>
            <li><b>Wedding:</b>  With the help of a marriage loan, you can take care of the seemingly endless list of expenses that one has to incur during weddings. Or you can also go about planning post-marriage trips with ease, knowing that you have enough money to take care of a majority of expenses.</li><br />
            <li><b>Travel:</b> You can fulfil your desire to travel to that dream destination with the help of a travel loan. You should easily be able to manage the expenses, such as the likes of flight tickets and hotel bookings, among others.</li><br />
            <li><b>Home Renovation:</b> If you have been trying to give your home a makeover, an instant personal loan can help you do just that. Courtesy of the money that you avail of as a personal loan, you will be able to manage the necessary expenses connected to home renovation and repair. Moreover, you can repay it over a flexible tenure of your choice.</li><br />
            <li><b>Higher Education:</b> A personal loan can also be used to pay for higher education. Personal loans are generally taken to meet expenses such as course fees, travel-related costs, and lodging/accommodation charges, among others.</li><br />
            <li><b>Medical Exigency:</b> A medical emergency can lead to financial trouble. Such emergencies can also force you to ask for assistance from your family and friends. To deal with such an emergency, you can apply for a personal loan for medical emergencies.</li><br />
            <li><b>Buying Expensive Gadgets:</b>Consumer durable loans, yet another type of personal loan, will provide you with the funds to purchase the gadgets you desire. You can use a consumer durable loan to purchase that TV you have always wanted, that mobile phone you have had your eyes on or even that speaker system that will turn your home into a happening party area.

</li><br />
            </ul>
            </div>
          </div></>
          
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
