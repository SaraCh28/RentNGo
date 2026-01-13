//     "use client";
// import React from 'react'

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Checkbox from './Checkbox';
// function HeroSection() {
//   return (

//     <section className="relative min-h-screen w-full overflow-hidden">
//       {/* Full-Screen Background Image */}
//       <div
//   className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//   style={{
//     backgroundImage: "url('/car-lambo.png')",
//           // filter: "brightness(1)", // Optional: darken image for text readability
//         }}
//       />

//       {/* Overlay Gradient (Optional - improves text contrast) */}
//       <div className="absolute inset-0 
     
//       " />

//       {/* Navbar */}
//      <nav className="w-full flex justify-between items-center p-8 absolute top-0 left-0 z-20">
//   <div className="flex items-center gap-3">
//   <Checkbox className="-mt-2.5"/>
//     {/* <button className="text-white text-2xl">☰</button> */}
//     <img src="/logo1.png" alt="Logo" className="w-15 h-15 object-contain" />
//     <h1 className='ml-[-2px] text-2xl'>RentN<span className="text-[#6438c2]">Go</span></h1>
//   </div>

//   <div className="hidden md:flex items-center gap-6 text-sm tracking-wide text-white">
//     <Link href="#" className="py-2 text-[#6438c2] font-bold hover:text-purple-500 hover:border-white transition">Login</Link>
//     <Link
//       href="#"
//       className="px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition font-semibold"
//     >
//       Sign Up
//     </Link>
//   </div>
// </nav>


//       {/* Hero Content - Centered & Overlayed */}
//       <div className="relative z-10 flex p-[30px] mt-[0px] flex-col items-center justify-between  flex-grow px-6 text-center min-h-screen">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           className="text-white font-bold text-6xl mt-35 trcking-wide drop-shadow-2xl"
//         >
//           Rent. Ride. Repeat.
//           <h2 className=' text-white font-light text-2xl mt-4 font-sans'>Premium Rides for Everyone.</h2>
//         </motion.h1>

//         {/* CTAs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="flex flex-col sm:flex-row gap-6 md:gap-6 "
//         >
//           <Link
//             href="#"
//             className="bg-[#5229ab] border-2 border-[#fbfbfb] hover:bg-purple-600 transition text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg"
//           >
//             Book Now
//           </Link>
//           <Link
//             href="#cars"
//             className="border-2 border-white hover:bg-white hover:text-black transition font-semibold px-10 py-4 rounded-full text-lg text-white"
//           >
//             Explore Cars
//           </Link>
//         </motion.div>
//       </div>

//       {/* Optional Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2 text-white z-10"
//       >
//         <div className="animate-bounce">
//           <svg
//             className="w-6 h-6 mx-auto"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// export default HeroSection






















"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Checkbox from "./Checkbox";
import Button from "./ui/buttonNew";
import BackgroundVideo from "./bgVid";

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/bg1.png')" }}
      /> */}

      <div className=" z-10 text-white">
      <BackgroundVideo />


      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 pt-1 z-20">
        <div className="flex items-center gap-3">
          <Checkbox className="-mt-2.5" />
          <img src="/logo2.png" alt="Logo" className="w-15 h-15 object-contain" />
          <h1 className="text-2xl text-white">
            RentN<span className="text-[#6438c2]">Go</span>
          </h1>
        </div>

        <div className="relative md:flex items-center gap-6 text-white text-sm tracking-wide">
          <Link href="/LogIn"  className="py-2 font-bold text-[#6438c2] hover:text-purple-500 transition">Login</Link>
          <Link href="/SignUp"> <Button action="Sign Up" />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between  text-center px-6 gap-45 py-10 mt-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-white font-extrabold text-6xl drop-shadow-2xl">
            Rent <span className="text-[#6438c2]">.</span>  Ride <span className="text-[#6438c2]">.</span>  Repeat <span className="text-[#6438c2]">.</span> 
          </h1>
          <h2 className="text-white font-light text-2xl mt-4 font-sans">
            Premium Rides for Everyone.
          </h2>
        </motion.div>

        {/* Buttons + Arrow grouped together */}
        <div className="flex flex-col items-center gap-8 mt-5">

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="#BrowseCarsPage"
              // className="bg-[#6438c2] border-2 border-[#fbfbfb] hover:bg-[#451e98] transition text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg"
              
            ><Button action="Book Now" />
              
            </Link>
            
          </motion.div>

         {/* Scroll Arrow */}
        <a href="#howItWorks">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-white cursor-pointer animate-bounce"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </a>

        </div>
      </div>
      </div>
    </section>
  );
}

export default HeroSection;
