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
			color: '#0f172a'
		},
		{
			role: 'Dean Academics',
			name: 'Dr. B. P. Satyanarayana',
			email: 'deanacademics@bitsvizag.com',
			phone: '+91 91212 14313',
			icon: 'fa-graduation-cap',
			color: '#0f172a'
		},
		{
			role: 'Admin Officer',
			name: 'Mr. T. Kiran Kumar',
			email: 'ao@bitsvizag.com',
			phone: '+91 80088 44699',
			icon: 'fa-building',
			color: '#0f172a'
		},
		{
			role: 'Exam Cell',
			name: 'Prof. D. N. Murti',
			email: 'examcellinfo@bitsvizag.com',
			phone: '+91 80088 44699',
			icon: 'fa-file-invoice',
			color: '#0f172a'
		}
	];

	let mounted = false;
	let formSubmitted = false;

	onMount(() => {
		mounted = true;
	});

	function handleSubmit(e) {
		e.preventDefault();
		formSubmitted = true;
		setTimeout(() => {
			formSubmitted = false;
		}, 4000);
	}
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="contact-page-root">
	<!-- Hero Banner Section -->
	<div
		class="hero-banner"
		style="background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/college.jpg');"
	>
		<div class="hero-content">
			<h1 class="hero-title">Contact Us</h1>
			<div class="breadcrumb">
				<a href="/">Home</a>
				<span class="separator">/</span>
				<span class="current">Contact Us</span>
			</div>
		</div>
	</div>

	{#if mounted}
		<div class="container" in:fade={{ duration: 600 }}>
			<!-- Main Split Section -->
			<div class="main-split-grid">
				<!-- Left Column: Info -->
				<div class="info-column" in:fly={{ x: -30, duration: 800 }}>
					<h2 class="section-title">Always Here to Help you</h2>
					<p class="section-description">
						Whether you have questions about admissions, academic programs, facilities, or general
						inquiries, our team is ready to assist you. Get in touch with us using the channels
						below.
					</p>

					<div class="info-list">
						<!-- Location -->
						<div class="info-item">
							<div class="icon-wrapper">
								<i class="fa-solid fa-location-dot"></i>
							</div>
							<div class="info-details">
								<h4 class="info-label">Location</h4>
								<p class="info-value">
									Baba college, Lake, near Pothinamallayyapalem, Pothinamallayya Palem,
									Bakkanapalem, Andhra Pradesh 530048
								</p>
							</div>
						</div>

						<!-- Contact -->
						<div class="info-item">
							<div class="icon-wrapper">
								<i class="fa-solid fa-phone"></i>
							</div>
							<div class="info-details">
								<h4 class="info-label">Contact</h4>
								<p class="info-value">
									+91 80088 44699<br />
									+91 88866 34502
								</p>
							</div>
						</div>

						<!-- Email -->
						<div class="info-item">
							<div class="icon-wrapper">
								<i class="fa-solid fa-envelope"></i>
							</div>
							<div class="info-details">
								<h4 class="info-label">Email</h4>
								<p class="info-value">
									principal@bitsvizag.com<br />
									ao@bitsvizag.com
								</p>
							</div>
						</div>

						<!-- Hours of operation -->
						<div class="info-item">
							<div class="icon-wrapper">
								<i class="fa-solid fa-clock"></i>
							</div>
							<div class="info-details">
								<h4 class="info-label">Hours of operation</h4>
								<p class="info-value">
									Monday - Friday: 09.00 - 20.00<br />
									Sunday & Saturday: 10.30 - 22.30
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column: Form -->
				<div class="form-column" in:fly={{ x: 30, duration: 800 }}>
					<div class="form-card">
						<h3 class="form-title">Ready To Get Started?</h3>
						<p class="form-subtitle">
							Your email address will not be published. Required fields are marked.
						</p>

						{#if formSubmitted}
							<div class="success-message" in:fade>
								<i class="fa-solid fa-circle-check"></i>
								<p>
									Thank you! Your message has been sent successfully. We will get back to you
									shortly.
								</p>
							</div>
						{:else}
							<form on:submit={handleSubmit} class="contact-form">
								<div class="input-field">
									<input type="text" placeholder="your name" required />
								</div>
								<div class="input-field">
									<input type="email" placeholder="Email" required />
								</div>
								<div class="input-field">
									<input type="tel" placeholder="Enter number" required />
								</div>
								<div class="input-field">
									<textarea placeholder="Write a message..." rows="4" required></textarea>
								</div>

								<label class="terms-checkbox">
									<input type="checkbox" required />
									<span class="checkbox-text"
										>Accept <a href="/terms">terms</a> and
										<a href="/privacy">privacy policy</a>.</span
									>
								</label>

								<button type="submit" class="submit-btn"> Send Message </button>
							</form>
						{/if}
					</div>
				</div>
			</div>

			<!-- Key Administration Directory Section -->
			<div class="directory-section" in:fly={{ y: 30, duration: 800, delay: 200 }}>
				<div class="directory-header">
					<h3 class="directory-title">Key Administration Contacts</h3>
					<p class="directory-subtitle">
						Direct lines and support emails for administrative offices
					</p>
				</div>
				<div class="directory-grid">
					{#each contacts as contact}
						<div class="directory-card">
							<div class="dir-icon-box">
								<i class="fa-solid {contact.icon}"></i>
							</div>
							<span class="dir-role">{contact.role}</span>
							<h4 class="dir-name">{contact.name}</h4>
							<div class="dir-links">
								<a href="tel:{contact.phone}" class="dir-link">
									<i class="fa-solid fa-phone"></i>
									{contact.phone}
								</a>
								<a href="mailto:{contact.email}" class="dir-link">
									<i class="fa-solid fa-envelope"></i>
									{contact.email}
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Interactive Map Section -->
		<div class="map-section" in:fade={{ duration: 800, delay: 400 }}>
			<iframe
				title="Baba Institute of Technology & Sciences Map"
				src="https://maps.google.com/maps?q=17.8115914,83.3320324&z=16&output=embed"
				width="100%"
				height="450"
				style="border:0;"
				allowfullscreen={true}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			>
			</iframe>
		</div>
	{/if}
</section>

<style>
	.contact-page-root {
		font-family: 'Inter', sans-serif;
		color: #1e293b;
		background-color: #ffffff;
		overflow-x: hidden;
	}

	/* Hero Banner Style */
	.hero-banner {
		height: 380px;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #ffffff;
		position: relative;
	}

	.hero-content {
		z-index: 2;
	}

	.hero-title {
		font-family: 'Inter', sans-serif;
		font-size: 3.5rem;
		font-weight: 700;
		margin: 0 0 12px 0;
		letter-spacing: -0.02em;
	}

	.breadcrumb {
		font-size: 0.95rem;
		font-weight: 500;
		color: rgba(255, 255, 255, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.breadcrumb a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		transition: color 0.2s;
	}

	.breadcrumb a:hover {
		color: #ffffff;
	}

	.breadcrumb .separator {
		color: rgba(255, 255, 255, 0.5);
	}

	.breadcrumb .current {
		color: #ffffff;
	}

	/* Container */
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 80px 24px;
	}

	/* Main Split Grid */
	.main-split-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: start;
		margin-bottom: 80px;
	}

	/* Left Column - Info */
	.section-title {
		font-family: 'Inter', sans-serif;
		font-size: 2.5rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0 0 20px 0;
		line-height: 1.2;
	}

	.section-description {
		font-size: 1.05rem;
		line-height: 1.6;
		color: #64748b;
		margin: 0 0 40px 0;
	}

	.info-list {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.info-item {
		display: flex;
		gap: 20px;
		align-items: flex-start;
	}

	.icon-wrapper {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background-color: #f1f5f9;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #0f172a;
		font-size: 1.2rem;
		flex-shrink: 0;
		transition: all 0.3s ease;
	}

	.info-item:hover .icon-wrapper {
		background-color: #0f172a;
		color: #ffffff;
	}

	.info-details {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.info-label {
		font-size: 1.15rem;
		font-weight: 600;
		color: #0f172a;
		margin: 0;
	}

	.info-value {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #64748b;
		margin: 0;
	}

	/* Right Column - Form */
	.form-card {
		background-color: #f8fafc;
		border-radius: 20px;
		padding: 40px;
		border: 1px solid #e2e8f0;
	}

	.form-title {
		font-family: 'Inter', sans-serif;
		font-size: 1.8rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0 0 8px 0;
	}

	.form-subtitle {
		font-size: 0.9rem;
		color: #64748b;
		margin: 0 0 30px 0;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.input-field input,
	.input-field textarea {
		width: 100%;
		padding: 14px 18px;
		border: 1px solid #e2e8f0;
		border-radius: 8px;
		background-color: #ffffff;
		font-family: inherit;
		font-size: 0.95rem;
		color: #0f172a;
		transition: all 0.2s ease;
	}

	.input-field input:focus,
	.input-field textarea:focus {
		outline: none;
		border-color: #0f172a;
		box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.05);
	}

	.input-field textarea {
		resize: none;
	}

	.terms-checkbox {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.88rem;
		color: #64748b;
		cursor: pointer;
		margin: 4px 0 10px 0;
	}

	.terms-checkbox input {
		width: 16px;
		height: 16px;
		accent-color: #0f172a;
		cursor: pointer;
	}

	.checkbox-text a {
		color: #0f172a;
		text-decoration: underline;
	}

	.submit-btn {
		background-color: #0f172a;
		color: #ffffff;
		border: none;
		padding: 14px 28px;
		border-radius: 9999px;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		align-self: flex-start;
	}

	.submit-btn:hover {
		background-color: #1e293b;
		transform: translateY(-1px);
	}

	.submit-btn:active {
		transform: translateY(0);
	}

	.success-message {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 16px;
		padding: 40px 10px;
		color: #10b981;
	}

	.success-message i {
		font-size: 3rem;
	}

	.success-message p {
		font-size: 1rem;
		color: #0f172a;
		font-weight: 500;
		line-height: 1.5;
	}

	/* Key Directory Section */
	.directory-section {
		border-top: 1px solid #e2e8f0;
		padding-top: 80px;
		margin-top: 40px;
	}

	.directory-header {
		text-align: center;
		margin-bottom: 48px;
	}

	.directory-title {
		font-family: 'Inter', sans-serif;
		font-size: 2rem;
		font-weight: 700;
		color: #0f172a;
		margin: 0 0 8px 0;
	}

	.directory-subtitle {
		font-size: 1rem;
		color: #64748b;
		margin: 0;
	}

	.directory-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}

	.directory-card {
		background-color: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 30px 20px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: all 0.3s ease;
	}

	.directory-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.04);
		border-color: #cbd5e1;
	}

	.dir-icon-box {
		width: 54px;
		height: 54px;
		border-radius: 14px;
		background-color: #f8fafc;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #0f172a;
		font-size: 1.4rem;
		margin-bottom: 16px;
		border: 1px solid #f1f5f9;
	}

	.dir-role {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #64748b;
		margin-bottom: 6px;
	}

	.dir-name {
		font-size: 1.05rem;
		font-weight: 600;
		color: #0f172a;
		margin: 0 0 16px 0;
	}

	.dir-links {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 100%;
		border-top: 1px solid #f1f5f9;
		padding-top: 16px;
	}

	.dir-link {
		font-size: 0.85rem;
		color: #64748b;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		transition: color 0.2s;
	}

	.dir-link:hover {
		color: #0f172a;
	}

	.dir-link i {
		font-size: 0.8rem;
		opacity: 0.7;
	}

	/* Map Section */
	.map-section {
		width: 100%;
		height: 450px;
		overflow: hidden;
		line-height: 0;
		display: block;
		border-top: 1px solid #e2e8f0;
	}

	/* Responsive Media Queries */
	@media (max-width: 1024px) {
		.main-split-grid {
			gap: 40px;
		}

		.directory-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero-banner {
			height: 280px;
		}

		.hero-title {
			font-size: 2.5rem;
		}

		.main-split-grid {
			grid-template-columns: 1fr;
			gap: 50px;
		}

		.container {
			padding: 50px 20px;
		}

		.section-title {
			font-size: 2rem;
		}

		.directory-section {
			padding-top: 50px;
			margin-top: 20px;
		}
	}

	@media (max-width: 480px) {
		.directory-grid {
			grid-template-columns: 1fr;
		}

		.form-card {
			padding: 24px;
		}

		.submit-btn {
			width: 100%;
			align-self: stretch;
			text-align: center;
		}
	}
</style>
