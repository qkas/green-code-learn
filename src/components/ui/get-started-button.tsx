"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function GetStartedButton() {
  const { data: session } = useSession();
  return (
    <Link href={session ? "/course" : "/login"}>
      <div className="py-2 text-center uppercase text-nowrap w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-[--accent] bg-[--accent] text-background hover:border-[--accent] hover:scale-105 hover:bg-background hover:text-[--accent] transition">
      {session ? "Start course" : "Sign up"}
      </div>
    </Link>
  )
}