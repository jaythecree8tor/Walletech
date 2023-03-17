import GetStarted from "./GetStarted";
import styles from "../style";
import { apple, robot,google } from "../assets";
const Hero = () => {
  return (
    <section id="home" className={`flex items-center py-28 px-24 max-ss:px-6  justify-between max-[1060px]:block max-[1060px]:text-center overflow-hidden`}>
      <div className={`block`}>

        <h1 className=" text-[72px] max-lg:text-[52px] max-ss:text-[52px] max-[490px]:text-[40px] text-white font-larsseit font-semibold">
            More Payment Options <br className=""/>{" "}
          </h1>

          <h1 className="text-gradient text-[72px] max-lg:text-[52px]  max-ss:text-[52px] max-[490px]:text-[40px]  font-larsseit font-semibold">
          Better than Cash
        </h1>
          <p className={`${styles.paragraph} max-w-[770px] max-[1060px]:justify-center mt-5`}>
          With a WALLETECH you can access the more than 240 million customers out there, as well as offering management tools, options, and payment methods.
        </p>
        <div className={`flex  mt-8 max-[1060px]:justify-center max-[1060px]:flex-row-reverse`}>
             <img src={apple} alt="apple" className="mr-5 cursor-pointer" />
             <img src={google} alt="google" className="mr-5 cursor-pointer"/>
        </div>
        </div>

        <div className={`flex md:my-0 my-10 relative max-[1060px]:justify-center`}>
        <img src={robot} alt="billing" className="   relative z-10" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
        </div>
    </section>
  )
}

export default Hero;
