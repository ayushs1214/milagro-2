import React from "react";

export default function Testimonials(props) {
  return (
   <div className="tests">
      <div className="testcardd">
      <h2 style={{ color:'whitesmoke'}}>{props.name}</h2><br /> 
      {/* <p >{props.price}</p> */}
      <p className="testpric">{props.description}</p>
    </div>
 </div> 
  );
}