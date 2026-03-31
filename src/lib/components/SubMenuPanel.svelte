<script>
	import { fade, fly } from 'svelte/transition';

	/**
	 * SubMenuPanel.svelte
	 * A full-screen slide-in panel for mobile navigation sub-menus.
	 */
	export let isOpen = false;
	export let title = '';
	export let onBack;
	export let onClose;
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-[1100] flex flex-col bg-white"
		in:fly={{ x: 100, duration: 300 }}
		out:fly={{ x: 100, duration: 300 }}
	>
		<!-- Header -->
		<div class="flex h-16 items-center justify-between border-b border-slate-100 px-4">
			<button
				type="button"
				on:click={onBack}
				class="flex items-center gap-2 text-slate-600 transition-colors hover:text-blue-600"
			>
				<i class="fa-solid fa-arrow-left text-lg" aria-hidden="true" />
				<span class="text-sm font-bold uppercase tracking-wider">Back</span>
			</button>
			<span class="text-[15px] font-extrabold text-slate-900">{title}</span>
			<button
				type="button"
				on:click={onClose}
				class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors hover:bg-slate-100"
			>
				<i class="fa-solid fa-xmark text-lg" aria-hidden="true" />
			</button>
		</div>

		<!-- List Content -->
		<div class="flex-1 overflow-y-auto pb-20">
			<slot />
		</div>
	</div>
{/if}
