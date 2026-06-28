"use client";

import { ThemeProvider } from "next-themes";

import ToastProvider from "./ToastProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      

        <ToastProvider />

        {children}

      
    </ThemeProvider>
  );
}