"use client";
import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="w-full bg-gradient-to-b from-[#1c1328] to-[#0f0b15] py-24 text-white">
      <div className="text-center mb-16">
        <p className="text-sm tracking-widest text-purple-300">
          Explore • Book • Drive
        </p>
        <h1 className="text-5xl font-semibold">
          How it <span className="text-purple-400">Works</span>
        </h1>
      </div>

      <div className="flex items-start justify-center gap-20 px-10 flex-wrap">

        {/* STEP 1 - EXPLORE */}
        <div className="flex flex-col items-center w-72 text-center hover:scale-105 transition-transform duration-300   ">
          <Image
            src="/howitworks/explore.svg"
            alt="Explore cars"
            width={400}
            height={400}
            className="mb-6"
          />
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              1
            </div>
            <h2 className="text-xl font-semibold tracking-wide">EXPLORE</h2>
          </div>
        </div>

        {/* STEP 2 - BOOK */}
        <div className="flex flex-col items-center w-72 text-center hover:scale-105 transition-transform duration-300">
          <Image
            src="/howitworks/book.svg"
            alt="Book a car"
            width={400}
            height={400}
            className="mb-6 object-cover"
          />
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              2
            </div>
            <h2 className="text-xl font-semibold tracking-wide">BOOK</h2>
          </div>
        </div>

        {/* STEP 3 - DRIVE */}
        <div className="flex flex-col items-center w-72 text-center hover:scale-105 transition-transform duration-300">
          <Image
            src="/howitworks/enjoy1.svg"
            alt="Drive your car"
            width={400}
            height={400}
            className="mb-6 object-cover"
          />
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-bold">
              3
            </div>
            <h2 className="text-xl font-semibold tracking-wide">DRIVE</h2>
          </div>
        </div>

      </div>
    </section>
  );
}
