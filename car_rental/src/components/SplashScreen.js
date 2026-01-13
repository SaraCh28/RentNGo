"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function SplashScreen() {
  const [finished, setFinished] = useState(false);

  const STREAK_DELAY = 0.2;
  const STREAK_DURATION = 0.22;

  const CAR_DELAY = 0.2;
  const CAR_DURATION = 0.22;

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.01 }}   // 🔥 no delay anymore
          className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[9999]"
        >
          {/* Purple Speed Streak */}
          <motion.div
            initial={{ x: "-90%" }}
            animate={{ x: "90%" }}
            transition={{
              delay: STREAK_DELAY,
              duration: STREAK_DURATION,
              ease: "easeInOut",
            }}
            className="absolute w-[120%] h-2 top-1/2 bg-[#6438c2] blur-lg opacity-70"
          />

          {/* Car */}
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "120%" }}
            transition={{
              delay: CAR_DELAY,
              duration: CAR_DURATION,
              ease: "easeInOut",
              // onComplete: () => setFinished(true),   // 🔥 fade immediately when car finishes
            }}
            className="relative"
          >
            {/* Car glow */}
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0.7 }}
              transition={{
                delay: CAR_DELAY,
                duration: CAR_DURATION,
              }}
              className="absolute inset-x-0 -bottom-3 h-5 bg-white blur-2xl rounded-full"
            />

            <Image
              src="/logo2.png"
              alt="RentNGo Car"
              width={250}
              height={250}
              priority
            />
          </motion.div>

          {/* Brand Name */}
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: CAR_DELAY,
              duration: 0.25,
              ease: "easeOut",
            }}
            className="absolute bottom-[45%] text-white text-5xl right-[32%] font-bold"
          >
            RentN<span className="text-[#6438c2]">Go</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
