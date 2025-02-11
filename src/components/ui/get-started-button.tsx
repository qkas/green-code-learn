import Link from "next/link";

export default function GetStartedButton() {
    return (
        <Link href="/login">
            <button className="px-10 py-2 font-bold font-[family-name:var(--font-geist-mono)] rounded-lg bg-[var(--foreground)] text-[var(--background)] hover:border-[var(--foreground)] hover:scale-105 border-2 hover:bg-[var(--background)] hover:text-[var(--foreground)] transition">
                Get Started
            </button>
        </Link>
    )
}