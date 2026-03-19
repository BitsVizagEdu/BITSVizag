<script>
	import Seo from '$lib/components/Seo.svelte';
	import Mous from "./component/mous.svelte";

	import Companies from "./component/companies.svelte";
	import Pnews from "./component/pnews.svelte";
    import Statistics from "./component/statistics.svelte";
	import Startup from "./component/startup.svelte";
	import Pheader from "./component/pheader.svelte";
	import Coordinates from "./component/coordinates.svelte";
	import CoordinatesStudent from "./component/coordinates-student.svelte";

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Campus Placements & Jobmela at BITS Vizag',
		description: 'Explore campus placement opportunities, recruitment statistics, top recruiting companies, and job fair events at BITS Vizag.',
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
	title="Campus Placements & Jobmela | Top Recruiters at BITS Vizag"
	description="Discover campus placements, recruitment statistics, corporate connections, and Jobmela events at BITS Vizag. Connect with top recruiting companies."
	url="https://bitsvizag.com/placements"
	imageUrl="https://bitsvizag.com/logo-150-2/logo-150-2.png"
	siteName="BITS Vizag"
	{structuredData}
/>

<main class="cdc-page">
	<Pheader />
	<section class="cdc-section"><Mous /></section>
	<section class="cdc-section cdc-section-soft"><Coordinates /></section>
	<section class="cdc-section"><CoordinatesStudent /></section>
	<section class="cdc-section cdc-section-soft"><Companies /></section>
	<section class="cdc-section"><Statistics /></section>
	<section class="cdc-section cdc-section-soft"><Startup /></section>
	<section class="cdc-section"><Pnews /></section>
</main>

<style>
	.cdc-page {
		background:
			radial-gradient(circle at 12% 0%, rgba(37, 99, 235, 0.08), transparent 35%),
			linear-gradient(180deg, #f4f8ff 0%, #ffffff 28%, #f8fbff 100%);
	}

	.cdc-section {
		position: relative;
	}

	.cdc-section + .cdc-section {
		margin-top: clamp(0.2rem, 0.65vw, 0.9rem);
	}

	.cdc-section-soft::before {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(241, 245, 255, 0.64), rgba(248, 250, 255, 0));
		pointer-events: none;
	}
</style>
