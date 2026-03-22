<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Hygiene-First Culinary Operations',
			description:
				'Production kitchens and storage workflows are managed with clean, consistent service standards throughout the day.'
		},
		{
			title: 'High-Capacity Dining Experience',
			description:
				'Spacious seating for 300+ students enables quick turnover during peak hours while keeping the environment relaxed and comfortable.'
		},
		{
			title: 'All-Day Premium Convenience',
			description:
				'From hot meals to evening snacks and beverages, the cafeteria supports daily campus rhythms with dependable quality.'
		}
	];
</script>

<PremiumFacilitySection
	title="Cafeteria"
	intro="Our cafeteria is built as a premium lifestyle zone, balancing nutrition, hygiene, speed, and comfort for a clean and modern campus dining experience."
	imageSrc="/cafe.jpg"
	imageAlt="Cafeteria"
	{features}
/>
