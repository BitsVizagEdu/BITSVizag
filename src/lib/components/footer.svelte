<script>
	/** @type {any} */
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	/** @type {HTMLElement} */
	let joinSection;
	/** @type {HTMLElement[]} */
	let bgElements = [];
	let isDockedAtCta = false;
	let isScrolledPastHero = false;

	onMount(() => {
		/** @type {any} */
		const g = gsap;
		g.registerPlugin(ScrollTrigger);

		// Visibility controller: Only show floating CTA after scrolling down a bit
		ScrollTrigger.create({
			start: 'top -10%',
			onUpdate: (self) => {
				isScrolledPastHero = self.scroll() > 300;
			}
		});

		// Optimized Mouse move parallax
		let xPos = 0;
		let yPos = 0;
		let mouseX = 0;
		let mouseY = 0;
		let isMoving = false;
		/** @type {number | null} */
		let animationId = null;

		/** @param {MouseEvent} e */
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			const { innerWidth, innerHeight } = window;
			mouseX = (clientX / innerWidth - 0.5) * 30;
			mouseY = (clientY / innerHeight - 0.5) * 30;

			if (!isMoving && !animationId) {
				isMoving = true;
				ticker();
			}
		};

		const ticker = () => {
			xPos += (mouseX - xPos) * 0.08;
			yPos += (mouseY - yPos) * 0.08;

			bgElements.forEach((el, i) => {
				if (el) {
					const factor = (i + 1) * 0.5;
					g.set(el, {
						x: xPos * factor,
						y: yPos * factor,
						willChange: 'transform'
					});
				}
			});

			g.set('.cta-text-shadow', {
				x: -xPos * 0.2,
				y: -yPos * 0.2,
				willChange: 'transform'
			});

			if (Math.abs(mouseX - xPos) > 0.1 || Math.abs(mouseY - yPos) > 0.1) {
				animationId = requestAnimationFrame(ticker);
			} else {
				isMoving = false;
				animationId = null;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Entry Animations
		let timeline_footer = g.timeline({
			scrollTrigger: {
				trigger: '#joinnowf',
				toggleActions: 'play none none none',
				start: 'top 80%'
			}
		});

		/** @type {IntersectionObserver | null} */
		let ctaObserver = null;
		if (joinSection) {
			ctaObserver = new IntersectionObserver(
				(entries) => {
					const [entry] = entries;
					isDockedAtCta = entry.isIntersecting;
				},
				{
					threshold: 0,
					rootMargin: '100px 0px 100px 0px'
				}
			);
			ctaObserver.observe(joinSection);
		}

		// Split text animation for JOIN NOW!
		const joinText = document.querySelector('#joinnow-text');
		if (joinText && joinText.textContent) {
			const letters = joinText.textContent.trim().split('');
			joinText.textContent = '';
			letters.forEach((char) => {
				const span = document.createElement('span');
				span.textContent = char === ' ' ? '\u00A0' : char;
				span.style.display = 'inline-block';
				joinText.appendChild(span);
			});
		}

		timeline_footer
			.from('#joinnow-text span', {
				opacity: 0,
				y: 80,
				scale: 0.8,
				transformOrigin: '50% 100%',
				stagger: 0.04,
				duration: 1.2,
				ease: 'power4.out'
			})
			.from(
				'#tagline-f',
				{
					opacity: 0,
					y: 20,
					duration: 1,
					ease: 'power2.out'
				},
				'-=0.8'
			)
			.from(
				'#joinnowbtn',
				{
					opacity: 0,
					y: 20,
					duration: 1,
					ease: 'power2.out'
				},
				'-=0.8'
			)
			.from(
				'.floating-shape',
				{
					opacity: 0,
					scale: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: 'power2.out'
				},
				'-=1.2'
			);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
			if (ctaObserver) {
				ctaObserver.disconnect();
			}
		};
	});
</script>

