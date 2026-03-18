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
<Pheader/>
<Mous/>
<Coordinates/>
<CoordinatesStudent/>
<Companies/>
<Statistics/>
<Startup/>
<Pnews/>
