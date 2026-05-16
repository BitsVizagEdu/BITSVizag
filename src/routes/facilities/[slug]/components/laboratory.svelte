<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Computer Labs',
			description: 'Updated systems with modern software for coding, design, and simulation work.'
		},
		{
			title: 'Engineering Labs',
			description:
				'Specialized labs equipped with industry-standard tools for practical application of theory.'
		},
		{
			title: 'Practical Guidance',
			description:
				'Experienced faculty provide hands-on training to prepare students for real-world projects.'
		}
	];
</script>

<PremiumFacilitySection
	kicker="Practical Excellence"
	title="Laboratories"
	intro="Our well-equipped labs provide the perfect environment for students to gain practical skills and bridge the gap between theory and practice."
	galleryImages={['/cse4.jpg', '/cse5.jpg', '/eee1.jpg', '/lab4.jpg']}
	bgColor="#0056b3"
	overlayText="Precision & Innovation"
	{features}
/>
