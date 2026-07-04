<script>
	const campusPhotos = [
		{ img: '/logo-150/RAJ_6455.JPG', alt: 'Graduation Day Celebration' },
		{ img: '/events/job-fair.jpg', alt: 'Mega Job Fair' },
		{ img: '/events/samsung.jpg', alt: 'Samsung Innovation Campus' },
		{ img: '/events/christmas-3.0.jpg', alt: 'Christmas Celebration 3.0' },
		{ img: '/events/payzo.jpg', alt: 'Pitch-A-Thon' },
		{ img: '/events/S-Protocol.jpg', alt: 'Cybersecurity Protocol' },
		{ img: '/events/Champions-T10.jpg', alt: 'National T10 Championship' },
		{ img: '/events/vice-chancellor.jpg', alt: 'Vice Chancellor Visit' },
		{ img: '/events/T-10.jpg', alt: 'State T10 Championship' }
	];
</script>

<section class="mosaic-section">
	<div class="inner-container">
		<!-- Left Info Panel -->
		<div class="info-panel" data-aos="fade-right">
			<span class="section-badge">CAMPUS INSIGHTS</span>
			<h2 class="main-title font-serif">
				LIFE AT BITS.<br />
				<span class="gold-text font-serif">LIVE VIBRANT.</span>
			</h2>
			<p class="description">
				Discover a thriving ecosystem of festivals, sports, seminars, and friendships. BITS Vizag is
				more than a college it is where memories are forged.
			</p>
		</div>

		<!-- Right Diamond Mosaic Collage -->
		<div class="collage-panel" data-aos="fade-left">
			<div class="mosaic-wrapper">
				<!-- Diamond 1 (Top Left) -->
				<div class="diamond-card d1">
					<img src={campusPhotos[0].img} alt={campusPhotos[0].alt} loading="lazy" />
				</div>

				<!-- Diamond 2 (Top Mid) -->
				<div class="diamond-card d2">
					<img src={campusPhotos[1].img} alt={campusPhotos[1].alt} loading="lazy" />
				</div>

				<!-- Green Text Diamond (Top Right) -->
				<div class="diamond-badge green-badge d3">
					<div class="badge-content">
						<svg
							class="w-6 h-6 text-white/90"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5"
							/>
						</svg>
						<span class="badge-text font-serif">BITS VIZAG</span>
					</div>
				</div>

				<!-- Diamond 3 (Mid Left) -->
				<div class="diamond-card d4">
					<img src={campusPhotos[2].img} alt={campusPhotos[2].alt} loading="lazy" />
				</div>

				<!-- Center Gold Circle Badge (Overlap style) -->
				<div class="center-gold-circle">
					<div class="circle-content">
						<span class="circle-tag">LEARN</span>
						<span class="circle-main font-serif">EXPLORE</span>
						<span class="circle-tag">EXCEL</span>
					</div>
				</div>

				<!-- Diamond 4 (Mid Right) -->
				<div class="diamond-card d5">
					<img src={campusPhotos[3].img} alt={campusPhotos[3].alt} loading="lazy" />
				</div>

				<!-- Diamond 5 (Mid Bottom Left) -->
				<div class="diamond-card d6">
					<img src={campusPhotos[4].img} alt={campusPhotos[4].alt} loading="lazy" />
				</div>

				<!-- Diamond 6 (Mid Bottom Mid) -->
				<div class="diamond-card d7">
					<img src={campusPhotos[5].img} alt={campusPhotos[5].alt} loading="lazy" />
				</div>

				<!-- Diamond 7 (Bottom Left) -->
				<div class="diamond-card d8">
					<img src={campusPhotos[6].img} alt={campusPhotos[6].alt} loading="lazy" />
				</div>

				<!-- Diamond 8 (Bottom Mid) -->
				<div class="diamond-card d9">
					<img src={campusPhotos[7].img} alt={campusPhotos[7].alt} loading="lazy" />
				</div>

				<!-- Diamond 9 (Bottom Right) -->
				<div class="diamond-card d10">
					<img src={campusPhotos[8].img} alt={campusPhotos[8].alt} loading="lazy" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mosaic-section {
		background-color: #faf8f5;
		padding: 6rem 2rem;
		overflow: hidden;
		position: relative;
		border-top: 1px solid rgba(181, 148, 91, 0.15);
	}

	/* Soft leaf overlay style like reference */
	.mosaic-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(181, 148, 91, 0.05) 0%, transparent 80%);
		pointer-events: none;
	}

	.inner-container {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1.2fr;
		gap: 4rem;
		align-items: center;
	}

	/* Left Panel Styles */
	.info-panel {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.section-badge {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.25em;
		color: #b5945b;
		margin-bottom: 1rem;
	}

	.main-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
		font-weight: 800;
		line-height: 1.1;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0 0 1.5rem;
	}

	.gold-text {
		color: #b5945b;
	}

	.description {
		font-size: 1rem;
		line-height: 1.6;
		color: #475569;
		margin: 0 0 2.5rem;
		font-weight: 500;
	}

	.bullets-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
	}

	.bullet-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
	}

	.bullet-icon {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background-color: #f1ebd9;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.1rem;
		flex-shrink: 0;
		color: #b5945b;
		box-shadow: 0 4px 10px rgba(181, 148, 91, 0.08);
	}

	.bullet-text strong {
		display: block;
		font-size: 0.95rem;
		color: #0f172a;
		margin-bottom: 0.15rem;
	}

	.bullet-text p {
		margin: 0;
		font-size: 0.85rem;
		color: #64748b;
	}

	/* Right Panel Collage Styles */
	.collage-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	/* Fixed sizing container for diamonds to nestle together */
	.mosaic-wrapper {
		position: relative;
		width: 580px;
		height: 580px;
		margin-bottom: 2rem;
	}

	.diamond-card {
		position: absolute;
		width: 140px;
		height: 140px;
		transform: rotate(45deg);
		overflow: hidden;
		border-radius: 20px;
		background: #ffffff;
		border: 4px solid #ffffff;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
		transition:
			transform 0.3s cubic-bezier(0.25, 1, 0.5, 1),
			box-shadow 0.3s ease;
		z-index: 2;
	}

	.diamond-card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: rotate(-45deg) scale(1.5);
		transition: transform 0.5s ease;
	}

	.diamond-card:hover {
		transform: rotate(45deg) scale(1.05);
		box-shadow: 0 15px 35px rgba(181, 148, 91, 0.18);
		z-index: 10;
	}

	.diamond-card:hover img {
		transform: rotate(-45deg) scale(1.65);
	}

	/* Diamond Badge (Unique Stays / BITS VIZAG logo card) */
	.diamond-badge {
		position: absolute;
		width: 140px;
		height: 140px;
		transform: rotate(45deg);
		border-radius: 20px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
		z-index: 3;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.green-badge {
		background: linear-gradient(135deg, #1e3a2b 0%, #0c1a12 100%);
		border: 4px solid #ffffff;
	}

	.badge-content {
		transform: rotate(-45deg);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		text-align: center;
	}

	.badge-text {
		font-size: 0.72rem;
		font-weight: 700;
		color: #ffffff;
		letter-spacing: 0.15em;
	}

	/* Center Gold Circle Overlap */
	.center-gold-circle {
		position: absolute;
		width: 125px;
		height: 125px;
		border-radius: 50%;
		background: linear-gradient(135deg, #c5a265 0%, #a48245 100%);
		border: 4px solid #ffffff;
		box-shadow: 0 8px 20px rgba(164, 130, 69, 0.35);
		z-index: 8;
		display: flex;
		align-items: center;
		justify-content: center;
		/* Exact Center in 580x580 box: (580 - 125)/2 = 227px */
		top: 227px;
		left: 227px;
		transition: transform 0.3s ease;
	}

	.center-gold-circle:hover {
		transform: scale(1.08);
	}

	.circle-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		color: #ffffff;
	}

	.circle-tag {
		font-size: 0.6rem;
		font-weight: 800;
		letter-spacing: 0.2em;
		opacity: 0.85;
	}

	.circle-main {
		font-size: 1.05rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		margin: 0.05rem 0;
	}

	/* Diamond Coordinates representing reference image overlaps */
	.d1 {
		top: 15px;
		left: 150px;
	} /* Top Left */
	.d2 {
		top: 85px;
		left: 290px;
	} /* Top Mid */
	.d3 {
		top: 15px;
		left: 420px;
	} /* Green Badge (Top Right) */

	.d4 {
		top: 150px;
		left: 80px;
	} /* Mid Left */
	.d5 {
		top: 220px;
		left: 360px;
	} /* Mid Right */

	.d6 {
		top: 285px;
		left: 10px;
	} /* Mid Bottom Left */
	.d7 {
		top: 355px;
		left: 150px;
	} /* Mid Bottom Mid */

	.d8 {
		top: 475px;
		left: 40px;
	} /* Bottom Left */
	.d9 {
		top: 425px;
		left: 290px;
	} /* Bottom Mid */
	.d10 {
		top: 355px;
		left: 420px;
	} /* Bottom Right */

	/* Responsive design */
	@media (max-width: 992px) {
		.mosaic-section {
			padding: 4rem 1.5rem;
		}

		.inner-container {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.info-panel {
			align-items: center;
			text-align: center;
		}

		.bullets-container {
			max-width: 500px;
		}
	}

	@media (max-width: 640px) {
		.mosaic-section {
			padding: 2.5rem 1rem;
		}

		.mosaic-wrapper {
			width: 260px;
			height: 260px;
			margin: 1.5rem auto;
		}

		.diamond-card {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			border-width: 2px;
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
		}

		.diamond-badge {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			border-width: 2px;
		}

		.badge-content svg {
			width: 12px;
			height: 12px;
		}

		.badge-text {
			font-size: 0.38rem;
			letter-spacing: 0.08em;
		}

		.center-gold-circle {
			width: 58px;
			height: 58px;
			top: 101px;
			left: 101px;
			border-width: 2px;
			box-shadow: 0 4px 10px rgba(164, 130, 69, 0.25);
		}

		.circle-main {
			font-size: 0.55rem;
		}

		.circle-tag {
			font-size: 0.35rem;
		}

		/* Mobile Native Coordinates (Perfect 260px containment) */
		.d1 {
			top: 8px;
			left: 73px;
		}
		.d2 {
			top: 38px;
			left: 134px;
		}
		.d3 {
			top: 8px;
			left: 195px;
		}
		.d4 {
			top: 68px;
			left: 43px;
		}
		.d5 {
			top: 98px;
			left: 162px;
		}
		.d6 {
			top: 128px;
			left: 12px;
		}
		.d7 {
			top: 158px;
			left: 73px;
		}
		.d8 {
			top: 210px;
			left: 30px;
		}
		.d9 {
			top: 188px;
			left: 134px;
		}
		.d10 {
			top: 158px;
			left: 195px;
		}
	}
</style>
