'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetStartedButton from '@/components/ui/get-started-button';
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-around px-6 py-4">
      <div className="flex items-center gap-10">
        <Link href="/">
          <div className="flex items-center gap-2 group hover:scale-105 transition">
            <Image
              src="/logo-light.png"
              alt="CodeGreen Logo Light"
              width={100}
              height={80}
              className="h-8 w-auto dark:block hidden"
            />
            <Image
              src="/logo-dark.png"
              alt="CodeGreen Logo Dark"
              width={100}
              height={80}
              className="h-8 w-auto dark:hidden block"
            />
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
              Codegreen
            </h1>
          </div>
        </Link>
        {session ? (
          <div className="courses-module hover:scale-105  transition">
            <Link href="/modules">
              <span className="text-gray-700 dark:text-gray-300 hover:text-[--highlight] transition">
                Course Modules
              </span>
            </Link>
          </div>
        ) : null}
        <div className="courses-module hover:scale-105  transition">
          <Link href="/faq">
            <span className="text-gray-700 dark:text-gray-300 hover:text-[--highlight] transition">
              FAQ
            </span>
          </Link>
        </div>
      </div>
      <GetStartedButton />
    </nav>
  );
}
