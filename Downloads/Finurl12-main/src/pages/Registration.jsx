// import React from "react";
// import styled from "styled-components";
// import { GlobalStyle } from "../styles/globalStyles";
// import { useFormik } from "formik";
// import { signUpSchema } from "../schemas";

// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirm_password: "",
// };

// const Registration = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: signUpSchema,
//       onSubmit: (values, action) => {
//         console.log(
//           "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
//           values
//         );
//         action.resetForm();
//       },
//     });
//   console.log(
//     "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
//     errors
//   );

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <div className="container">
//           <div className="modal">
//             <div className="modal-container">
//               <div className="modal-left">
//                 <h1 className="modal-title">Welcome!</h1>
//                 <p className="modal-desc">
//                  Apply for personal loan
//                 </p>
//                 <form onSubmit={handleSubmit}>
//                   <div className="input-block">
//                     <label htmlFor="name" className="input-label">
//                       Name
//                     </label>
//                     <input
//                       type="name"
//                       autoComplete="off"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="DOB" className="input-label">
//                       DOB
//                     </label>
//                     <input
//                       type="DOB"
//                       autoComplete="off"
//                       name="DOB"
//                       id="DOB"
//                       placeholder="DOB"
//                       value={values.DOB}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="form-error">{errors.name}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="email" className="input-label">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       autoComplete="off"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.email && touched.email ? (
//                       <p className="form-error">{errors.email}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="password" className="input-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="password"
//                       id="password"
//                       placeholder="Password"
//                       value={values.password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.password && touched.password ? (
//                       <p className="form-error">{errors.password}</p>
//                     ) : null}
//                   </div>
//                   <div className="input-block">
//                     <label htmlFor="confirm_password" className="input-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       autoComplete="off"
//                       name="confirm_password"
//                       id="confirm_password"
//                       placeholder="Confirm Password"
//                       value={values.confirm_password}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                     {errors.confirm_password && touched.confirm_password ? (
//                       <p className="form-error">{errors.confirm_password}</p>
//                     ) : null}
//                   </div>
//                   <div className="modal-buttons">
//                     <a href="#" className="">
//                       Want to register using Gmail?
//                     </a>
//                     <button className="input-button" type="submit">
//                       Apply Now
//                     </button>
//                   </div>
//                 </form>
//                 <p className="sign-up">
//                   Already have an account? <a href="#">Sign In now</a>
//                 </p>
//               </div>
//               <div className="modal-right">
//                 <img
//                   src="https://unsplash.com/photos/uC21aXJ7yQs"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </>
//   );
// };
// // export default Registration;

// const Wrapper = styled.section`
//   .container {
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: black;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .modal {
//     width: 100%;
//     /* height: 60px; */
//     background: rgba(51, 51, 51, 0.5);
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     transition: 0.4s;
//   }
//   .modal-container {
//     display: flex;
//     max-width: 60vw;
//     width: 100%;
//     border-radius: 10px;
//     overflow: hidden;
//     position: absolute;
    
//     transition-duration: 0.3s;
//     background: #fff;
//   }
//   .modal-title {
//     margin: 0;
//     font-weight: 400;
//     color: #55311c;
//   }
//   .form-error {
//     font-size: 1.4rem;
//     color: #b22b27;
//   }
//   .modal-desc {
//     margin: 6px 0 30px 0;
//   }
//   .modal-left {
//     padding: 60px 30px 20px;
//     background: #fff;
//     flex: 1.5;
//     transition-duration: 0.5s;
//     opacity: 1;
//   }

//   .modal-right {
//     flex: 2;
//     font-size: 0;
//     transition: 0.3s;
//     overflow: hidden;
//   }
//   .modal-right img {
//     width: 100%;
//     height: 100%;
//     transform: scale(1);
//     -o-object-fit: cover;
//     object-fit: cover;
//     transition-duration: 1.2s;
//   }

//   .modal.is-open .modal-left {
//     transform: translateY(0);
//     opacity: 1;
//     transition-delay: 0.1s;
//   }
//   .modal-buttons {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .modal-buttons a {
//     color: rgba(51, 51, 51, 0.6);
//     font-size: 14px;
//   }

//   .sign-up {
//     margin: 60px 0 0;
//     font-size: 14px;
//     text-align: center;
//   }
//   .sign-up a {
//     color: #8c7569;
//   }

//   .input-button {
//     padding: 1.2rem 3.2rem;
//     outline: none;
//     text-transform: uppercase;
//     border: 0;
//     color: #fff;
//     border-radius: 4px;
//     background: #8c7569;
//     transition: 0.3s;
//     cursor: pointer;
//     font-family: "Nunito", sans-serif;
//   }
//   .input-button:hover {
//     background: #55311c;
//   }

//   .input-label {
//     font-size: 11px;
//     text-transform: uppercase;
//     font-weight: 600;
//     letter-spacing: 0.7px;
//     color: #8c7569;
//     transition: 0.3s;
//   }

//   .input-block {
//     display: flex;
//     flex-direction: column;
//     padding: 10px 10px 8px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     margin-bottom: 20px;
//     transition: 0.3s;
//   }
//   .input-block input {
//     outline: 0;
//     border: 0;
//     padding: 4px 0 0;
//     font-size: 14px;
//   }

//   .input-block input::-moz-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input:-ms-input-placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block input::placeholder {
//     color: #ccc;
//     opacity: 1;
//   }
//   .input-block:focus-within {
//     border-color: #8c7569;
//   }
//   .input-block:focus-within .input-label {
//     color: rgba(140, 117, 105, 0.8);
//   }

//   @media (max-width: 750px) {
//     .modal-container {
//       max-width: 90vw;
//     }

//     .modal-right {
//       display: none;
//     }
//   }
// `;

// export default Registration;

import React from 'react';
import './style.css';
import fi from "../images/fi.png";

function Registration() {
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
          <input className='place' type="text" name="txt" placeholder="Name" required />
          <input className='place' type="text" name="txt" placeholder="User Name" required />
          <input className='place' type="phonenumber" name="num" placeholder="Phone Number" required />
          <input className='place' type="email" name="email" placeholder="Email" required />
          <input className='place' type=" OTP(sent on your above email)" name="otp" placeholder=" OTP(sent on your above email)" required />
          <input className='place' type="pancard" name="no" placeholder="Pan Card No." required />
          <input className='place' type="Pincode" name="pswd" placeholder="Pincode" required />
          <input className='place' type="City" name="city" placeholder="City" required />
          <button className='abc'>Register</button>
        </form>
      </div>
     
    </div></div>
  );
}

export default Registration;