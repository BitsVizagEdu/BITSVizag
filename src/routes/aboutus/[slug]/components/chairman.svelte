<script>
	import AboutShowcase from './AboutShowcase.svelte';

	const intro = [
		'Founded in 2008, BITS was built on a simple but powerful belief: knowledge is the only asset that never diminishes. What began as a shared vision has grown into an institution where the trust of students and parents remains our most valued achievement.',
		'My leadership approach is guided by discipline, responsibility, and a people-first mindset that values dignity, well-being, and long-term institutional commitment.'
	];

	const sections = [
		{
			heading: 'Institutional Culture',
			text: 'Institutions do not grow through infrastructure alone. They grow through the people who build and sustain them. We remain focused on creating a secure, ethical, and motivated environment for faculty, staff, and students.'
		},
		{
			heading: 'Leadership Commitment',
			text: 'Our guiding principles are simple: walk the talk, embrace challenges, maintain transparency, and complete every responsibility with relentless effort. This commitment continues to shape young minds into capable and responsible citizens.'
		}
	];
</script>

<AboutShowcase
	eyebrow="Leadership Message"
	title="Message From The Secretary & Correspondent"
	{intro}
	{sections}
	imageSrc="/secmam copy.jpeg"
	imageAlt="Portrait of Dr. K. Srilakshmi"
	personName="Dr. K. Srilakshmi"
	personRole="Secretary & Correspondent"
/>
