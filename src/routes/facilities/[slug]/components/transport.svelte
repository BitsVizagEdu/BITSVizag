<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'City-Wide Routes',
			description:
				'Our bus network covers all major areas, making it easy for students to commute from anywhere.'
		},
		{
			title: 'Safe Commute',
			description:
				'Trained drivers and regularly maintained vehicles ensure a safe journey to and from campus.'
		},
		{
			title: 'Reliable Timing',
			description:
				'Strict adherence to schedules ensures punctuality for both morning and evening trips.'
		}
	];
</script>

<PremiumFacilitySection
	title="Transport"
	intro="We provide reliable and comfortable transport services to ensure students reach campus safely and on time."
	imageSrc="/Transport.jpeg"
	imageAlt="Transport Buses"
	{features}
/>
