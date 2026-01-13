"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import DarkVeil from "@/components/DarkVeil";
import MyNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/ui/buttonNew";

export default function FleetPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("http://localhost:3001/cars"); // your API URL
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading cars...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      
      <div className="max-w-7xl mx-auto">
        <MyNavbar  className="z-10"/>

        <div className="relative text-white py-20 px-6">
                  <Button action={"Back"} href={"/"} className='-z-10' />

          <h1 className="text-center text-5xl font-semibold mb-16">
            Explore Our Fleet
          </h1>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Link href={`/cars/${car.id}`} key={car.id}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group
                    rounded-2xl overflow-hidden cursor-pointer
                    bg-gradient-to-b from-[#0f0f12] to-[#060606]
                    backdrop-blur-xl relative
                  "
                  style={{ boxShadow: "0 0 30px rgba(100, 56, 194, 0.10)" }}
                >
                  {/* IMAGE SECTION */}
                  <div className="relative h-56 w-full">
                    <img
                      src={car.imageUrl} // use API image
                      className="
                        absolute inset-0 w-full h-full object-cover
                        opacity-100 transition-opacity duration-300
                        group-hover:opacity-0
                      "
                    />

                    {/* SIDE IMAGE (optional, if you have it) */}
                    {car.sideImg && (
                      <img
                        src={car.sideImg}
                        className="
                          absolute inset-0 w-full h-full object-contain
                          opacity-0 transition-opacity duration-300
                          p-6 group-hover:opacity-100
                        "
                      />
                    )}

                    <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/90 to-transparent" />
                  </div>

                  {/* TEXT CONTENT */}
                  <div className="p-5">
                    <h2 className="text-xl font-medium">{car.brand} {car.model}</h2>
                    <p className="text-gray-400 mt-2 text-sm">
                      Price per day: {car.pricePerDay}
                    </p>

                    {car.specs && (
                      <div className="mt-5 flex items-center gap-4 text-xs opacity-60">
                        <span>{car.specs.power}</span>
                        <span>•</span>
                        <span>{car.specs.zeroTo100}</span>
                        <span>•</span>
                        <span>{car.specs.topSpeed}</span>
                      </div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                      className="mt-6 w-full py-2 text-center rounded-xl text-sm font-medium"
                      style={{ background: "#6438c2" }}
                    >
                      View Details
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
