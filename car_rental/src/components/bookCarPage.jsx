"use client";
import React from "react";
import { FiMapPin, FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import Button from "./ui/buttonNew";
import { Link } from "lucide-react";

export default function BookCarPage() {
  return (
    <div 
    id="bookCarPage" 
    className="w-full max-h-screen flex items-center justify-center bg-gradient-to-br from-[#3b245e] to-[#000000] overflow-hidden px-6 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2  items-center">
        
        {/* LEFT SECTION */}
        <div className="text-white width-[400px] px-5">
          <h3 className="text-lg opacity-80 mb-2">Book your</h3>
          <h1 className="text-5xl font-bold text-purple-300 mb-10">Rental Car</h1>

          {/* FORM CONTAINER */}
          <div className="space-y-7">
            
            {/* LOCATION */}
            <div>
              <label className="text-sm opacity-80 flex items-center gap-2 mb-1">
                <FiMapPin /> Pickup Location
              </label>
              <input
                type="text"
                placeholder="Select a Pickup Address"
                className="w-full bg-transparent border-b border-gray-500 py-2 outline-none text-sm placeholder-gray-400"
              />
            </div>

            {/* DATES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div>
                <label className="text-sm opacity-80 flex items-center gap-2 mb-1">
                  <FiCalendar /> Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-gray-500 py-2 outline-none text-sm"
                />
              </div>

              <div>
                <label className="text-sm opacity-80 flex items-center gap-2 mb-1">
                  <FiCalendar /> Dropoff Date
                </label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-gray-500 py-2 outline-none text-sm"
                />
              </div>

            </div>

            {/* TIMES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div>
                <label className="text-sm opacity-80 flex items-center gap-2 mb-1">
                  <FiClock /> Pickup Time
                </label>
                <input
                  type="time"
                  className="w-full bg-transparent border-b border-gray-500 py-2 outline-none text-sm"
                />
              </div>

              <div>
                <label className="text-sm opacity-80 flex items-center gap-2 mb-1">
                  <FiClock /> Dropoff Time
                </label>
                <input
                  type="time"
                  className="w-full bg-transparent border-b border-gray-500 py-2 outline-none text-sm"
                />
              </div>

            </div>

            {/* SEARCH BUTTON */}
            <Button action="Choose Car" href="/Fleet" />


          </div>
        </div>

        {/* RIGHT SECTION — CAR IMAGE */}
        <div className="flex items-center justify-center w-[700px] ml-[-50px]   ">
          <img
            src="/bg2.png" 
            alt="Car"
            className="w-[1000px] z-[0] drop-shadow-2xl drop-shadow-[#252525] h-100% object-contain"
          />
        </div>

      </div>
    </div>
  );
}
