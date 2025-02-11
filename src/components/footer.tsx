'use client';
import Link from "next/link";
import { Copyright } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between text-xs text-[--highlight] mt-20 p-8">
      <span><Copyright fontSize="inherit"/>2025 CodeGreen. All Rights Reserved</span>
      <div>
        <Link href="/" className="mx-5 hover:underline">Terms of Service</Link>
        <Link href="/" className="mx-5 hover:underline">Privacy</Link>
      </div>
    </footer>
  )
}