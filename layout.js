import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";
import NativeAd from "@/components/NativeAd";

// 🔤 ফন্ট সেটআপ
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 📝 ওয়েবসাইটের মেটাডাটা
export const metadata = {
  title: "CineTrail — Watch All Movies & Natok Online",
  description: "CineTrail is your ultimate database for information on the latest movies, trending Natok, series, trailers, and premium fast links to watch them.",
  keywords: ["Bangla Movie", "New Natok", "Hindi Movies", "CineTrail", "Movie Streaming"],
  openGraph: {
    title: "CineTrail — Watch All Movies & Natok Online",
    description: "Stream latest Bangla movies, trending Natok, and Hindi movies online with fast links.",
    url: "https://cinetraill.vercel.app",
    siteName: "CineTrail",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CineTrail — Movies & Natok",
    description: "Stream latest movies and series online.",
  },
};
<meta name="google-site-verification" content="Bphbn73cAjkp2gAhcy68LPHkNEBX9odquQ4jRBgZzSY" />
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-black text-white" suppressHydrationWarning>

        {/* 🟢 গ্লোবাল নেভবার */}
        <Navbar />

        {/* 📄 আপনার মেইন পেজের কনটেন্ট */}
        <main className="flex-grow">
          {children}
        </main>

        {/* 💰 ১. পপআন্ডার অ্যাড স্ক্রিপ্ট */}
        <Script
          src="https://pl24899639.effectivecpmnetwork.com/54/c8/ac/54c8acb95996703a6877cc116d4acbff.js"
          strategy="afterInteractive"
          id="adsterra-popunder"
        />

        {/* 💰 ২. নতুন সোশ্যাল বার অ্যাড স্ক্রিপ্ট */}
        <Script
          src="https://pl24899734.effectivecpmnetwork.com/b7/8f/a1/b78fa138240d07bfbc62c99b79645ea6.js"
          strategy="afterInteractive"
          id="adsterra-social-bar"
        />

      </body>
    </html>
  );
}