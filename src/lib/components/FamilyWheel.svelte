<script>
	import { fade } from 'svelte/transition';

	const cx = 300;
	const cy = 300;
	const R = 270; // Outer radius
	const r = 110; // Inner radius (cutout)

	const students = [
		{ name: 'Student 1', role: 'ECE Alumni', img: '/alumini/1.jpg' },
		{ name: 'Student 2', role: 'CSE Alumni', img: '/alumini/2.jpg' },
		{ name: 'Student 3', role: 'Mech Alumni', img: '/alumini/3.jpg' },
		{ name: 'Student 4', role: 'EEE Alumni', img: '/alumini/7.jpg' },
		{ name: 'Student 5', role: 'CSE Alumni', img: '/alumini/8.jpg' },
		{ name: 'Student 6', role: 'ECE Alumni', img: '/alumini/9.jpg' }
	];

	let hoveredIndex = null;

	// Helper to convert polar to cartesian coordinates
	function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
		const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
		return {
			x: centerX + (radius * Math.cos(angleInRadians)),
			y: centerY + (radius * Math.sin(angleInRadians))
		};
	}

	// Generate curved path for each segment with a slight gap
	function getSegmentPath(startAngle, endAngle) {
		const gap = 1.8; // Gap in degrees
		const sAngle = startAngle + gap;
		const eAngle = endAngle - gap;

		const startOuter = polarToCartesian(cx, cy, R, sAngle);
		const endOuter = polarToCartesian(cx, cy, R, eAngle);
		const startInner = polarToCartesian(cx, cy, r, sAngle);
		const endInner = polarToCartesian(cx, cy, r, eAngle);

		const largeArcFlag = eAngle - sAngle <= 180 ? "0" : "1";

		return [
			`M ${startOuter.x} ${startOuter.y}`,
			`A ${R} ${R} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
			`L ${endInner.x} ${endInner.y}`,
			`A ${r} ${r} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
			"Z"
		].join(" ");
	}

	// Slices configuration for 6 segments with computed midpoints
	const slices = Array.from({ length: 6 }, (_, i) => {
		const startAngle = i * 60;
		const endAngle = (i + 1) * 60;
		const midAngle = startAngle + 30;
		const midAngleRad = (midAngle - 90) * Math.PI / 180.0;
		
		// Midpoint radius is (R + r) / 2 = (270 + 110) / 2 = 190
		const midX = cx + 185 * Math.cos(midAngleRad);
		const midY = cy + 185 * Math.sin(midAngleRad);

		return {
			path: getSegmentPath(startAngle, endAngle),
			student: students[i],
			midX,
			midY,
			id: `slice-${i}`
		};
	});
</script>

