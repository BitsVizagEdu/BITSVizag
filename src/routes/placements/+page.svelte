<script>
	import Seo from '$lib/components/Seo.svelte';
	import NewCdc from './component/new-cdc.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Placements - BITS Vizag',
		description: 'Placement cell and statistics for Baba Institute of Technology and Sciences',
		url: 'https://bitsvizag.edu.in/placements',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://bitsvizag.edu.in/placements'
		},
		about: {
			'@type': 'EducationalOrganization',
			name: 'BITS Vizag',
			url: 'https://bitsvizag.edu.in'
		}
	};
</script>

<Seo
	title="Placements & Career Development | BITS Vizag"
	description="Explore campus placement records, top recruiting companies, highest CTC packages, and career guidance at BITS Vizag."
	url="https://bitsvizag.edu.in/placements"
	imageUrl="https://bitsvizag.edu.in/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<main>
	<NewCdc />
</main>
