<script>
	import { slide } from 'svelte/transition';

	export let title = '';
	export let eyebrow = '';
	/** @type {string[]} */
	export let intro = [];
	/** @type {{ heading: string; text?: string; bullets?: string[] }[]} */
	export let sections = [];
	export let imageSrc = '';
	export let imageAlt = '';
	export let personName = '';
	export let personMeta = '';
	export let personRole = '';
	export let mediaFirst = false; // Kept for API compatibility
	export let imageFit = 'cover';
	export let disableImageMotion = false;
	export let stickyMedia = true;

	let isExpanded = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<section class="about-premium-wrapper">
	<!-- Main centered outer layout canvas matching the screenshot's white viewport -->
	<div
		class="relative w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center justify-center"
	>
		<!-- Skewed Cyan Background Card (Absolute, offset to the left, beautifully rotated) -->
		<!-- On desktop: Skewed 5.5deg and starts at right-[15%] to let the image float on the right edge -->
		<div
			class="absolute inset-y-0 left-4 right-4 lg:right-[15%] bg-[#e8f7f9] border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.02)] rounded-[2.5rem] transform lg:skew-y-[5.5deg] pointer-events-none"
		></div>

		<!-- Custom Geometry Container (Centering wrapper, increased to 420px height for a larger image) -->
		<div class="relative z-10 w-full lg:h-[420px] flex flex-col py-8 lg:py-0">
			<!-- Image Column - Right side aligned, width 44%, height 94%, vertically centered on desktop -->
			<div class="showcase-image-wrap z-20 p-2 lg:p-0">
				<div class="image-3d-wrap">
					<!-- Colored aura shadow under the 3D card -->
					<div
						class="absolute -inset-1.5 bg-gradient-to-tr from-[#00bcd4]/30 to-[#2563eb]/25 rounded-[26px] blur-md opacity-40"
					></div>

					<div class="image-box relative w-full h-full" class:no-motion={disableImageMotion}>
						<img
							src={imageSrc}
							alt={imageAlt || title}
							class="transition-transform duration-[1200ms] ease-out hover:scale-105"
							style="object-fit: {imageFit};"
						/>

						<!-- Premium caption banner for credentials/names -->
						{#if personName || personRole}
							<div
								class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white flex flex-col rounded-b-[26px]"
							>
								<span class="text-[9px] font-black uppercase tracking-[0.2em] text-[#00bcd4]"
									>{personRole}</span
								>
								<strong class="text-sm font-extrabold mt-0.5 tracking-wide">{personName}</strong>
								{#if personMeta}
									<span class="text-[10px] text-white/70 mt-0.5 font-medium">{personMeta}</span>
								{/if}
							</div>
						{/if}
					</div>
				</div>
			</div>

			<!-- Content Column - Left side aligned, width 52%, vertically centered inside card -->
			<div class="showcase-content-wrap z-20 text-slate-800">
				{#if eyebrow}
					<span class="text-[10px] font-black uppercase tracking-[0.25em] text-[#0b4fb0]/80 mb-2"
						>{eyebrow}</span
					>
				{/if}

				<h2
					class="text-2xl sm:text-3.5xl font-black tracking-tight text-slate-900 leading-[1.2] max-w-xl"
				>
					{title}
				</h2>

				<!-- Shortened, highly effective introduction matter -->
				<p
					class="text-slate-600 font-medium leading-[1.65] text-[13.5px] sm:text-[14.5px] mt-4 max-w-[500px] text-justify text-pretty"
				>
					{intro[0] ||
						'Baba Institute of Technology and Sciences stands as an institution of high distinction, delivering industry-focused engineering excellence.'}
				</p>

				<!-- Read More Button matching the image styling perfectly -->
				<div class="mt-6 flex">
					<button
						on:click={toggleExpand}
						class="px-6 py-2.5 bg-[#00bcd4] hover:bg-[#00acc1] text-white font-extrabold text-[12px] uppercase tracking-wider rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 transform active:scale-95 cursor-pointer"
					>
						{isExpanded ? 'Close Details' : 'Read More'}
					</button>
				</div>
			</div>
		</div>

		<!-- Expandable Details Grid utilizing native Svelte transition slide -->
		{#if isExpanded}
			<div transition:slide={{ duration: 500 }} class="w-full mt-4 z-20">
				<div
					class="bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 md:grid-cols-2 gap-8 mt-4"
				>
					<!-- Additional Matter Column -->
					<div class="flex flex-col gap-4">
						<h3
							class="text-[15px] font-extrabold text-slate-800 border-b pb-2 border-slate-100 flex items-center gap-2.5"
						>
							<span class="w-1.5 h-5 bg-[#00bcd4] rounded-full"></span>
							Academic Foundation
						</h3>
						{#each intro.slice(1) as para}
							<p class="text-slate-600 text-[13px] leading-relaxed text-justify">{para}</p>
						{/each}
						{#if intro.length <= 1}
							<p class="text-slate-600 text-[13px] leading-relaxed text-justify">
								Our engineering ecosystems combine state-of-the-art laboratory experimentation with
								high-fidelity classroom learning to develop robust student foundations, enabling
								graduates to conquer global industry landscapes.
							</p>
						{/if}
					</div>

					<!-- Strategic Sections (Vision, Mission, Trust, or Messages) -->
					<div class="flex flex-col gap-6">
						{#each sections as sec}
							<div class="flex flex-col gap-2">
								<h3
									class="text-[15px] font-extrabold text-[#be123c] border-b pb-2 border-slate-100 flex items-center gap-2.5"
								>
									<span class="w-1.5 h-5 bg-[#be123c] rounded-full"></span>
									{sec.heading}
								</h3>
								{#if sec.text}
									<p class="text-slate-600 text-[13px] leading-relaxed">{sec.text}</p>
								{/if}
								{#if sec.bullets}
									<ul class="list-disc pl-5 text-slate-600 text-[13px] leading-relaxed space-y-1.5">
										{#each sec.bullets as bullet}
											<li>{bullet}</li>
										{/each}
									</ul>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.about-premium-wrapper {
		background: #ffffff; /* Pure white canvas backing exactly like the screenshot */
		font-family: 'Inter', 'Segoe UI', sans-serif;
	}

	/* 3D Isometric View Perspective skewing the image right-side closer, left-side receding (rotated layout) */
	.image-3d-wrap {
		perspective: 1200px;
		transform-style: preserve-3d;
	}

	.image-3d-wrap > .image-box {
		transform: rotateY(-18deg) rotateX(1.5deg) rotateZ(1deg) scale(1.02);
		transition:
			transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
			box-shadow 0.6s ease;
	}

	/* Micro-animation smoothly flattening the image and scaling on hover for premium response */
	.image-3d-wrap:hover > .image-box {
		transform: rotateY(-6deg) rotateX(0.5deg) rotateZ(0.5deg) scale(1.05);
	}

	.image-box img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 26px;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
	}

	/* Desktop layout absolute positioning styles with rotated layout & neatly increased image size */
	@media (min-width: 1024px) {
		.showcase-image-wrap {
			position: absolute;
			right: 0;
			left: auto;
			top: 3%; /* Vertically centered (100% - 94% = 6% remaining, so 3% top/bottom) */
			height: 94%; /* Height increased from 82% to 94% for a larger, premium image */
			width: 44%; /* Width increased from 38% to 44% for a wider, bolder presentation */
		}

		.showcase-content-wrap {
			position: absolute;
			left: 0;
			right: auto;
			top: 0;
			bottom: 0;
			width: 52%; /* Content takes 52% width, leaving a premium 4% gap before the 44% wide image starts at right: 0 */
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 2rem;
			padding-right: 3rem;
		}

		.image-3d-wrap {
			width: 100%;
			height: 100%;
		}
	}

	/* Mobile layout fallback styles with neatly increased image size */
	@media (max-width: 1023px) {
		.showcase-image-wrap {
			width: 92%;
			max-width: 390px; /* Increased from 340px to 390px to match premium high-res display */
			margin: 0 auto 2rem;
		}

		.image-box {
			height: 390px; /* Taller image to match the larger, premium desktop aesthetic */
		}

		.showcase-content-wrap {
			width: 100%;
			padding: 0 1rem;
		}
	}

	.image-box.no-motion {
		transform: none !important;
		transition: none !important;
	}
	.image-3d-wrap:hover > .image-box.no-motion {
		transform: none !important;
	}
</style>
