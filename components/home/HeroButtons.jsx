"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <Link
        href="/classes"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
      >
        Explore Classes
      </Link>

      <Link
        href="/register"
        className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition"
      >
        Join Now
      </Link>
    </div>
  );
}