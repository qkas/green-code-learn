import PricingSection from "@/components/ui/pricing-section";
import GetStartedButton from "@/components/ui/get-started-button";

export default function Home() {
  return (
    <div className="flex flex-col text-center mt-20 gap-20 items-center p-6">

      <h1 className="max-w-6xl text-3xl sm:text-5xl lg:text-6xl font-bold">
        Green Code Certificate – Build <span className="text-[--highlight]">Sustainable</span> Software
      </h1>

      <p className="text-base sm:text-lg lg:text-2lg max-w-5xl">
        The Green Code Certificate is a study program for developers, aiming to teach sustainable programming practices.
        From choosing the correct frameworks to optimizing code, this course will explain all you need to know aboutwriting green code.
      </p>

      <PricingSection />

      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold">Sign up and learn green development today!</h2>
        <GetStartedButton />
      </div>
    </div>
  );
}
