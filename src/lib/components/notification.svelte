<script>
	const explorePhrases = [
		'Shaping Future Engineers',
		'Building Industry-Ready Innovators',
		'Engineering Excellence for Tomorrow'
	];
</script>

<div class="marquee-container">
	<div class="marquee-track">
		<!-- First set of items -->
		<div class="marquee-content">
			{#each Array(6) as _, i}
				<span class="marquee-item">
					<span class="scholarship-badge mobile-focused"> SCHOLARSHIPS </span>
					<span class="marquee-admissions">100+ Merit Scholarships Available for Batch 2026</span>
					<a href="/application-form" class="apply-link">Click here</a>
					
					<span class="separator hidden md:inline">|</span>
					
					<span class="new-badge hidden md:inline-flex">NEW</span>
					<span class="marquee-admissions hidden md:inline">Admissions Open for B.Tech, M.Tech (2026)</span>
					<a href="/department/Department%20of%20CSE" class="apply-link hidden md:inline">Click here</a>

					<span class="separator">|</span>
					<span class="scholarship-badge hidden md:inline-flex"> Explore </span>
					<span class="excellence-text">"{explorePhrases[i % 3]}"</span>

					<span class="separator">|</span>

					<span class="marquee-courses hidden md:inline-flex">
						<span class="courses-label">COURSES:</span>
						<span class="course-cse">CSE</span> <span class="dot">•</span>
						<span class="course-aiml">AI & ML</span> <span class="dot">•</span>
						<span class="course-cyber">CYBER SECURITY</span> <span class="dot">•</span>
						<span class="course-ece">ECE</span> <span class="dot">•</span>
						<span class="course-mech">MECH</span> <span class="dot">•</span>
						<span class="course-eee">EEE</span>
					</span>
				</span>
			{/each}
		</div>
		
		<!-- Duplicate set for seamless scrolling -->
		<div class="marquee-content">
			{#each Array(6) as _, i}
				<span class="marquee-item">
					<span class="scholarship-badge mobile-focused"> SCHOLARSHIPS </span>
					<span class="marquee-admissions">100+ Merit Scholarships Available for Batch 2026</span>
					<a href="/application-form" class="apply-link">Click here</a>
					
					<span class="separator hidden md:inline">|</span>
					
					<span class="new-badge hidden md:inline-flex">NEW</span>
					<span class="marquee-admissions hidden md:inline">Admissions Open for B.Tech, M.Tech (2026)</span>
					<a href="/department/Department%20of%20CSE" class="apply-link hidden md:inline">Click here</a>

					<span class="separator">|</span>
					<span class="scholarship-badge hidden md:inline-flex"> Explore </span>
					<span class="excellence-text">"{explorePhrases[i % 3]}"</span>

					<span class="separator">|</span>

					<span class="marquee-courses hidden md:inline-flex">
						<span class="courses-label">COURSES:</span>
						<span class="course-cse">CSE</span> <span class="dot">•</span>
						<span class="course-aiml">AI & ML</span> <span class="dot">•</span>
						<span class="course-cyber">CYBER SECURITY</span> <span class="dot">•</span>
						<span class="course-ece">ECE</span> <span class="dot">•</span>
						<span class="course-mech">MECH</span> <span class="dot">•</span>
						<span class="course-eee">EEE</span>
					</span>
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.marquee-container {
		width: 100%;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(251, 191, 36, 0.3);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
		padding: 8px 0;
		position: relative;
		z-index: 40;
	}

	.marquee-track {
		display: flex;
		width: fit-content;
		animation: scroll 120s linear infinite; /* Slower for steady flow */
		will-change: transform;
		transform: translateZ(0);
		backface-visibility: hidden;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation-play-state: paused;
		}
	}

	.marquee-content {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.marquee-item {
		display: flex;
		align-items: center;
		white-space: nowrap;
		padding-right: 2rem; /* Reduced from 4rem for tighter flow */
		font-family: 'Inter', sans-serif;
	}

	.scholarship-badge {
		background: #1d4ed8;
		color: #ffffff;
		padding: 4px 12px;
		border-radius: 4px;
		font-size: 10px;
		font-weight: 800;
		margin-right: 12px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		flex-shrink: 0;
	}

	.new-badge {
		position: relative;
		background: linear-gradient(
			45deg,
			#fbbf24 0%,
			#f59e0b 25%,
			#ef4444 50%,
			#f59e0b 75%,
			#fbbf24 100%
		);
		background-size: 200% auto;
		color: #ffffff;
		padding: 2px 9px;
		border-radius: 4px;
		font-size: 10px;
		font-weight: 900;
		margin-right: 8px;
		letter-spacing: 0.08em;
		box-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
		flex-shrink: 0;
		overflow: hidden;
		animation:
			gradientMove 2s linear infinite,
			badgePulse 2s ease-in-out infinite;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
	}

	.new-badge::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.6), transparent);
		transform: rotate(45deg);
		animation: shimmer 2.5s infinite;
	}

	/* Sparkle dots */
	.new-badge::after {
		content: '★';
		position: absolute;
		font-size: 6px;
		color: #ffffff;
		top: 0;
		right: 2px;
		animation: sparkle 1.5s infinite;
		opacity: 0;
	}

	@keyframes gradientMove {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}

	@keyframes badgePulse {
		0%,
		100% {
			transform: scale(1);
			box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
		}
		50% {
			transform: scale(1.05);
			box-shadow: 0 0 15px rgba(251, 191, 36, 0.6);
		}
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-150%) rotate(45deg);
		}
		100% {
			transform: translateX(150%) rotate(45deg);
		}
	}

	@keyframes sparkle {
		0%,
		100% {
			opacity: 0;
			transform: scale(0);
		}
		50% {
			opacity: 1;
			transform: scale(1.2) rotate(20deg);
		}
	}

	.marquee-admissions {
		color: #ffffff;
		font-size: 13px;
		font-weight: 800; /* Bolder for brightness */
		letter-spacing: 0.02em;
		font-family: 'Outfit', sans-serif;
		text-shadow: 0 1px 3px rgba(0,0,0,0.4);
	}

	.apply-link {
		color: #fbbf24;
		text-decoration: underline;
		margin-left: 10px;
		font-weight: 700;
		font-size: 13px;
		transition: all 0.2s ease;
	}

	.apply-link:hover {
		color: #ffffff;
		opacity: 0.9;
	}

	.excellence-text {
		color: rgba(255, 255, 255, 0.85);
		font-size: 12.5px;
		font-weight: 600;
		letter-spacing: 0.02em;
		font-style: italic;
		font-family: 'Inter', sans-serif;
	}

	.separator {
		color: rgba(255, 255, 255, 0.2);
		margin: 0 1.5rem; /* Reduced from 3rem for a neater view */
		font-size: 16px;
		font-weight: 300;
	}

	.marquee-courses {
		font-size: 13px;
		font-weight: 400;
		letter-spacing: 0.04em;
	}

	.courses-label {
		color: #fcfcfc; /* Crisp white */
		font-weight: 600;
		margin-right: 0.5rem;
		opacity: 0.9;
	}

	.dot {
		color: rgba(255, 255, 255, 0.15); /* Subtler dots */
		margin: 0 0.6rem;
		font-size: 8px;
		position: relative;
		top: -1px;
	}

	/* Course Specific Colors - Professional Tech Palette */
	.course-cse {
		color: #22d3ee; /* Electric Cyan */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
	}
	.course-aiml {
		color: #818cf8; /* Modern Indigo */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(129, 140, 248, 0.3);
	}
	.course-cyber {
		color: #34d399; /* Emerald Green */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(52, 211, 153, 0.3);
	}
	.course-ece {
		color: #fbbf24; /* Signature Gold */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
	}
	.course-mech {
		color: #f87171; /* Soft Coral */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(248, 113, 113, 0.3);
	}
	.course-eee {
		color: #cbd5e1; /* Platinum Silver */
		font-weight: 700;
		text-shadow: 0 0 10px rgba(203, 213, 225, 0.2);
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	@media (max-width: 768px) {
		.marquee-container {
			padding: 10px 0;
			background: #1e293b;
		}
		.marquee-item {
			padding-right: 1.5rem;
		}
		.scholarship-badge {
			font-size: 9px;
			padding: 3px 10px;
		}
		.marquee-admissions {
			font-size: 11px;
			font-weight: 600;
		}
		.marquee-courses {
			font-size: 10px;
		}
		.separator {
			margin: 0 1rem;
		}
		.dot {
			margin: 0 0.4rem;
		}
		.new-badge {
			display: none;
		}
	}
</style>
