<script>
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	const contacts = [
		{
			role: 'Principal',
			name: 'Dr. M. Rajan Babu',
			email: 'principal@bitsvizag.com',
			phone: '+91 88866 34502',
			icon: 'fa-user-tie',
			color: '#3b82f6'
		},
		{
			role: 'Dean Academics',
			name: 'Dr. B. P. Satyanarayana',
			email: 'deanacademics@bitsvizag.com',
			phone: '+91 91212 14313',
			icon: 'fa-graduation-cap',
			color: '#8b5cf6'
		},
		{
			role: 'Admin Officer',
			name: 'Mr. T. Kiran Kumar',
			email: 'ao@bitsvizag.com',
			phone: '+91 80088 44699',
			icon: 'fa-building',
			color: '#10b981'
		},
		{
			role: 'Exam Cell',
			name: 'Prof. D. N. Murti',
			email: 'examcellinfo@bitsvizag.com',
			phone: '+91 80088 44699',
			icon: 'fa-file-invoice',
			color: '#f59e0b'
		}
	];

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Satoshi:wght@700;900&family=Outfit:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="contact-premium-root">
	<!-- Ambient Background -->
	<div class="ambient-bg">
		<div class="glow glow-1"></div>
		<div class="glow glow-2"></div>
	</div>

	<div class="container-minimal">
		{#if mounted}
			<!-- Header -->
			<header class="header-minimal" in:fly={{ y: -20, duration: 800 }}>
				<span class="tag-minimal">GET IN TOUCH</span>
				<h1 class="satoshi">Connect With Us</h1>
				<p class="inter subtitle">
					Experience excellence in engineering education. We're here to help you navigate your
					journey.
				</p>
			</header>

			<div class="contact-grid-wrapper">
				<!-- Contact Cards -->
				<div class="cards-grid">
					{#each contacts as contact, i}
						<div class="contact-card-minimal" in:fly={{ y: 20, duration: 600, delay: 100 * i }}>
							<div class="card-top">
								<div class="icon-box" style="--accent: {contact.color}">
									<i class="fa-solid {contact.icon}"></i>
								</div>
								<div class="role-info">
									<span class="role-label">{contact.role}</span>
									<h3 class="name-minimal">{contact.name}</h3>
								</div>
							</div>
							<div class="card-actions">
								<a href="mailto:{contact.email}" class="action-link">
									<i class="fa-solid fa-envelope"></i>
									<span>{contact.email}</span>
								</a>
								<a href="tel:{contact.phone}" class="action-link">
									<i class="fa-solid fa-phone"></i>
									<span>{contact.phone}</span>
								</a>
							</div>
						</div>
					{/each}
				</div>

				<!-- Small Effective Blocks Side -->
				<div class="side-blocks">
					<!-- Location Block -->
					<div class="block-minimal location-block" in:fly={{ x: 20, duration: 800, delay: 400 }}>
						<div class="block-head">
							<i class="fa-solid fa-location-dot"></i>
							<span class="block-title">Campus Location</span>
						</div>
						<p class="address-text">
							Baba College, Lake near Pothinamallayyapalem, Visakhapatnam, AP - 530048
						</p>
						<a
							href="https://www.google.com/maps/place/Baba+Institute+of+Technology+%26+Sciences/@17.8115914,83.3320324,17z/data=!3m1!4b1!4m6!3m5!1s0x3a395befa9dda303:0x5781c56a5df412!8m2!3d17.8115914!4d83.3320324!16s%2Fg%2F1hc33f1gh?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
							target="_blank"
							class="map-trigger"
						>
							Open Google Maps <i class="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
					</div>

					<!-- Form Block -->
					<div class="block-minimal form-block" in:fly={{ x: 20, duration: 800, delay: 500 }}>
						<div class="block-head">
							<i class="fa-solid fa-paper-plane"></i>
							<span class="block-title">Quick Message</span>
						</div>
						<form class="minimal-form">
							<div class="input-group">
								<input type="text" placeholder="Your Name" required />
							</div>
							<div class="input-group">
								<input type="email" placeholder="Email Address" required />
							</div>
							<div class="input-group">
								<textarea rows="3" placeholder="How can we help?"></textarea>
							</div>
							<button type="submit" class="btn-submit">
								Send Message <i class="fa-solid fa-chevron-right"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.contact-premium-root {
		position: relative;
		min-height: 100vh;
		background: #f8fafc;
		padding: 100px 20px;
		overflow: hidden;
	}

	.ambient-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.glow {
		position: absolute;
		width: 40vw;
		height: 40vw;
		border-radius: 50%;
		filter: blur(100px);
		opacity: 0.4;
	}

	.glow-1 {
		top: -10%;
		left: -10%;
		background: #bfdbfe;
	}
	.glow-2 {
		bottom: -10%;
		right: -10%;
		background: #ddd6fe;
	}

	.container-minimal {
		position: relative;
		z-index: 10;
		max-width: 1100px;
		margin: 0 auto;
	}

	.header-minimal {
		text-align: center;
		margin-bottom: 60px;
	}

	.tag-minimal {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.3em;
		color: #3b82f6;
		margin-bottom: 1rem;
		display: block;
	}

	.header-minimal h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		color: #0f172a;
		margin-bottom: 1.5rem;
		letter-spacing: -0.04em;
		font-weight: 600;
	}

	.subtitle {
		font-size: 1.1rem;
		color: #64748b;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.contact-grid-wrapper {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 30px;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	.contact-card-minimal {
		background: rgba(255, 255, 255, 0.7);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.5);
		border-radius: 24px;
		padding: 30px 24px;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contact-card-minimal:hover {
		transform: translateY(-5px);
		background: #fff;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
	}

	.card-top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		margin-bottom: 24px;
		width: 100%;
	}

	.icon-box {
		width: 48px;
		height: 48px;
		background: var(--accent);
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 14px;
		font-size: 1.2rem;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	.role-label {
		display: block;
		font-size: 0.65rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #94a3b8;
		margin-bottom: 4px;
	}

	.name-minimal {
		font-size: 1.05rem;
		font-weight: 700;
		color: #1e293b;
		letter-spacing: -0.01em;
	}

	.card-actions {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 100%;
	}

	.action-link {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		text-decoration: none;
		color: #475569;
		font-size: 0.85rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.action-link:hover {
		color: #3b82f6;
	}
	.action-link i {
		color: #cbd5e1;
		width: 14px;
	}

	.side-blocks {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.block-minimal {
		background: #fff;
		border-radius: 24px;
		padding: 24px;
		border: 1px solid rgba(0, 0, 0, 0.05);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
	}

	.block-head {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 16px;
		color: #0f172a;
	}

	.block-title {
		font-weight: 700;
		font-size: 0.9rem;
	}

	.address-text {
		font-size: 0.85rem;
		color: #64748b;
		line-height: 1.6;
		margin-bottom: 16px;
	}

	.map-trigger {
		font-size: 0.8rem;
		font-weight: 700;
		color: #3b82f6;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.minimal-form {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.input-group input,
	.input-group textarea {
		width: 100%;
		padding: 12px 16px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 0.85rem;
		font-family: inherit;
		transition: all 0.2s;
	}

	.input-group input:focus,
	.input-group textarea:focus {
		outline: none;
		border-color: #3b82f6;
		background: #fff;
		box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05);
	}

	.btn-submit {
		background: #0f172a;
		color: #fff;
		border: none;
		padding: 12px;
		border-radius: 12px;
		font-weight: 700;
		font-size: 0.85rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		transition:
			transform 0.2s,
			background 0.2s;
	}

	.btn-submit:hover {
		transform: translateY(-2px);
		background: #1e293b;
	}

	@media (max-width: 900px) {
		.contact-grid-wrapper {
			grid-template-columns: 1fr;
			gap: 40px;
			width: 100%;
			margin: 0 auto;
		}
		.cards-grid {
			grid-template-columns: repeat(2, 1fr);
			width: 100%;
		}
		.header-minimal h1 {
			font-size: 2.8rem;
		}
	}

	@media (max-width: 640px) {
		.contact-premium-root {
			padding: 60px 15px;
		}
		.container-minimal {
			width: 100%;
			margin: 0 auto;
		}
		.header-minimal {
			margin-bottom: 35px;
			padding: 0 10px;
		}
		.header-minimal h1 {
			font-size: 1.8rem;
		}
		.subtitle {
			font-size: 0.8rem;
			line-height: 1.5;
		}
		.cards-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 10px;
			width: 100%;
		}
		.contact-card-minimal {
			padding: 15px 10px;
			border-radius: 16px;
			width: 100%;
		}
		.card-top {
			flex-direction: column;
			gap: 8px;
			margin-bottom: 12px;
			text-align: center;
		}
		.icon-box {
			width: 32px;
			height: 32px;
			font-size: 0.8rem;
			margin: 0 auto;
		}
		.role-label {
			font-size: 0.5rem;
		}
		.name-minimal {
			font-size: 0.75rem;
		}
		.card-actions {
			gap: 6px;
		}
		.action-link {
			font-size: 0.65rem;
			justify-content: center;
		}
		.action-link i {
			font-size: 0.6rem;
		}
		.action-link span {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			max-width: 100%;
		}
		.block-minimal {
			padding: 20px 15px;
			border-radius: 20px;
			width: 100%;
		}
		.side-blocks {
			gap: 20px;
			width: 100%;
		}
	}
</style>
