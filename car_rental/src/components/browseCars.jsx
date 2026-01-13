"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// ---------- Sample data (replace with real API data) ----------
const CARS = [
  { id: 1, name: "Tesla Model S Plaid", price: "$249/day", seats: 5, transmission: "Automatic", img: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1" },
  { id: 2, name: "Porsche 911 Carrera", price: "$399/day", seats: 4, transmission: "Automatic", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2" },
  { id: 3, name: "Range Rover Velar", price: "$189/day", seats: 5, transmission: "Automatic", img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3" },
  { id: 4, name: "BMW M4", price: "$279/day", seats: 4, transmission: "Manual", img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4b?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4" },
];

// ---------- Motion variants ----------
const containerFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, duration: 0.5 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  hover: { scale: 1.03, boxShadow: "0 18px 40px rgba(13, 17, 23, 0.18)", transition: { duration: 0.22 } },
  tap: { scale: 0.98 },
};

function Stat({ children, label }) {
  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <div className="text-2xl">{children}</div>
      <div className="min-w-[6rem] text-slate-500">{label}</div>
    </div>
  );
}

export default function RentNGoBrowseCars() {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-4 py-10 sm:py-14"
    id="browseCar">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Browse — Cars</h2>
          <p className="mt-1 text-sm text-slate-500">Handpicked fleet. Smooth animations. Book in seconds.</p>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-4 py-2 rounded-2xl border border-slate-200 text-sm hover:bg-white/60 backdrop-blur-sm">Filters</button>
          <button className="px-4 py-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm shadow-lg">My Bookings</button>
        </div>
      </div>

      {/* Full-bleed immersive carousel container */}
      <div className="-mx-4 sm:-mx-8">
        <motion.div initial="hidden" animate="visible" variants={containerFade} className="px-4 sm:px-8">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            slidesPerView={1.05}
            spaceBetween={24}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 1.2 }, 1024: { slidesPerView: 1.6 }, 1400: { slidesPerView: 2.2 } }}
            effect="coverflow"
            coverflowEffect={{ rotate: 14, stretch: -40, depth: 240, modifier: 1 }}
            className="py-8"
          >
            {CARS.map((car, idx) => (
              <SwiperSlide key={car.id} className="py-6">
                <motion.article
                  className="relative rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-slate-100 mx-auto max-w-4xl"
                  variants={cardVariant}
                  whileHover="hover"
                  whileTap="tap"
                  layout
                >
                  {/* Image area */}
                  <div className="relative h-64 sm:h-72 lg:h-80">
                    <motion.img
                      src={car.img}
                      alt={car.name}
                      className="object-cover w-full h-full"
                      initial={{ scale: 1.02 }}
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.6 }}
                      draggable={false}
                    />

                    {/* Price tag */}
                    <motion.div
                      className="absolute top-4 left-4 
                      -full px-3 py-1 bg-white/95 text-sm font-semibold shadow"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.12 + idx * 0.04 } }}
                    >
                      {car.price}
                    </motion.div>

                    {/* Favorite button */}
                    <motion.button
                      aria-label={`Favorite ${car.name}`}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/95 shadow"
                      whileTap={{ scale: 0.92 }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, transition: { delay: 0.22 + idx * 0.03 } }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21s-7-4.35-9.33-6.62C1 11.95 3.2 8 6.5 8c1.96 0 3.06 1.2 3.5 1.8.44-.6 1.54-1.8 3.5-1.8 3.3 0 5.5 3.95 3.83 6.38C19 16.65 12 21 12 21z" stroke="#EF4444" strokeWidth="1" fill="#fff" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium">{car.name}</h3>
                        <p className="text-sm text-slate-500 mt-1">Premium — {car.transmission}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-400">Per day</p>
                        <p className="text-lg font-semibold">{car.price}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-4">
                        <Stat label={`${car.seats} seats`}>🚗</Stat>
                        <Stat label={car.transmission}>⚙️</Stat>
                      </div>

                      <div className="flex items-center gap-3">
                        <motion.button
                          className="px-4 py-2 rounded-lg bg-white/95 border border-slate-100 text-sm shadow-sm hover:translate-y-[-2px]"
                          whileTap={{ scale: 0.98 }}
                          onClick={() => alert(`Quick view: ${car.name}`)}
                        >
                          Quick View
                        </motion.button>

                        <motion.button
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg text-sm"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => alert(`Booked ✅ ${car.name}`)}
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Small grid of additional cars with scroll animations */}
      <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerFade}>
        {CARS.map((s) => (
          <motion.div key={s.id} variants={cardVariant} whileHover="hover" whileTap="tap" className="rounded-xl bg-white/60 border border-slate-100 overflow-hidden">
            <div className="flex gap-4 p-3 items-center">
              <img src={s.img} alt={s.name} className="w-28 h-20 object-cover rounded-md flex-shrink-0" draggable={false} />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{s.name}</h4>
                    <p className="text-xs text-slate-500 mt-1">{s.transmission} • {s.seats} seats</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400">Per day</div>
                    <div className="font-semibold">{s.price}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="text-xs px-3 py-1 rounded-full border">Details</button>
                  <button className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white">Rent</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Need help choosing?</h3>
          <p className="text-sm text-slate-500">Our concierge can recommend the perfect car for your trip.</p>
        </div>
        <div>
          <button className="px-5 py-3 rounded-2xl bg-black text-white font-semibold shadow-lg">Talk to Concierge</button>
        </div>
      </div>
    </section>
  );
}
