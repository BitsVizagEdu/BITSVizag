<script>
	import AboutShowcase from './AboutShowcase.svelte';

	const intro = [
		'It is my pleasure to welcome you to BITS Vizag, an institution driven by a clear vision: to evolve into a premier technical institute offering value-based education that nurtures competent and socially responsible technologists for a changing world.',
		'Since its inception, BITS Vizag has steadily evolved through a strong integration of state-of-the-art infrastructure and dedicated human resources.'
	];

	const sections = [
		{
			heading: 'Academic Focus',
			text: 'We are committed to delivering professional education with creativity, innovation, and ethical values. Our dynamic academic environment supports knowledge creation, responsible application, and societal development through Outcome-Based Education and experiential learning.'
		},
		{
			heading: 'Student Transformation',
			text: 'At BITS Vizag, we shape students into skilled engineers and responsible citizens. Our holistic approach ensures every graduate is equipped with technical excellence, practical capability, and strong ethical grounding.'
		}
	];
</script>

<AboutShowcase
	eyebrow="Leadership Message"
	title="Message From The Principal"
	{intro}
	{sections}
	imageSrc="/principal copy.jpg"
	imageAlt="Portrait of Dr. M. Rajan Babu"
	personName="Dr. M. Rajan Babu"
	personMeta="M.Tech, Ph.D."
	personRole="Principal"
/>
