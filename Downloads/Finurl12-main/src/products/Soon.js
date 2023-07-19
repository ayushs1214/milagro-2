import React, { useEffect, useRef } from "react";
import './index1.css';
import Dosa from "../images/L1.jpg";
const Soon = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    textElement.classList.add("slide-in-animation");
  }, []);

  return (
    <div className="bg-black">
      <div className="h-3/4 overflow-hidden">
        <img src={Dosa} alt="Our Story" className="w-[100%] h-[30%]" />
        <div className="absolute lg:top-1/2 left-1/2 md:top-2/5 lg:transform -translate-x-3/2 -translate-y-1/2 text-center">
          <h1
            ref={textRef}
            className="animation-text text-white text-2xl lg:text-6xl"
          >
            Coming Soon
          </h1>
        </div></div>
</div>
  );
};

export default Soon;