<section class="family-wheel-section">
	<div class="container">
		<!-- Section Header (Clean, no unnecessary headers/footers) -->
		<div class="wheel-header">
			<h2 class="title font-serif">Our Thriving BITS Family</h2>
		</div>

		<!-- Interactive Wheel Container -->
		<div class="wheel-wrapper">
			<svg viewBox="0 0 600 600" class="wheel-svg">
				<defs>
					{#each slices as slice, i}
						<clipPath id="clip-{i}">
							<path d={slice.path} />
						</clipPath>
					{/each}
					<!-- Radial gold gradient for hover border -->
					<radialGradient id="gold-grad" cx="50%" cy="50%" r="50%">
						<stop offset="70%" stop-color="#b5945b" stop-opacity="0.9" />
						<stop offset="100%" stop-color="#8a6d3b" stop-opacity="1" />
					</radialGradient>
				</defs>

				<!-- Render Curved Images (Static Group, no circulation) -->
				<g class="segments-group">
					{#each slices as slice, i}
						<!-- Group containing image and clip path -->
						<g 
							class="slice-group" 
							on:mouseenter={() => hoveredIndex = i}
							on:mouseleave={() => hoveredIndex = null}
							tabindex="0"
							role="button"
							aria-label={slice.student.name}
						>
							<!-- Clipped Student Image (Centered on slice midpoint to keep face visible) -->
							<image
								href={slice.student.img}
								x={slice.midX - 110}
								y={slice.midY - 110}
								width="220"
								height="220"
								clip-path="url(#clip-{i})"
								preserveAspectRatio="xMidYMid slice"
								class="student-image"
								class:dim={hoveredIndex !== null && hoveredIndex !== i}
								class:highlight={hoveredIndex === i}
								style="transform-origin: {slice.midX}px {slice.midY}px;"
							/>

							<!-- Segment Border Outline (Highlighted on hover) -->
							<path 
								d={slice.path} 
								fill="none" 
								stroke={hoveredIndex === i ? "url(#gold-grad)" : "rgba(229, 220, 198, 0.3)"} 
								stroke-width={hoveredIndex === i ? 4 : 1.5}
								class="segment-border"
							/>
						</g>
					{/each}
				</g>

				<!-- Center White Circle Cutout -->
				<circle cx={cx} cy={cy} r={r} fill="#ffffff" class="center-circle-bg" />
				<!-- Golden inner circle ring -->
				<circle cx={cx} cy={cy} r={r - 4} fill="none" stroke="#e5dcc6" stroke-width="1" />
				<circle cx={cx} cy={cy} r={r - 8} fill="none" stroke="#b5945b" stroke-width="1.5" stroke-dasharray="3,3" />

				<!-- Static Center Text (Clean branding, no names) -->
				<g class="center-text-group">
					<text x={cx} y={cy - 12} text-anchor="middle" class="center-tagline">EXPLORE</text>
					<text x={cx} y={cy + 18} text-anchor="middle" class="center-brand font-serif">BITS FAMILY</text>
					<text x={cx} y={cy + 38} text-anchor="middle" class="center-heart">♥</text>
				</g>
			</svg>
		</div>

		<!-- Single Line Neat Text at bottom -->
		<p class="tagline">
			Join a thriving community of engineers, innovators, and leaders at BITS Vizag. Be a part of our legacy.
		</p>
	</div>
</section>

<style>
	.family-wheel-section {
		background-color: #fcfaf7;
		padding: 4rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		border-top: 1px solid rgba(229, 220, 198, 0.3);
		border-bottom: 1px solid rgba(229, 220, 198, 0.3);
	}

	.container {
		width: 100%;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.wheel-header {
		margin-bottom: 2rem;
	}

	.title {
		font-size: clamp(1.5rem, 3.5vw, 2.2rem);
		color: #0f172a;
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.wheel-wrapper {
		width: 100%;
		max-width: 480px;
		aspect-ratio: 1;
		margin-bottom: 2rem;
		filter: drop-shadow(0 15px 35px rgba(181, 148, 91, 0.08));
	}

	.wheel-svg {
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	.slice-group {
		cursor: pointer;
		outline: none;
	}

	.student-image {
		transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
	}

	.student-image.dim {
		opacity: 0.55;
		filter: grayscale(20%);
	}

	.student-image.highlight {
		transform: scale(1.035);
		opacity: 1;
		filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
	}

	.segment-border {
		transition: stroke 0.3s ease, stroke-width 0.3s ease;
	}

	.center-circle-bg {
		filter: drop-shadow(0 2px 8px rgba(181, 148, 91, 0.15));
	}

	/* Typography inside SVG */
	.center-tagline {
		font-size: 11px;
		font-weight: 800;
		letter-spacing: 0.2em;
		fill: #94a3b8;
		font-family: 'Inter', sans-serif;
	}

	.center-brand {
		font-size: 20px;
		font-weight: 500;
		letter-spacing: 0.02em;
		fill: #0f172a;
	}

	.center-heart {
		font-size: 18px;
		fill: #dc2626;
	}

	.student-name {
		font-size: 17px;
		font-weight: 600;
		fill: #b5945b;
	}

	.student-role {
		font-size: 11px;
		font-weight: 700;
		fill: #475569;
		letter-spacing: 0.02em;
		font-family: 'Inter', sans-serif;
	}

	.center-tagline-active {
		font-size: 9px;
		font-weight: 800;
		letter-spacing: 0.15em;
		fill: #10b981;
		font-family: 'Inter', sans-serif;
	}

	.tagline {
		font-size: clamp(0.85rem, 1.5vw, 1rem);
		color: #475569;
		line-height: 1.5;
		font-weight: 500;
		max-width: 480px;
		margin: 0;
	}

	@media (max-width: 640px) {
		.family-wheel-section {
			padding: 2.5rem 1rem;
		}

		.wheel-wrapper {
			max-width: 320px;
		}

		.center-brand {
			font-size: 16px;
		}

		.student-name {
			font-size: 14px;
		}
	}

	/* Animated Circling Group styles */
	.rotating-wheel-group {
		transform-origin: 300px 300px;
		animation: rotate-wheel 55s linear infinite;
	}

	.rotating-wheel-group:hover {
		animation-play-state: paused;
	}

	@keyframes rotate-wheel {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
