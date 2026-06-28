"use client";

import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { useSession } from "@/lib/auth-client";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = useSession();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-gray-900 hover:opacity-90 transition-opacity"
          >
            <Image 
              src="/logo.png" // Change this to your actual logo path (e.g., /logo.svg or /logo.png)
              alt="BloodBond Logo"
              width={40}      // Adjust size as needed
              height={40}     // Adjust size as needed
              className="object-contain"
            />
            <span>
              Blood<span className="text-[#C62828]">Bond</span>
            </span>
          </Link>

          {/* Right Side Content (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Nav Links (Positioned BEFORE Auth) */}
            <nav className="flex items-center gap-6 font-medium text-sm text-gray-600">
              <NavLinks />
            </nav>

            {/* Vertical Separator */}
            <div className="h-5 w-px bg-gray-200" aria-hidden="true" />
            
            {/* Auth Block (Login/Register or User Profile) */}
            {!isPending && (
              session?.user ? (
                <UserMenu />
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-600 hover:text-[#C62828] transition-colors duration-200"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    className="px-4 py-2 text-sm font-semibold bg-[#C62828] hover:bg-[#b02222] text-white rounded-xl shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 active:scale-[0.98] transition-all duration-200"
                  >
                    Register
                  </Link>
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiXMark className="text-[#C62828]" /> : <HiBars3 />}
          </button>

        </div>
      </header>

      <MobileMenu
        open={open}
        session={session}
      />
    </>
  );
}