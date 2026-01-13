"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DarkVeil from "../../../components/DarkVeil";
import { CARS } from "../../../data/cars";
import MyNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/ui/buttonNew";

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = CARS.find((c) => c.id === Number(id));

  if (!car) return <div className="text-white p-10">Car not found.</div>;

  return (
    <section>
      <div className="relative min-h-screen w-full text-white px-6 md:px-20 py-20 flex flex-col items-center justify-center">
        {/* Dark Veil Background */}
        <div className="absolute inset-0 -z-10">
          <DarkVeil />
        </div>

        <MyNavbar className="z-20" />

        {/* Header */}
        <div className="w-full flex items-center justify-between mt-6">
          <div className="flex-1">
            <Button action={"Go Back"} href="/Fleet" />
          </div>

          <h1 className="flex-1 text-5xl md:text-6xl font-bold tracking-tight text-center">
            {car.name}
          </h1>

          <div className="flex-1"></div>
        </div>

        {/* Image Slider */}
        <div className="w-full max-w-4xl mb-12 mt-8">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            navigation
            pagination={{ clickable: true }}
            mousewheel
            keyboard
            spaceBetween={30}
            slidesPerView={1}
            style={{ paddingBottom: "50px" }}
          >
            {[car.img, car.sideImg].map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-[400px] md:h-[500px] lg:h-[600px]">
                  <img
                    src={imgUrl}
                    alt={`${car.name} ${index === 0 ? "front" : "side"} view`}
                    className="object-cover max-h-full max-w-full rounded-lg shadow-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Specs */}
        <div className="text-center -mt-3">
          <h2 className="text-xl tracking-wider opacity-70">YEAR</h2>
          <p className="text-4xl font-semibold mb-10">{car.specs.year}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-lg opacity-90">
            <div>
              <p className="opacity-50">Power</p>
              <p>{car.specs.power}</p>
            </div>

            <div>
              <p className="opacity-50">Torque</p>
              <p>{car.specs.torque}</p>
            </div>

            <div>
              <p className="opacity-50">0-100 Km/h</p>
              <p>{car.specs.zeroTo100}</p>
            </div>

            <div>
              <p className="opacity-50">Top Speed</p>
              <p>{car.specs.topSpeed}</p>
            </div>

            <div>
              <p className="opacity-50">Weight</p>
              <p>{car.specs.weight}</p>
            </div>

            <div>
              <p className="opacity-50">Price</p>
              <p>{car.price}</p>
            </div>

            <div className="col-span-full mt-10">
              <Button action={"Book Now"} href="/LogIn" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
