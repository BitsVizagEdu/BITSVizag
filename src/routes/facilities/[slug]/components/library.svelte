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
			title: 'Enterprise Discovery Layer',
			description:
				'Unified catalog search, digital discovery, and OPAC workflows deliver an intuitive learning experience for every learner.'
		},
		{
			title: 'Digital Learning Suite',
			description:
				'Premium digital library zones include journal access, NPTEL media resources, and focused stations for deep academic work.'
		},
		{
			title: 'High-Fidelity Circulation',
			description:
				'Barcode-enabled circulation and continuously updated bibliographic records maintain speed, reliability, and operational accuracy.'
		}
	];
</script>

<PremiumFacilitySection
	title="Knowledge Resource Center"
	intro="Designed like a premium knowledge product, the center blends intelligent indexing, seamless digital access, and focused physical spaces to support serious scholarship."
	imageSrc="/Library-1.webp"
	imageAlt="Knowledge Resource Center"
	{features}
	{metrics}
/>
