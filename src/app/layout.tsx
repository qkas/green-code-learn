import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SessionProvider from "@/auth/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoBit: The Green Engineering Certificate Platform For Responsible Developers",
  description: "Learn about sustainable code and engineering practices to keep your projects faster and the planet greener. Get certified with an official badge you can share with recruiters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <main className="min-h-screen flex flex-col">
            <nav>
              <Navbar />
            </nav>
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
