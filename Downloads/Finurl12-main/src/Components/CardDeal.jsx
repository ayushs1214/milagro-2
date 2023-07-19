
import styles, { layout } from "../style";

import card from "../images/h11.png";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
      Discover your ideal credit card offer effortlessly by following our simple steps to find the best deal tailored to your needs.
      </p>
</h2>
      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
