<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Hygienic Food',
			description:
				'Freshly prepared meals and snacks served in a clean and sanitized dining area.'
		},
		{
			title: 'Spacious Seating',
			description:
				'Large dining hall that accommodates hundreds of students comfortably at once.'
		},
		{
			title: 'Wide Menu',
			description:
				'A variety of healthy and tasty options available throughout the day for students and staff.'
		}
	];
</script>

<PremiumFacilitySection
	kicker="Restaurants & facilities"
	title="Cafeteria"
	intro="Our cafeteria provides nutritious and delicious meals in a welcoming space, perfect for breaks and social interaction."
	galleryImages={[
		'/Facilities-gallery/canteen.png',
		'/Facilities-gallery/canteen-1.png',
		'/Facilities-gallery/canteen-2.png',
		'/Facilities-gallery/canteen-3.png'
	]}
	imageAlt="Cafeteria"
	bgColor="#e67e22"
	actionText="Weekly Menu"
	actionLink="#"
	overlayText="Healthy & Fresh"
	{features}
/>
