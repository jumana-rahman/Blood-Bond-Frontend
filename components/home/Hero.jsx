"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl text-white"
        >
          <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">
            #1 Fitness Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6">
            Build Your Dream Body With Professional Trainers
          </h1>

          <p className="mt-6 text-xl text-gray-200 leading-8">
            Discover premium fitness classes, certified trainers,
            personalized workout plans, and a vibrant fitness community—
            all in one modern platform.
          </p>

          <HeroButtons />

          <HeroStats />
        </motion.div>

      </div>
    </section>
  );
}