import React from 'react'
import right1 from "../assets/images/right1.avif"
import right2 from "../assets/images/right2.avif";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1BottomText = () => {

  useGSAP(function(){
    gsap.to('#banner img',{
      rotate: 360,
      duration: 2, 
      repeat: -1,
      ease: "linear",
    })
  })


  return (
    <div className="absolute bottom-0 w-full flex items-end left-0 p-25 justify-between">
      <div className='text-2xl font-[anzo2]'>
        <h2>BRAND DESIGN | WEBSITE DESIGN </h2>
        <h3 className='text-gray-400'>SOFTWARE DEVELOPER</h3>
      </div>
      <div id='banner'>
        <img className='mb-10 w-15' src={right1}></img>
        <img className='w-15' src={right2}></img>
      </div>
    </div>
  );
}

export default Page1BottomText
