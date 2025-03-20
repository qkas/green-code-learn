import PricingSection from "@/components/ui/pricing-section";
import GetStartedButton from "@/components/ui/get-started-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-center mt-20 gap-20 items-center p-6">
      <div className="z-0 absolute bg-[url('/leaf.png')] top-20 w-full h-80 bg-contain bg-no-repeat bg-center pointer-events-none" />
      
      <h1 className="z-10 max-w-6xl text-3xl sm:text-5xl lg:text-6xl font-bold">
        EcoBit Green Code Certificate – Build <span className="text-[--highlight]">Sustainable</span> Software
      </h1>

      <p className="z-10 text-base sm:text-lg lg:text-2lg max-w-5xl">
        The EcoBit Green Code Certificate is a study program for developers, aiming to teach sustainable programming practices.
        From choosing the correct frameworks to optimizing code, this course will explain all you need to know about writing green code.
      </p>

      <PricingSection />

      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold">Sign up and learn green development today!</h2>
        <GetStartedButton />
      </div>
    </div>
  );
}
