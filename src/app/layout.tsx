import Satoshi from 'next/font/local'
import React from "react";
import "./globals.css";
import Navbar from "@/components/navbar";

const SatoshiFont = Satoshi({
    src: '/fonts/Satoshi-Variable.ttf',
    display: 'swap',
    variable: '--font-satoshi'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={SatoshiFont.variable}>
      <body
        className={"bg-white text-black font-sans"}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
