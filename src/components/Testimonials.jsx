import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={` block items-center py-14  max-ss:px-6 max-[1060px]:text-center`}>
    <div className="" />

    <div className="block justify-center items-center sm:mb-16 mb-6 relative z-[1] text-center">
      <h2 className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-[#101010] font-larsseit  font-semibold tracking-wide justify-center`}>
        Safe & Convenient Transaction
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={` font-larsseit max-lg:text-[14px] max-[1060px]:justify-center mt-5 text-[#10101088] tracking-wide`}>
        Want to pay anything so easy with the touch of a finger. Through <br />
WALLETECH, you can make practically any transaction.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;