import React from 'react'
import { coming } from '../assets'
const ComingSoon = ({image,soon}) => {
  return (
    <div className=' flex justify-center items-center text-center py-40'>
      <div className=' flex-col justify-center'>
         <div className=' flex justify-center'>
            <img className=' w-[70%]' src={image} alt="" />
         </div>

         <h1 className=' pt-12 font-larsseit font-bold text-[40px] max-[500px]:text-[20px]'>{soon}</h1>
      </div>
    </div>
  )
}

export default ComingSoon
