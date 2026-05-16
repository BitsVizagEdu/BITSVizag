<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Comfortable Rooms',
			description:
				'Well-ventilated and spacious rooms designed for a peaceful living and study experience.'
		},
		{
			title: 'Dining & Food',
			description:
				'Nutritious meals served daily in a clean, hygienic environment with a focus on student health.'
		},
		{
			title: 'Secure Living',
			description:
				'24/7 security and dedicated staff ensure a safe and supportive atmosphere for all residents.'
		}
	];
</script>

<PremiumFacilitySection
	kicker="Home Away From Home"
	title="Hostel & Accommodation"
	intro="Our campus residences offer a home away from home, balancing comfort and safety for a smooth student life experience."
	imageSrc="/hostel.jpg"
	imageAlt="Hostel"
	bgColor="#d35400"
	overlayText="Home Away From Home"
	{features}
/>
