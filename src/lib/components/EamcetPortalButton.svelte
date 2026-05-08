<script>
	export let href = 'https://bitsvizageamcetexamportal1.vercel.app/';
	export let text = 'EAMCET Portal ↗';
	export let size = 'md'; // 'sm' for nav, 'md' for hero
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="eamcet-btn group relative inline-flex items-center justify-center font-bold text-white transition-all duration-300 rounded-full overflow-hidden {size === 'sm' ? 'px-5 py-2 text-[10px]' : 'px-8 py-3.5 text-sm'} "
>
	<!-- Premium Gradient Background -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 opacity-90 transition-all duration-500 group-hover:opacity-100"
	></div>

	<!-- Glassmorphism Overlay -->
	<div class="absolute inset-0 backdrop-blur-sm"></div>

	<!-- Ultra-thin Cyan Border -->
	<div
		class="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/50 transition-all duration-500"
	></div>

	<!-- Radial Glow Follows Hover (Static for now, but using a subtle radial grad) -->
	<div
		class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(6,182,212,0.15)_0%,transparent_70%)]"
	></div>

	<!-- Content -->
	<div class="relative flex items-center gap-2.5">
		<!-- Minimal Pulse Indicator -->
		<div class="flex items-center justify-center">
			<span class="relative flex h-1.5 w-1.5">
				<span
					class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400/60 opacity-75"
				></span>
				<span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400"></span>
			</span>
		</div>

		<span class="tracking-[0.05em] uppercase font-black">
			{text.split(' ↗')[0]}
			<span class="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-0.5 opacity-70 group-hover:opacity-100">↗</span>
		</span>
	</div>
</a>

<style>
	.eamcet-btn {
		box-shadow: 
			0 4px 6px -1px rgba(0, 0, 0, 0.1), 
			0 2px 4px -1px rgba(0, 0, 0, 0.06),
			inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
	}

	.eamcet-btn:hover {
		transform: translateY(-1px);
		box-shadow: 
			0 10px 15px -3px rgba(0, 0, 0, 0.2), 
			0 4px 6px -2px rgba(0, 0, 0, 0.05),
			0 0 15px rgba(6, 182, 212, 0.1);
	}

	.eamcet-btn:active {
		transform: translateY(0);
	}
</style>
