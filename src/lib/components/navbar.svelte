<div class="top-bar">
	<div class="top-bar-container">
		<div class="welcome-section">
			<span class="welcome-text">
				Welcome to <span class="bits-accent">
					<span class="b">B</span>
					<span class="i">I</span>
					<span class="t">T</span>
					<span class="s">S</span>
				</span> VIZAG
			</span>
		</div>

		<div class="contact-links">
			<!-- Email removed as requested -->

			<a href="tel:+919121214313" class="contact-item">
				<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path
						d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
					/>
				</svg>
				<span>Call : +91-80088 44699</span>
			</a>

			<a href="/courses/Offered-Courses" class="contact-item">
				<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20" />
					<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
				</svg>
				<span>Courses Offered</span>
			</a>

			<a href="/contactus" class="contact-item">
				<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="16" x2="12" y2="12" />
					<line x1="12" y1="8" x2="12.01" y2="8" />
				</svg>
				<span>More Details</span>
			</a>

			<a href="/alumini-data" class="contact-item dropdown" aria-label="Global Alumni Network">
				<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="10" />
					<line x1="2" y1="12" x2="22" y2="12" />
					<path
						d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
					/>
				</svg>
				<span>Global Alumni Network</span>
				<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
					<polyline points="6 9 12 15 18 9" />
				</svg>
			</a>
		</div>
	</div>
</div>

<div id="header" class="header-shell">
	<div class="brand-row">
		<div class="brand-left">
			<img src="/1.png" alt="BITS Vizag mark" class="brand-logo animated-logo" />
			<div class="title-copy hidden sm:block">
				<h1>BABA INSTITUTE OF TECHNOLOGY AND SCIENCES</h1>
				<p class="lower-text">
					Affiliated to JNTU-GV • AICTE Approved • Excellence in Engineering Education
				</p>
			</div>
		</div>

		<div class="brand-right flex items-center gap-4">
			<div class="accreditation-strip hidden lg:flex" aria-label="Accreditation logos">
				<div class="accreditation-logo round">
					<img class="logo-mark logo-multiply" src="/bits.png" alt="BITS emblem" />
				</div>
				<div class="accreditation-logo year">
					<img class="logo-mark logo-screen" src="/2026.png" alt="2026 campaign mark" />
				</div>
			</div>
			<div class="ugc-badge hidden lg:flex">
				<svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
					/>
				</svg>
				<span>UGC Autonomous</span>
			</div>
			<span class="status-pill dark hidden sm:inline-flex">NAAC 'A'</span>
			<a class="apply-cta mobile-apply-btn" href="/courses/Offered-Courses" target="_blank"
				>Explore Courses</a
			>
		</div>
	</div>
</div>

