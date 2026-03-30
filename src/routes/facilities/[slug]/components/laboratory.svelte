<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Computer Labs',
			description:
				'Updated systems with modern software for coding, design, and simulation work.'
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
	title="Laboratories"
	intro="Our well-equipped labs provide the perfect environment for students to gain practical skills and bridge the gap between theory and practice."
	imageSrc="/lab.jpg"
	imageAlt="Laboratory"
	{features}
/>
