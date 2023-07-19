import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import finurl from '../images/finurl.png';

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
        console.log("🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values", values);
        action.resetForm();
      },
    });

  return (
    <>
      <div className="bg-black flex justify-center items-center">
        <div className=" bg-gray-800 rounded-lg p-8 m-10">
          <div className="flex justify-center items-center mb-6">
            <img
              src={finurl}
              alt="FinURL"
              className="w-40 absolute"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-1">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="text-red-500 text-sm">{errors.name}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="username" className="block text-white mb-1">
                Username
              </label>
              <input
                type="text"
                autoComplete="off"
                name="username"
                id="username"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.username && touched.username ? (
                <p className="text-red-500 text-sm">{errors.username}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="PhoneNumber" className="block text-white mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                autoComplete="off"
                name="PhoneNumber"
                id="PhoneNumber"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.PhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.PhoneNumber && touched.PhoneNumber ? (
                <p className="text-red-500 text-sm">{errors.PhoneNumber}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-1">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-sm">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="OTP" className="block text-white mb-1">
                OTP (sent on your above email)
              </label>
              <input
                type="text"
                autoComplete="off"
                name="OTP"
                id="OTP"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.OTP}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.OTP && touched.OTP ? (
                <p className="text-red-500 text-sm">{errors.OTP}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="PanCard" className="block text-white mb-1">
                Pan Card No.
              </label>
              <input
                type="text"
                autoComplete="off"
                name="PanCard"
                id="PanCard"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.PanCard}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.PanCard && touched.PanCard ? (
                <p className="text-red-500 text-sm">{errors.PanCard}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="Pincode" className="block text-white mb-1">
                Pincode
              </label>
              <input
                type="text"
                autoComplete="off"
                name="Pincode"
                id="Pincode"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.Pincode}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Pincode && touched.Pincode ? (
                <p className="text-red-500 text-sm">{errors.Pincode}</p>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="city" className="block text-white mb-1">
                City
              </label>
              <input
                type="text"
                autoComplete="off"
                name="city"
                id="city"
                className="w-full bg-gray-300 px-4 py-2 rounded"
                placeholder=""
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && touched.city ? (
                <p className="text-red-500 text-sm">{errors.city}</p>
              ) : null}
            </div>
            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-white text-sm">
                Want to register as Partner?
              </a>
              <button
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
                type="submit"
              >
                SIGNUP
              </button>
            </div>
          </form>
          <p className="text-white text-sm">
            Already have an account? <a href="/Login">Sign In now</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Butlog;
