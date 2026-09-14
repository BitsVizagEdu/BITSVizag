<script>
	// @ts-nocheck
	import Seo from '$lib/components/Seo.svelte';
	import CertificateModal from '$lib/components/CertificateModal.svelte';
	import { getCertificateRecord, formatRollNumber } from '$lib/data/internshipData.js';

	let fullstackRollNo = '';
	let javaRollNo = '';

	let fullstackError = '';
	let javaError = '';

	let isModalOpen = false;
	let activeRecord = null;

	let isVerifyingFullstack = false;
	let isVerifyingJava = false;

	function checkDownloadLimits(rollNo) {
		if (typeof localStorage === 'undefined') return { allowed: true };
		const key = `cert_downloads_${rollNo}`;
		const data = JSON.parse(localStorage.getItem(key) || '{"attempts": 0, "lastAttempt": 0}');
		const now = Date.now();

		if (data.attempts >= 3) {
			return { allowed: false, message: 'You have reached the maximum download attempts. Please contact the internship coordinator.' };
		}

		if (now - data.lastAttempt < 10000) {
			return { allowed: false, message: 'Please wait a few seconds before trying again.' };
		}

		return { allowed: true };
	}

	function incrementDownload(rollNo) {
		if (typeof localStorage === 'undefined') return;
		const key = `cert_downloads_${rollNo}`;
		const data = JSON.parse(localStorage.getItem(key) || '{"attempts": 0, "lastAttempt": 0}');
		data.attempts += 1;
		data.lastAttempt = Date.now();
		localStorage.setItem(key, JSON.stringify(data));
	}

	async function handleAction(programType, action = 'download') {
		const rollNo = programType === 'fullstack' ? fullstackRollNo : javaRollNo;
		const cleaned = (rollNo || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');

		if (!cleaned) {
			if (programType === 'fullstack') {
				fullstackError = 'Please enter your roll number';
			} else {
				javaError = 'Please enter your roll number';
			}
			return;
		}

		if (cleaned.length < 5) {
			if (programType === 'fullstack') {
				fullstackError = 'Please enter a valid BITS roll number (e.g. 23NR1A0589)';
			} else {
				javaError = 'Please enter a valid BITS roll number (e.g. 24NR5A0513)';
			}
			return;
		}

		const limitCheck = checkDownloadLimits(cleaned);
		if (!limitCheck.allowed) {
			if (programType === 'fullstack') {
				fullstackError = limitCheck.message;
			} else {
				javaError = limitCheck.message;
			}
			return;
		}

		if (programType === 'fullstack') {
			fullstackError = '';
			isVerifyingFullstack = true;
		} else {
			javaError = '';
			isVerifyingJava = true;
		}

		try {
			// Show loading "Verifying Certificate..." quickly
			await new Promise((resolve) => setTimeout(resolve, 400));

			const res = await fetch(
				`/api/internship-certificates/search?rollNumber=${encodeURIComponent(
					cleaned
				)}&program=${encodeURIComponent(programType)}`
			);
			const data = await res.json();

			if (programType === 'fullstack') {
				isVerifyingFullstack = false;
			} else {
				isVerifyingJava = false;
			}

			if (!data.success) {
				const errMsg = data.message || 'Certificate not found. Please check your roll number.';
				if (programType === 'fullstack') {
					fullstackError = errMsg;
				} else {
					javaError = errMsg;
				}
				return;
			}

			activeRecord = data;

			if (action === 'view') {
				isModalOpen = true;
			} else {
				// Record the successful download attempt
				incrementDownload(cleaned);

				// Trigger genuine PDF certificate download
				const downloadLink = document.createElement('a');
				downloadLink.href = data.certificateUrl;
				downloadLink.download = `${data.studentName.replace(/[^A-Za-z0-9]/g, '_').replace(/_+/g, '_')}_Internship_Certificate.pdf`;
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			}
		} catch (err) {
			if (programType === 'fullstack') {
				isVerifyingFullstack = false;
				fullstackError = 'Unable to connect to the certificate server. Please try again.';
			} else {
				isVerifyingJava = false;
				javaError = 'Unable to connect to the certificate server. Please try again.';
			}
		}
	}

	function handleKeydown(event, programType) {
		if (event.key === 'Enter') {
			handleAction(programType, 'download');
		}
	}
</script>

<Seo
	title="Internship Program Certificates | BITS Vizag"
	description="Official Internship Program Certificate Portal for BABA Institute of Technology and Sciences. Download Full-stack Development and Java Full Stack Development certificates."
/>

<!-- Main Page Container with Neat Sans Body -->
<div
	class="internship-portal-root font-sans antialiased text-slate-800 selection:bg-[#0A2E5C] selection:text-white"
>
	<!-- Main Background & Content Section -->
	<div
		class="relative w-full min-h-[calc(100vh-48px)] lg:min-h-screen bg-gradient-to-b from-[#F3F7FC] via-[#FFFFFF] to-[#F1F5F9] overflow-hidden pt-1.5 sm:pt-6 pb-6 sm:pb-12 px-2.5 sm:px-6 font-sans"
	>
		<!-- Background Campus Building Watermark (Clean College Building Only - No Text) -->
		<div
			class="absolute inset-x-0 bottom-0 top-[10%] sm:top-[20%] pointer-events-none opacity-[0.15] mix-blend-multiply flex items-center justify-center overflow-hidden select-none"
		>
			<img
				src="/hero-bits.png"
				alt="BITS Vizag Campus"
				class="w-full h-full object-cover object-[center_46%] filter grayscale contrast-125 scale-[1.45] sm:scale-[1.25] pointer-events-none"
			/>
		</div>

		<!-- Soft Background Glows -->
		<div
			class="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"
		></div>
		<div
			class="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-400/10 blur-[100px] rounded-full pointer-events-none"
		></div>

		<div class="relative max-w-6xl mx-auto z-10 flex flex-col items-center font-sans">
			<!-- Hero Title Section with Left Graphic & Right Cap Graphic -->
			<div class="w-full relative flex items-center justify-center mb-4 lg:mb-10 pt-0">
				<!-- Left Callout (Cursive Handwritten Script) matching screenshot -->
				<div
					class="hidden lg:flex flex-col items-start absolute lg:-left-10 xl:-left-16 2xl:-left-20 top-0 select-none -rotate-3 transform"
				>
					<div
						class="cursive-text text-[#0B2545] text-xl lg:text-2xl font-bold leading-tight tracking-tight"
					>
						Skills<br />
						<span class="text-2xl lg:text-3xl text-[#0A2E5C]">Today</span><br />
						<span class="text-base lg:text-lg text-slate-700">A Brighter</span><br />
						<span class="text-xl lg:text-2xl text-[#0B2545]">Tomorrow</span>
					</div>
					<!-- Underline Stroke matching screenshot -->
					<svg
						class="w-24 h-3 text-[#0B2545]/70 -mt-0.5"
						viewBox="0 0 140 20"
						fill="none"
						stroke="currentColor"
					>
						<path d="M5 14 Q 70 4, 135 12" stroke-width="3" stroke-linecap="round" />
					</svg>
				</div>

				<!-- Center Hero Text Content (Clean & Compact) -->
				<div class="text-center max-w-2xl mx-auto px-2 font-sans flex flex-col items-center">
					<!-- Small Upper Category Heading -->
					<span
						class="block text-[8.5px] sm:text-xs md:text-sm font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-[#0A2E5C] uppercase mb-0.5"
					>
						INTERNSHIP PROGRAM
					</span>

					<!-- Clean, Scaled CERTIFICATES - CSE Header -->
					<h1
						class="text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-4xl font-black tracking-tight text-[#0B2545] font-sans uppercase mb-0.5 leading-tight"
					>
						CSE Student - Certificates
					</h1>

					<!-- Bullet Tagline Points -->
					<p
						class="text-[9.5px] sm:text-xs md:text-sm font-medium text-slate-600 flex flex-wrap items-center justify-center gap-1 sm:gap-2.5 mb-0.5 font-sans"
					>
						<span>Recognizing Your Effort</span>
						<span class="text-slate-400">•</span>
						<span>Celebrating Your Growth</span>
						<span class="text-slate-400">•</span>
						<span>Building Your Future</span>
					</p>
				</div>

				<!-- Right Cap Graphic Badge matching screenshot -->
				<div
					class="hidden lg:flex flex-col items-center absolute lg:-right-10 xl:-right-16 2xl:-right-20 top-0 text-center select-none max-w-[125px] font-sans"
				>
					<!-- Graduation Cap Icon -->
					<div class="text-[#0B2545] mb-1 transform hover:rotate-6 transition-transform">
						<svg class="w-12 h-12 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18C5 19.94 8.13 22.18 12 22.18C15.87 22.18 19 19.94 19 17.18V13.18L12 17L5 13.18Z"
							/>
						</svg>
					</div>
					<span
						class="text-[10.5px] font-black text-[#0B2545] leading-tight uppercase tracking-wider font-sans"
					>
						GET CERTIFIED FOR A BRIGHTER TOMORROW
					</span>
				</div>
			</div>

			<!-- The Two Certificate Program Cards (Side by Side matching screenshot exactly) -->
			<div
				class="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8 max-w-5xl mb-4 sm:mb-14 font-sans"
			>
				<!-- ========================================== -->
				<!-- CARD 1: FULL-STACK DEVELOPMENT (Navy Blue) -->
				<!-- ========================================== -->
				<div
					class="relative bg-white rounded-xl sm:rounded-[32px] shadow-[0_8px_24px_rgba(10,46,92,0.08)] sm:shadow-[0_14px_40px_rgba(10,46,92,0.12)] border border-slate-200/80 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(10,46,92,0.18)] transition-all duration-300"
				>
					<!-- Card Top Header (Navy Blue with Layered Wave) -->
					<div
						class="relative bg-gradient-to-b from-[#082852] to-[#0A3366] text-white pt-3 sm:pt-9 pb-5 sm:pb-12 px-3.5 sm:px-6 flex flex-col items-center text-center overflow-hidden"
					>
						<!-- Centered Circle Icon Badge (Code Monitor) -->
						<div
							class="w-10 h-10 sm:w-20 sm:h-20 rounded-full border-[1.5px] sm:border-2 border-white/90 bg-[#082245] flex items-center justify-center shrink-0 mb-1.5 sm:mb-4 shadow-sm sm:shadow-md"
						>
							<svg
								class="w-5 h-5 sm:w-10 sm:h-10 text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<!-- Monitor Screen -->
								<rect x="2" y="3" width="20" height="13" rx="2" ry="2"></rect>
								<!-- Stand -->
								<line x1="12" y1="16" x2="12" y2="20"></line>
								<line x1="8" y1="20" x2="16" y2="20"></line>
								<!-- Code </> Symbols -->
								<polyline points="7 9.5 9.5 11 7 12.5" stroke-width="1.8"></polyline>
								<polyline points="17 9.5 14.5 11 17 12.5" stroke-width="1.8"></polyline>
								<line x1="12.5" y1="8.5" x2="11.5" y2="13.5" stroke-width="1.8"></line>
							</svg>
						</div>

						<!-- Title & Subtitle -->
						<h2
							class="text-sm xs:text-base sm:text-2xl md:text-[1.65rem] font-bold text-white tracking-tight leading-snug font-sans"
						>
							1. MERN-Stack Development
						</h2>
						<p
							class="text-[9.5px] sm:text-sm text-blue-100/90 font-normal mt-0.5 sm:mt-1 font-sans"
						>
							Internship Program Certificate
						</p>

						<!-- Layered Smooth Bottom Wave matching screenshot -->
						<div
							class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none"
						>
							<svg
								class="relative block w-full h-4 sm:h-9 text-white"
								viewBox="0 0 1200 120"
								preserveAspectRatio="none"
							>
								<!-- Dark Accent Under-Wave Layer -->
								<path
									d="M0,0 C300,50 800,80 1200,10 L1200,120 L0,120 Z"
									fill="#051C3A"
									opacity="0.6"
								></path>
								<!-- Primary White Wave Cut Layer -->
								<path d="M0,20 C350,75 850,75 1200,15 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
							</svg>
						</div>
					</div>

					<!-- Card Body Form -->
					<div
						class="p-3 sm:p-7 pt-2 sm:pt-4 flex-1 flex flex-col justify-between bg-white font-sans"
					>
						<div>
							<!-- Roll Number Input Field with User Icon matching screenshot -->
							<div class="relative mb-1.5 sm:mb-2">
								<label for="fullstack-roll" class="sr-only">Enter Your Roll Number</label>
								<div class="relative flex items-center">
									<!-- User Silhouette Avatar Icon -->
									<div class="absolute left-2.5 sm:left-4 text-[#0A2E5C] pointer-events-none">
										<svg
											class="w-4 h-4 sm:w-5 sm:h-5 text-slate-700"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.8"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</div>

									<input
										id="fullstack-roll"
										type="text"
										placeholder="Enter Your Roll Number"
										bind:value={fullstackRollNo}
										on:input={() => (fullstackError = '')}
										on:keydown={(e) => handleKeydown(e, 'fullstack')}
										class="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3.5 rounded-lg sm:rounded-xl border border-slate-300 text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0A2E5C] focus:border-[#0A2E5C] transition-all font-sans"
									/>
								</div>

								<!-- Validation Error Message -->
								{#if fullstackError}
									<p
										class="text-[10px] sm:text-xs text-red-600 font-medium mt-1 flex items-center gap-1 font-sans"
									>
										<i class="fa-solid fa-circle-exclamation text-[9px]"></i>
										<span>{fullstackError}</span>
									</p>
								{/if}
							</div>

							<!-- Sample Roll Numbers Row -->
							<div
								class="flex items-center gap-1.5 text-[9.5px] sm:text-xs text-slate-500 mb-2.5 sm:mb-5 font-sans flex-wrap"
							>
								<span class="text-slate-500 text-[9.5px] sm:text-[11px] font-medium"
									>Sample Roll No:</span
								>
								<button
									type="button"
									on:click={() => {
										fullstackRollNo = '23NR1A0589';
										fullstackError = '';
									}}
									class="px-2 py-0.5 bg-slate-100 hover:bg-blue-100 text-[#0A2E5C] rounded font-mono text-[9.5px] sm:text-[11px] font-bold border border-slate-200 transition"
								>
									23NR1A0589
								</button>
								<button
									type="button"
									on:click={() => {
										fullstackRollNo = '23NR1A0565';
										fullstackError = '';
									}}
									class="px-2 py-0.5 bg-slate-100 hover:bg-blue-100 text-[#0A2E5C] rounded font-mono text-[9.5px] sm:text-[11px] font-bold border border-slate-200 transition"
								>
									23NR1A0565
								</button>
							</div>
						</div>

						<!-- Action Button: Download Certificate with download icon -->
						<div class="w-full mt-1">
							<button
								type="button"
								on:click={() => handleAction('fullstack', 'download')}
								disabled={isVerifyingFullstack}
								class="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 rounded-lg sm:rounded-xl bg-[#082954] hover:bg-[#061F40] active:bg-[#04152D] text-white font-bold text-xs sm:text-base shadow-sm sm:shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] font-sans"
								title="Download Certificate PDF"
							>
								{#if isVerifyingFullstack}
									<i class="fa-solid fa-circle-notch fa-spin text-xs sm:text-sm"></i>
									<span>Verifying...</span>
								{:else}
									<i class="fa-solid fa-download text-xs sm:text-sm"></i>
									<span>Download Certificate</span>
								{/if}
							</button>
						</div>
					</div>
				</div>

				<!-- ============================================== -->
				<!-- CARD 2: JAVA FULL STACK DEVELOPMENT (Amber/Gold) -->
				<!-- ============================================== -->
				<div
					class="relative bg-white rounded-xl sm:rounded-[32px] shadow-[0_8px_24px_rgba(163,109,8,0.08)] sm:shadow-[0_14px_40px_rgba(163,109,8,0.12)] border border-slate-200/80 overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(163,109,8,0.18)] transition-all duration-300"
				>
					<!-- Card Top Header (Amber Gold with Layered Wave) -->
					<div
						class="relative bg-gradient-to-b from-[#946200] to-[#A87206] text-white pt-3 sm:pt-9 pb-5 sm:pb-12 px-3.5 sm:px-6 flex flex-col items-center text-center overflow-hidden"
					>
						<!-- Centered Circle Icon Badge (Java Coffee Cup Icon) -->
						<div
							class="w-10 h-10 sm:w-20 sm:h-20 rounded-full border-[1.5px] sm:border-2 border-white/90 bg-[#825400] flex items-center justify-center shrink-0 mb-1.5 sm:mb-4 shadow-sm sm:shadow-md"
						>
							<!-- Clean Java Coffee Cup Icon in pure white -->
							<svg
								class="w-5 h-5 sm:w-10 sm:h-10 text-white"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<!-- Coffee Cup Steam Lines -->
								<path d="M6 2v2"></path>
								<path d="M10 2v2"></path>
								<path d="M14 2v2"></path>
								<!-- Cup Shape -->
								<path d="M3 8h12v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
								<!-- Cup Handle -->
								<path d="M15 10h2a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H15"></path>
								<!-- Base Saucer -->
								<path d="M2 20h16"></path>
							</svg>
						</div>

						<!-- Title & Subtitle -->
						<h2
							class="text-sm xs:text-base sm:text-2xl md:text-[1.65rem] font-bold text-white tracking-tight leading-snug font-sans"
						>
							2. Java Full Stack Development
						</h2>
						<p
							class="text-[9.5px] sm:text-sm text-amber-100/90 font-normal mt-0.5 sm:mt-1 font-sans"
						>
							Internship Program Certificate
						</p>

						<!-- Layered Smooth Bottom Wave matching screenshot -->
						<div
							class="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none"
						>
							<svg
								class="relative block w-full h-4 sm:h-9 text-white"
								viewBox="0 0 1200 120"
								preserveAspectRatio="none"
							>
								<!-- Dark Accent Under-Wave Layer -->
								<path
									d="M0,0 C300,50 800,80 1200,10 L1200,120 L0,120 Z"
									fill="#664100"
									opacity="0.6"
								></path>
								<!-- Primary White Wave Cut Layer -->
								<path d="M0,20 C350,75 850,75 1200,15 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
							</svg>
						</div>
					</div>

					<!-- Card Body Form -->
					<div
						class="p-3 sm:p-7 pt-2 sm:pt-4 flex-1 flex flex-col justify-between bg-white font-sans"
					>
						<div>
							<!-- Roll Number Input Field with User Icon matching screenshot -->
							<div class="relative mb-1.5 sm:mb-2">
								<label for="java-roll" class="sr-only">Enter Your Roll Number</label>
								<div class="relative flex items-center">
									<!-- User Silhouette Avatar Icon -->
									<div class="absolute left-2.5 sm:left-4 text-[#A87206] pointer-events-none">
										<svg
											class="w-4 h-4 sm:w-5 sm:h-5 text-slate-700"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="1.8"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</div>

									<input
										id="java-roll"
										type="text"
										placeholder="Enter Your Roll Number"
										bind:value={javaRollNo}
										on:input={() => (javaError = '')}
										on:keydown={(e) => handleKeydown(e, 'java')}
										class="w-full pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3.5 rounded-lg sm:rounded-xl border border-slate-300 text-slate-800 placeholder-slate-400 font-medium text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-[#A87206] focus:border-[#A87206] transition-all font-sans"
									/>
								</div>

								<!-- Validation Error Message -->
								{#if javaError}
									<p
										class="text-[10px] sm:text-xs text-red-600 font-medium mt-1 flex items-center gap-1 font-sans"
									>
										<i class="fa-solid fa-circle-exclamation text-[9px]"></i>
										<span>{javaError}</span>
									</p>
								{/if}
							</div>

							<!-- Sample Roll Numbers Row -->
							<div
								class="flex items-center gap-1.5 text-[9.5px] sm:text-xs text-slate-500 mb-2.5 sm:mb-5 font-sans flex-wrap"
							>
								<span class="text-slate-500 text-[9.5px] sm:text-[11px] font-medium"
									>Sample Roll No:</span
								>
								<button
									type="button"
									on:click={() => {
										javaRollNo = '24NR5A0513';
										javaError = '';
									}}
									class="px-2 py-0.5 bg-slate-100 hover:bg-amber-100 text-amber-900 rounded font-mono text-[9.5px] sm:text-[11px] font-bold border border-slate-200 transition"
								>
									24NR5A0513
								</button>
								<button
									type="button"
									on:click={() => {
										javaRollNo = '23NR1A05A0';
										javaError = '';
									}}
									class="px-2 py-0.5 bg-slate-100 hover:bg-amber-100 text-amber-900 rounded font-mono text-[9.5px] sm:text-[11px] font-bold border border-slate-200 transition"
								>
									23NR1A05A0
								</button>
							</div>
						</div>

						<!-- Action Button: Download Certificate with download icon -->
						<div class="w-full mt-1">
							<button
								type="button"
								on:click={() => handleAction('java', 'download')}
								disabled={isVerifyingJava}
								class="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3.5 px-4 rounded-lg sm:rounded-xl bg-[#A26C04] hover:bg-[#8A5A03] active:bg-[#6E4802] text-white font-bold text-xs sm:text-base shadow-sm sm:shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] font-sans"
								title="Download Certificate PDF"
							>
								{#if isVerifyingJava}
									<i class="fa-solid fa-circle-notch fa-spin text-xs sm:text-sm"></i>
									<span>Verifying...</span>
								{:else}
									<i class="fa-solid fa-download text-xs sm:text-sm"></i>
									<span>Download Certificate</span>
								{/if}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Interactive Certificate View/Print/Download Modal -->
<!-- Modal removed as per user request to directly download without middle pages -->

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Dancing+Script:wght@700&family=Kalam:wght@700&display=swap');

	.internship-portal-root {
		font-family:
			'Inter',
			'Outfit',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			sans-serif;
	}

	.cursive-text {
		font-family: 'Caveat', 'Dancing Script', cursive, sans-serif;
	}
</style>
