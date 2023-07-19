import styles, { layout } from "../style";
import Main from "../images/h15.png";

const Business = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} ${styles.spacingBottom}`}>
      <img src={Main} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
     

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
        Focus on growing your business while we take care of all your financial needs, providing seamless money management solutions.
      </p>
    </div>
  </section>
);

export default Business;
