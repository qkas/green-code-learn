'use client';

import Image from 'next/image';
import Link from 'next/link';
import GetStartedButton from '@/components/ui/get-started-button';
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from 'react';
import { Menu } from '@mui/icons-material';

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center justify-between lg:justify-around p-6">
      <Link href="/">
        <Image
          src="/logo-accent.png"
          alt="CodeGreen Logo Dark"
          width={100}
          height={80}
          className="hover:scale-105"
        />
      </Link>

      <div className="sm:hidden">
        {session ? (
          <>
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="text-xl focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute flex flex-col right-4 mt-2 font-bold text-base border-2 bg-background rounded-lg text-end p-4 z-50"
              >
                <Link href="/course" className="hover:underline text-accent transition w-full">
                  Course
                </Link>
                <Link href="/faq" className="hover:underline transition w-full">
                  FAQ
                </Link>
                <button
                  onClick={() => signOut()}
                  className="hover:underline transition w-full"
                >
                  Sign out
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4 font-bold text-base sm:text-lg lg:text-xl">
            <Link href="/faq" className="hover:underline transition">
              FAQ
            </Link>
            <GetStartedButton />
          </div>
        )}
      </div>

      <div className="hidden sm:flex sm:flex-row items-center gap-5 font-bold text-base sm:text-lg lg:text-xl">
        {session ? (
          <Link href="/course" className="hover:underline text-accent transition">
            Course
          </Link>
        ) : null}
        <Link href="/faq" className="hover:underline transition">
          FAQ
        </Link>
        {session ? (
          <button
            onClick={() => signOut()}
            className="hover:underline transition"
          >
            Sign out
          </button>
        ) : (
          <GetStartedButton />
        )}
      </div>
    </nav>
  );
}
