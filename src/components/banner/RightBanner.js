import React from 'react'
import { bannerImg } from "../../assest/index";


const RightBanner = () => {
  return (
    
   <div className="relative flex items-center justify-center w-full lgl:w-1/2 ">
   <img 
   className="w-[500px] h-[640px] z-10"
   src={bannerImg} alt="bannerImg" />
   <div className="absolute bottom-0 w-[500px]  h-[500px] bg-gradient-to-r from-[#1e2024]
   to-[#202327] shadow-shadowOne flex justify-center items-center">

   </div>
 </div>
  )
}

export default RightBanner
