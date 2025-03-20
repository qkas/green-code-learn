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
      <div className="flex items-center justify-around px-6 py-4 gap-2">
      <Link href="/">
        <Image
          src="/logo-accent.png"
          alt="CodeGreen Logo Dark"
          width={100}
          height={80}
          className="hover:scale-105"
        />
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
