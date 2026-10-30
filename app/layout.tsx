import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Wellstar Drilling – Borehole Specialists in Zimbabwe",
  description:
    "Wellstar Drilling provides professional borehole drilling, pump installation, and water solutions across Zimbabwe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
