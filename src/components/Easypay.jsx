import React from 'react'

const Easypay = ({ contentt, title, imgg }) => {
  return (
    <div className="flex justify-between flex-col  pt-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-white hover:text-[#101010]">
    <img src={imgg} alt="icons" className=" ml-8 w-[60px] h-[55px] py-2 bg-white rounded-lg" />
    <div className=" px-[-1] mt-10">
      <h4 className="text-left font-larsseit font-bold text-[22px] leading-[32px] text-[#101010]">
          {title}
        </h4>
    <p className="max-w-[200px]  max-[1060px]:max-w-[150px] text-left font-larsseit font-normal text-[13px] leading-[32.4px] text-[#10101086] my-5">
      {contentt}
    </p>
    </div>
    
  </div>
  )
}

export default Easypay
