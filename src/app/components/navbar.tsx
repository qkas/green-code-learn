'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around px-6 py-4 bg-transparent">
      <Link href="/">
        <div className="relative flex items-center group hover:scale-105">
          <Image
            src="/leaves-light.png"
            alt="CodeGreen Logo"
            width={60}
            height={60}
          />
          <h1 className="text-3xl pr-3 font-bold rounded-lg text-[var(--foreground)] transition">
            Codegreen
          </h1>
          {/* underline effect */}
          <div className="absolute bottom-[4px] left-1 w-full h-[2px] bg-[var(--foreground)] scale-x-0 origin-center transition-transform duration-75 ease-in-out group-hover:scale-x-100"></div>
        </div>
      </Link>
      <Link href="/login">
        <button className="px-10 py-2 font-bold rounded-lg bg-[var(--foreground)] text-[var(--background)] hover:border-[var(--foreground)] hover:scale-105 border-2 hover:bg-[var(--background)] hover:text-[var(--foreground)] transition">
          Get Started
        </button>
      </Link>
    </nav>
  );
}