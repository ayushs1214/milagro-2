import React from 'react';
import './index1.css';

const prodoc = () => {
    return (
<div>
<div >
<h1 className="psloan" style={{  textAlign: "center"}}>Documents Required for a Professional Loan</h1><br></br><br></br>
            <p className="ps text-white" > Here is a list of documents you need to furnish when applying for a professional loan:</p>
            <br></br><br></br>
            <ul  className=" pslist" style={{  color: "white", listStyle:"outside",wordWrap:"break-word" }}>
            <li> Proof of Identity (Passport, PAN card, Aadhaar card)</li><br />
            <li>Proof of Address (Ration card, Aadhaar card, Utility bills)</li><br />
            <li>Copies of your professional degrees and diplomas</li><br />
            <li>Bank statement of your business for the last six months</li><br />
            <li>Profit and loss statements of your business</li><br />
            <li>Proof of ownership/lease of a property to set up the practice (if applicable)

</li><br />
            </ul>
          </div>
          </div>
)
    }
export default prodoc;