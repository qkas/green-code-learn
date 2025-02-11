import PricingCard from "@/components/ui/pricing-card";

export default function PricingSection() {
	return (
		<div className="flex justify-center mt-10">
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
	);
}
