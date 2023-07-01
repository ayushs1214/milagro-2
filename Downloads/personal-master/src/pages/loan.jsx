// import React from 'react'; 
// import Slider from './slider';
// const loan = () => (
  
//   <div className="newss">
//           <div style={{ display: 'flex' }}>
//           <div  className="box" style={{ flex: '2' }} >
            
     
//         <ul className="list"style={{ marginLeft: "30px", justifyContent: "left", paddingTop:"10px", paddingBottom:"0px"}}>
//             <li><h1 className="h1news">LOANS</h1> </li>
//             <li> <p className="pn">A wide range of loans offered by lending partners to fulfil your dreams. </p> </li>
//       <li>
//       <section >
//       <div className="flex-containe">
//         <h4 className="sta"> <p className="text1-gradient">Personal Loans</p></h4>
//         <h4 className="sta"> <p className="text1-gradient">Home Loan</p></h4>
//         <h4 className="sta"> <p className="text1-gradient">Professional Loan</p></h4>
//         <h4 className="sta"> <p className="text1-gradient">Business Loan</p></h4>
//         <h4 className="sta"> <p className="text1-gradient">Business Loan</p></h4>
//         <h4 className="sta"> <p className="text1-gradient">Business Loan</p></h4>
//       </div>
//       </section>
      
//       </li>
//           </ul>
//           </div>
//         </div>
//         <Slider />
//       </div>

// );

// export default loan;

import React, { useState } from 'react';
import Slider4 from './sliderrr';
import AnotherSlider from './busslider';
import Slider2 from './hmslider';
// import Slider3 from './proslider';

const Loan = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleLoanOptionClick = (loanOption) => {
    setSelectedLoan(loanOption);
  };

  return (
    <div className="newss">
      <div style={{ display: 'flex' }}>
        <div className="box" style={{ flex: '2' }}>
          <ul className="list" style={{ marginLeft: "30px", justifyContent: "left", paddingTop: "10px", paddingBottom: "20px" }}>
            <li><h1 className="h1news" style={{ fontSize:'2.5rem' }}>LOANS</h1></li>
            <li><p className="pn">A wide range of loans offered by lending partners to fulfill your dreams. </p></li>
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
                    <p className="">Loan Against Property</p>
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
      {/* {selectedLoan === 'professional' && <Slider3 />} */}
    </div>
  );
};

export default Loan;
