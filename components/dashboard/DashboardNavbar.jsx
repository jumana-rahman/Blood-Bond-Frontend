"use client";

import { Menu, Bell } from "lucide-react";



export default function DashboardNavbar({
  setOpen,
}) {
  

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b flex items-center justify-between px-6">

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu />
      </button>

      <h2 className="font-bold text-lg">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <button>
          <Bell />
        </button>

        <div className="flex items-center gap-2">

          <img
            src={
              
              "https://i.pravatar.cc/150"
            }
            alt="user"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <p className="font-medium">
              {"H"}
            </p>

            <p className="text-xs text-gray-500">
              {"L"}
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}