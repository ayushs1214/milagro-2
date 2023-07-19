import "../styles/loan.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { productData, responsive } from "../data";
import React from 'react';

export default function sliderrr() {
  const product = productData.map((item) => (
    <Product
      url={item.imageurl}
      name={item.name}
      loans={item.loans}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
  }