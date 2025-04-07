import { CheckCircle } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export default function PricingCard({ title, price, features }: PricingCardProps) {
  const { data: session } = useSession();
  const isCurrent = title == "Pro";

  return (
    <div className="p-5 gap-10 md:gap-5 flex flex-col justify-center text-center min-full w-full md:w-fit rounded-lg border-2 border-foreground">
      <div className="flex justify-between items-center gap-5">
        <h3 className="font-bold text-2xl">{title}</h3>
        <h3 className="text-xl">{price}</h3>
      </div>
      <ul className="list-none flex flex-col md:w-fit md:mx-auto">
        {features.map((feature, index) => (
          <li key={index} className="my-3 flex md:w-fit text-sm">
            <CheckCircle className="text-highlight" fontSize="small" />
            <span className="mx-2">{feature}</span>
          </li>
        ))}
      </ul>
      {session ? (
        <div 
          className={`mt-auto py-2 w-full mx-auto uppercase font-bold rounded-lg text-background select-none ${
            isCurrent 
              ? 'bg-accent' : 'bg-foreground'
          }`}
        >
          {isCurrent ? 'Current' : 'Unavailable'}
        </div>
      ) : (
        <Link href="/login" className="mt-auto">
          <div className="py-2 w-full mx-auto uppercase font-bold rounded-lg border-2 border-foreground bg-foreground text-background hover:border-foreground hover:bg-background hover:text-foreground hover:scale-105 transition">
            Get Started
          </div>
        </Link>
      )}
    </div>
  );
}
