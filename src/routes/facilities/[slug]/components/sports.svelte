<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Outdoor Grounds',
			description:
				'Spacious courts and fields for cricket, basketball, and volleyball practice and matches.'
		},
		{
			title: 'Indoor Sports',
			description:
				'Indoor facilities for badminton, table tennis, and other games to stay active year-round.'
		},
		{
			title: 'Fitness Culture',
			description:
				'Encouraging students to balance academics with physical health and teamwork.'
		}
	];

	const galleryImages = [
		'/gallery/DSC05556.JPG',
		'/events/T-10.jpg',
		'/Facilities/Champions-T10.jpg'
	];
</script>

<PremiumFacilitySection
	title="Sports"
	intro="We provide high-quality sports facilities to help students stay physically active, build teamwork, and maintain a balanced lifestyle."
	{features}
	{galleryImages}
/>
