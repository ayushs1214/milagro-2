import { apple, google } from "../assets";
import styles, { layout } from "../style";
import bill from "../images/h90.png";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} ${styles.spacingBottom}`}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoicing
      </h2>
        Simplify your financial processes and gain full control over billing and invoicing with our user-friendly solution.
      </p>
    </div>
  </section>
);

export default Billing;
