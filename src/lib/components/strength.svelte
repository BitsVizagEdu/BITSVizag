<script>
	const stats = [
		{
			val: '1500+',
			label: 'Undergraduate Students',
			path: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
		},
		{
			val: '200+',
			label: 'Postgraduate Students',
			path: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
		},
		{
			val: '8500+',
			label: 'Alumni',
			path: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
		},
		{
			val: '750+',
			label: 'Interns',
			path: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
		},
		{
			val: '200+',
			label: 'Staff',
			path: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
		},
		{
			val: '3200+',
			label: 'Projects',
			path: 'M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z'
		},
		{
			val: '10+',
			label: 'Patents',
			path: 'M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
		},
		{
			val: '90%',
			label: 'Placements',
			path: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z'
		}
	];
</script>

<section
	data-aos="fade-in"
	class="strength-shell"
>
	<div class="bg-layer" aria-hidden="true">
		<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<defs>
				<pattern id="strength-grid" width="72" height="72" patternUnits="userSpaceOnUse">
					<path d="M72 0H0V72" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="0.5" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#strength-grid)" />
		</svg>
	</div>
	<div class="ambient one" aria-hidden="true"></div>
	<div class="ambient two" aria-hidden="true"></div>

	<div class="strength-container">
		<div class="strength-layout">
			<div class="content-pane" data-aos="fade-right">
				<div>
					<p class="eyebrow">Institutional Excellence</p>
					<h2 class="headline">Why <span>BITS Vizag</span>?</h2>
					<p class="subhead">
						Grooming leaders who are not only thorough professionals but also good human
						beings with values.
					</p>
				</div>

				<div class="quality-card" data-aos="fade-up" data-aos-delay="80">
					<div class="quality-top">
						<div class="quality-accent"></div>
						<div>
							<p class="quality-label">Accredited By</p>
							<p class="quality-value">NAAC A</p>
						</div>
					</div>
					<p class="quality-copy">
						Consistently upholding exceptional academic standards and institutional quality
						across all departments.
					</p>
				</div>

				<a href="/aboutus/About-BITS" class="cta-link" aria-label="Learn more about BITS Vizag">
					<span>More About BITS</span>
					<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
				</a>
			</div>

			<div class="stats-pane">
				{#each stats as item, i}
					<div class="stat-card" data-aos="fade-up" data-aos-delay={i * 55}>
						<div class="icon-wrap">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="stat-icon"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d={item.path} />
							</svg>
						</div>
						<p class="stat-value">{item.val}</p>
						<p class="stat-label">{item.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.strength-shell {
		position: relative;
		overflow: hidden;
		padding: 5.3rem 0;
		font-family: 'Roboto', 'Segoe UI', sans-serif;
		background:
			radial-gradient(1300px 520px at -8% -22%, rgba(44, 111, 252, 0.28), transparent 60%),
			radial-gradient(1000px 500px at 102% 110%, rgba(0, 224, 255, 0.16), transparent 58%),
			linear-gradient(92deg, #07132f 0%, #071736 42%, #071f48 100%);
	}

	.bg-layer {
		position: absolute;
		inset: 0;
		opacity: 0.24;
		pointer-events: none;
	}

	.ambient {
		position: absolute;
		width: 340px;
		height: 340px;
		border-radius: 50%;
		filter: blur(48px);
		opacity: 0.4;
		pointer-events: none;
	}

	.ambient.one {
		top: -150px;
		left: -80px;
		background: rgba(44, 111, 252, 0.5);
	}

	.ambient.two {
		right: -110px;
		bottom: -170px;
		background: rgba(60, 207, 255, 0.34);
	}

	.strength-container {
		position: relative;
		z-index: 2;
		width: min(1680px, 95vw);
		margin: 0 auto;
		padding: 0 1.25rem;
	}

	.strength-layout {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.15rem;
		align-items: start;
	}

	.content-pane {
		display: flex;
		flex-direction: column;
		gap: 1.45rem;
	}

	.eyebrow {
		margin: 0 0 0.5rem;
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgba(161, 196, 255, 0.9);
	}

	.headline {
		margin: 0;
		font-size: clamp(2rem, 4.3vw, 3.85rem);
		line-height: 1.04;
		letter-spacing: -0.02em;
		font-weight: 800;
		color: #f8fbff;
	}

	.headline span {
		color: #7cb4ff;
	}

	.subhead {
		margin: 0.95rem 0 0;
		max-width: 35rem;
		font-size: clamp(1rem, 1.4vw, 1.12rem);
		line-height: 1.55;
		font-weight: 500;
		color: #d2ddf6;
	}

	.quality-card {
		padding: 1.45rem;
		border-radius: 1.15rem;
		border: 1px solid rgba(128, 169, 243, 0.24);
		background: linear-gradient(102deg, rgba(13, 28, 62, 0.9), rgba(16, 33, 71, 0.76));
		box-shadow: 0 14px 36px -22px rgba(29, 90, 208, 0.64);
	}

	.quality-top {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}

	.quality-accent {
		width: 6px;
		height: 3rem;
		border-radius: 999px;
		background: linear-gradient(180deg, #4f98ff, #2f73df);
	}

	.quality-label {
		margin: 0;
		font-size: 0.71rem;
		text-transform: uppercase;
		letter-spacing: 0.17em;
		font-weight: 700;
		color: #9eb8e8;
	}

	.quality-value {
		margin: 0.22rem 0 0;
		font-size: clamp(2rem, 3vw, 2.45rem);
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.02em;
		color: #ffffff;
	}

	.quality-copy {
		margin: 1rem 0 0;
		font-size: 1.02rem;
		line-height: 1.55;
		color: #d1def8;
	}

	.cta-link {
		display: inline-flex;
		align-items: center;
		gap: 0.62rem;
		padding: 0.96rem 1.5rem;
		width: fit-content;
		border-radius: 0.78rem;
		text-decoration: none;
		font-size: 1.03rem;
		font-weight: 700;
		letter-spacing: 0.005em;
		color: #f9fdff;
		background: linear-gradient(100deg, #2c72f0, #3b8cff);
		border: 1px solid rgba(130, 177, 255, 0.36);
		box-shadow: 0 15px 30px -18px rgba(44, 114, 240, 0.95);
		transition: transform 240ms ease, box-shadow 240ms ease;
	}

	.cta-link:hover {
		transform: translateY(-2px);
		box-shadow: 0 20px 34px -20px rgba(44, 114, 240, 0.95);
	}

	.stats-pane {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.9rem;
	}

	.stat-card {
		padding: 1.2rem 0.85rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.78rem;
		border-radius: 1rem;
		border: 1px solid rgba(130, 168, 235, 0.2);
		background: linear-gradient(100deg, rgba(12, 28, 62, 0.86), rgba(16, 34, 74, 0.76));
		box-shadow: 0 14px 30px -24px rgba(26, 82, 194, 0.78);
		transition: transform 260ms ease, border-color 260ms ease;
	}

	.stat-card:hover {
		transform: translateY(-4px);
		border-color: rgba(130, 184, 255, 0.44);
	}

	.icon-wrap {
		width: 3rem;
		height: 3rem;
		border-radius: 0.75rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: rgba(47, 116, 224, 0.24);
		color: #7eb5ff;
	}

	.stat-icon {
		width: 1.38rem;
		height: 1.38rem;
	}

	.stat-value {
		margin: 0;
		font-size: clamp(2rem, 2.7vw, 2.55rem);
		font-weight: 800;
		line-height: 1;
		letter-spacing: -0.02em;
		color: #ffffff;
	}

	.stat-label {
		margin: 0;
		font-size: 0.74rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.11em;
		color: #b6cbed;
	}

	@media (min-width: 1120px) {
		.strength-layout {
			grid-template-columns: minmax(0, 1.02fr) minmax(0, 1.35fr);
			gap: 1.5rem;
		}

		.stats-pane {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 760px) and (max-width: 1119px) {
		.stats-pane {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (max-width: 759px) {
		.strength-shell {
			padding: 4rem 0;
		}

		.strength-container {
			padding: 0 0.95rem;
		}

		.quality-card {
			padding: 1.15rem;
		}

		.cta-link {
			font-size: 0.95rem;
			padding: 0.85rem 1.2rem;
		}

		.stats-pane {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.stat-value {
			font-size: 1.85rem;
		}

		.stat-label {
			font-size: 0.65rem;
		}
	}
</style>
