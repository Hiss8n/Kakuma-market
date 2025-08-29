'use client'
import {motion} from 'framer-motion';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';




// app/page.js
export default function Hero() {
  useGSAP(()=>{
   gsap.to("#promo", {
 
    x:0,
     duration:2,
     repeat:-1,
     scale:0.15,
     yoyo:true,
     ease:'bounce.inOut'

   }) 

},[])
  return (
    <main className=" flex-col  bg-gray-50 items-center justify-center px-8  md:flex  overflow-hidden ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       

        {/* Right Section - Hero Image */}
        <div className="flex justify-center">
          <img
            src="/main.jpg"  // ✅ put your hero image inside /public
            alt="Women’s Tailored Dress"
            className="rounded-2xl shadow- w0-full h-[500px] w-[600px] object-cover"
          />
        </div>
         {/* Left Section - Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Women Through Fashion ✨
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Discover elegant, handmade dresses crafted by talented women in 
            Kakuma. Each dress blends culture, resilience, and modern style.  
          </p>
          <div className="flex items-between w-full h-20 items-between"> 
          <button className="mt-6 mr-12 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Shop Now
          </button>
              <div className="flex justify-center mt-8">
      <motion.div
        className="relative w-80 h-10 cursor-pointer xl:w-50"
        /* onClick={() => setFlipped(!flipped)} */
       /*  animate={{ rotateY: flipped ? 180 : 0 }} */
        transition={{ duration: 0.8 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side */}
        <div
        id='promo'
          className="absolute w-full h-full flex items-center justify-center 
          bg-black text-white text-2xl font-bold rounded-2xl shadow-xl "
          style={{ backfaceVisibility: "hidden" }}
        >
          🎉 15 % OFF!
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full flex items-center justify-center 
          bg-yellow-400 text-black text-xl font-semibold rounded-2xl shadow-xl"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          Use Code: <span className="ml-2">SALE 50</span>
        </div>
      </motion.div>
    </div>
          </div>
        </div>

      </div>
    </main>
  );
}
