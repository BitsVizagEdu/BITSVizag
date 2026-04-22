<div class="marquee-container">
	<div class="marquee-track">
		<!-- First set of items -->
		<div class="marquee-content">
			{#each Array(6) as _}
				<span class="marquee-item">
					<!-- Highlighted Admissions Section -->
					<span class="icon-wrapper">🎓</span>
					<span class="marquee-admissions">ADMISSIONS OPEN 2026-27</span>

					<!-- Separator -->
					<span class="separator">|</span>

					<!-- Courses Section -->
					<span class="marquee-courses">
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
			{#each Array(6) as _}
				<span class="marquee-item">
					<!-- Highlighted Admissions Section -->
					<span class="icon-wrapper">🎓</span>
					<span class="marquee-admissions">ADMISSIONS OPEN 2026-27</span>

					<!-- Separator -->
					<span class="separator">|</span>

					<!-- Courses Section -->
					<span class="marquee-courses">
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
		background: #000000; /* Clean, deep navy background */
		border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		padding: 8px 0; /* Reduced height for a sleeker look */
		position: relative;
		z-index: 100;
	}

	.marquee-track {
		display: flex;
		width: fit-content;
		animation: scroll 60s linear infinite; /* Slightly slower for continuous flow */
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
		padding-right: 2rem; /* Tightened gap for a high-density flow */
		font-family: 'Inter', sans-serif;
	}

	.icon-wrapper {
		font-size: 16px;
		margin-right: 0.5rem;
		display: flex;
		align-items: center;
		filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.4));
	}

	.marquee-admissions {
		color: #f59e0b; /* Solid premium gold */
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	.separator {
		color: rgba(255, 255, 255, 0.2);
		margin: 0 1.5rem; /* Slightly tighter separator spacing */
		font-size: 16px;
		font-weight: 300;
	}

	.marquee-courses {
		font-size: 13.5px;
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
		color: rgba(255, 255, 255, 0.444);
		margin: 0 0.6rem; /* Tighter dot spacing */
		font-size: 10px;
		position: relative;
		top: -1px;
	}

	/* Course Specific Colors with subtle glow */
	.course-cse {
		color: #cb22c0;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
	}
	.course-aiml {
		color: #45e4ec;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(192, 132, 252, 0.3);
	}
	.course-cyber {
		color: #4ade80;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(74, 222, 128, 0.3);
	}
	.course-ece {
		color: #fbbf24;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(251, 191, 36, 0.3);
	}
	.course-mech {
		color: #df7344;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(251, 146, 60, 0.3);
	}
	.course-eee {
		color: #dce051;
		font-weight: 600;
		text-shadow: 0 0 8px rgba(34, 211, 238, 0.3);
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
		.marquee-item {
			padding-right: 1.5rem;
		}
		.marquee-admissions {
			font-size: 12px;
		}
		.marquee-courses {
			font-size: 11px;
		}
		.separator {
			margin: 0 1rem;
		}
		.dot {
			margin: 0 0.4rem;
		}
	}
</style>
