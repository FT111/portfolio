import React from "react";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";

import Satoshi from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const SatoshiFont = Satoshi({
  src: "/fonts/Satoshi-Variable.ttf",
  display: "swap",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${SatoshiFont.variable} scroll-smooth tracking-tighter sm:tracking-normal`}
    >
      <Analytics />
      <SpeedInsights />
      <body className={"bg-white text-black font-sans"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
