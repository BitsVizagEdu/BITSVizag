<script>
	let details = [
		{
			name: 'Sandeep',
			job: 'Infinite Proxies',
			branch: 'CSE'
		},
		{
			name: 'Rahul',
			job: 'TCS',
			branch: 'CSE'
		},
		{
			name: 'Chaitanya',
			job: 'TCS',
			branch: 'CSE'
		},
		{
			name: 'Keerthana',
			job: 'TCS',
			branch: 'CSE'
		},
		{
			name: 'Sai Prasad',
			job: 'TCS',
			branch: 'CSE'
		},
		{
			name: 'Sunitha',
			job: 'TCS',
			branch: 'CSE'
		},
		{
			name: 'Manikanta',
			job: 'Infosys',
			branch: 'CSE'
		},
		{
			name: 'Dan Alfred',
			job: 'Infosys',
			branch: 'CSE'
		},
		{
			name: 'Tejaswini',
			job: 'Infosys',
			branch: 'CSE'
		},
		{
			name: 'Mounika',
			job: 'Infosys',
			branch: 'ECE'
		},
		{
			name: 'Ramesh',
			job: 'Tech Mahindra',
			branch: 'MECH'
		},
		{
			name: 'Kishore',
			job: 'Tech Mahindra',
			branch: 'MECH'
		},
		{
			name: 'Satish',
			job: 'Tech Mahindra',
			branch: 'MECH'
		},
		{
			name: 'Jyothi',
			job: 'Tech Mahindra',
			branch: 'MECH'
		},
		{
			name: 'Divya',
			job: 'Tech Mahindra',
			branch: 'MECH'
		},
		{
			name: 'Ankith',
			job: 'Teleperformance',
			branch: 'ECE'
		},
		{
			name: 'Nihal',
			job: 'Teleperformance',
			branch: 'ECE'
		},
		{
			name: 'Naveen',
			job: 'Teleperformance',
			branch: 'ECE'
		},
		{
			name: 'Srinivas Rao',
			job: 'Teleperformance',
			branch: 'ECE'
		}
	];
</script>

<section class="relative py-20 bg-slate-50 font-sans overflow-hidden">
	<!-- Background Accents -->
	<div class="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
		<div
			class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"
		></div>
		<div
			class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/10 blur-[120px] rounded-full"
		></div>
	</div>

	<div class="max-w-9xl mx-auto px-6 relative z-10">
		<div class="text-center mb-16" data-aos="fade-up">
			<h2 class="text-2xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
				Top <span class="bg-gradient-to-r from-pink-600 to-red-800 bg-clip-text text-transparent"
					>Recruiters</span
				>
			</h2>
			<div
				class="h-1.5 w-32 bg-gradient-to-b from-pink-600 to-red-800 mx-auto mt-4 rounded-full"
			></div>
		</div>

		<div class="marquee-wrapper relative">
			<!-- Side Gradients for Smoothness -->
			<div
				class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"
			></div>
			<div
				class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"
			></div>

			<div class="marquee-content">
				<div class="marquee-track">
					<!-- Double the items for seamless loop -->
					{#each [...Array(10), ...Array(10)] as _, i}
						{@const logoNum = (i % 10) + 1}
						<div class="logo-card group">
							<div class="logo-inner">
								<img src="/logo-150/{logoNum}.png" alt="Recruiter {logoNum}" class="company-logo" />
							</div>
							<!-- Subtle glow on hover -->
							<div
								class="absolute inset-0 bg-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							></div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.marquee-wrapper {
		width: 100%;
		overflow: hidden;
		padding: 40px 0;
		mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
	}

	.marquee-content {
		display: flex;
		width: max-content;
	}

	.marquee-track {
		display: flex;
		gap: 2rem;
		animation: scroll 40s linear infinite;
		padding: 10px;
	}

	.marquee-track:hover {
		animation-play-state: paused;
	}

	.logo-card {
		position: relative;
		width: 170px;
		height: 90px;
		background: white;
		border: 1px solid rgba(0, 0, 0, 0.04);
		border-radius: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.25rem;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.05),
			0 2px 4px -1px rgba(0, 0, 0, 0.03);
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		cursor: pointer;
		flex-shrink: 0;
	}

	.logo-card:hover {
		transform: translateY(-8px) scale(1.05);
		box-shadow:
			0 20px 25px -5px rgba(0, 0, 0, 0.08),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
		border-color: rgba(37, 99, 235, 0.2);
	}

	.logo-inner {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.company-logo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.02));
		transition: transform 0.4s ease;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50% - 1rem)); /* Accounting for half the track + gap adjustment */
		}
	}

	@media (max-width: 768px) {
		.logo-card {
			width: 140px;
			height: 80px;
			padding: 1rem;
		}
		.marquee-track {
			gap: 1.25rem;
		}
		@keyframes scroll {
			0% {
				transform: translateX(0);
			}
			100% {
				transform: translateX(calc(-50% - 0.625rem));
			}
		}
	}
</style>
