<script>
	import AboutShowcase from './AboutShowcase.svelte';

	const intro = [
		'Dr. B.R. Ambedkar Welfare Educational Society (ABWES) is a non-profit organization dedicated to promoting social justice through education. Guided by the ideals of Dr. B.R. Ambedkar, the trust views education as the most powerful tool for empowerment and inclusive development.',
		'In alignment with this vision, ABWES collaborates with BITS Vizag to strengthen access to quality higher education for students from diverse and underrepresented backgrounds.'
	];

	const sections = [
		{
			heading: 'Strategic Support',
			text: 'Through this collaboration, ABWES has supported infrastructure development, scholarships, and academic enhancement at BITS Vizag. These efforts improve learning facilities, promote merit, and expand opportunities for deserving students.'
		},
		{
			heading: 'Shared Mission',
			text: 'The partnership reflects a shared commitment to academic excellence, ethical growth, social responsibility, and nation-building. It continues to create skilled, confident, and socially responsible professionals while honoring Dr. B.R. Ambedkar\'s enduring legacy.'
		}
	];
</script>

<AboutShowcase
	eyebrow="About Institution"
	title="About Our Trust"
	{intro}
	{sections}
	imageSrc="/header/trust1.png"
	imageAlt="Dr. B.R. Ambedkar Welfare Educational Society"
	personName="Dr. B.R. Ambedkar Welfare Educational Society"
	personMeta="ABWES"
	personRole="Trust"
/>
