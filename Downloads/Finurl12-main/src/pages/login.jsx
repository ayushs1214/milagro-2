import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import finurl from '../images/finurl.png';
import { Link } from 'react-router-dom';
import Butlog from "./Butlog";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Login = () => {
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
        <div className="container" >
          <div className="modal12">
            <div className="modal1-container" >
              
              <div className="modal-logo" >
      <img
          src={finurl}
          alt="FinURL"
          style={{ width: "30%", height: "20%", position:"absolute", }}
        /></div>
        <div className="modal-left">
                {/* <h1 className="modal-title">Welcome!</h1> */}
                <p className="modal-desc">
                 
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Username
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
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder=""
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder=""
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </div>
                  <div className="modal-buttons">
                    <a href="./partner" className="">
                      Want to register as Partner?
                    </a>
                    <button className="input-button" type="submit">
                      LOGIN
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Don't have an account? <a href="/SignUp">Sign Up now</a>
                </p>
              </div>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal12 {
    width: 50%;
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal1-container {
    display: flex;
    max-width: 60vw;
    width: 30%;
    height: 95%;
    border-radius: 35px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: pink;
  }
  .modal-title {
    align-items: center;
    text-align: center;
    margin: 0;
    font-weight: 400;
    color: white;
    padding-top: 2px;
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
    padding: 10px 10px 10px;
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

export default Login;