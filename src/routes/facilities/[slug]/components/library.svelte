<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const metrics = [
		{ label: 'Operating Window', value: '8:00 AM - 8:00 PM' },
		{ label: 'Reading Capacity', value: '150 Seats' },
		{ label: 'Total Volumes', value: '22,141+' },
		{ label: 'Title Catalog', value: '3,601+' },
		{ label: 'E-Journal Access', value: 'DELNET | J-GATE | NDLI' },
		{ label: 'Digital Collection', value: '6,254 E-Books' }
	];

	const features = [
		{
			title: 'Digital Resources',
			description:
				'Access thousands of e-books, journals, and digital databases through our unified search portal.'
		},
		{
			title: 'Study & Reading Zones',
			description:
				'Quiet, well-lit spaces designed for focused individual study and academic research.'
		},
		{
			title: 'Easy Borrowing',
			description:
				'A simple barcode system makes borrowing and returning books fast and hassle-free.'
		}
	];
</script>

<PremiumFacilitySection
	title="Knowledge Resource Center"
	intro="Our modern library provides a vast collection of physical and digital resources to support your academic journey and research needs."
	imageSrc="/Library-1.webp"
	imageAlt="Knowledge Resource Center"
	{features}
	{metrics}
/>
