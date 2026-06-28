// app/forbidden/page.js   or   app/403/page.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldX, Home, LogIn, Droplets, AlertTriangle } from 'lucide-react';

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10"
        >
          <div className="relative inline-flex">
            <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center">
              <ShieldX className="w-28 h-28 text-[#C62828]" />
            </div>
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-red-200"
            >
              <AlertTriangle className="w-9 h-9 text-[#C62828]" />
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-8xl font-bold text-gray-900 tracking-tighter mb-2">401</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Access Forbidden</h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          You don&apos;t have permission to access this page. 
          This section is restricted for authorized personnel only.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-[#C62828] hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-lg shadow-red-200"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/login"
            className="flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-2xl font-medium transition-all"
          >
            <LogIn className="w-5 h-5" />
            Login
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500">
          <Droplets className="w-5 h-5" />
          <span className="text-sm">BloodBond • Every Drop Matters</span>
        </div>
      </div>
    </div>
  );
}