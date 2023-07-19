import React from 'react';
// import Layout from './../components/Layout/Layout';
import Score from "../images/fin20.jpg";
import News from "./side";
import { CTA } from '../Components';
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
    <div className="pscontainer"> 
    <h2 className="pt-8 pb-8 ml-8 md:pt-12  md:mx-10 xl:mx-18">
    Why Did My Credit Score Drop?
      </h2>
      <div className="flex flex-col md:flex-row justify-around"
>
        <img
          src={Score}
          alt="image"
          className="rounded-2xl mt-4 md:ml-10 sm:w-4/5 md:w-1/3 lg:w-1/2 xl:w-1/2 md:h-80 lg:h-80 xl:h-80"/>
        <div
        className="rounded-2xl mr-9 mt-4 ml-8 sm:w-50  md:w-50  xl:w-80 bg-gradient-to-b from-teal-200 to-teal-500 opacity-75 text-black p-4  sm:h-48 md:h-48 lg:h-48 xl:h-60 xl:ml-20 md:mr-10  "

          style={{ backdropFilter: 'blur(4px)' }}
        >
          <p className="py-2">
            RELATED ARTICLES
            <ul className="pl-6 mt-2 list-disc">
              <li>
                <u>
                  <Link to="/credit1">What Increases Your Total Loan Balance?</Link>
                </u>
              </li>
              <li>
                <u>
                  <Link to="/finance">What Is Financial Literacy?</Link>
                </u>
              </li>
              <li>
                <u>
                  <Link to="/credit2">Why Did My Credit Score Drop?</Link>
                </u>
              </li>
            </ul>
          </p>
        </div>
      </div>

      
      <div className="mt-8 mx-2 md:mt-12 md:mx-10 xl:mx-18 " style={{ textAlign:"justify"}}>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12 xl:w-8/12">
            <p className="pb-6">It’s normal for credit scores to fluctuate from one month to the next.

No one should lose sleep over a few points since they can be lost and gained back easily. But if you see a big drop—of 20 points or more—it’s likely that something negative appeared on your credit reports.

If you’re asking yourself, “Why did my credit score drop?” take a look at these likely reasons and corresponding tips for what to do about each of them.</p>
            <br />
        <ul className="pl-2 mb-8 list-disc">
        <b className='ab'>5 reasons why your credit score dropped:</b><br /> <br /> <br /><p><b>1. You missed a debt payment</b><br /><br />
<p>Missing just one payment on a credit card or loan can cause your credit scores to drop as much as 15 to 80 points or more.</p>  
<p>
That’s because payment history is the biggest factor in calculating your FICO credit scores. It accounts for more than a third (35%) of your scores. If a creditor reports you as 30 days late on just one debt payment, your scores can take a big hit. </p>
<p>
Even if you pay the overdue balance, the missed payment will stay on your credit reports for seven years, but fortunately you can regain the points back over time.</p>
<p>
<b>Tip:</b> Be proactive in avoiding missed payments by setting up autopay. If you think you might miss a payment, see if you can change your due date or ask the creditor if they offer hardship assistance. </p><br /></p>
<p><b>
2. Your credit card balance(s) increased </b><br /><br />
<p>The second biggest factor that determines your credit scores (30%) is your utilization ratio, also known as your debt-to-credit ratio (DTC). DTC looks at how much of your available revolving credit you’re using, and the less the better. So if your credit card balances increase, your scores can drop. </p></p>
<p><b><br /><br />
3. Incorrect information</b><br /><br />
<p>If incorrect information appears on your reports, whether it’s due to a creditor’s error or identity fraud, your scores could take a hit. </p>
<p>If you find an error on your credit report, you can dispute the incorrect information. Filing a dispute only takes a few minutes and it’s free to file, so you should never pay a third party to file a dispute on your behalf.</p>
</p><br /><br />
<p><b>4. You applied for a new credit card or loan</b><br /><br />
<p>Every time you apply for new debt, whether it’s a mortgage, personal loan, student loan, credit card or otherwise, your credit scores can drop by a few points. That’s because new credit applications, also known as “hard inquiries,” make up 10% of your credit scores.</p>  
<p>
If your application is approved, you may see an additional drop in your scores, since new accounts reduce the average age of your credit accounts.</p>
<p>
<b>Tip:</b> If you’re shopping around for financing, time your applications wisely. Multiple applications for one type of account (such as a car loan or mortgage) will only count as one hard inquiry if they’re all made within 30 days.
</p><br /></p>
<p><b>
5. You filed bankruptcy </b><br /><br /><p>Bankruptcy is one of the most negative items that can appear on your credit reports, since it shows creditors that you’re unable to pay back your debt.</p>
<p>
If you file bankruptcy, you can expect to see your scores take a large drop, and the higher your scores were before filing, the more points you’ll lose. Someone with good credit scores can expect a drop of 100 points or more.</p>
<p>
<b>Tip:</b> You can speed up the process of recovery after bankruptcy by adding positive information to your credit reports. One way to do this is by having a friend or family member add you as an “authorized user” to a credit account that’s in good standing. You can also try applying for a secured credit card.
</p><br /></p>
          </ul>
          </div>
          <div className="mt-8 md:mt-0 md:w-5/12 xl:w-4/12 md:ml-20">
            <News />
          </div>
        </div>
      </div>
      <div className=' pt-20  '>  <CTA /> </div> <br/><br/><br/>  
      </div></div>
  );
};

export default finance;