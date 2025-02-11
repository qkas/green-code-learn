import Link from "next/link";
import { CheckCircle } from "@mui/icons-material";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  link?: string;
}

export default function PricingCard({ title, price, features, link = "/login" }: PricingCardProps) {
  return (
    <Link href={link}>
      <div className="px-10 flex flex-col items-center text-center group py-5 mx-5 min-h-96 font-[family-name:var(--font-geist-sans)] rounded-lg bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--background)] hover:scale-105 border-2 hover:bg-[var(--foreground)] hover:text-[var(--background)] transition">
        <div className="flex justify-between w-full items-center gap-x-4 my-5">
          <h3 className="font-bold text-2xl">{title}</h3>
          <h3 className="text-xl">{price}</h3>
        </div>
        <ul className="list-none flex-grow flex flex-col items-center w-full">
          {features.map((feature, index) => (
            <li key={index} className="my-3 flex items-center text-sm">
              <CheckCircle fontSize="small"/>
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-auto mb-5 py-2 w-full font-bold font-[family-name:var(--font-geist-mono)] rounded-lg bg-[var(--foreground)] text-[var(--background)] group-hover:border-[var(--foreground)] border-2 group-hover:bg-[var(--background)] group-hover:text-[var(--foreground)] hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </Link>
  );
}
