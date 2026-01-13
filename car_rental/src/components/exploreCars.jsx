"use client";

import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { CARS } from "../data/cars";
import Button from "./ui/buttonNew";
export default function BrowseCarsPage() {
  return (
    <section
      id="browseCarsPage"
     className="w-full min-h-screen relative bg-black text-white py-3 pb-8 pt-10 px-8">
     
      {/* PAGE TITLE */}
      <div className="max-w-7xl flex mx-auto  justify-between items-center text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className=""
      >
        Our Fleet
        
      </motion.h1>
      <p className="text-lg md:text-xl font-normal text-white/70">Discover the perfect car for your journey from our diverse selection.</p>
      <Button action={"View All Cars"} className="ml-4 text-lg md:text-xl font-normal text-purple-400 hover:text-purple-300 px-3 transition"
          href="/Fleet">
        </Button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-black py-10 gap-10 max-w-7xl mx-auto">
        {CARS.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-xl"
          >
            {/* IMAGE */}
            <motion.img
              src={car.img}
              alt={car.name}
              className="w-full h-72 object-cover bg-[#7e57c2b4] group-hover:scale-110 transition-all duration-700"
            />

            
            {/* TEXT */}
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold">{car.name}</h3>
              <p className="text-lg opacity-90">{car.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
