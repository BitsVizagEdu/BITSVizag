<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// One-time trigger only — no scrub, no per-frame scroll work
		gsap.fromTo(
			'.transition-line',
			{ scaleX: 0 },
			{
				scaleX: 1,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.transition-bridge',
					start: 'top 85%',
					once: true
				}
			}
		);
	});
</script>

<div class="transition-bridge">
	<div class="transition-glow glow-navy"></div>
	<div class="transition-glow glow-purple"></div>
	<div class="transition-glow glow-pink"></div>
	<div class="transition-glow glow-gold"></div>

	<div class="grid-overlay"></div>

	<div class="line-wrap">
		<span class="dot"></span>
		<span class="transition-line"></span>
		<span class="dot"></span>
	</div>

	<div class="transition-wave">
		<svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="waveFill" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%" stop-color="#1e1b4b" />
					<stop offset="35%" stop-color="#7c3aed" />
					<stop offset="70%" stop-color="#ec4899" />
					<stop offset="100%" stop-color="#f5b324" />
				</linearGradient>
			</defs>
			<path
				fill="url(#waveFill)"
				fill-opacity="0.95"
				d="M0,40L80,36C160,32,320,26,480,29C640,32,800,46,960,47C1120,48,1280,38,1360,33L1440,28L1440,70L1360,70C1280,70,1120,70,960,70C800,70,640,70,480,70C320,70,160,70,80,70L0,70Z"
			/>
		</svg>
	</div>
</div>

<style>
	.transition-bridge {
		position: relative;
		width: 100%;
		height: 60px;
		overflow: hidden;
		pointer-events: none;
		contain: layout style paint;
		background: linear-gradient(
			to bottom,
			rgba(10, 12, 30, 0) 0%,
			rgba(10, 12, 30, 0.5) 40%,
			#ffffff 100%
		);
	}

	/* Ambient float handled by lightweight CSS keyframes,
	   NOT scroll-linked GSAP — this is the fix for the jank */
	.transition-glow {
		position: absolute;
		border-radius: 9999px;
		will-change: transform;
		transform: translateZ(0);
		animation: drift 14s ease-in-out infinite;
	}

	.glow-navy {
		width: 380px;
		height: 120px;
		left: 50%;
		top: -40px;
		margin-left: -190px;
		background: rgba(30, 27, 75, 0.35);
		filter: blur(75px);
		animation-delay: 0s;
	}

	.glow-purple {
		width: 240px;
		height: 95px;
		right: 18%;
		top: -15px;
		background: rgba(124, 58, 237, 0.2);
		filter: blur(65px);
		animation-delay: 2s;
	}

	.glow-pink {
		width: 220px;
		height: 90px;
		left: 8%;
		top: -15px;
		background: rgba(236, 72, 153, 0.16);
		filter: blur(60px);
		animation-delay: 4s;
	}

	.glow-gold {
		width: 160px;
		height: 70px;
		right: -20px;
		top: -5px;
		background: rgba(245, 179, 36, 0.12);
		filter: blur(55px);
		animation-delay: 6s;
	}

	@keyframes drift {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
		}
		50% {
			transform: translate3d(0, 8px, 0);
		}
	}

	.grid-overlay {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
		background-size: 28px 28px;
		opacity: 0.35;
		mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, black 35%, transparent 80%);
	}

	.line-wrap {
		position: absolute;
		top: 10px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 8px;
		z-index: 2;
	}

	.dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: linear-gradient(135deg, #7c3aed, #f5b324);
		box-shadow: 0 0 8px rgba(236, 72, 153, 0.8);
	}

	.transition-line {
		width: 44px;
		height: 1px;
		background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.7), transparent);
		transform-origin: center;
	}

	.transition-wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		line-height: 0;
		z-index: 1;
	}

	.transition-wave svg {
		display: block;
		width: 100%;
		height: 60px;
	}

	@media (max-width: 768px) {
		.transition-bridge {
			height: 42px;
		}
		.transition-wave svg {
			height: 42px;
		}
		.glow-navy {
			width: 220px;
			height: 76px;
			margin-left: -110px;
		}
		.glow-purple,
		.glow-pink {
			width: 150px;
			height: 60px;
		}
		.glow-gold {
			width: 100px;
			height: 48px;
		}
		.line-wrap {
			top: 6px;
		}
		.transition-line {
			width: 32px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.transition-glow {
			animation: none;
		}
	}
</style>
