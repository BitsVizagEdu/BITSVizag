<script>
	export let count = 8;
</script>

<div class="skeleton-grid" aria-hidden="true">
	{#each Array(count) as _, index}
		<div class="skeleton-card" style={`--delay: ${index * 60}ms;`}>
			<div class="skeleton-avatar"></div>
			<div class="skeleton-line title"></div>
			<div class="skeleton-line"></div>
			<div class="skeleton-pill"></div>
			<div class="skeleton-row">
				<div class="skeleton-chip"></div>
				<div class="skeleton-chip short"></div>
			</div>
		</div>
	{/each}
</div>

<style>
	.skeleton-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
	}

	.skeleton-card {
		border-radius: 20px;
		padding: 18px;
		min-height: 280px;
		background: linear-gradient(160deg, rgba(255, 255, 255, 0.96), rgba(244, 244, 245, 0.92));
		border: 1px solid rgba(24, 24, 27, 0.1);
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
		animation: fade-up 0.6s ease both;
		animation-delay: var(--delay);
	}

	.skeleton-avatar,
	.skeleton-line,
	.skeleton-pill,
	.skeleton-chip {
		background: linear-gradient(90deg, rgba(220, 231, 247, 0.6) 20%, rgba(196, 217, 245, 0.92) 45%, rgba(220, 231, 247, 0.6) 80%);
		background-size: 220% 100%;
		animation: shimmer 1.2s linear infinite;
	}

	.skeleton-avatar {
		width: 76px;
		height: 76px;
		border-radius: 50%;
		margin-bottom: 1rem;
	}

	.skeleton-line {
		height: 12px;
		border-radius: 999px;
		margin-bottom: 0.65rem;
	}

	.skeleton-line.title {
		height: 15px;
		width: 74%;
	}

	.skeleton-pill {
		height: 24px;
		width: 45%;
		border-radius: 999px;
		margin: 1rem 0 0.9rem;
	}

	.skeleton-row {
		display: flex;
		gap: 8px;
	}

	.skeleton-chip {
		height: 30px;
		flex: 1;
		border-radius: 10px;
	}

	.skeleton-chip.short {
		max-width: 100px;
	}

	@keyframes shimmer {
		from {
			background-position: 100% 0;
		}

		to {
			background-position: -100% 0;
		}
	}

	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(16px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 1200px) {
		.skeleton-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 900px) {
		.skeleton-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.skeleton-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
