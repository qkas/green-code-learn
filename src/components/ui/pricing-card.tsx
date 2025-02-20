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
    <Link
      href={link}
      className="p-5 gap-10 md:gap-5 flex flex-col justify-center text-center min-full w-full md:w-fit group rounded-lg border-2 border-foreground bg-background text-foreground hover:border-background hover:scale-105 hover:bg-foreground hover:text-background transition"
    >
      <div className="flex justify-between items-center gap-5">
        <h3 className="font-bold text-2xl">{title}</h3>
        <h3 className="text-xl">{price}</h3>
      </div>
      <ul className="list-none flex flex-col w-full">
        {features.map((feature, index) => (
          <li key={index} className="my-3 flex text-sm">
            <CheckCircle fontSize="small" />
            <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-auto py-2 w-[80%] mx-auto uppercase font-bold rounded-lg border-2 border-foreground bg-foreground text-background group-hover:border-foreground group-hover:bg-background group-hover:text-foreground hover:scale-105 transition">
        Get Started
      </button>
    </Link>
  );
}
