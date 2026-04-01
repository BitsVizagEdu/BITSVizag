<script>
	export let hodName = 'Dr. Department Head';
	export let hodMessage = 'Welcome to our department...';
	export let hodImage = '/default-hod.jpg';
	export let designation = 'Head of Department';
	export let department = '';
</script>

<div class="w-full bg-slate-100 py-12 md:py-16 px-4 md:px-8">
	<div class="max-w-6xl mx-auto">
		<!-- Section Header -->
		<div class="text-center mb-8">
			<p class="text-sm md:text-base font-semibold text-slate-500 tracking-widest uppercase mb-1">
				HOD MESSAGE
			</p>
			<h2 class="text-3xl md:text-4xl font-bold text-red-600 mb-1">{hodName}</h2>
			{#if designation}
				<p class="text-sm font-bold text-slate-700 uppercase tracking-wide">{designation}</p>
			{/if}
			{#if department}
				<p class="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{department}</p>
			{/if}
		</div>

		<!-- HOD Content Container -->
		<div class="bg-white rounded-2xl p-6 md:p-10 shadow-lg">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-stretch">
				<!-- Image Section - 1/3 width -->
				<div class="flex justify-center md:justify-start">
					<div class="w-full max-w-md md:max-w-lg h-full">
						<img
							src={hodImage}
							alt={hodName}
							class="w-full h-full rounded-3xl shadow-lg object-cover"
						/>
					</div>
				</div>

				<!-- Message Section - 2/3 width -->
				<div class="md:col-span-2 flex flex-col justify-center">
					<div class="space-y-6 text-justify">
						{#each hodMessage.split('\n\n') as paragraph}
							<p class="text-base md:text-lg leading-relaxed text-slate-600">
								{paragraph}
							</p>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.hod-message) {
		animation: fadeIn 0.6s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
