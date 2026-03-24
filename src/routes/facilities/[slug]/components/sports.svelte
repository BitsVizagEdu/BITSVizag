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
		
		'/gallery/DSC05556.JPG',
		'/gallery/g-05.jpg',
		'/events/T-10.jpg',
		'/events/Champions-T10.jpg',
		'/Facilities/womens-day-sports-event.jpg'
		
	];
</script>

<PremiumFacilitySection
	title="Sports"
	intro="Built with a premium product mindset, BITS Vizag sports infrastructure combines high-quality training environments with a vibrant competitive culture."
	{features}
	{galleryImages}
/>
