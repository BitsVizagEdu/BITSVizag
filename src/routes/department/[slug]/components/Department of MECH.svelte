<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{ id: 'about', label: 'About', color: '#059669' },
		{ id: 'vision', label: 'Vision', color: '#10b981' },
		{ id: 'labs', label: 'Labs', color: '#0d9488' },
		{ id: 'faculty', label: 'Faculty', color: '#065f46' },
		{ id: 'hod', label: 'HOD', color: '#064e3b' },
		{ id: 'contact', label: 'Contact', color: '#047857' }
	];

	const intake = [
		{ key: 'B.Tech', value: '60', color: '#059669' },
		{ key: 'M.Tech', value: '18', color: '#065f46' }
	];

	const facultyRows = [
		{ name: 'Dr. A. S. Bhanu Prasanna', role: 'HOD & Assoc. Prof', exp: '19Y', qual: 'Ph.D', mobile: '8008633321' },
		{ name: 'Dr. Fathimunnisa Begum', role: 'Associate Professor', exp: '18Y', qual: 'Ph.D', mobile: '6301685115' },
		{ name: 'Dr. P. Uma Chaithanya', role: 'Associate Professor', exp: '16Y', qual: 'Ph.D', mobile: '9817049898' },
		{ name: 'Mr. Vikas Ranjan', role: 'Sr. Assistant Prof', exp: '11Y', qual: 'Ph.D', mobile: '9391339296' },
		{ name: 'Mr. H. Satyanarayana', role: 'Sr. Assistant Prof', exp: '14Y', qual: 'M.Tech', mobile: '9491626873' },
		{ name: 'Mr. Reddy Ramesh', role: 'Assistant Professor', exp: '5Y', qual: 'M.Tech', mobile: '8500652035' },
		{ name: 'Mr. V. Preetham Kumar', role: 'Assistant Professor', exp: '1Y', qual: 'M.Tech', mobile: '9701161391' }
	];

	const labCategories = [
		{ name: 'Design & Simulation', color: '#059669', labs: ['CAD Lab', 'Simulation Lab', 'FEA Lab'], desc: 'Digital twinning ecosystem.' },
		{ name: 'Thermal & Fluid', color: '#10b981', labs: ['Thermal Lab', 'Heat Transfer', 'Fluid Mech'], desc: 'Energy research hub.' },
		{ name: 'Manufacturing', color: '#0d9488', labs: ['Workshop', 'Production Tech', 'Metallurgy'], desc: 'Precision machining.' }
	];

	let mounted = false;
	let currentImg = 0;
	const deptImages = ['/mech.jpg', '/mech1.jpg', '/mech2.jpg'];

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
	}

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => { currentImg = (currentImg + 1) % deptImages.length; }, 4000);
		return () => clearInterval(interval);
	});
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@400;600;700&family=Satoshi:wght@700;900&display=swap" rel="stylesheet" />
</svelte:head>

