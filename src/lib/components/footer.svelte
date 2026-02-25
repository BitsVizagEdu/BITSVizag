<script>
	import gsap from 'gsap/dist/gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		let timeline_footer = gsap.timeline({
			scrollTrigger: {
				trigger: '#joinnowf',
				toggleActions: 'play none none none',
				start: '0% 80%'
				// markers: true
			}
		});

		timeline_footer
			.from('#joinnow', {
				opacity: 0,
				translateY: '-20px',
				duration: 0.8
			})
			.from(
				'#tagline-f',
				{
					opacity: 0,
					translateY: '20px',
					duration: 0.8
				},
				'-=0.4'
			)
			.from(
				'#joinnowbtn',
				{
					opacity: 0,
					translateY: '15px',
					duration: 0.8
				},
				'-=0.4'
			);
	});
</script>

<section class="" data-aos="fade-up" data-aos-anchor-placement="top-center">
	<div>
		<div class="bg-[#0c1637] rounded-t-[40px]">
			<div
				id="joinnowf"
				class="cta-gradient relative h-[450px] sm:h-[550px] md:h-[75vh] rounded-[40px] overflow-hidden flex flex-col items-center justify-center p-6 sm:p-12 text-center"
			>
				<!-- Subtle pattern overlay -->
				<div
					class="absolute inset-0 opacity-[0.03] pointer-events-none"
					style="background-image: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');"
				></div>

				<div class="relative z-10 flex flex-col items-center">
					<div id="joinnow" class="mb-2 sm:mb-6">
						<h2
							class="font-black text-white leading-[0.9] tracking-tighter text-[160px] sm:text-9xl lg:text-[140px] xl:text-[160px]"
						>
							JOIN NOW!
						</h2>
					</div>

					<div id="tagline-f" class="mb-6 sm:mb-10">
						<p
							class="font-bold text-white/90 text-[5.5vw] xs:text-2xl sm:text-3xl md:text-4xl tracking-tight"
						>
							Be a Part of <span class="text-blue-200">BITS FAMILY</span>
						</p>
					</div>

					<div id="joinnowbtn">
						<a
							href="/contactus"
							class="inline-block transform transition-all duration-500 hover:scale-105 active:scale-95"
						>
							<button
								class="group flex items-center gap-3 bg-white hover:bg-[#2672d5] text-[#0c1637] hover:text-white px-6 py-3.5 sm:px-10 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-2xl duration-500"
							>
								<div
									class="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#0c1637] group-hover:bg-white rounded-full transition-colors duration-500"
								>
									<svg
										class="rotate-[-45deg] fill-white group-hover:fill-[#2672d5] w-3.5 h-3.5 sm:w-5 sm:h-5 transition-all duration-500"
										viewBox="0 0 24 25"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M16.961 18.085a.459.459 0 0 0 .023.68.545.545 0 0 0 .732-.02l5.648-5.592.333-.33-.333-.33-5.572-5.516a.545.545 0 0 0-.732-.02.459.459 0 0 0-.023.68l4.76 4.712H.713c-.276 0-.5.224-.498.5 0 .276.226.5.502.5h21.028l-4.784 4.736Z"
										></path>
									</svg>
								</div>
								Admissions Enquiry
							</button>
						</a>
					</div>
				</div>
			</div>
			<div class="md:h-[350px] flex 3xs:flex-col md:flex-row p-6">
				<div class=" md:w-[50%] flex flex-col justify-between md:py-8">
					<div>
						<p
							class="text-center md:text-start text-white font-semibold 3xs:text-xl md:text-2xl md:mr-[5%]"
						>
							"The future belongs to those who believe in the beauty of their dreams."
						</p>
					</div>
					<div
						class="flex 3xs:flex-col my-5 md:my-0 lg:flex-row items-center md:items-start lg:items-center"
					>
						<a
							href="/contactus"
							class="flex items-center justify-center group duration-700 bg-gradient-to-r hover:bg-gradient-to-t from-[#6edad8] via-[#64d9d6] to-[#1aa9e8] w-full max-w-[350px] h-[60px] rounded-3xl mx-auto my-4"
						>
							<span
								class="font-semibold text-xl group-hover:scale-110 duration-300 text-center w-full flex items-center justify-center"
							>
								Contact US
							</span>
						</a>
						<div
							class="grid grid-cols-5 items-center lg:px-4 3xs:my-4 md:my-0 justify-items-center 3xs:w-[100%] md:mt-5 lg:mt-0 md:w-[90%] lg:w-[50%]"
						>
							<div>
								<a href="https://www.facebook.com/BITSVizagOfficial/"
									><img src="/facebook.svg" alt="Facebook" /></a
								>
							</div>
							<div>
								<a href="https://www.instagram.com/bits_vizag_official/"
									><img src="/instagram.svg" alt="Instagram" /></a
								>
							</div>
							<div>
								<a href="https://www.youtube.com/@bitsmediacenter8449"
									><img src="/youtube.svg" alt="YouTube" /></a
								>
							</div>
							<div><a href=""><img src="/twitter.svg" alt="Twitter" /></a></div>
							<div>
								<a
									href="https://www.linkedin.com/school/baba-institute-of-technology-&-science-p.m.-palem-/about/"
									><img src="/linkedin.svg" alt="LinkedIn" /></a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="flex 2xs:flex-row md:w-[50%] justify-evenly">
					<div class="flex 3xs:flex-col text-white pr-6 pt-6">
						<div class="w-[60%] xl:w-[50%]">
							<div class="pb-2 w-max">
								<a href="/" class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300">Home</a
								>
							</div>
							<div class="pb-2 w-max">
								<a
									href="/aboutus/About-BITS"
									class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300">About Us</a
								>
							</div>
							<div class="pb-2 w-max">
								<a
									href="/department/Department of BS&H"
									class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300">Academics</a
								>
							</div>
							<div class="pb-2 w-max">
								<a
									href="/facilities"
									class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300">Facilities</a
								>
							</div>
							<div class="pb-2 w-max">
								<a href="/gallery" class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300"
									>Gallery</a
								>
							</div>
							<!-- <div class="pb-2 w-max"><p class="sm:hover:scale-[1.1] cursor-pointer  duration-300">Credits</p></div> -->
						</div>
						<div class="w-[30%] xl:w-[50%] mt-10">
							<div class="pb-2 w-max">
								<a href="#/" class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300"
									>Exam Cell</a
								>
							</div>
							<div class="pb-2 w-max">
								<a href="#/" class="sm:hover:scale-[1.1] cursor-pointer text-lg duration-300"
									>Payment</a
								>
							</div>
							<!-- <div class="pb-2 w-max"><p class="sm:hover:scale-[1.1] cursor-pointer  duration-300">NFB Education</p></div> -->
						</div>
					</div>
					<div class="">
						<iframe
							class="rounded-2xl w-[100%] xl:w-auto"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5764681637656!2d83.32984371488234!3d17.811591387825697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395befa9dda303%3A0x5781c56a5df412!2sBaba%20Institute%20of%20Technology%20%26%20Sciences!5e0!3m2!1sen!2sin!4v1689674946811!5m2!1sen!2sin"
							width="400"
							height="300"
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
	<div class="text-center bg-[#0c1637] my-[-2px] text-white py-2">
		Made with ❤️ by <span class="text-orange-300"
			><a href="https://www.konkorde.org">KONKORDE</a></span
		>
	</div>
</section>

<style>
	.cta-gradient {
		background: linear-gradient(-45deg, #0c1637, #1e3a8a, #2672d5, #0ea5e9);
		background-size: 400% 400%;
		animation: gradientShift 10s ease infinite;
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

	/* Fix for long tagline responsiveness */
	#tagline-f p {
		max-width: 90vw;
		margin: 0 auto;
	}

	@media (max-width: 640px) {
		h2 {
			font-size: 18vw;
		}
	}
</style>
