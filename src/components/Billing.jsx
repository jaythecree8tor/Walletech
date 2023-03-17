import React from 'react'
import {paper} from "../assets";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Billing = () => {
  return (
    <section id="product" className=" flex items-center py-8 px-24 max-ss:px-6  justify-between max-[1060px]:block  overflow-hidden">
    <div className=" ">
      <img src={paper} alt="graph" className=" rounded-lg w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className=" mt-8 ml-10 max-[1060px]:ml-0">
      <h2 className="flex text-left text-[50px] max-lg:text-[29px] max-ss:text-[28px] max-[490px]:text-[27px] text-[#101010] font-larsseit  font-semibold tracking-wide">
      Keep your cash flow clear 	
&#128184; <br />
and keep increasing &#128640;
      </h2>
      <p className={`max-w-[350px] font-larsseit max-lg:text-[19px] mt-5 text-[#1010104b] tracking-wide`}>
      See it all at a glance when you link your cash
accounts, credit cards, investments, and bills.
      </p>
      {/* <button className="  mt-8 text-black text-[15px] bg-[#72e485] hover:bg-[#43ee60] ease-in-out duration-500 py-2 px-6 rounded-lg font-bold tracking-wide"><a href="#signin">Try for now <FontAwesomeIcon icon={faArrowRight} />  </a></button> */}
      <a href="#try" class=" mt-5 relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-[#101010] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#72e485] group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<FontAwesomeIcon icon={faArrowRight} />
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<FontAwesomeIcon icon={faArrowRight} />
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Try for now </span>
</a>
    </div>
    
  </section>
  )
}

export default Billing
