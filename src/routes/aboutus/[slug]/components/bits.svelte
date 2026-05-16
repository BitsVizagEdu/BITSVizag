<script>
	import AboutShowcase from './AboutShowcase.svelte';

	const intro = [
		'Baba Institute of Technology and Sciences (BITS), established in 2008, is an autonomous, NAAC-accredited institution approved by AICTE and affiliated with JNTU-GV. Located in Visakhapatnam, BITS is committed to delivering value-based technical education through strong academics, modern infrastructure, and industry-oriented learning.',
		'The institute focuses on developing competent professionals with strong ethical values, leadership qualities, and a sense of social responsibility.'
	];

	const sections = [
		{
			heading: 'Vision',
			text: 'To emerge as a leader in Engineering, Technology, Science, and Management education by transforming youth into dynamic professionals.'
		},
		{
			heading: 'Mission',
			bullets: [
				'Deliver quality, outcome-based technical education.',
				'Foster innovation, ethics, and professional competence.',
				'Strengthen industry-academia collaboration.',
				'Prepare students to be globally competitive and socially responsible.'
			]
		}
	];
</script>

<AboutShowcase
	eyebrow="About Institution"
	title="About Our College"
	{intro}
	{sections}
	imageSrc="/bitsvizag.png"
	imageAlt="BITS Vizag campus building"
	personName="BITS Vizag"
	personRole="Excellence in Technical Education"
/>
