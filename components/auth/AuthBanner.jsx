// components/RegisterLeftPanel.js
'use client';

import { motion } from 'framer-motion';
import { Droplets, Heart, Users, Award } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export default function AuthBanner() {
  return (
    <div className="hidden lg:flex bg-gradient-to-br from-[#C62828] via-red-700 to-red-800 flex-col justify-center p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl mb-10 border border-white/30"
        >
          <Droplets className="w-12 h-12 text-white" />
        </motion.div>

        {/* Main Heading with Typewriter */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tighter mb-6">
          <Typewriter
            words={[
              "Become a Hero",
              "Save Lives Today",
              "Join the Mission"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </h1>

        <p className="text-xl text-red-100 leading-relaxed mb-12">
          One donation can save up to <span className="font-semibold text-white">three lives</span>. 
          Your blood can bring hope to patients in critical need.
        </p>

        {/* Impact Stats */}
        <div className="grid grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-3">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">1248</div>
            <div className="text-red-200 text-sm">Donations This Month</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-3">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">87</div>
            <div className="text-red-200 text-sm">Lives Saved</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="flex justify-center mb-3">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">42</div>
            <div className="text-red-200 text-sm">Active Drives</div>
          </motion.div>
        </div>

        {/* Trust Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center gap-4 text-red-100"
        >
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-white/50 bg-white/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 rounded-2xl border-2 border-white/50 bg-white/20 flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-sm leading-tight">
            Trusted by thousands of donors <br />
            across Bangladesh
          </p>
        </motion.div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div
        animate={{ 
          rotate: [0, 12, -12, 0],
          y: [0, -15, 15, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-16 right-12 text-white/10 pointer-events-none"
      >
        <Heart className="w-52 h-52" />
      </motion.div>
    </div>
  );
}