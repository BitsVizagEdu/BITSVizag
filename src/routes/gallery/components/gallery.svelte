<section class="bg-slate-900 border-y border-slate-800">
	<!-- ═══════════════════════════════════════════════════════════════════════ -->
	<!-- UNIFIED COMPACT STATIC GALLERY GRID                                    -->
	<!-- ═══════════════════════════════════════════════════════════════════════ -->
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5 md:gap-1 grid-flow-dense">
		<!-- LATEST HIGHLIGHTS -->
		<div class="col-span-2 row-span-2 bg-slate-800">
			<img
				src="/gallery/DSC05556.JPG"
				alt="Recent Event"
				class="w-full h-full object-cover aspect-square"
			/>
		</div>

		<div class="bg-slate-800">
			<img
				src="/events/AIworkshop.jpg"
				alt="AI Workshop"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<div class="bg-slate-800">
			<img
				src="/gallery/sankranthi.jpeg"
				alt="Sankranthi Celebrations"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<div class="bg-slate-800">
			<img
				src="/events/womansday1.jpg"
				alt="Women's Day"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<div class="bg-slate-800">
			<img
				src="/gallery/RAJ_4078.JPG.jpeg"
				alt="Campus Life"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<div class="col-span-2 row-span-2 bg-slate-800">
			<img src="/batch2026.png" alt="Batch 2026" class="w-full h-full object-cover aspect-square" />
		</div>

		<div class="bg-slate-800">
			<img
				src="/gallery/Christmas.jpeg"
				alt="Christmas"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<div class="bg-slate-800">
			<img
				src="/events/Champions-T10.jpg"
				alt="T-10 Champions"
				class="aspect-square w-full h-full object-cover"
			/>
		</div>

		<!-- MAIN ARCHIVE -->
		{#each [{ src: '/maingall/e2.jpg' }, { src: '/maingall/e7.jpg' }, { src: '/maingall/e11.jpg' }, { src: '/maingall/e9.jpg' }, { src: '/maingall/e18.jpg' }, { src: '/maingall/ img (6).jpg' }, { src: '/maingall/e5.jpg' }, { src: '/maingall/ img (1).jpeg' }, { src: '/maingall/e14.jpg' }, { src: '/maingall/e19.jpg' }, { src: '/maingall/e17.jpg' }, { src: '/maingall/e6.jpg' }, { src: '/maingall/e3.jpg' }, { src: '/maingall/e20.jpg' }, { src: '/maingall/e15.jpg' }, { src: '/maingall/e13.jpg' }, { src: '/maingall/ img (4).jpeg' }, { src: '/maingall/e24.jpg' }, { src: '/maingall/e10.jpg' }, { src: '/maingall/e25.jpg' }, { src: '/maingall/e16.jpg' }, { src: '/maingall/e22.jpg' }, { src: '/maingall/ img (12).jpg' }, { src: '/maingall/ img (10).jpg' }, { src: '/maingall/img.jpg' }, { src: '/maingall/ img (5).jpg' }, { src: '/maingall/ img (2).jpg' }, { src: '/maingall/ img (9).JPG' }, { src: '/maingall/ img (7).jpg' }, { src: '/maingall/ img (8).jpg' }, { src: '/maingall/ img (11).jpg' }, { src: '/maingall/ img (13).jpg' }, { src: '/maingall/ img (15).jpg' }, { src: '/maingall/ img (16).JPG' }, { src: '/maingall/ img (14).jpg' }, { src: '/maingall/ img (17).JPG' }, { src: '/maingall/ img (18).jpg' }, { src: '/maingall/ img (20).jpg' }, { src: '/maingall/ img (21).jpg' }, { src: '/maingall/ img (19).jpg' }, { src: '/maingall/ img (22).jpg' }] as item}
			<div class="bg-slate-800">
				<img
					src={item.src}
					alt="College Gallery"
					loading="lazy"
					class="aspect-square w-full h-full object-cover"
				/>
			</div>
		{/each}
	</div>
</section>