<section class="font-roboto" data-aos="fade-up" data-aos-anchor-placement="top-center">
	<div>
		<div class="bg-[#0c1637] rounded-t-[40px] overflow-hidden">
			<div
				id="joinnowf"
				bind:this={joinSection}
				class="cta-gradient relative h-[300px] sm:h-[350px] md:h-[45vh] flex flex-col items-center justify-center p-4 sm:p-8 text-center"
			>
				<!-- Simplified multi-layered background for better performance -->
				<div class="absolute inset-0 overflow-hidden pointer-events-none">
					<div
						bind:this={bgElements[0]}
						class="floating-shape absolute top-[15%] left-[10%] w-32 h-32 bg-white/10 rounded-full blur-2xl will-change-transform"
					></div>
					<div
						bind:this={bgElements[1]}
						class="floating-shape absolute bottom-[15%] right-[15%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
					></div>
				</div>

				<!-- Subtle pattern overlay -->
				<div
					class="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay shadow-inner"
					style="background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');"
				></div>

				<div class="relative z-10 flex flex-col items-center">
					<div id="joinnow" class="mb-1 sm:mb-4 perspective-1000">
						<h2
							id="joinnow-text"
							class="font-black text-white leading-[0.8] tracking-tighter text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[120px] uppercase select-none drop-shadow-2xl"
						>
							JOIN NOW!
						</h2>
						<!-- Decorative floating shadow text -->
						<div
							class="cta-text-shadow absolute inset-0 -z-10 opacity-10 blur-md pointer-events-none font-black text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[120px] uppercase translate-x-1 translate-y-1"
						>
							JOIN NOW!
						</div>
					</div>

					<div id="tagline-f" class="mb-4 sm:mb-8">
						<p
							class="font-medium text-white/90 text-base sm:text-xl md:text-2xl tracking-wide uppercase italic flex flex-wrap items-center justify-center gap-x-2 gap-y-3"
						>
							Launch Your <span class="text-white font-black border-b-2 border-blue-400/50 pb-0.5"
								>Greatness</span
							>
							at
							<span
								class="inline-flex gap-1 sm:gap-1 align-middle scale-[0.65] sm:scale-75 origin-center transition-transform duration-500 hover:scale-[0.85]"
							>
								<span
									class="w-6 h-6 sm:w-9 sm:h-9 bg-[#ec4899] rounded-lg flex items-center justify-center text-white font-black shadow-[0_5px_15px_rgba(236,72,153,0.3)] border border-white/20 not-italic text-sm sm:text-xl"
									>B</span
								>
								<span
									class="w-6 h-6 sm:w-9 sm:h-9 bg-[#84cc16] rounded-lg flex items-center justify-center text-white font-black shadow-[0_5px_15px_rgba(132,204,22,0.3)] border border-white/20 not-italic text-sm sm:text-xl"
									>I</span
								>
								<span
									class="w-6 h-6 sm:w-9 sm:h-9 bg-[#f59e0b] rounded-lg flex items-center justify-center text-white font-black shadow-[0_5px_15px_rgba(245,158,11,0.3)] border border-white/20 not-italic text-sm sm:text-xl"
									>T</span
								>
								<span
									class="w-6 h-6 sm:w-9 sm:h-9 bg-[#0ea5e9] rounded-lg flex items-center justify-center text-white font-black shadow-[0_5px_15px_rgba(14,165,233,0.3)] border border-white/20 not-italic text-sm sm:text-xl"
									>S</span
								>
							</span>
						</p>
					</div>

					<div
						id="joinnowbtn"
						class="enquiry-sticky-wrap"
						class:is-docked-home={isDockedAtCta}
						class:is-hidden={!isDockedAtCta && !isScrolledPastHero}
					>
						<a href="/contactus" class="enquiry-sticky-cta inline-block group relative">
							<!-- Glow Effect behind button -->
							<div
								class="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-55 transition duration-700"
							></div>

							<button
								class="enquiry-sticky-btn relative flex items-center gap-2 bg-white text-[#0c1637] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:-translate-y-0.5 group-active:translate-y-0"
							>
								<span class="inline-flex items-center gap-1.5">
									<span class="join-pulse"></span>
									Admissions Open 2026
								</span>
								<span class="enquiry-divider">|</span>
								<span class="whitespace-nowrap">Join Now</span>
								<div
									class="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-[#0c1637] rounded-full transition-all duration-300 group-hover:translate-x-0.5"
								>
									<svg class="fill-white w-2.5 h-2.5 sm:w-3 sm:h-3" viewBox="0 0 24 25">
										<path
											d="M16.961 18.085a.459.459 0 0 0 .023.68.545.545 0 0 0 .732-.02l5.648-5.592.333-.33-.333-.33-5.572-5.516a.545.545 0 0 0-.732-.02.459.459 0 0 0-.023.68l4.76 4.712H.713c-.276 0-.5.224-.498.5 0 .276.226.5.502.5h21.028l-4.784 4.736Z"
										></path>
									</svg>
								</div>
							</button>
						</a>
					</div>
				</div>
			</div>
			<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-6 md:p-10">
				<!-- Column 1: Brand & Contact -->
				<div class="md:col-span-12 lg:col-span-4 space-y-6">
					<div class="space-y-3">
						<p
							class="text-white/80 font-medium text-base leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1"
						>
							"The future belongs to those who believe in the beauty of their dreams."
						</p>
					</div>

					<div class="space-y-5 pt-2">
						<a
							href="/contactus"
							class="group relative flex items-center justify-center w-full max-w-[280px] h-[54px] rounded-xl bg-gradient-to-r from-blue-600 to-[#1aa9e8] text-white font-bold text-base overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1"
						>
							<span class="relative z-10">Contact Us Directly</span>
							<div
								class="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
							></div>
						</a>

						<div class="flex items-center gap-4">
							<a
								href="https://www.facebook.com/BITSVizagOfficial/"
								class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300"
								aria-label="Facebook"
							>
								<i class="fa-brands fa-facebook-f text-base"></i>
							</a>
							<a
								href="https://www.instagram.com/bits_vizag_official/"
								class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-pink-600 hover:text-white hover:scale-110 transition-all duration-300"
								aria-label="Instagram"
							>
								<i class="fa-brands fa-instagram text-base"></i>
							</a>
							<a
								href="https://www.youtube.com/@bitsmediacenter8449/videos"
								class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300"
								aria-label="YouTube"
							>
								<i class="fa-brands fa-youtube text-base"></i>
							</a>
							<a
								href="https://www.linkedin.com/company/bits-vizag/posts/?feedView=all"
								class="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-blue-700 hover:text-white hover:scale-110 transition-all duration-300"
								aria-label="LinkedIn"
							>
								<i class="fa-brands fa-linkedin-in text-base"></i>
							</a>
						</div>
					</div>
				</div>

				<!-- Column 2: Navigation Groups -->
				<div class="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-4">
					<div class="space-y-4">
						<h4 class="text-white font-bold text-[11px] uppercase tracking-widest opacity-30">
							Main Links
						</h4>
						<ul class="space-y-2.5">
							<li>
								<a
									href="/"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Home</a
								>
							</li>
							<li>
								<a
									href="/aboutus/About-BITS"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>About Us</a
								>
							</li>
							<li>
								<a
									href="/department/Department of BS&H"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Academics</a
								>
							</li>
							<li>
								<a
									href="/facilities"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Facilities</a
								>
							</li>
						</ul>
					</div>
					<div class="space-y-4">
						<h4 class="text-white font-bold text-[11px] uppercase tracking-widest opacity-30">
							Resources
						</h4>
						<ul class="space-y-2.5">
							<li>
								<a
									href="/gallery"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Gallery</a
								>
							</li>
							<li>
								<a
									href="#/"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Exam Cell</a
								>
							</li>
							<li>
								<a
									href="#/"
									class="text-white/60 hover:text-white text-sm hover:translate-x-1 inline-block transition-all duration-300"
									>Payment</a
								>
							</li>
						</ul>
					</div>
				</div>

				<!-- Column 3: Location -->
				<div class="md:col-span-6 lg:col-span-4 space-y-4">
					<h4 class="text-white font-bold text-[11px] uppercase tracking-widest opacity-30">
						Our Location
					</h4>
					<div class="relative rounded-xl overflow-hidden border border-white/10 shadow-xl group">
						<div
							class="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"
						></div>
						<iframe
							title="BITS Campus Location"
							class="w-full relative z-0 grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5764681637656!2d83.32984371488234!3d17.811591387825697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395befa9dda303%3A0x5781c56a5df412!2sBaba%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1689674946811!5m2!1sen!2sin"
							width="100%"
							height="180"
							style="border:0;"
							allowfullscreen={true}
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="bg-[#070e24] border-t border-white/5 py-12">
		<div
			class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-24 text-[10.5px] md:text-[13px] text-white/40 font-medium tracking-wide"
		>
			<p class="text-center">
				Copyrights &copy; {new Date().getFullYear()} All Rights Reserved by
				<span class="text-[#00aeef] font-bold">BITS VIZAG</span>
			</p>

			<span class="hidden md:inline text-white/10">|</span>

			<p class="text-center">
				Developed by
				<a
					href="https://www.konkorde.org"
					class="text-white/60 hover:text-[#00aeef] transition-colors font-semibold"
					>BITS STUDENTS 2026</a
				>
			</p>

			<span class="hidden md:inline text-white/10">|</span>

			<p class="text-center">
				<a href="mailto:tpo@bitsvizag.com" class="hover:text-[#00aeef] transition-colors lowercase"
					>tpo@bitsvizag.com</a
				>
			</p>
		</div>
	</div>
