<script>
	import Seo from '$lib/components/Seo.svelte';
	import NewCdc from './component/new-cdc.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Career Development Cell | Training & Placements at BITS Vizag',
		description: 'Career Development Cell providing training, placement support, and industry connections for BITS Vizag students.',
		url: 'https://bitsvizag.com/placements',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://bitsvizag.com/placements'
		},
		isPartOf: {
			'@type': 'EducationalOrganization',
			name: 'BITS Vizag',
			url: 'https://bitsvizag.com'
		}
	};
</script>

<Seo
	title="Career Development Cell | Training & Placements at BITS Vizag"
	description="Career Development Cell - Training, placements, recruitment statistics, and industry partnerships at BITS Vizag."
	url="https://bitsvizag.com/placements"
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<main>
	<NewCdc />
</main>
