import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  Pincode: "",
  city: "",
};

const Butlog = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );

  return (
    <>

      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">SIGNUP</h1>
                <p className="modal-desc">
                 
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder=""
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="username" className="input-label">
                      Username
                    </label>
                    <input
                      type="username"
                      autoComplete="off"
                      name="username"
                      id="username"
                      placeholder=""
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>
                  
                  <div className="input-block">
                    <label htmlFor="PhoneNumber" className="input-label">
                      Phone Number
                    </label>
                    <input
                      type="PhoneNumber"
                      autoComplete="off"
                      name="PhoneNumber"
                      id="PhoneNumber"
                      placeholder=""
                      value={values.PhoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder=""
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="OTP" className="input-label">
                    OTP(sent on your above email)
                    </label>
                    <input
                      type="OTP"
                      autoComplete="off"
                      name="OTP"
                      id="OTP"
                      placeholder=""
                      value={values.PanCard}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.OTP && touched.OTP ? (
                      <p className="form-error">{errors.OTP}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="PanCard" className="input-label">
                     Pan Card No.
                    </label>
                    <input
                      type="PanCard"
                      autoComplete="off"
                      name="PanCard"
                      id="PanCard"
                      placeholder=""
                      value={values.PanCard}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.PanCard && touched.PanCard ? (
                      <p className="form-error">{errors.PanCard}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="Pincode" className="input-label">
                      Pincode
                    </label>
                    <input
                      type="Pincode"
                      autoComplete="off"
                      name="Pincode"
                      id="Pincode"
                      placeholder=""
                      value={values.Pincode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Pincode && touched.Pincode ? (
                      <p className="form-error">{errors.Pincode}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="city" className="input-label">
                     City
                    </label>
                    <input
                      type="city"
                      autoComplete="off"
                      name="city"
                      id="city"
                      placeholder=""
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="form-error">{errors.city}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="#" className="">
                      Want to register as Partner?
                    </a>
                    <button className="input-button" type="submit">
                      SIGNUP 
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="/Login">Sign In now</a>
                </p>
              </div>
              {/* <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </Wrapper>
      
    </>
  );
};
// export default Registration;

const Wrapper = styled.section`
  .container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 100%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 40%;
    border-radius: 10px;
    // overflow: hidden;
    // position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: white;
    text-align: center;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: rgb(105,105,113);
background: linear-gradient(90deg, rgba(105,105,113,1) 100%, rgba(227,227,229,1) 100%, rgba(0,212,255,1) 100%);
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  .modal-buttons a {

    font-size: 14px;
    color: white;
  }
  

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: white;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    // text-transform: uppercase;
    border: 0;
    color: white;
    border-radius: 4px;
    background: black;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: darkgrey;
  }

  .input-label {
    font-size: 13px;
    padding-bottom: 10px;
    font-family: "Nunito", sans-serif;
    // font-weight: 600;
    letter-spacing: 0.7px;
    color: white;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 10px;
    border: #ddd;
    border-radius: 9px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
    background: lightGray;
    height: 30px;
    border-radius: 7px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    // color: rgba(140, 117, 105, 0.8);
  }


  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Butlog;