import "../styles/loan.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Testimonials from "../Testimonials";
import { testimonialData, responsive } from "../data";
import React from 'react';

export default function testslider() {
  const product = testimonialData.map((item) => (
    <Testimonials
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <div showDots={true} responsive={responsive}>
        {product}
      </div>
    </div>
  );
  }