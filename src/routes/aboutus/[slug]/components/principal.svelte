<script>
	import AboutShowcase from './AboutShowcase.svelte';

	const intro = [
		'It is with great pleasure that I welcome you to BITS Vizag, an institution dedicated to academic excellence, innovation, and holistic development. Our mission is to provide an empowering environment that shapes aspiring students into globally competent and socially responsible professionals.',
		'As we navigate a rapidly evolving technological landscape, our focus remains on delivering a robust, industry-aligned education, complemented by state-of-the-art infrastructure and a deeply committed faculty.'
	];

	const sections = [
		{
			heading: 'Academic Vision',
			text: 'We emphasize a strong foundation in core engineering principles, fostered through Outcome-Based Education, experiential learning, and interdisciplinary research. Our goal is to cultivate critical thinking, creativity, and a lifelong passion for learning.'
		},
		{
			heading: 'Student Empowerment',
			text: 'At BITS Vizag, we go beyond conventional academics. We focus on comprehensive skill development, ethical grounding, and leadership qualities, ensuring our graduates are well-equipped to tackle real-world challenges and contribute meaningfully to society.'
		}
	];
</script>

<AboutShowcase
	eyebrow="Leadership Message"
	title="Message From The Principal"
	{intro}
	{sections}
	imageSrc="/princepal.png"
	imageAlt="Portrait of Prof. B. Poorna Satyanarayana"
	personName="Prof. B. Poorna Satyanarayana"
	personMeta="M.Tech, Ph.D."
	personRole="Principal"
	imageFit="object-contain"
/>
