import styles from "../style";
import Button from "./ButtonCred";
import hand from "../images/hand.png";
import { Link } from "react-router-dom";
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.paddingA} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Check Your Credit Score Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <Link to="/creditscore"> <Button /></Link> 
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
    <img src={hand} alt="touch"  />
    </div>
  </section>
);

export default CTA;
