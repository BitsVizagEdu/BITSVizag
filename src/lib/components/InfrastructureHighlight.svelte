<script>
	export let isActive = false;
</script>

<!-- Desktop Section (Matches AdmissionsHighlight.svelte style) -->
<section class="hidden md:flex relative h-full w-full items-center justify-center overflow-hidden bg-[#FFF9F2] py-0">
	<div class="relative group w-[98%] h-[98%] max-w-[98%] mx-auto">
		<picture class="w-full h-full block">
			<img src="/desk-built.png" alt="Campus Infrastructure" class="w-full h-full object-contain rounded-2xl block" />
		</picture>
	</div>
</section>

<!-- Mobile Section (Matches PlacementsHighlight.svelte mobile style) -->
<section class="flex md:hidden relative h-full w-full items-start justify-center overflow-hidden bg-[#FFF9F2]">
	<div class="relative group w-full h-[96%] max-w-full">
		<picture class="w-full h-full block">
			<img
				src="/mob-built.png"
				alt="Campus Infrastructure Mobile"
				class="w-full h-full object-fill rounded-2xl block"
			/>
		</picture>
	</div>
</section>

<style>
</style>
