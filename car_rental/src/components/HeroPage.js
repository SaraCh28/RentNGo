"use client";
import React from 'react'


import { motion } from "framer-motion";
import Link from "next/link";

function HeroPage() {
  return (
     <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* ---------- 1. Full‑screen car background ---------- */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/car-lambo.png')",
          filter: "brightness(0.35) contrast(1.2)",
        }}
      />

      {/* ---------- 2. Dark vignette + subtle gradient ---------- */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* ---------- 3. Navbar (tiny, right‑aligned) ---------- */}
      <nav className="relative z-20 flex justify-between items-center px-6 md:px-12 py-5 text-white">
        <button className="text-2xl font-light">☰</button>

        <div className="flex gap-4 text-xs tracking-widest">
          <Link href="#" className="hover:text-purple-300 transition">
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-1.5 border border-white/40 rounded-full hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* ---------- 4. Hero content (centered) ---------- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center">
        {/* Headline – metallic look */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-mori-extralight text-8xl md:text-9xl lg:text-[12rem] leading-none
                     bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent
                     drop-shadow-[0_0_80px_rgba(139,61,255,0.6)]"
          style={{ fontFamily: "'PP Mori', Inter, system-ui, sans-serif" }}
        >
          Rent. Ride. Repeat.
        </motion.h1>

        {/* Sub‑headline (optional) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-sm md:text-base tracking-widest text-gray-400"
        >
          Rent. Ride. Repeat.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#"
            className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-9 py-3.5 rounded-full
                       shadow-lg shadow-purple-600/40 transition"
          >
            Book Now
          </Link>
          <Link
            href="#cars"
            className="border border-gray-500 hover:bg-gray-200 hover:text-black text-white
                       font-medium px-9 py-3.5 rounded-full transition"
          >
            Explore Cars
          </Link>
        </motion.div>
      </div>

      {/* ---------- 5. Scroll hint (optional) ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-10"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}

export default HeroPage