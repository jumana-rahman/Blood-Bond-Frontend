// app/not-found.js  or  components/NotFound.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Blood Drop Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex justify-center"
        >
          <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center border-8 border-white shadow-xl">
            <Droplets className="w-20 h-20 text-[#C62828]" />
          </div>
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[140px] md:text-[180px] font-bold text-gray-900 leading-none tracking-tighter"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mt-2 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for seems to have gone to donate blood. 
            Don't worry, we can take you back home.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-[#C62828] hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg shadow-red-200"
            >
              <Home className="w-6 h-6" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-2xl font-medium text-lg transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
              Go Back
            </button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-sm text-gray-500 flex items-center justify-center gap-8">
          <div>Every drop counts ❤️</div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div>BloodBond</div>
        </div>
      </div>
    </div>
  );
}