<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const stories = [
		{
			id: '01',
			name: 'Rahul Vinni',
			program: 'B.Tech ECE',
			placement: 'Infosys',
			theme: 'indigo',
			quote: 'Getting placed in Infosys gave the perfect foundation for my professional journey. The guidance here was top-notch.'
		},
		{
			id: '02',
			name: 'Kalyan G',
			program: 'B.Tech ECE',
			placement: 'L&T',
			theme: 'orange',
			quote: 'The campus environment is peaceful and the infrastructure facilities are the best for focused learning.'
		},
		{
			id: '03',
			name: 'Chandrika C',
			program: 'B.Tech EEE',
			placement: 'NTPC',
			theme: 'rose',
			quote: 'Excellent classroom instructions and placement guidance helped launch my career in core engineering.'
		},
		{
			id: '04',
			name: 'Suresh Kumar',
			program: 'B.Tech Mech',
			placement: 'Tata Motors',
			theme: 'emerald',
			quote: 'The hands-on training in mechanical workshops and CNC design labs made me industry-ready from day one.'
		},
		{
			id: '05',
			name: 'Meenakshi Rao',
			program: 'B.Tech Civil',
			placement: 'GMR Group',
			theme: 'blue',
			quote: 'Our field visits and concrete testing lab work gave us actual practical exposure that helped during technical recruitment.'
		},
		{
			id: '06',
			name: 'Venkatesh Prasad',
			program: 'MBA',
			placement: 'ICICI Bank',
			theme: 'amber',
			quote: 'The business seminars, mock portfolios, and interview training built my core banking knowledge to clear the exams.'
		},
		{
			id: '07',
			name: 'Rishi Vardhan',
			program: 'B.Tech EEE',
			placement: 'Schneider',
			theme: 'indigo',
			quote: 'Highly supportive faculty members who guided our power systems project, leading to my campus placement.'
		},
		{
			id: '08',
			name: 'Tarun Sen',
			program: 'B.Tech Mech',
			placement: 'Hyundai Motors',
			theme: 'orange',
			quote: 'The structured training sessions for non-IT branches helped me crack both the core engineering and HR rounds easily.'
		},
		{
			id: '09',
			name: 'Priyanka R',
			program: 'B.Tech CSE',
			placement: 'Cognizant',
			theme: 'blue',
			quote: 'The faculty is incredibly supportive and works in complete unity with the students. Best decision of my career.'
		},
		{
			id: '10',
			name: 'Ajay Kumar T.',
			program: 'B.Tech CSE',
			placement: 'TCS Digital',
			theme: 'amber',
			quote: 'Modern lab facilities, tech hackathons, and experienced teachers made my computer science journey highly rewarding.'
		},
		{
			id: '11',
			name: 'Deepika S.',
			program: 'B.Tech CSE',
			placement: 'Wipro',
			theme: 'emerald',
			quote: 'The campus recruitment training starting from 3rd year helped me build strong foundations in coding and algorithms.'
		},
		{
			id: '12',
			name: 'Harsha Vardhan',
			program: 'B.Tech CSE',
			placement: 'Tech Mahindra',
			theme: 'indigo',
			quote: 'Coding clubs and developer peer groups on campus kept me motivated to build real-world software projects.'
		},
		{
			id: '13',
			name: 'Kavya Shree K.',
			program: 'B.Tech CSE',
			placement: 'Accenture',
			theme: 'rose',
			quote: 'Regular guest lectures from IT industry leaders gave us clear insights into current technologies like Cloud and DevOps.'
		},
		{
			id: '14',
			name: 'Vamsi K.',
			program: 'B.Tech Mech',
			placement: 'Hyundai',
			theme: 'indigo',
			quote: 'The mechanical labs and CAD training here gave me the skills required to clear core automobile design rounds.'
		},
		{
			id: '15',
			name: 'Ramya S.',
			program: 'B.Tech ECE',
			placement: 'Wipro',
			theme: 'emerald',
			quote: 'ECE faculty pushed us to learn microcontrollers and embedded systems, which helped me land my dream core offer.'
		},
		{
			id: '16',
			name: 'Ganesh B.',
			program: 'B.Tech EEE',
			placement: 'L&T Power',
			theme: 'orange',
			quote: 'Power systems labs and electrical simulation tools were vital for my placement in core electrical grid networks.'
		},
		{
			id: '17',
			name: 'Thomas A.',
			program: 'MBA',
			placement: 'HDFC Bank',
			theme: 'rose',
			quote: 'The case study discussions and financial analysis sessions in my MBA program gave me a major corporate career boost.'
		},
		{
			id: '18',
			name: 'Tejaswini P.',
			program: 'B.Tech Civil',
			placement: 'Dilip Buildcon',
			theme: 'amber',
			quote: 'Hands-on surveying camps, structural drawing, and AutoCAD courses made civil engineering practical and highly rewarding.'
		}
	];

	const themeStyles = {
		indigo: { bg: '#e0e7ff', text: '#312e81', desc: '#4f46e5', activeBg: '#4f46e5' },
		blue: { bg: '#dbeafe', text: '#1e3a8a', desc: '#2563eb', activeBg: '#2563eb' },
		orange: { bg: '#ffedd5', text: '#7c2d12', desc: '#ea580c', activeBg: '#ea580c' },
		emerald: { bg: '#d1fae5', text: '#064e3b', desc: '#059669', activeBg: '#059669' },
		amber: { bg: '#fef3c7', text: '#78350f', desc: '#d97706', activeBg: '#d97706' },
		rose: { bg: '#ffe4e6', text: '#881337', desc: '#e11d48', activeBg: '#e11d48' }
	};

	let currentIndex = 0;

	// Smoothly animated progress value (0 to 12)
	const progress = tweened(0, {
		duration: 500,
		easing: cubicOut
	});

	$: progress.set(currentIndex);

	// Calculate vertical coordinates along the sinus wave track
	// svgWidth = 800, svgHeight = 80. Locks perfectly onto the 2-cycle quadratic sinus path.
	$: waveX = $progress * (720 / (stories.length - 1)) + 40;
	$: waveY = -Math.sin(($progress / (stories.length - 1)) * 4 * Math.PI) * 17.5 + 40;

	function next() {
		currentIndex = (currentIndex + 1) % stories.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + stories.length) % stories.length;
	}

	function setSlide(index) {
		currentIndex = index;
	}
