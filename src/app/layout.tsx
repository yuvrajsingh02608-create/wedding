import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Poppins, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import MusicPlayer from "@/components/MusicPlayer";

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-accent",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashish & Partner | We're Getting Married!",
  description: "Join us in celebrating our love story. February 16, 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${playfair.variable} ${poppins.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScroll>
          <CustomCursor />
          <ParticleBackground />
          <MusicPlayer />
          <main className="relative z-0 min-h-screen overflow-x-hidden">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
