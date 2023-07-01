import React from 'react';
// import Layout from './../components/Layout/Layout';
import News from "./side";
import Side from "./news.jsx";
import Inc from "../images/loan1.png";
import { Link } from "react-router-dom";

 import "../styles/about.css";
const finance = () => {
  const boxStyle = {
    marginLeft: "120px",
    marginTop: "50px",
    borderRadius: '30px',
    width: '300px',
    height: '250px',
    background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',
    opacity:'0.75',
    color: 'black',
    padding: '10px',
  };
  return (
    <div className='finance1'> 
      <h2 style={{paddingTop:"50px", marginLeft: "70PX", fontFamily:"Poppins", paddingBottom:"12px"}}>What Increases Your Total Loan Balance?</h2><br />
      <div style={{ display: 'flex', marginLeft: "60px" }}>
        <img src={Inc} alt="Inc" style={{ borderRadius: '30px',marginTop : "20px" ,width: '55%' , height: '300px', }} />
        <div style={boxStyle}>
        <p style={{paddingTop:"30px", paddingLeft: "20px"}}>RELATED ARTICLES<ul><br />
        <li><u><Link to="/credit1" style={{ color: "black"}}>What Increases Your Total Loan Balance?</Link></u></li><br />
<li><u><Link to="/finance" style={{ color: "black"}}>What Is Financial Literacy?</Link></u></li><br />
<li><u><Link to="/credit2" style={{ color: "black"}}>Why Did My Credit Score Drop?</Link></u></li></ul></p>
</div>
      </div>
       <div style={{ marginTop: '40px', marginBottom: '20px', marginLeft: '60px', marginRight: '10px' }}>
          <div style={{ display: 'flex' }}>
          <div  className="fin"style={{ flex: '2' }} >
            <p>While most of us would prefer to avoid taking on debt, sometimes taking out a loan is an unavoidable part of life. For example, you might need to take out a loan to cover a major medical expense or pay for everyday day expenses while your paycheck catches up to inflated costs.

Everyone has their reasons for taking out a loan. If you have a personal loan, you aren’t alone. As of the third quarter of 2022, TransUnion reported 22 million Americans held this type of loan.

Regardless of your reasons for taking out a loan, the loan principal can spiral out of control quickly. Even if you are making payments, you might still see a growing loan balance.</p>
            <br />
        <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", listStyle:"none" }}>
            <b className='ab'>5 Factors that can increase your total loan balance:</b><br /> <br /> <br /><p><b>Interest rates</b><br /><br />
<p>When you take out a consumer loan, the lender attaches an interest rate to the loan. The loan agreement involves repaying the loan principal with interest. Depending on the loan structure, the interest rate tied to your loan can cause the loan balance to increase over time.</p>  
<p>
In many cases, interest can compound over time through a process called interest capitalization. Essentially this means that when your loan accrues interest, the interest payment is added to the loan balance. Moving forward, the higher loan balance, which includes accrued interest, is used to calculate interest. Over time, compounding interest can lead to a significantly larger loan balance. </p>
<p>
Importantly, your annual percentage rate (APR) isn’t the same thing as your interest rate. The APR on your loan includes the interest rate and other fees tied to the loan origination.</p><br /></p>
<p><b>
Variable interest rates </b><br /><br />
<p>A variable interest rate is an interest rate that changes over time. Typically, variable interest rates are tied to a benchmark or index rate that rises and falls based on market conditions. While variable interest rates can be attractive in a low-interest-rate environment, the threat of rising rates can leave you trapped with high-interest debt.  </p>
<p>
For example, most credit cards come with a variable interest rate. If you carry a balance, you are susceptible to a growing loan balance if interest rates rise quickly. Unless you can make larger payments to your outstanding balance, the loan balance will grow.  </p>
<p>
For example, a Federal Reserve report indicates that the average credit card interest rate rose from 14.51% in the fourth quarter of 2021 to 19.07% in November 2022. The steep rise might cause you to see a growing loan balance.  </p> 
</p>
<p><b><br /><br />
Only making the minimum payment </b><br /><br />
<p>It’s tempting to stick with the minimum monthly payment. But if you only make a relatively small payment each month, you risk paying less than the interest accrued each month. The loan balance will rise if the interest charges outweigh your minimum monthly payment.  </p>
<p>
While the minimum payment might feel like a better fit for your budget right now, it might lead to a growing loan balance.  </p>
</p>
<p><b><br /><br />
Making late payments </b><br /><br />
<p>If you make a late loan payment, the first financial hit will likely be a late fee. But another issue is that your loan balance will continue to accrue interest, leading to a larger balance.  </p>
<p>
Regularly making late payments could have a significant impact on your loan balance. </p> 
</p>
<p><b><br /><br />
Missing a payment </b><br /><br />
<p>If you miss a payment altogether, you might encounter many negative consequences. One major issue is potential loan default concerns. </p>
<p>
But missing a payment can give your loan balance a chance to grow even more. Without making the payment, your loan balance will initially remain the same. However, it gives your loan a chance to accrue interest on a larger loan amount. With that, you can quickly see a higher loan balance after missing a payment.  </p>
<p>
Making every effort to keep up with your payments can help you avoid a rising loan balance. </p> </p><br />
            </ul>
          </div>
          <div style={{ flex: '2' }}>
            <News />
          </div>
        </div>
      </div>
      <Side />
      </div>
  );
};

export default finance;