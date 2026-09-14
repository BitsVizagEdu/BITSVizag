<script>
	// @ts-nocheck
	import { fade, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let isOpen = false;
	export let record = null;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function handlePrint() {
		window.print();
	}

	function openInNewTab() {
		if (record && record.previewUrl) {
			window.open(record.previewUrl, '_blank');
		}
	}

	let isVerifying = false;
	async function handleDownload() {
		if (!record || !record.certificateUrl || isVerifying) return;
		isVerifying = true;

		try {
			// Show verifying loading state very quickly
			await new Promise((resolve) => setTimeout(resolve, 200));

			// Trigger download via direct link to download endpoint (genuine PDF)
			const downloadLink = document.createElement('a');
			downloadLink.href = record.certificateUrl;
			downloadLink.download = `${(record.studentName || 'Student').replace(/[^A-Za-z0-9]/g, '_').replace(/_+/g, '_')}_Internship_Certificate.pdf`;
			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		} finally {
			setTimeout(() => {
				isVerifying = false;
			}, 800);
		}
	}
</script>

{#if isOpen && record}
	<!-- Overlay Backdrop -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<div
		class="fixed inset-0 z-[10000] flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto no-print"
		transition:fade={{ duration: 200 }}
		on:click|self={close}
		role="dialog"
		aria-modal="true"
	>
		<!-- Modal Container -->
		<div
			class="relative w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-slate-200 my-auto flex flex-col font-sans max-h-[96vh]"
			transition:scale={{ duration: 220, start: 0.96 }}
		>
			<!-- Modal Header Bar -->
			<div
				class="flex flex-wrap items-center justify-between gap-2 px-3.5 sm:px-6 py-3 bg-[#0A2E5C] text-white border-b border-[#082245]"
			>
				<div class="flex items-center gap-2.5 min-w-0">
					<div
						class="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center text-sm font-bold shrink-0"
					>
						<i class="fa-solid fa-award"></i>
					</div>
					<div class="min-w-0">
						<h3 class="text-xs sm:text-sm font-bold text-white tracking-wide truncate uppercase">
							{record.studentName}
						</h3>
						<p class="text-[10px] sm:text-[11px] text-blue-200 flex items-center gap-1.5 flex-wrap">
							<span>{record.program}</span>
							<span class="text-amber-300">•</span>
							<span class="font-mono text-amber-300 font-bold">{record.rollNumber}</span>
							{#if record.certificateId}
								<span class="text-amber-300">•</span>
								<span class="font-mono text-slate-300 text-[10px]">ID: {record.certificateId}</span>
							{/if}
						</p>
					</div>
				</div>

				<!-- Header Action Buttons -->
				<div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
					<!-- View Full Certificate Button -->
					<button
						type="button"
						on:click={openInNewTab}
						class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-semibold border border-white/20 transition"
						title="Open Original Certificate in New Tab"
					>
						<i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
						<span class="hidden xs:inline">View Full</span>
					</button>

					<!-- Print Button -->
					<button
						type="button"
						on:click={handlePrint}
						class="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-semibold border border-white/20 transition"
						title="Print Certificate"
					>
						<i class="fa-solid fa-print text-[10px]"></i>
						<span class="hidden xs:inline">Print</span>
					</button>

					<!-- Download Button -->
					<button
						type="button"
						on:click={handleDownload}
						disabled={isVerifying}
						class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-[#0A2E5C] font-black text-[11px] sm:text-xs shadow-sm hover:shadow-md transition active:scale-95"
					>
						{#if isVerifying}
							<i class="fa-solid fa-circle-notch fa-spin text-xs"></i>
							<span>Verifying Certificate...</span>
						{:else}
							<i class="fa-solid fa-download text-xs"></i>
							<span>Download Certificate</span>
						{/if}
					</button>

					<!-- Close Button -->
					<button
						type="button"
						on:click={close}
						class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 hover:bg-red-500 hover:text-white text-white/80 flex items-center justify-center text-xs sm:text-sm transition ml-0.5"
						aria-label="Close modal"
					>
						<i class="fa-solid fa-xmark"></i>
					</button>
				</div>
			</div>

			<!-- Certificate Image Preview Area (Scrollable container showing the actual uploaded certificate PNG) -->
			<div
				class="p-2 sm:p-6 bg-slate-900/90 overflow-y-auto flex items-center justify-center flex-1 max-h-[calc(90vh-110px)]"
			>
				<div
					id="printable-certificate"
					class="relative max-w-full max-h-full flex items-center justify-center bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-slate-700"
				>
					<img
						src={record.previewUrl || record.certificateUrl}
						alt="Internship Certificate for {record.studentName}"
						class="w-full h-auto max-h-[75vh] object-contain block select-none pointer-events-auto"
						loading="eager"
					/>
				</div>
			</div>

			<!-- Bottom Verification Footer -->
			<div
				class="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2"
			>
				<div class="flex items-center gap-1.5">
					<i class="fa-solid fa-shield-halved text-emerald-600 text-sm"></i>
					<span class="font-medium text-slate-700"
						>Officially Verified & Issued by CDC, BITS Vizag (Autonomous)</span
					>
				</div>
				<div class="flex items-center gap-3 font-mono text-[11px] text-slate-600">
					<span>ID: <strong class="text-[#0A2E5C]">{record.certificateId}</strong></span>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@media print {
		:global(body *) {
			visibility: hidden !important;
		}
		:global(body),
		:global(html) {
			background: #ffffff !important;
			margin: 0 !important;
			padding: 0 !important;
		}
		.no-print {
			display: none !important;
		}
		#printable-certificate,
		#printable-certificate * {
			visibility: visible !important;
		}
		#printable-certificate {
			position: absolute !important;
			left: 0 !important;
			top: 0 !important;
			width: 100vw !important;
			max-width: 100vw !important;
			height: 100vh !important;
			margin: 0 !important;
			padding: 0 !important;
			box-shadow: none !important;
			border: none !important;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
		}
		#printable-certificate img {
			max-width: 100% !important;
			max-height: 100% !important;
			width: auto !important;
			height: auto !important;
			object-fit: contain !important;
		}
	}
</style>
