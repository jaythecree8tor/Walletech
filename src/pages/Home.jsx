import React from 'react'
import styles from "../style";
import { feedback,easypay } from "../constants";
import { apple, robot,google,paper,paper2 } from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import { staggerContainer, textVariant , sectionVariant,textVariant2,textVariant3 } from '../utils/motion';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FeedbackCard from "../components/FeedbackCard";
import Easypay from "../components/Easypay";
const Home = () => {
  return (
    <div className='block'>

{/* hero */}

    <section className={`bg-[#101010] flex items-center py-28 px-24 max-ss:px-6  justify-between max-[1060px]:block max-[1060px]:text-center overflow-hidden `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`block`}>
      <motion.div variants={textVariant(0.1)} >
<h1 className=" text-[72px] max-lg:text-[52px] max-ss:text-[52px] max-[490px]:text-[40px] text-white font-larsseit font-semibold">
    More Payment Options <br className=""/>{``}
  </h1>
  </motion.div>
  <motion.div variants={textVariant(0.2)} >
  <h1 className="text-gradient text-[72px] max-lg:text-[52px]  max-ss:text-[52px] max-[490px]:text-[40px]  font-larsseit font-semibold">
  Better than Cash
</h1>
</motion.div>
<motion.div variants={textVariant(0.3)} >
  <p className={`${styles.paragraph} max-w-[770px] max-[1060px]:justify-center mt-5 max-[1060px]:text-[13px] text-white`}>
  With a WALLETECH you can access the more than 240 million customers out there, as well as offering management tools, options, and payment methods.
</p>
</motion.div>
<motion.div variants={textVariant(0.4)} >
<div className={`flex  mt-8 max-[1060px]:justify-center max-[1060px]:flex-row-reverse`}>
     <img src={apple} alt="apple" className="mr-5 cursor-pointer" />
     <img src={google} alt="google" className="mr-5 cursor-pointer"/>
</div>
</motion.div>
</div>
</motion.div>


<div className={`flex md:my-0 my-10 relative max-[1060px]:justify-center`}>

<motion.div
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
  >
<img src={robot} alt="billing" className="   relative z-10" />
</motion.div>
{/* gradient start */}
<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
<div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
{/* gradient end */}
</div>


    </section>

  {/* cards */}

    <section id="" className={`bg-[#eeedf0] block items-center py-14  max-ss:px-6 max-[1060px]:text-center`}>

    <div className="" />

    <div className="block justify-center items-center sm:mb-16 mb-6 relative z-[1] text-center">
    <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
      <h2 className={`flex text-[32px] max-lg:text-[32px] max-ss:text-[32px] max-[490px]:text-[30px] text-[#101010] font-larsseit  font-semibold tracking-wide justify-center`}>
        Safe & Convenient Transaction
      </h2></motion.div>
      <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
      <div className="w-full md:mt-0 mt-6">
        <p className={` font-larsseit max-lg:text-[14px] max-[1060px]:justify-center mt-5 text-[#10101088] tracking-wide`}>
        Want to pay anything so easy with the touch of a finger. Through <br />
WALLETECH, you can make practically any transaction.
        </p>
      </div></motion.div>
    </div>
    <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.12 }}
  >
    <div className="flex flex-wrap  justify-center  w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
    </motion.div>

  </section>
  
{/* graph */}
<motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
    >
<section id="product" className=" flex items-center py-20 px-24 max-ss:px-6  justify-between max-[1060px]:block  overflow-hidden">

    <div className=" ">
    <motion.div
    variants={textVariant3}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
      <img src={paper} alt="graph" className=" shadow-xl rounded-lg w-[100%] h-[100%] relative z-[5]" /></motion.div>
    </div>

    <div className=" mt-8 ml-10 max-[1060px]:ml-0">
    <motion.div variants={textVariant(0.1)} >
      <h2 className="flex text-left text-[50px] max-lg:text-[29px] max-ss:text-[28px] max-[490px]:text-[27px] text-[#101010] font-larsseit  font-semibold tracking-wide">
      Keep your cash flow clear 	
&#128184; <br />
and keep increasing &#128640;
      </h2> </motion.div>
      <motion.div variants={textVariant(0.3)} >
      <p className={`max-w-[350px] font-larsseit max-lg:text-[19px] mt-5 text-[#1010104b] tracking-wide`}>
      See it all at a glance when you link your cash
accounts, credit cards, investments, and bills.
      </p></motion.div>
      {/* <button className="  mt-8 text-black text-[15px] bg-[#72e485] hover:bg-[#43ee60] ease-in-out duration-500 py-2 px-6 rounded-lg font-bold tracking-wide"><a href="#signin">Try for now <FontAwesomeIcon icon={faArrowRight} />  </a></button> */}
      <motion.div variants={textVariant(0.4)} >
      <a href="#try" class=" mt-5 relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#101010] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#72e485] group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<FontAwesomeIcon icon={faArrowRight} />
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<FontAwesomeIcon icon={faArrowRight} />
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Try for now </span>
</a></motion.div>
    </div>
   
  </section>
 </motion.div>
    {/* payments */}
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
    >
    <section id="product" className=" flex items-center py-16 px-24 max-ss:px-6  justify-between   overflow-hidden max-[1060px]:flex-col-reverse ">
  

    <div className=" mt-8 ml-10 max-[1060px]:ml-0">
    <motion.div variants={textVariant(0.1)} >
      <h2 className="flex text-left text-[50px] max-lg:text-[29px] max-ss:text-[28px] max-[490px]:text-[27px] text-[#101010] font-larsseit  font-semibold tracking-wide">
      Manage regular <br />
payments easily🤑
      </h2></motion.div>
      <motion.div
    variants={sectionVariant}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.22 }}
  >
      <div className="flex flex-wrap w-full feedback-container relative z-[1]">
      {easypay.map((card) => < Easypay key={card.imgg} {...card} />)}
    </div></motion.div>
      {/* <button className="  mt-8 text-black text-[15px] bg-[#72e485] hover:bg-[#43ee60] ease-in-out duration-500 py-2 px-6 rounded-lg font-bold tracking-wide"><a href="#signin">Try for now <FontAwesomeIcon icon={faArrowRight} />  </a></button> */}
 
    </div>


    <div className=" ">
    <motion.div
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
      <img src={paper2} alt="graph" className=" rounded-lg w-[100%] h-[100%] relative z-[5]" /></motion.div>
    </div>

    
  </section>
  </motion.div>



    </div>
  )
}

export default Home
