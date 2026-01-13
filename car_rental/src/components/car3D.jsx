"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Checkbox from "./Checkbox";
import Button from "./ui/buttonNew";
import CarScene from "./carScene";

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">


      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center bg-gradient-to-b from-[#000000] to-[#151515] h-12 pt-6 p-5 pt-1 z-20">
        <div className="flex items-center z-20 gap-3">
          <Checkbox className="-mt-2.5 z-20 " />
          <img src="/logo1.png" alt="Logo" className="w-15 h-15 object-contain" />
          <h1 className="text-2xl z-20 text-white">
            RentN<span className="text-[#6438c2]">Go</span>
          </h1>
        </div>

        <div className="relative md:flex z-20 items-center gap-6 text-white text-sm tracking-wide">
          <Link href="#" className="py-2 z-20 font-bold text-[#6438c2] hover:text-purple-500 transition">Login</Link>
          <Link href="#" className="px-5 z-20 py-2 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="absolute inset-0 z-20">
        <CarScene />
      </div>



      {/* Hero Content */}
      <div className="relative z-11 w-[full] h-full flex flex-col items-center justify-between text-center px-6 gap-45 py-10 mt-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-white font-extrabold text-6xl drop-shadow-2xl">
            Rent. Ride. Repeat.
          </h1>
          <h2 className="text-white font-light text-2xl mt-4 font-sans">
            Premium Rides for Everyone.
          </h2>
        </motion.div>

        {/* Buttons + Scroll Arrow */}
        <div className="flex flex-col items-center gap-8 mt-5">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
          
            <Link href="#bookCarPage">
            <Button action="Book Now" />
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
        {/* <div
  className="absolute inset-0 z-0 right-0 max-w-full overflow-hidden pointer-events-none "
  style={{
    width: "150%",
    height: "150%",
    background: "linear-gradient(135deg, #000000, #6438c2)",
  }}
>
  <iframe
    title="Bugatti"
    src="https://sketchfab.com/models/069f6dd28222465fbbe7e02e298669dc/embed"
    frameBorder="0"
    allow="autoplay; fullscreen; xr-spatial-tracking ; gyroscope; accelerometer ; vr"
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      right:0 ,
      pointerEvents: "auto", // <<< Allow interaction
    }}
  ></iframe>
            </div> */}

    </section>
  );
}

export default HeroSection;
