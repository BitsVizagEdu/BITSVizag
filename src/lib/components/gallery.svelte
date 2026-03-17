<script>
	let pics = [
		{
			pic: '/gallery/RAJ_4078.JPG.jpeg',
			name: 'Mega Job Fair 2026 A Remarkable Success !!!',
			date: '10/03/2026',
			href: '#',
			id: 'box-1'
		},
		{
			pic: '/gallery/g-05.jpg',
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
			pic: '/gallery/g2.jpg',
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
		
		
			
		


	];
</script>

<div class="image-grid relative">
	{#each pics as img}
		<div class="{img.id} relative image-grid-col-2 image-grid-row-2">
			<img class="" src={img.pic} alt="architecture" />
			<div
				id="overlayimg"
				class="flex flex-col opacity-0 top-0 absolute h-[100%] p-5 transition-[opacity] duration-500 bg-gradient-to-t from-black to-transparent hover:opacity-70 justify-center first:justify-end w-full"
			>
				<div class="3xs:p-4 lg:p-10">
					<a href={img.href} class="font-black text-white 3xs:text-2xl lg:text-4xl">{img.name}</a
					><br />
					<a class="font-bold text-sortwhite 3xs:text-xl lg:text-3xl">{img.date}</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	/* ... (comments preserved or removed, doesn't matter much, focusing on structure) */

	.image-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		box-sizing: border-box;
		grid-template-areas:
			'item-1 item-1'
			'item-2 item-3'
			'item-4 item-5'
			'item-6 item-7'
			'item-8 item-9';
	}

	.box-1 {
		grid-area: item-1;
	}
	.box-2 {
		grid-area: item-2;
	}

	.box-3 {
		grid-area: item-3;
		overflow: hidden;
	}
	/* Fix for image 3: remove right person (zoom and align left) */
	.box-3 img {
		object-position: left;
		transform: scale(1.2);
		transform-origin: left center;
	}

	.box-4 {
		grid-area: item-4;
		overflow: hidden;
	}
	/* Fix for image 4: hair visible (align top) */
	.box-4 img {
		object-position: top;
	}

	.box-5 {
		grid-area: item-5;
	}

	.box-6 {
		grid-area: item-6;
	}

	.box-7 {
		grid-area: item-7;
	}

	.box-8 {
		grid-area: item-8;
	}

	.box-9 {
		grid-area: item-9;
	}

	.image-grid div {
		object-fit: cover;
		overflow: hidden;
	}

	img {
		width: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		-o-object-position: center;
		object-position: center;
		z-index: -1;
		height: 100%;
	}
	@media screen and (min-width: 768px) {
		.image-grid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			grid-template-rows: 19vw 24vw 24vw;
			box-sizing: border-box;
			grid-template-areas:
				'item-1 item-1 item-2 item-3'
				'item-1 item-1 item-4 item-5'
				'item-6 item-7 item-8 item-9';
		}
	}
</style>