<style>
	.top-bar {
		display: block;
		background: #080e1f;
		border-bottom: 1px solid rgba(251, 191, 36, 0.2);
		padding: 0.2rem 0; /* Reduced from 0.35rem */
		color: #ffffff;
		font-family: 'Inter', sans-serif;
		font-size: 11.5px;
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		.top-bar {
			display: none !important;
		}
	}

	.top-bar-container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
	}

	.welcome-text {
		letter-spacing: 0.02em;
		white-space: nowrap;
	}

	.bits-accent {
		font-weight: 900;
		letter-spacing: 0.15em;
		margin: 0 0.15rem;
		display: inline-flex;
		gap: 0.1rem;
		border-bottom: 1px solid #fbbf24;
		padding-bottom: 1px;
	}

	.bits-accent .b {
		color: #ef4444;
	}
	.bits-accent .i {
		color: #fbbf24;
	}
	.bits-accent .t {
		color: #f59e0b;
	}
	.bits-accent .s {
		color: #3b82f6;
	}

	.contact-links {
		display: flex;
		flex-wrap: nowrap;
		gap: 1.8rem;
		align-items: center;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #ffffff;
		text-decoration: none;
		transition: all 0.2s ease;
		cursor: pointer;
		opacity: 0.9;
		font-weight: 600;
		white-space: nowrap;
	}

	.contact-item:hover {
		color: #fbbf24;
		opacity: 1;
	}

	.contact-item .icon {
		width: 14px;
		height: 14px;
		stroke-width: 2.5;
	}

	.contact-item.dropdown {
		display: flex;
		align-items: center;
		gap: 0.4rem;
	}

	.contact-item .chevron {
		width: 10px;
		height: 10px;
		margin-left: 0.1rem;
	}

	@media (max-width: 768px) {
		.top-bar {
			display: none !important;
		}
	}

	@media (max-width: 1024px) {
		.top-bar {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.top-bar,
		.header-shell {
			display: none !important;
		}
	}

	.brand-row {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 0.55rem 2rem;
		max-width: 1440px;
		margin: 0 auto;
	}

	.brand-left {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 1.5rem;
		min-width: 0;
	}

	.brand-logo {
		height: clamp(46px, 4.5vw, 58px);
		width: auto;
		object-fit: contain;
		flex-shrink: 0;
		transform: translateY(-1.5px); /* Moved slightly up as requested */
	}

	.title-copy {
		min-width: 0;
	}

	.title-copy h1 {
		margin: 0;
		font-size: clamp(1rem, 1.35vw, 1.6rem);
		font-weight: 900;
		line-height: 1.1;
		letter-spacing: -0.01em;
		color: #101f2f;
		text-transform: uppercase;
		white-space: nowrap;
	}

	.title-copy p.lower-text {
		margin: 0.05rem 0 0;
		font-size: clamp(0.64rem, 0.72vw, 0.68rem);
		font-weight: 600;
		letter-spacing: 0.02em;
		color: rgb(28, 65, 80);
		text-transform: none;
		opacity: 0.92;
		white-space: nowrap;
	}

	.brand-right {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		gap: 1.6rem; /* Increased from 1.25rem for more breathing room */
		flex-shrink: 0;
		margin-left: auto; /* Push group firmly to the right */
	}

	.accreditation-strip {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		isolation: isolate;
		padding: 0;
		background: transparent;
		border: 0;
		border-radius: 0;
		box-shadow: none;
	}

	.accreditation-logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: transparent;
		border: 0;
	}

	.accreditation-logo img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.logo-mark {
		background: transparent;
	}

	/* White matte areas are visually dropped on light headers */
	.logo-multiply {
		mix-blend-mode: multiply;
	}

	/* Black matte areas are visually dropped on light headers */
	.logo-screen {
		mix-blend-mode: screen;
		filter: contrast(1.2) brightness(1.2);
	}

	.accreditation-logo.round {
		width: 58px;
		height: 58px;
		border-radius: 999px;
		filter: drop-shadow(0 2px 4px rgba(8, 14, 31, 0.15));
		transition: transform 0.3s ease;
	}

	.accreditation-logo.round:hover {
		transform: scale(1.1) rotate(5deg);
	}

	.accreditation-logo.year {
		width: 100px;
		height: 52px;
		border-radius: 0.5rem;
		padding: 0;
		/* Removed shadow to prevent black box effect on screened image */
	}

	.ugc-badge {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.45rem 1.15rem;
		background: linear-gradient(135deg, #fffbeb 0%, #fff9db 50%, #fffbeb 100%);
		background-size: 200% auto;
		border: 1.5px solid #f59e0b;
		border-radius: 0.65rem;
		color: #92400e;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		box-shadow: 0 2px 15px rgba(245, 158, 11, 0.15);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: default;
		overflow: hidden;
		animation: goldShimmer 4s linear infinite;
		white-space: nowrap;
	}

	.ugc-badge::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -150%;
		width: 100%;
		height: 200%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
		transform: rotate(35deg);
		animation: sparkSweep 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
		pointer-events: none;
	}

	@keyframes sparkSweep {
		0% {
			left: -150%;
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		40% {
			left: 150%;
			opacity: 0;
		}
		100% {
			left: 150%;
			opacity: 0;
		}
	}

	@keyframes goldShimmer {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 200% 50%;
		}
	}

	@keyframes starSparkle {
		0%,
		100% {
			transform: scale(1) rotate(0);
			filter: brightness(1);
		}
		50% {
			transform: scale(1.2) rotate(15deg);
			filter: brightness(1.3);
		}
	}

	.ugc-badge:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(251, 188, 36, 0.2);
		border-color: #b87307;
	}

	.star-icon {
		width: 15px;
		height: 15px;
		color: #a05805;
		filter: drop-shadow(0 0 3px rgba(217, 119, 6, 0.4));
		animation: starSparkle 2s ease-in-out infinite;
	}

	.status-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.45rem 1.15rem;
		border-radius: 0.65rem;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #14204a;
		background: rgba(251, 191, 36, 0.15);
		border: 1px solid rgba(251, 191, 36, 0.5);
		white-space: nowrap;
	}

	.status-pill.dark {
		position: relative;
		overflow: hidden;
		background: #0f172a;
		border-color: #fbbf24;
		color: #fbbf24;
		font-weight: 900;
		box-shadow: 0 0 15px rgba(251, 191, 36, 0.2);
	}

	.status-pill.dark::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -150%;
		width: 100%;
		height: 200%;
		background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.4), transparent);
		transform: rotate(35deg);
		animation: sparkSweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s;
		pointer-events: none;
	}

	.apply-cta {
		text-decoration: none;
		color: #080e1f;
		background: #fbbf24;
		border: 1px solid #fbbf24;
		padding: 0.5rem 1.65rem;
		border-radius: 999px;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-transform: uppercase;
		box-shadow: 0 4px 12px rgba(251, 191, 36, 0.15);
		white-space: nowrap;
	}

	.apply-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);
		background: #f59e0b;
	}

	@media (max-width: 1024px) {
		.header-shell {
			display: none !important;
		}
	}

	@media (max-width: 768px) {
		.brand-row {
			padding: 0.6rem 0.6rem;
			gap: 0.5rem;
		}

		.brand-right {
			gap: 0.4rem;
		}

		.accreditation-strip {
			gap: 0.3rem;
			padding: 0;
		}

		.accreditation-logo.round {
			width: 38px;
			height: 38px;
		}

		.accreditation-logo.year {
			width: 58px;
			height: 28px;
			display: inline-flex;
		}

		.brand-logo {
			height: 38px;
		}

		.title-copy h1 {
			font-size: 0.76rem;
			letter-spacing: 0;
		}

		.title-copy p {
			font-size: 0.46rem;
			letter-spacing: 0.02em;
		}

		.apply-cta {
			font-size: 0.6rem;
			padding: 0.3rem 0.6rem;
		}

		.status-pill {
			display: none;
		}

		.ugc-badge {
			display: none;
		}
	}
</style>
