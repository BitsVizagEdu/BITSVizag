<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Elite Multi-Sport Infrastructure',
			description:
				'Basketball hard courts, cricket ground, volleyball areas, indoor badminton, and table tennis support both practice and competition.'
		},
		{
			title: 'Performance-Driven Programs',
			description:
				'Structured mentoring and regular inter-collegiate events shape discipline, confidence, and high-level team performance.'
		},
		{
			title: 'Balanced Campus Lifestyle',
			description:
				'Physical fitness is integrated into campus culture to sustain focus, resilience, and all-round student development.'
		}
	];

	const galleryImages = [
		'/Facilities/s2.png',
		'/Facilities/s7.png',
		'/Facilities/s1.jpg',
		'/Facilities/s5.png',
		'/Facilities/s6.png'
	];
</script>

<PremiumFacilitySection
	title="Sports"
	intro="Built with a premium product mindset, BITS Vizag sports infrastructure combines high-quality training environments with a vibrant competitive culture."
	{features}
	{galleryImages}
/>