</script>

<section class="testimonials-slider-section">
	<div class="header-container">
		<!-- Left Category Badge -->
		<div class="category-badge">
			<span>( TESTIMONIALS )</span>
		</div>

		<!-- Main title on right -->
		<div class="title-row">
			<h2 class="section-title">
				What our students say about<br />
				their BITS experience
			</h2>

			<!-- Slider Controls -->
			<div class="slider-controls">
				<button on:click={prev} aria-label="Previous story" class="control-btn">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="19" y1="12" x2="5" y2="12"></line>
						<polyline points="12 19 5 12 12 5"></polyline>
					</svg>
				</button>
				<button on:click={next} aria-label="Next story" class="control-btn active-btn">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Cards Horizontal Track -->
	<div class="cards-viewport">
		<div 
			class="cards-container" 
			style="transform: translateX(calc(-{currentIndex} * (var(--card-width) + var(--card-gap)) + 50vw - (var(--card-width) / 2)));"
		>
			{#each stories as story, idx}
				{@const styles = themeStyles[story.theme]}
				<button 
					class="story-card" 
					class:active={currentIndex === idx}
					on:click={() => setSlide(idx)}
				>
					<div 
						class="card-inner"
						style="
							background: {currentIndex === idx ? styles.activeBg : styles.bg};
							border-color: {currentIndex === idx ? styles.activeBg : 'transparent'};
							--text-color: {currentIndex === idx ? '#ffffff' : styles.text};
							--desc-color: {currentIndex === idx ? 'rgba(255, 255, 255, 0.8)' : styles.desc};
							--tag-color: {currentIndex === idx ? 'rgba(255, 255, 255, 0.7)' : '#94a3b8'};
						"
					>
						<p class="quote">“{story.quote}”</p>
						
						<div class="student-meta">
							<span class="name">{story.name}</span>
							<span class="details">{story.program} &bull; Placed at {story.placement}</span>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Premium Wavy Sinus Progress Track -->
	<div class="wavy-track-wrapper">
		<svg viewBox="0 0 800 80" class="wavy-svg">
			<!-- Static background dashed sinus path -->
			<path 
				d="M 40 40 Q 130 5, 220 40 T 400 40 T 580 40 T 760 40" 
				fill="none" 
				stroke="#e2e8f0" 
				stroke-width="2.5" 
				stroke-dasharray="6,6"
			/>
			
			<!-- Highlighted path -->
			<path 
				d="M 40 40 Q 130 5, 220 40 T 400 40 T 580 40 T 760 40" 
				fill="none" 
				stroke="#f59e0b" 
				stroke-width="3" 
				stroke-dasharray="8,8"
				stroke-dashoffset={-$progress * 80}
				style="transition: stroke-dashoffset 0.1s linear;"
				opacity="0.8"
			/>
		</svg>

		<!-- Floating HTML Cap Icon overlay (Does not shrink to unreadable sizes on mobile!) -->
		<div 
			class="floating-cap-overlay"
			style="left: {(waveX / 800) * 100}%; top: {(waveY / 80) * 100}%;"
		>
			<!-- Graduation Cap SVG -->
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
				<path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
			</svg>
		</div>
	</div>
</section>

<style>
	.testimonials-slider-section {
		background-color: #f8fafc;
		padding: 5rem 0 7rem;
		overflow: hidden;
		width: 100%;
		border-top: 1px solid #e2e8f0;
	}

	.header-container {
		width: min(1200px, 90vw);
		margin: 0 auto 3.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
	}

	.category-badge {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		color: #f59e0b;
	}

	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 2rem;
		width: 100%;
	}

	.section-title {
		font-size: clamp(1.8rem, 3.5vw, 2.6rem);
		font-weight: 800;
		line-height: 1.15;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0;
	}

	.slider-controls {
		display: flex;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.control-btn {
		width: 46px;
		height: 46px;
		border-radius: 50%;
		border: 1.5px solid #cbd5e1;
		background: transparent;
		color: #475569;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.control-btn svg {
		width: 18px;
		height: 18px;
	}

	.control-btn:hover, .control-btn.active-btn {
		border-color: #0f172a;
		background-color: #0f172a;
		color: #ffffff;
	}

	/* Card Slider Viewport */
	.cards-viewport {
		position: relative;
		width: 100%;
		height: auto;
		padding: 1.5rem 0;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.cards-container {
		display: flex;
		gap: var(--card-gap);
		transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
		will-change: transform;
		padding-left: 2rem;
		padding-right: 2rem;
		--card-width: 290px;
		--card-gap: 24px;
	}

	.story-card {
		width: var(--card-width);
		height: 230px;
		flex-shrink: 0;
		border: none;
		outline: none;
		background: transparent;
		padding: 0;
		text-align: left;
		cursor: pointer;
	}

	.card-inner {
		width: 100%;
		height: 100%;
		border: 1px solid #e2e8f0;
		border-radius: 1.25rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
		transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
		position: relative;
	}

	.story-card.active .card-inner {
		transform: scale(1.03);
	}

	.quote {
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--text-color);
		margin: 0;
		font-weight: 500;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		transition: color 0.4s ease;
	}

	.student-meta {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
	}

	.name {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--text-color);
		transition: color 0.4s ease;
	}

	.details {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--desc-color);
		transition: color 0.4s ease;
	}

	/* Wavy Progress Track */
	.wavy-track-wrapper {
		width: 100%;
		max-width: 800px;
		margin: 3.5rem auto 0;
		padding: 0 2rem;
		position: relative;
	}

	.floating-cap-overlay {
		position: absolute;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: #1e293b;
		display: flex;
		align-items: center;
		justify-content: center;
		transform: translate(-50%, -50%);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		z-index: 10;
	}

	.wavy-svg {
		width: 100%;
		height: 80px;
		overflow: visible;
	}

	@media (max-width: 768px) {
		.testimonials-slider-section {
			padding: 4rem 0 5rem;
		}

		.title-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.25rem;
		}

		.slider-controls {
			align-self: flex-end;
		}

		.wavy-track-wrapper {
			margin-top: 2rem;
			padding: 0 1rem;
		}
	}

	@media (max-width: 640px) {
		.cards-container {
			--card-width: 230px;
			--card-gap: 12px;
			padding-left: 1rem;
			padding-right: 1rem;
		}

		.story-card {
			height: 170px;
		}

		.card-inner {
			padding: 1rem;
			border-radius: 1rem;
		}

		.quote {
			font-size: 0.76rem;
			line-height: 1.38;
			-webkit-line-clamp: 3;
		}

		.name {
			font-size: 0.82rem;
		}

		.details {
			font-size: 0.65rem;
		}

		.floating-cap-overlay {
			width: 24px;
			height: 24px;
		}

		.floating-cap-overlay svg {
			width: 14px;
			height: 14px;
		}
	}
</style>
