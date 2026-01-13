"use client";
import { motion } from "framer-motion";
import { Buttons } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black text-black px-6 py-20"
    id="bookingPage">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-semibold">
          Book Your <span className="text-[#6438c2]">Luxury Ride</span>
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Choose your dates, location, and car — experience premium travel with RentNGo.
        </p>
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        
        {/* BOOKING FORM */}
        <Card className="bg-neutral-100 border border-neutral-1
        00">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-medium text-[#6438c2]">Booking Details</h2>

            {/* Pickup Location */}
            <div>
              <Label>Pickup Location</Label>
              <Input
                placeholder="e.g., Lahore Airport"
                className="bg-neutral-100 border-neutral-700 text-black"
              />
            </div>

            {/* Dropoff Location */}
            <div>
              <Label>Dropoff Location</Label>
              <Input
                placeholder="e.g., Gulberg"
                className="bg-neutral-1
                00 border-neutral-700 text-black"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Pickup Date</Label>
                <Input type="date" className="bg-neutral-1
                00 border-neutral-700 text-black" />
              </div>
              <div>
                <Label>Return Date</Label>
                <Input type="date" className="bg-neutral-1
                00 border-neutral-700 text-black" />
              </div>
            </div>

            {/* Car Type */}
            <div>
              <Label>Car Category</Label>
              <select className="w-full bg-neutral-1
              00 border border-neutral-700 rounded-md p-2 text-black">
                <option>Luxury Sedan</option>
                <option>Sport / Exotic</option>
                <option>Premium SUV</option>
                <option>Business Class</option>
              </select>
            </div>

            {/* CTA */}
            <Link href="/LogIn">
            <Buttons  className="w-full bg-[#6438c2] hover:bg-[#4f28a0] text-black text-md py-5">
              Proceed to Payment
            </Buttons>
            </Link>
          </CardContent>
        </Card>

        {/* CAR SUMMARY + ESTIMATE */}
        <div className="space-y-6">
          
          {/* SELECTED CAR (dynamic later) */}
          <Card className="bg-neutral-200 border border-neutral-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium text-[#6438c2] mb-4">Selected Car</h2>
              <div className="flex items-center gap-4">
                <div className="h-20 w-36 bg-neutral-1
                00 rounded-xl" />
                <div>
                  <p className="text-lg font-semibold">Mercedes S-Class</p>
                  <p className="text-gray-400 text-sm">Luxury Sedan • Automatic</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PRICE BOX */}
          <Card className="bg-neutral-200 border border-neutral-1
          00">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium text-[#6438c2] mb-4">Estimated Cost</h2>
              <div className="flex justify-between text-lg font-medium">
                <span>Daily Rate:</span>
                <span>PKR 32,000</span>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <span>7 Days:</span>
                <span>PKR 224,000</span>
              </div>

              <hr className="my-4 border-neutral-700" />

              <div className="flex justify-between text-2xl font-semibold text-[#6438c2]">
                <span>Total:</span>
                <span>PKR 224,000</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
}
