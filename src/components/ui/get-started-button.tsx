import Link from "next/link";

export default function GetStartedButton() {
  return (
    <Link href="/login">
      <div className="py-2 text-center uppercase text-nowrap w-fit px-4 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg font-bold rounded-lg border-2 border-foreground bg-foreground text-background hover:border-foreground hover:scale-105 hover:bg-background hover:text-foreground transition">
        Get Started
      </div>
    </Link>
  )
}