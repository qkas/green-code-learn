'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetStartedButton from '@/components/ui/get-started-button';

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
          <h1 className="text-3xl pr-3 font-bold font-[family-name:var(--font-geist-sans)] rounded-lg text-[var(--foreground)] transition">
            Codegreen
          </h1>
          {/* underline effect */}
          <div className="absolute bottom-[4px] left-1 w-full h-[2px] bg-[var(--foreground)] scale-x-0 origin-center transition-transform duration-75 ease-in-out group-hover:scale-x-100"></div>
        </div>
      </Link>
      <GetStartedButton/>
    </nav>
  );
}