<script>
	export let title = 'Faculty Directory';
	export let subtitle = 'Explore our faculty profiles';
</script>

<header class="section-title" aria-live="polite">
	<div class="title-wrapper">
		<h2 class="title-gradient">{title}</h2>
		<p class="subtitle">{subtitle}</p>
	</div>
	<div class="underline-wrapper">
		<div class="underline primary-line"></div>
	</div>
</header>

<style>
	.section-title {
		text-align: center;
		max-width: 100%;
		margin: 0;
		position: relative;
		padding: 1.2rem 1.5rem;
		background: linear-gradient(
			90deg,
			#0a0a0a 0%,
			#1a1a1a 25%,
			#0f0f0f 50%,
			#1a1a1a 75%,
			#0a0a0a 100%
		);
		background-size: 400% 400%;
		border-bottom: 2px solid rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(15px);
		animation: bg-animate 10s ease infinite;
	}

	.title-wrapper {
		animation: fade-in 0.6s ease-out both;
	}

	h2 {
		margin: 0;
		font-family: 'Roboto', 'SF Pro Display', 'Segoe UI', sans-serif;
		font-size: clamp(1.8rem, 2.5vw, 2.4rem);
		line-height: 1.2;
		font-weight: 900;
		letter-spacing: -0.02em;
		animation: slide-up 0.6s ease-out 0.1s both;
	}

	.title-gradient {
		background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		margin: 0.3rem 0 0;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: clamp(0.85rem, 1.1vw, 0.95rem);
		line-height: 1.5;
		color: #c0c0c0;
		animation: slide-up 0.6s ease-out 0.15s both;
		font-weight: 500;
	}

	.underline-wrapper {
		position: relative;
		height: 3px;
		margin: 0.8rem auto 0;
		width: min(200px, 50vw);
		display: flex;
		gap: 0;
		justify-content: center;
	}

	.underline {
		height: 100%;
		border-radius: 999px;
	}

	.primary-line {
		flex: 1;
		background: linear-gradient(90deg, #ffffff, #e8e8e8, #ffffff);
		background-size: 200% 200%;
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
		animation: line-in 0.6s ease-out 0.25s both, glow-pulse 4s ease-in-out infinite 0.6s;
	}

	/* Animations */
	@keyframes bg-animate {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes glow-pulse {
		0%, 100% {
			box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
		}
		50% {
			box-shadow: 0 0 16px rgba(255, 255, 255, 0.5);
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-up {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes line-in {
		from {
			opacity: 0;
			width: 0;
		}
		to {
			opacity: 1;
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.section-title {
			padding: 1rem 1.2rem;
		}

		h2 {
			font-size: clamp(1.4rem, 2vw, 1.8rem);
		}

		.subtitle {
			font-size: clamp(0.8rem, 1vw, 0.9rem);
		}

		.underline-wrapper {
			width: min(150px, 60vw);
		}
	}
</style>
