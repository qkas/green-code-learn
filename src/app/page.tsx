import PricingSection from "@/components/ui/pricing-section";
import GetStartedButton from "@/components/ui/get-started-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[--background] flex flex-col items-center mt-20 p-6">
      <main className="max-w-6xl text-center">

        <h1 className="text-6xl font-bold text-[--foreground] mb-20">
          Green Code Certificate – Build <span className="text-[--highlight]">Sustainable</span> Software
        </h1>

        <p className="text-lg text-[--foreground] mb-6 font-[family-name:var(--font-geist-sans)]">
          The Green Code Certificate is a study program for developers, aiming to teach sustainable programming practices.
          From choosing the correct frameworks to optimizing code, this course will explain all you need to know aboutwriting green code.
        </p>

        <h2 className="text-4xl font-bold mt-20 mb-2 text-[--foreground]">Explore our pricing plans</h2>
        <h3 className="text-5md font-bold mb-5 text-[--highlight]">All paid plans include a 3-day free trial</h3>
        <PricingSection/>

        <h2 className="text-2xl font-bold mt-20 mb-10 text-[--foreground]">Sign up and start your green development path today!</h2>
        <GetStartedButton />
      </main>
    </div>
  );
}
