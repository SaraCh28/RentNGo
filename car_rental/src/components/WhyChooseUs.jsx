'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { FiTruck, FiShield, FiStar, FiZap, FiMapPin } from 'react-icons/fi'
import { SlidersHorizontal } from 'lucide-react';
import { useSpring } from 'framer-motion';
import Button from './ui/buttonNew';




export default function WhyChooseUs() {
  const accent = '#6438c2' // purple accent

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        ease: 'easeOut',
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const ref = useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["0.5 1", "0.6 1"]
});


const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 80,
  damping: 20,
});

const alwaysinView = useTransform(scrollYProgress, [0, 1], [1, 1]);
const fadeIn = useTransform(smoothProgress, [0, 1], [0.4, 1]);
const slideUp = useTransform(scrollYProgress, [0, 1], [0,1]);
const scaleUp = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
const SlidersHorizontalR = useTransform(scrollYProgress, [0, 1], [50, 0]);
const SlidersHorizontalL = useTransform(scrollYProgress, [0, 1], [ -50, 0]);





  return (
    <section
    id="whyChooseUs"
     className="w-full min-h-screen bg-black text-white py-16 px-6 lg:px-24"
     ref={ref}
 
>
  <motion.div 
    style={{
      opacity: fadeIn,
      y: slideUp,
      scale: scaleUp
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 8 , x:50}}
          animate={{ opacity: 1, y: 0 , x:0}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Why <span style={{ color: 'white' }}>Choose</span> <span className="text-white">RentN<span className="text-[#6438c2]">Go</span></span>
            </h2>
            <p className="mt-3 text-gray-300 max-w-xl">
              Premium vehicles, seamless bookings, and concierge-grade support — designed for travelers
              who value comfort and reliability.
            </p>
          </div>

          <div className="mt-4 lg:mt-0">
           <Button action="Book Now" />
          </div>
        </motion.header>

        {/* Feature Cards */}
        

        <div className="">
        <motion.div
          
          variants={container}
          initial="hidden"
          animate="show"
        >
         <motion.div 
         
         className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
    style={{
      opacity: alwaysinView,
      y: slideUp,
      x: SlidersHorizontalR,
      scale: scaleUp
    }}
    transition={{ duration: 1.9, ease: "easeOut" }}
  >
          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiTruck size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Wide Premium Fleet</h3>
                <p className="text-gray-300 text-sm mt-1">From luxury sedans to family SUVs — handpicked and fully inspected.</p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiShield size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Insurance & Safety</h3>
                <p className="text-gray-300 text-sm mt-1">Comprehensive coverage and 24/7 roadside assistance for peace of mind.</p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiStar size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Trusted Reviews</h3>
                <p className="text-gray-300 text-sm mt-1">Thousands of 5-star reviews from business and leisure customers.</p>
              </div>
            </div>
          </motion.article>
        </motion.div>

        <motion.div 
                 className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"

    style={{
      opacity: alwaysinView,
      y: slideUp,
      x: SlidersHorizontalL,
      scale: scaleUp
    }}
    transition={{ duration: 1.9, ease: "easeOut" }}
  >

          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiZap size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fast Concierge Booking</h3>
                <p className="text-gray-300 text-sm mt-1">Concierge support to help plan fleets, events or corporate bookings.</p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiMapPin size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nationwide Network</h3>
                <p className="text-gray-300 text-sm mt-1">Pick-up or drop-off at major cities — flexible locations for your convenience.</p>
              </div>
            </div>
          </motion.article>

          <motion.article variants={card} whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(100,56,194,0.18)' }} className="bg-[rgba(255,255,255,0.03)] p-6 rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[rgba(100,56,194,0.12)]">
                <FiShield size={22} style={{ color: accent }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Sanitized & Inspected</h3>
                <p className="text-gray-300 text-sm mt-1">Every vehicle is cleaned, sanitized and safety-checked between bookings.</p>
              </div>
            </div>
          </motion.article>
      </motion.div>

        </motion.div>

      </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/6" />

        
      </div>
      </motion.div>
    </section>
  )
}
