<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Wide-Coverage Route Network',
			description:
				'Campus transport serves major city corridors including Steel Plant, Gajuwaka, NAD, Pendurthy, Maddilapalem, and nearby hubs.'
		},
		{
			title: 'Reliable Daily Commute System',
			description:
				'Dedicated buses support timely pickup and drop cycles for students and faculty with predictable travel experience.'
		},
		{
			title: 'Managed Fleet Operations',
			description:
				'Each vehicle runs with assigned in-charge oversight, transparent annual fee structure, and route-level accountability.'
		}
	];
</script>

<PremiumFacilitySection
	title="Transport"
	intro="A premium mobility layer for campus life, engineered to keep every day punctual, safe, and stress-free for students and faculty."
	imageSrc="/Transport.jpeg"
	imageAlt="Transport Buses"
	{features}
/>
