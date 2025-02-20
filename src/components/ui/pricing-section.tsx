import PricingCard from "@/components/ui/pricing-card";

export default function PricingSection() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Explore our pricing plans</h2>
			<h3 className="text-base sm:text-lg lg:text-xl mb-10 text-[--highlight]">All paid plans include a 3-day free trial</h3>
			<div className="flex flex-wrap justify-center mx-10 md:mx-0 gap-5">
				<PricingCard
					title="Trial"
					price="FREE"
					features={["Access to all modules"]}
				/>
				<PricingCard
					title="Pro"
					price="329.99€"
					features={[
						"Access to all modules",
						"Access to certification"
					]}
				/>
				<PricingCard
					title="Enterprise"
					price="1249.99€"
					features={[
						"Up to 20 premium accounts",
						"With access to all modules",
						"And access to certification"
					]}
				/>
			</div>
		</div>
	);
}
