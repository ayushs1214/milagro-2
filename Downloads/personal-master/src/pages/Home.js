import React, {useRef} from "react";
//  import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/robot3.png";
import bill from "../images/h90.png";
import Card from "../images/h11.png";
import Main from "../images/h15.png"
import "../styles/HomeStyles.css";
// import Newsletter from "./Newsletter";
import Loan from "./loan";
import Testslider from "./testslider";
import Cred from "./cred";
// import ScrollToTop from "../ScrollToTop";

// @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");

function Home() {

  const cars = [
    "https://img.shields.io/badge/TATACAPITAL-%23008080.svg?style=for-the-badge&logo=TATACAPITAL&logoColor=white&height=500",
    "https://img.shields.io/badge/NIRA-%2339457E.svg?style=for-the-badge&logo=NIRA&logoColor=white",
    "https://img.shields.io/badge/MONEYVIEW-%23ED8B00.svg?style=for-the-badge&logo=MONEYVIEW&logoColor=white",
    "https://img.shields.io/badge/IIFL-PL-%23239120.svg?style=for-the-badge&logo=c-IIFL-PL&logoColor=white",
    "https://img.shields.io/badge/IIFL-BL-%2314354C.svg?style=for-the-badge&logo=IIFL-BL&logoColor=white",
    "https://img.shields.io/badge/Paysense-hotpink.svg?style=for-the-badge&logo=Paysense&logoColor=white",
    "https://img.shields.io/badge/Faircent-%231572B6.svg?style=for-the-badge&logo=Faircent&logoColor=white",
    "https://img.shields.io/badge/Hero-%23E34F26.svg?style=for-the-badge&logo=Hero&logoColor=white",
    "https://img.shields.io/badge/MONEYWIDE-%23323330.svg?style=for-the-badge&logo=MONEYWIDE&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/FlexiLoan-%234ea94b.svg?style=for-the-badge&logo=FlexiLoan&logoColor=white"
  ];
const getStarted = useRef(null);
const scrollToSection = (elementRef) => {
  window.scrollTo ({
    top: elementRef.current.offsetTop,
    behavior:"smooth",
  });
};
  return (
    <div style={{ overflowX: 'hidden' }}>
<div className="root">
      <section className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>The Next <p className="text-gradient">Generation</p></h1>
          <h1><p>Loan Method.</p></h1>
          <Link to="">
            <button className="btnn" onClick={() => scrollToSection(getStarted)}>GET STARTED</button>
          </Link>
        </div>
      </section>

      <section className="root">
      <div className="flex-container">
        <h4 className="stat">3800+ <p className="text-gradient">ACTIVE PARTNERS</p></h4>
        <h4 className="stat">230+ <p className="text-gradient">TRUSTED BY COMPANIES</p></h4>
        <h4 className="stat">₹93Cr+ <p className="text-gradient">DISBURSAL</p></h4>
      </div>
      </section>
      <br/><br/>  <br/><br/>
      <section><Cred /></section>  <br/><br/><br />
      <section className="bill" style={{ backgroundImage: `url(${bill})` }}>
        <div className="billContainer">
          <h1>Easily Control your</h1> <h1 >billing and invoicing</h1>
          <br />
          <p>Elit enim sed massa etiam. Mauris eu adipiscing  </p>
          
        </div>
      </section>

      <section className="card" style={{ backgroundImage: `url(${Card})`}} >
        <div className="cardContainer">
          <h1>Find a better card</h1><br /> <h1 >deal</h1><br />
          <h1 >in few easy steps</h1>
          <br />
          <p>Elit enim sed massa etiam. Mauris eu adipiscing  </p>
          
        </div>
      </section>


         <section className="bill" style={{ backgroundImage: `url(${Main})` }}  >
        <div className="billContainer ">
          <h1>You do the business</h1><br /> <h1 >we will handle the</h1><br />
          <h1 >money.</h1>
          <br />
          <p>Elit enim sed massa etiam. Mauris eu adipiscing  </p>
          <Link to="">
          {/* <button className="btnn" > GET STARTED</button> */}
          </Link>
        </div>
      </section>  
      <br/><br/><section ref={getStarted}>
     <Loan />
     </section>
     
    <section>


  <br/><br/><br/>  <br /><br /><br /><br />   <h1 className="partners">What people say about us</h1> <br /><br /><br/><br/>
    <Testslider /> <br /><br /><br/><br/><br/>
    </section>

    <section className="part" >
     
     <div >
       <h1 className="partners">OUR PARTNERS</h1>
      
     </div>
     


     <div className="pt-28 flex items-center flex-col text-center">
     

     <div className="slider">
       <div className="slide-track">
         {cars.map((car, index) => {
           return (
             <div className="slide" key={index}>
             <Link>  <img src={car} alt="imageforslider" /></Link>
             </div>
           );
         })}
         {cars.map((car, index) => {
           return (
             <div className="slide" key={index}>
               <Link>
               <img src={car} alt="imageforslider" /></Link>
             </div>
           );
         })}
       </div>
       
     </div>
   </div>
  
 
   </section>

    {/* <Newsletter /> */}


 </div>

 </div>
  );

}

export default Home;
