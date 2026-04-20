<script>
	export let title = 'Faculty Directory';
	export let subtitle = 'Explore our faculty profiles';
</script>

<header class="section-title" aria-live="polite">
	<div class="title-wrapper">
		<p class="eyebrow">Academic Directory</p>
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
		max-width: 740px;
		margin: 0 auto;
		position: relative;
		padding: 0.2rem 0 0.65rem;
	}

	.title-wrapper {
		animation: fade-in 0.6s ease-out both;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #0f766e;
	}

	h2 {
		margin: 0;
		font-family: 'Roboto', 'SF Pro Display', 'Segoe UI', sans-serif;
		font-size: clamp(1.72rem, 2.5vw, 2.25rem);
		line-height: 1.1;
		font-weight: 900;
		letter-spacing: -0.02em;
		animation: slide-up 0.6s ease-out 0.1s both;
	}

	.title-gradient {
		background: linear-gradient(130deg, #0f172a 0%, #1e293b 60%, #334155 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		margin: 0.44rem 0 0;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: clamp(0.88rem, 1vw, 1rem);
		line-height: 1.6;
		color: #64748b;
		animation: slide-up 0.6s ease-out 0.15s both;
		font-weight: 500;
	}

	.underline-wrapper {
		position: relative;
		height: 2px;
		margin: 0.75rem auto 0;
		width: min(132px, 42vw);
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
		background: linear-gradient(90deg, rgba(15, 118, 110, 0.2), rgba(15, 118, 110, 0.9));
		background-size: 200% 200%;
		animation: line-in 0.6s ease-out 0.25s both;
	}

	/* Animations */
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
			padding: 0 0 0.45rem;
		}

		h2 {
			font-size: clamp(1.38rem, 6vw, 1.74rem);
		}

		.subtitle {
			font-size: clamp(0.82rem, 1vw, 0.9rem);
		}

		.underline-wrapper {
			width: min(115px, 54vw);
		}
	}
</style>
