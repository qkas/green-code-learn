'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetStartedButton from '@/components/ui/get-started-button';
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-around px-6 py-4 gap-5">
      <Link href="/">
        <Image
          src="/logo-accent.png"
          alt="CodeGreen Logo Dark"
          width={100}
          height={80}
          className="hover:scale-105"
        />
      </Link>
      <div className='flex items-center gap-5 font-bold'>
        <div className='flex flex-col sm:flex-row sm:gap-5 items-center text-sm sm:text-base lg:text-lg'>
          {session ? (
            <Link href="/course" className='hover:underline transition'>
              Course
            </Link>
          ) : null}
          <Link href="/faq" className='hover:underline transition'>
            FAQ
          </Link>
        </div>
        <GetStartedButton />
      </div>
    </nav>
  );
}
