'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around px-6 py-4 bg-transparent">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/leaves-light.png"
            alt="CodeGreen Logo"
            width={60}
            height={60}
          />
          <h1 className="text-3xl font-bold rounded-lg text-[var(--foreground)]">Codegreen</h1>
        </div>
      </Link>
      <Link href="/login">
        <button className="px-8 py-2 font-bold rounded-lg bg-[var(--foreground)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition">
          Get Started
        </button>
      </Link>
    </nav>
  );
}