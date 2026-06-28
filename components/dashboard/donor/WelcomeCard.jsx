"use client";

import { HeartHandshake } from "lucide-react";

export default function WelcomeCard({
  user,
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-500 p-8 text-white shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Welcome Back,
            <span className="ml-2">
              {user?.name}
            </span>
            👋
          </h1>

          <p className="mt-3 text-red-100">
            Thank you for being a lifesaver.
            Your blood donation can save
            someone's life today.
          </p>

        </div>

        <div className="hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-white/20">

          <HeartHandshake size={45} />

        </div>

      </div>

    </div>
  );
}