</section>

<style>
	:global(.font-roboto) {
		font-family: 'Roboto', sans-serif !important;
	}

	.perspective-1000 {
		perspective: 1000px;
	}

	.cta-gradient {
		background: linear-gradient(-45deg, #0c1637, #1e3a8a, #4f46e5, #0ea5e9, #0c1637);
		background-size: 400% 400%;
		animation: gradientShift 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
		position: relative;
	}

	.cta-gradient::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
		pointer-events: none;
	}

	@keyframes gradientShift {
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

	/* Parallax floating shapes animation */
	.floating-shape {
		will-change: transform;
	}

	@media (max-width: 640px) {
		h2 {
			font-size: 15vw !important;
		}
	}

	.enquiry-sticky-wrap {
		position: fixed;
		left: 50%;
		bottom: max(8px, env(safe-area-inset-bottom));
		transform: translateX(-50%);
		z-index: 1200;
		width: calc(100% - 1.5rem);
		display: flex;
		justify-content: center;
		pointer-events: none;
		transition:
			transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
			opacity 0.4s ease,
			visibility 0.4s;
		opacity: 1;
		visibility: visible;
	}

	.enquiry-sticky-wrap.is-hidden {
		opacity: 0;
		visibility: hidden;
		transform: translate(-50%, 20px);
	}

	.enquiry-sticky-wrap.is-docked-home {
		position: relative;
		left: 0;
		bottom: auto;
		transform: none !important;
		opacity: 1 !important;
		visibility: visible !important;
		width: 100%;
		margin-top: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 20;
	}

	.enquiry-sticky-wrap.is-docked-home .enquiry-sticky-cta,
	.enquiry-sticky-wrap.is-docked-home .enquiry-sticky-btn {
		width: max-content;
		margin: 0 auto;
	}

	.enquiry-sticky-cta {
		width: 100%;
		max-width: 390px;
		pointer-events: auto;
	}

	.enquiry-sticky-btn {
		width: 100%;
		justify-content: center;
	}

	@media (min-width: 640px) {
		.enquiry-sticky-wrap {
			bottom: 12px;
			width: auto;
		}

		.enquiry-sticky-cta,
		.enquiry-sticky-btn {
			width: auto;
		}
	}

	.join-pulse {
		width: 0.42rem;
		height: 0.42rem;
		border-radius: 999px;
		background: #22c55e;
		box-shadow: 0 0 0 rgba(34, 197, 94, 0.55);
		animation: pulse-dot 1.6s infinite;
	}

	.enquiry-divider {
		opacity: 0.45;
		font-weight: 600;
	}

	@keyframes pulse-dot {
		0% {
			box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.55);
		}
		70% {
			box-shadow: 0 0 0 7px rgba(34, 197, 94, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
		}
	}

	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}
</style>
