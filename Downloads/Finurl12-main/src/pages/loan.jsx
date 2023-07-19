// import React, { useState } from 'react';
// import Slider4 from './sliderrr';
// import AnotherSlider from './busslider';
// import Slider2 from './hmslider';
// import Slider3 from './profslider';
// import Slider6 from './homeslider';
// import Slider5 from './propslider';
// const Loan = () => {
//   const [selectedLoan, setSelectedLoan] = useState(null);

//   const handleLoanOptionClick = (loanOption) => {
//     setSelectedLoan(loanOption);
//   };

//   return (
//     < section className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingA} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`>
//       <div >
//         <div className="box" >
//           <ul className="list">
//             <li><h1 className="h1news" >LOANS</h1></li>
//             <li><p className="pn">A wide range of loans offered by lending partners to fulfill your dreams. </p></li>
//             <li>
//               <section>
//                 <div className="flex-containe">
//                   <h4 className={`sta ${selectedLoan === 'instant' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('instant')}>
//                     <p className="text-gradient1">Instant Loan</p>
//                   </h4>
//                   <h4 className={`sta ${selectedLoan === 'personal' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('personal')}>
//                     <p className="text-gradient1">Personal Loan</p>
//                   </h4>
//                   <h4 className={`sta ${selectedLoan === 'business' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('business')}>
//                     <p className="text-gradient1">Business Loan</p>
//                   </h4>
//                   <h4 className={`sta ${selectedLoan === 'professional' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('professional')}>
//                     <p className="text-gradient1">Professional Loan</p>
//                   </h4>
//                   <h4 className={`sta ${selectedLoan === 'home' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('home')}>
//                     <p className="text-gradient1">Home Loan</p>
//                   </h4>
//                   <h4 className={`sta ${selectedLoan === 'property' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('property')}>
//                     <p className="text-gradient1" >Loan Against Property</p>
//                   </h4> 
//                 </div>
//               </section>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {selectedLoan === 'instant' && <Slider4 />}
//       {selectedLoan === 'personal' && <AnotherSlider />}
//       {selectedLoan === 'business' && <Slider2 />}
//       {selectedLoan === 'professional' && <Slider3 />}
//       {selectedLoan === 'home' && <Slider6 />}
//       {selectedLoan === 'property' && <Slider5 />}
//     </section>
//   );

// export default Loan;


import React, { useState } from 'react';
import Slider4 from './sliderrr';
import AnotherSlider from './busslider';
import Slider2 from './hmslider';
import Slider3 from './profslider';
import Slider6 from './homeslider';
import Slider5 from './propslider';
import styles from "../style";
import "../styles/loan.css"
// import hand from "../images/hand.png";
const Loan = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleLoanOptionClick = (loanOption) => {
    setSelectedLoan(loanOption);
  };
  return(
    <section>
  <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingA} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Loans</h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5 text-white`}>
      A wide range of loans offered by lending partners to fulfill your dreams. 
      </p>
      <ul className="list">
           <li>
              <section>
                <div className="flex-containe">
                  <h4 className={`sta ${selectedLoan === 'instant' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('instant')}>
                    <p className="text-gradient1">Instant Loan</p>
                  </h4>
                  <h4 className={`sta ${selectedLoan === 'personal' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('personal')}>
                    <p className="text-gradient1">Personal Loan</p>
                  </h4>
                  <h4 className={`sta ${selectedLoan === 'business' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('business')}>
                    <p className="text-gradient1">Business Loan</p>
                  </h4>
                  <h4 className={`sta ${selectedLoan === 'professional' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('professional')}>
                    <p className="text-gradient1">Professional Loan</p>
                  </h4>
                  <h4 className={`sta ${selectedLoan === 'home' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('home')}>
                    <p className="text-gradient1">Home Loan</p>
                  </h4>
                  <h4 className={`sta ${selectedLoan === 'property' ? 'selected' : ''}`} onClick={() => handleLoanOptionClick('property')}>
                    <p className="text-gradient1" >Loan Against Property</p>
                  </h4> 
                </div>
              </section>
            </li>
          </ul>
    </div>        
  </div>
  {selectedLoan === 'instant' && <Slider4 />}
      {selectedLoan === 'personal' && <AnotherSlider />}
      {selectedLoan === 'business' && <Slider2 />}
      {selectedLoan === 'professional' && <Slider3 />}
      {selectedLoan === 'home' && <Slider6 />}
      {selectedLoan === 'property' && <Slider5 />}
 </section>
 
)};

export default Loan;
