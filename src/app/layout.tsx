import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codegreen: The Green Engineering Certificate Platform For Responsible Developers",
  description: "Learn about sustainable code and engineering practices to keep your projects faster and the planet greener.Get certified with an official badge you can share with recruiters.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icon-dark.ico',
        href: '/icon-dark.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icon-light.ico',
        href: '/icon-light.ico',
      },
    ],
  },
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
        <main>
          <nav>
            <Navbar />
          </nav>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
