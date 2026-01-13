"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const accent = "#6438c2"; 


const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Business Traveler',
    rating: 5,
    text: 'Absolutely amazing service! The car was spotless and the pickup process was incredibly smooth. Will definitely use RentRide again.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Tourist',
    rating: 5,
    text: 'Best car rental experience I\'ve ever had. Great prices, excellent vehicles, and the customer support was top-notch.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Weekend Explorer',
    rating: 5,
    text: 'I love how easy it is to book a car. The app is intuitive and the whole process takes just minutes. Highly recommend!',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Road Trip Enthusiast',
    rating: 5,
    text: 'Rented an SUV for a cross-country trip. Perfect condition, great mileage, and the 24/7 support gave us peace of mind.',
  },
];


  return (
    <section className="p-5 min-h-screen my-0 py-5  ">
      {/* Divider */}
      <div className="my-12 border-t border-[#6438c2]" />

      {/* Trust + Testimonials + CTA */}
      <div className="grid grid-cols-1 gap-10 items-start">
        {/* Left Section: Rating + Testimonials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Rating */}
          <div className="flex justify-center items-center w-[100vw] mb-4">
            <div
              className="rounded-full w-17 h-17 flex items-center mx-4 justify-center bg-[rgba(100,56,194,0.12)]"
              style={{ border: `2px solid ${accent}33` }}
            >
              <span
                className="text-3xl font-semibold"
                style={{ color: accent }}
              >
                4.8
              </span>
            </div>

            <div>
              <p className="text-gray-300 text-3xl px-2">
                Average rating on major platforms
              </p>
              <p className="text-white font-medium text-xl px-2">
                10,000+ rides • 2,500+ happy clients
              </p>
            </div>
          </div>

          {/* Testimonial Cards */}
          {/* Testimonial Cards */}
<div className="grid grid-cols-2 gap-3">
  {testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="bg-[rgba(255,255,255,0.02)] p-6 rounded-2xl border border-white"
    >
      <p className="italic text-gray-300">“{testimonial.text}”</p>
      <p className="mt-3 text-[#6438c2] font-medium">
        — {testimonial.name}, {testimonial.role}
      </p>
    </div>
  ))}
</div>

        </motion.div>

        {/* Corporate Offer Box
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-8 rounded-3xl bg-gradient-to-br from-[rgba(100,56,194,0.12)] to-[rgba(255,255,255,0.02)] border border-white/6"
        >
          <h3 className="text-2xl font-semibold">Exclusive Corporate Offer</h3>
          <p className="text-gray-300 mt-2">
            Custom billing, dedicated account manager, priority support and
            volume discounts for long-term contracts.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-block px-6 py-3 rounded-full bg-white text-black font-medium shadow"
            >
              Get a Quote
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#"
              className="inline-block px-6 py-3 rounded-full border border-white/10 text-white font-medium"
            >
              Contact Sales
            </motion.a>
          </div>
        </motion.div> */}
      </div>

      {/* Final CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-white/5 p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/6"
      >
        <div>
          <h4 className="text-xl font-semibold">
            Ready to experience premium rides?
          </h4>
          <p className="text-gray-300 mt-1">
            Secure your vehicle with a few clicks — luxury, comfort and safety
            included.
          </p>
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full bg-[#6438c2] hover:bg-[#451e98] border-[#451e98] border-2 text-white font-medium shadow-lg"
          >
            Book Now
          </motion.button>

         
        </div>
      </motion.div>
    </section>
  );
}
