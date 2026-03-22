<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Comfort-Focused Residential Design',
			description:
				'Hostel spaces are planned for privacy, comfort, and routine, giving students a stable environment for high-performance study.'
		},
		{
			title: 'Integrated Dining & Recreation',
			description:
				'Attached mess blocks, modern kitchen operations, and social recreation spaces make residential life smooth and balanced.'
		},
		{
			title: 'Inclusive Accommodation Model',
			description:
				'Dedicated accommodation sections ensure a safe and supportive setup for students from Andhra Pradesh and across India.'
		}
	];
</script>

<PremiumFacilitySection
	title="Hostel & Accommodation"
	intro="A premium residential experience that blends comfort, safety, and student convenience so campus life feels organized, supportive, and future-ready."
	imageSrc="/hostel.jpg"
	imageAlt="Hostel"
	{features}
/>
