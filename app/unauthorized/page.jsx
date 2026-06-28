// app/403/page.js   or   components/Forbidden.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldX, Home, LogIn, Droplets } from 'lucide-react';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.7, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center border-8 border-white shadow-2xl">
              <ShieldX className="w-20 h-20 text-[#C62828]" />
            </div>
            <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-red-200">
              <Droplets className="w-8 h-8 text-[#C62828]" />
            </div>
          </div>
        </motion.div>

        {/* 403 Text */}
        <motion.h1 
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[120px] md:text-[150px] font-bold text-gray-900 leading-none tracking-tighter"
        >
          403
        </motion.h1>

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mt-2 mb-4">
          Access Denied
        </h2>

        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Sorry, you don&apos;t have permission to access this page. 
          This area is restricted to authorized users only.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[#C62828] hover:bg-red-700 text-white px-9 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg shadow-red-200"
            >
              <Home className="w-6 h-6" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className="inline-flex items-center gap-3 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-2xl font-medium text-lg transition-all"
            >
              <LogIn className="w-6 h-6" />
              Login Again
            </Link>
          </motion.div>
        </div>

        <div className="mt-16 text-gray-500 text-sm">
          If you believe this is a mistake, please contact support.
        </div>
      </div>
    </div>
  );
}