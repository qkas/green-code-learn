'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetStartedButton from '@/components/ui/get-started-button';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around px-6 py-4">
      <Link href="/">
        <div className="flex items-center group hover:scale-105">
          <Image
            src="/logo-light.png"
            alt="CodeGreen Logo Light"
            width={100}
            height={80}
            className="h-8 w-auto mr-2 dark:block hidden"
          />
          <Image
            src="/logo-dark.png"
            alt="CodeGreen Logo Dark"
            width={100}
            height={80}
            className="h-8 w-auto mr-2 dark:hidden block"
          />
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl rounded-lg transition">
            Codegreen
          </h1>
        </div>
      </Link>
      <GetStartedButton />
    </nav>
  );
}
