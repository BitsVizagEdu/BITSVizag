<script>
	import PremiumFacilitySection from './PremiumFacilitySection.svelte';

	const features = [
		{
			title: 'Advanced Computing Bays',
			description:
				'High-performance systems and updated software stacks support design, coding, simulation, and project prototyping workflows.'
		},
		{
			title: 'Precision Lab Ecosystem',
			description:
				'Specialized discipline labs are maintained with calibrated instruments for accurate, repeatable, and production-grade learning outcomes.'
		},
		{
			title: 'Mentored Experimentation',
			description:
				'Experienced faculty and lab teams guide students through structured experimentation, safety standards, and technical troubleshooting.'
		}
	];
</script>

<PremiumFacilitySection
	title="Laboratories"
	intro="Our labs are designed with a premium product mindset, where infrastructure, mentorship, and modern tooling come together to create confident, industry-ready engineers."
	imageSrc="/lab.jpg"
	imageAlt="Laboratory"
	{features}
/>
