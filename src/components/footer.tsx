'use client';
import Link from "next/link";
import { Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center text-center px-2 sm:px-10 justify-center sm:justify-between text-xs text-[--highlight] gap-4 mt-8 py-8 font-[family-name:var(--font-geist-sans)]">
      <span><Copyright fontSize="inherit"/>2025 CodeGreen. All Rights Reserved</span>
      <div className="flex justify-center text-center gap-4">
        <Link href="/" className="hover:underline">Terms of Service</Link>
        <Link href="/" className="hover:underline">Privacy</Link>
      </div>
    </footer>
  )
}