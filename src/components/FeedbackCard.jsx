import React from "react";
const FeedbackCard = ({ content, name, img }) => {
  return (
    <div className="flex justify-between flex-col  pt-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card transition ease-in-out delay-150 duration-700 bg-white hover:text-[#101010]">
      
    <img src={img} alt="icons" className=" ml-8 w-[60px] h-[55px] py-2 bg-white rounded-xl" />
    <div className="px-11 mt-10">
      <h4 className="text-left font-larsseit font-bold text-[25px] leading-[32px] text-[#101010]">
          {name}
        </h4>
    <p className="max-w-[200px] text-left font-larsseit font-normal text-[15px] leading-[32.4px] text-[#10101086] my-5">
      {content}
    </p>
    </div>
    
  </div>
  )
}

export default FeedbackCard;
