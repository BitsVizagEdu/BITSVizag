<script>
	let pics = [
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
			pic: '/gallery/g-03.jpg',
			name: 'The Graduation Day',
			date: '28/05/2025',
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
		}
	];
</script>

<section class="max-w-7xl mx-auto px-6 py-12">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each pics as img, i}
			<div 
				class="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 ease-out group bg-white border border-slate-100 cursor-pointer hover:-translate-y-2"
				data-aos="fade-up"
				data-aos-delay={i * 80}
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
					<div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-6">
						<div class="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
							<span class="text-amber-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">{img.date}</span>
							<h3 class="text-white font-bold text-lg leading-tight mb-2">{img.name}</h3>
							<div class="h-0.5 w-8 bg-amber-400 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Strict adherence to the clean layout prompt */
	section {
		background-color: transparent;
	}
</style>
