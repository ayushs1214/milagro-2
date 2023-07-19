

import React, { useState } from 'react';
import './style.css';
import fi from "../images/fi.png";
import axios from 'axios';

function Partner() {
    const [formData, setFormData] = useState({
      name: "",
      username: "",
      phoneNumber: "",
      email: "",
      panNumber: "",
      pincode: "",
      city: "",
    })

    const handleInputChange = (e, fieldName) => {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:3008/api/v1/auth/signup/partner", formData)
    .then((res)=>{
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="body">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true"><img
          src={fi}
          alt="FinURL"
          style={{ width: "30%", height: "20%", margintop: "3%", paddingTop: "2%"}}
        /></label>
          <input className="place" type="text" name="txt" placeholder="Name" value={formData.name} onChange={(e)=> handleInputChange(e, "name")} required />
          <input className="place" type="text" name="txt" placeholder="User Name" value={formData.username} onChange={(e)=> handleInputChange(e, "username")} required />
          <input className="place"  type="phonenumber" name="num" placeholder="Phone Number" value={formData.phoneNumber} onChange={(e)=> handleInputChange(e, "phoneNumber")} required />
          <input className="place"  type="email" name="email" placeholder="Email" value={formData.email} onChange={(e)=> handleInputChange(e, "email")} required />
          {/* <input className="place"  type=" OTP(sent on your above email)" name="otp" placeholder=" OTP(sent on your above email)" required /> */}
          <input className="place" type="pancard" name="no" placeholder="Pan Card No." value={formData.panNumber} onChange={(e)=> handleInputChange(e, "panNumber")} required />
          <input className="place"  type="Pincode" name="pswd" placeholder="Pincode" value={formData.pincode} onChange={(e)=> handleInputChange(e, "pincode")} required />
          <input className="place" type="City" name="city" placeholder="City" value={formData.city} onChange={(e)=> handleInputChange(e, "city")} required />
          <button className='abc' onClick={handleSubmit}>Sign Up As Partner</button>
        </form>
      </div>
     
    </div></div>
  );
}

export default Partner;