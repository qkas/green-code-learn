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
      <div className="p-5 flex flex-col items-center text-center group min-h-96 max-w-80 rounded-lg border-2 border-foreground bg-background text-foreground hover:border-background hover:scale-105 hover:bg-foreground hover:text-background transition">
        <div className="flex justify-around w-full items-center gap-x-4 my-5">
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
        <button className="mt-auto mb-5 py-2 w-full uppercase font-bold rounded-lg border-2 border-foreground bg-foreground text-background group-hover:border-foreground group-hover:bg-background group-hover:text-foreground hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </Link>
  );
}
