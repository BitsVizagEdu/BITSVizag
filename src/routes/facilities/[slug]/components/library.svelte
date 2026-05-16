<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const metrics = [
		{ label: 'Operating Window', value: '9:00 AM - 4:30 PM' },
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
	kicker="Library"
	title="Library"
	intro="A repository of knowledge, our library is stocked with a comprehensive collection of books, journals, and digital resources, providing the ideal environment for learning and research."
	galleryImages={[
		'/Facilities-gallery/library.png',
		'/Facilities-gallery/library-1.png',
		'/Facilities-gallery/library-2.png',
		'/Facilities-gallery/library-3.png'
	]}
	imageAlt="Library"
	bgColor="#10b981"
	overlayText="Ocean of Knowledge"
	{features}
	{metrics}
/>
