<script>
	let pics = [
		{
			pic: '/event-photos/JOB.png',
			name: 'Eleation Placement – ₹9.6 LPA | Mechanical',
			date: '26/10/2026',
			href: 'https://www.instagram.com/p/De9O-03hf2i/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
			id: 'box-job'
		},
		{
			pic: '/event-photos/BOXING.png',
			name: 'All India Inter-University Boxing Championship',
			date: '15/10/2026',
			href: 'https://www.instagram.com/p/DehUv4fFyf7/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
			id: 'box-boxing'
		},
		{
			pic: '/event-photos/BITS_SC.png',
			name: 'Champions: BITS Super Challengers 🏏',
			date: '11/10/2026',
			href: 'https://www.instagram.com/p/DeXH_BiDTUp/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
			id: 'box-sc'
		},
		{
			pic: '/event-photos/SIH.png',
			name: 'Smart India Hackathon 2026 Internal Hackathon',
			date: '29/09/2026',
			href: 'https://www.instagram.com/p/Dd3bmTrmmzb/?utm_source=ig_web_copy_link&mdxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
			id: 'box-sih'
		},
		{
			pic: '/hackothon-winners.jpg',
			name: 'Hackathon Winners 2026',
			date: '30/03/2026',
			href: '#',
			id: 'box-hackathon'
		},
		{
			pic: '/gallery/RAJ_4078.JPG21.webp',
			name: 'Mega Job Fair 2026 A Remarkable Success !!!',
			date: '10/03/2026',
			href: '#',
			id: 'box-1'
		},
		{
			pic: '/gallery/g-05.webp',
			name: 'State Level T10 Championship',
			date: '06/11/2025',
			href: '#',
			id: 'box-2'
		},
		{
			pic: '/logo-150/RAJ_6455.JPG',
			name: 'The Graduation Day 2025',
			date: '27/06/2026',
			href: '#',
			id: 'box-3'
		},
		{
			pic: '/gallery/g2.webp',
			name: 'The Cloud Summit',
			date: '01/10/2024',
			href: '#',
			id: 'box-4'
		},
		{
			pic: '/gallery/g-004.jpg',
			name: 'The Shield Protocol 25',
			date: '16/09/2025',
			href: '#',
			id: 'box-5'
		},
		{
			pic: '/gallery/sankranthi.jpeg',
			name: 'Sankranthi Celebrations',
			date: '14/01/2026',
			href: '#',
			id: 'box-6'
		},
		{
			pic: '/gallery/payzo.jpeg',
			name: 'Payzo Pitch-A-Thon',
			date: '13/12/2025',
			href: '#',
			id: 'box-8'
		},
		{
			pic: '/gallery/cloud.jpeg',
			name: 'The Cloud Summit',
			date: '01/10/2024',
			href: '#',
			id: 'box-7'
		},
		{
			pic: '/gallery/Christmas.jpeg',
			name: 'Christmas Celebrations',
			date: '25/12/2025',
			href: '#',
			id: 'box-9'
		},
		{
			pic: '/gallery/g1.jpg',
			name: 'Annual Sports Meet',
			date: '10/02/2026',
			href: '#',
			id: 'box-10'
		},
		{
			pic: '/gallery/img1.jpeg',
			name: 'Campus Youth Festival',
			date: '20/02/2026',
			href: '#',
			id: 'box-11'
		}
	];
</script>

<section class="max-w-7xl mx-auto px-3 sm:px-6 pt-2 pb-3 md:py-12">
	<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
		{#each pics as img, i}
			<svelte:element
				this={img.href && img.href !== '#' ? 'a' : 'div'}
				href={img.href && img.href !== '#' ? img.href : undefined}
				target={img.href && img.href !== '#' ? '_blank' : undefined}
				rel={img.href && img.href !== '#' ? 'noopener noreferrer' : undefined}
				class="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out group bg-white border border-slate-100 cursor-pointer hover:-translate-y-2 block text-decoration-none {i >= 12 ? 'hidden md:block' : ''}"
				data-aos="fade-up"
				data-aos-delay={(i % 6) * 80}
			>
				<!-- Aspect Ratio Container -->
				<div class="relative aspect-[4/3] w-full overflow-hidden">
					<img
						src={img.pic}
						alt={img.name}
						class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
						loading="lazy"
					/>

					<!-- Dark Overlay on Hover -->
					<div
						class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-3 sm:p-6"
					>
						<div
							class="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
						>
							<span
								class="text-amber-400 font-bold text-[8px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 sm:mb-2 block"
								>{img.date}</span
							>
							<h3 class="text-white font-bold text-xs sm:text-lg leading-tight mb-1 sm:mb-2">
								{img.name}
							</h3>
							<div class="h-0.5 w-8 bg-amber-400 rounded-full"></div>
						</div>
					</div>
				</div>
			</svelte:element>
		{/each}
	</div>
</section>

<style>
	/* Strict adherence to the clean layout prompt */
	section {
		background-color: transparent;
	}
</style>