<div class="mech-refined-root" class:mounted>
	<!-- Compact Hero -->
	<header class="hero-neat">
		<div class="hero-overlay"></div>
		<div class="hero-content" in:fly={{ y: 20, duration: 800 }}>
			<div class="tag inter">MECH DEPARTMENT</div>
			<h1 class="satoshi">Mechanical Engineering</h1>
			<div class="pills inter">
				{#each intake as item}
					<span class="pill">{item.key}: {item.value} Seats</span>
				{/each}
			</div>
		</div>
	</header>

	<div class="layout-neat">
		<main class="content-stream-neat">
			<!-- About -->
			<section id="about" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">About MECH</h2>
					<div class="line mx-auto" style="background: #059669"></div>
				</div>
				<div class="about-grid-neat">
					<div class="info text-center lg:text-left">
						<p class="inter bold">Precision. Power. Innovation.</p>
						<p class="inter detail">Established in 2008, the Department of Mechanical Engineering at BITS Vizag blends core mechanics with advanced automation to shape the future of industrial design.</p>
					</div>
					<div class="visual">
						<div class="frame">
							<img src={deptImages[currentImg]} alt="Mech Center" in:fade />
						</div>
					</div>
				</div>
			</section>

			<!-- Labs -->
			<section id="labs" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">Facilities</h2>
					<div class="line mx-auto" style="background: #0d9488"></div>
				</div>
				<div class="labs-grid-neat">
					{#each labCategories as cat}
						<div class="lab-card-neat">
							<h3 class="outfit" style="color: {cat.color}">{cat.name}</h3>
							<div class="tag-row inter">
								{#each cat.labs as lab}
									<span>{lab}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Faculty: Neat Numbers -->
			<section id="faculty" class="block-neat">
				<div class="block-head text-center">
					<h2 class="outfit">Faculty Profile</h2>
					<div class="line mx-auto" style="background: #065f46"></div>
				</div>
				<div class="table-wrap-neat">
					<table class="table-neat inter">
						<thead>
							<tr>
								<th>Name</th>
								<th>Role</th>
								<th class="hidden-xs">Exp</th>
								<th>Contact</th>
							</tr>
						</thead>
						<tbody>
							{#each facultyRows as f}
								<tr>
									<td class="font-600">{f.name}</td>
									<td class="role-cell">{f.role}</td>
									<td class="hidden-xs">{f.exp}</td>
									<td>
										<a href="tel:{f.mobile}" class="tel-link">
											<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
											{f.mobile}
										</a>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>

			<!-- HOD: Premium Colored Neat UI -->
			<section id="hod" class="block-neat">
				<div class="hod-premium-box">
					<div class="hod-image">
						<img src="/mec hod.jpg" alt="HOD" />
					</div>
					<div class="hod-info-neat">
						<span class="hod-label satoshi">HOD MESSAGE</span>
						<h2 class="outfit">Dr. A. S. Bhanu Prasanna</h2>
						<p class="inter message">“We empower our students to bridge the gap between theoretical mechanics and real-world industrial applications through innovation and ethics.”</p>
						<div class="hod-accent"></div>
					</div>
				</div>
			</section>

			<!-- Contact: Simple & Minimal -->
			<section id="contact" class="block-neat contact-minimal">
				<div class="text-center">
					<h2 class="outfit">Get in Touch</h2>
					<div class="line mx-auto" style="background: #047857"></div>
					<p class="inter minimal-p">Have questions about our Mechanical department? Reach out to us.</p>
					<div class="contact-links inter">
						<a href="mailto:hod.mech@bitsvizag.com">hod.mech@bitsvizag.com</a>
						<span class="sep">|</span>
						<a href="/admissions">Admissions 2026</a>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style>
	.mech-refined-root {
		background: #fff;
		color: #334155;
		opacity: 0;
		transition: opacity 1s ease;
	}
	.mech-refined-root.mounted { opacity: 1; }

	/* Hero */
	.hero-neat {
		height: 30vh;
		min-height: 250px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background: #000;
		overflow: hidden;
		text-align: center;
		background-image: url('/mech.jpg');
		background-size: cover;
		background-position: center;
	}
	.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(6,78,59,0.8)); }
	.hero-content { position: relative; z-index: 10; padding: 0 20px; }
	.tag { font-size: 0.7rem; font-weight: 800; letter-spacing: 0.3em; color: #34d399; margin-bottom: 0.8rem; }
	.hero-content h1 { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin-bottom: 1rem; }
	.pills { display: flex; gap: 8px; justify-content: center; }
	.pill { padding: 4px 12px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 99px; color: #fff; font-size: 0.75rem; font-weight: 500; }

	/* Layout */
	.layout-neat { max-width: 900px; margin: 0 auto; padding: 60px 24px; }
	.content-stream-neat { display: flex; flex-direction: column; gap: 60px; }

	/* Block Headers */
	.block-head h2 { font-size: 1.6rem; font-weight: 700; color: #111; margin-bottom: 6px; }
	.line { width: 30px; height: 3px; border-radius: 2px; }

	/* About */
	.about-grid-neat { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-top: 30px; }
	.bold { font-size: 1.1rem; font-weight: 600; color: #059669; margin-bottom: 10px; }
	.detail { font-size: 0.9rem; color: #64748b; line-height: 1.7; }
	.frame { border-radius: 16px; overflow: hidden; aspect-ratio: 16/10; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
	.frame img { width: 100%; height: 100%; object-fit: cover; }

	/* Labs */
	.labs-grid-neat { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-top: 30px; }
	.lab-card-neat { background: #fff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 16px; }
	.lab-card-neat h3 { font-size: 1rem; font-weight: 700; margin-bottom: 12px; }
	.tag-row { display: flex; flex-wrap: wrap; gap: 6px; }
	.tag-row span { background: #f8fafc; padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; color: #64748b; border: 1px solid #f1f5f9; }

	/* Faculty Table */
	.table-wrap-neat { overflow-x: auto; border-radius: 12px; border: 1px solid #f1f5f9; margin-top: 30px; }
	.table-neat { width: 100%; border-collapse: collapse; text-align: left; }
	.table-neat th { padding: 14px 18px; background: #f8fafc; color: #94a3b8; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; }
	.table-neat td { padding: 14px 18px; border-top: 1px solid #f1f5f9; font-size: 0.8rem; }
	.role-cell { color: #64748b; font-size: 0.75rem; }
	.tel-link { display: inline-flex; align-items: center; gap: 6px; color: #059669; font-weight: 600; text-decoration: none; }

	/* HOD Premium UI */
	.hod-premium-box { 
		display: grid; 
		grid-template-columns: 200px 1fr; 
		gap: 0; 
		background: linear-gradient(135deg, #064e3b 0%, #065f46 100%); 
		border-radius: 24px; 
		overflow: hidden; 
		color: #fff; 
		margin-top: 30px;
		box-shadow: 0 20px 40px rgba(6, 78, 59, 0.15);
	}
	.hod-image { aspect-ratio: 1; overflow: hidden; }
	.hod-image img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); }
	.hod-info-neat { padding: 30px; display: flex; flex-direction: column; justify-content: center; position: relative; }
	.hod-label { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.2em; color: #34d399; margin-bottom: 0.5rem; }
	.hod-info-neat h2 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; color: #fff; }
	.message { font-size: 1rem; font-style: italic; line-height: 1.6; color: #d1fae5; opacity: 0.9; }
	.hod-accent { position: absolute; right: -20px; bottom: -20px; width: 100px; height: 100px; background: #34d399; opacity: 0.05; border-radius: 50%; }

	/* Contact Minimal */
	.contact-minimal { padding-bottom: 60px; }
	.minimal-p { font-size: 0.85rem; color: #64748b; margin: 15px 0; }
	.contact-links { display: flex; gap: 15px; justify-content: center; font-size: 0.9rem; font-weight: 600; }
	.contact-links a { color: #059669; text-decoration: none; }
	.sep { color: #e2e8f0; }

	/* Responsive */
	@media (max-width: 768px) {
		.hero-neat { height: 25vh; }
		.about-grid-neat { grid-template-columns: 1fr; text-align: center; }
		.hod-premium-box { grid-template-columns: 1fr; }
		.hod-image { max-width: 150px; margin: 30px auto 0; border-radius: 50%; border: 4px solid #34d399; }
		.hod-info-neat { text-align: center; }
		.hidden-xs { display: none; }
		.contact-links { flex-direction: column; gap: 8px; }
		.sep { display: none; }
	}

	.text-center { text-align: center; }
	.mx-auto { margin-left: auto; margin-right: auto; }
	.font-600 { font-weight: 600; }
</style>
