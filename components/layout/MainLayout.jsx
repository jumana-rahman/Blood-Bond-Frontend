"use client";

import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const hideLayoutRoutes = [
    "/dashboard",
    "/profile",
  ];

  const hideLayout =
    hideLayoutRoutes.some((route) =>
      pathname.startsWith(route)
    );

  return (
    <>
      {!hideLayout && <Navbar />}

      <main className="min-h-screen">
        {children}
      </main>

      {!hideLayout && <Footer />}
    </>
  );
}