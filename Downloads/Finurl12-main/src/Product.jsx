import React from "react";
import Registration from "./pages/Registration";

export default function Product(props) {
  return (
    <div className="prodss">
    <div className="cardd">
    <div className="im">{<img className="product--image" src={props.url} alt="product image" />}<h2 className="textname">{props.name}</h2></div>
<ul>
<li>
      <section >
      <div className="pro-cont">
        <h4 className="pric"> <p className="text1-gradient">Loans up to</p>
        <li className="pric-list">{props.loans}</li>
        </h4>
        <h4 className="pric"> <p className="text1-gradient">Min ROI</p><li className="pric-list">{props.price}</li></h4>
        <h4 className="pric"> <p className="text1-gradient">Max Tenure</p><li className="pric-list">{props.description}</li></h4>
      </div>
      </section>
      
      </li>
          </ul>
      <p>
     <button style={{background: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)',marginBottom:'0'}} ><a href="/Registration" style={{ textDecoration:'none', color:'black'}}>Apply Now</a></button>
      </p>
    </div>
 </div>
  );
}
