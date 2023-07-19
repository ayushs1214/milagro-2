import styles from "../style";
import { useRef } from "react";
// import Loan from "../pages/loan";
// import Button from "./Button";
import Banner from "../images/robot3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const getStarted = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart}   flex-col xl:px-0 justify-center`}>
        <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="font-poppins sm:pl-20 pl-1  font-semibold ss:text-[172px] text-[52px] text-white ss:leading-[130.8px] leading-[85px] w-full">
  The Next <br className="sm:block hidden" />{" "}
  <span className="text-gradient ">Generation</span>{" "}
</h1>
             <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <h1 className="font-poppins sm:pl-20 pl-1  font-semibold ss:text-[172px] text-[52px] text-white ss:leading-[130.8px] leading-[85px] w-full">
          Loan Method
        </h1>
        <p className={`${styles.paragraph} sm:pl-20 pl-1  max-w-[470px] mt-5 text-white`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
         <br/> 
         {/* <Link to="/Loan">
          <Button className={'xl:px-9'}styles={`mt-10 `} />
        </Link>   */}
         </p>
       
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Banner} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
