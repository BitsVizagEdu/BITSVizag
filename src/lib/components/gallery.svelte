<script>
	let pics = [
		{
			pic: '/gallery/img10.jpg',
			name: 'Graduation Day Celebration',
			date: '01/05/2023',
			href: '#',
			id: 'box-1'
		},
		{
			pic: '/gallery/img2.jpeg',
			name: 'Global Education Fair',
			date: '15/06/2023',
			href: '#',
			id: 'box-2'
		},
		{
			pic: '/gallery/img3.jpeg',
			name: 'Yoga Day Celebration',
			date: '21/06/2023',
			href: '#',
			id: 'box-3'
		},
		{
			pic: '/gallery/img4.jpeg',
			name: 'Christmas Extravaganza',
			date: '24/12/2022',
			href: '#',
			id: 'box-4'
		},
		{
			pic: '/gallery/img1.jpeg',
			name: 'Beach Cleaning Drive',
			date: '15/07/2023',
			href: '#',
			id: 'box-5'
		}
	];
</script>

<div class="image-grid min-h-full flex relative ">
	{#each pics as img}
		<div class="{img.id} relative image-grid-col-2 image-grid-row-2">
			<img class="" src={img.pic} alt="architecture" />
			<div
				id="overlayimg"
				class="flex flex-col opacity-0 top-0 absolute h-[100%] p-5 transition-[opacity] duration-500 bg-gradient-to-t from-black to-transparent  hover:opacity-70 justify-center first:justify-end w-full "
			>
				<div class="3xs:p-4 lg:p-10">
					<a href={img.href} class="font-black text-white 3xs:text-2xl lg:text-4xl">{img.name}</a><br>
					<a class="font-bold text-sortwhite 3xs:text-xl lg:text-3xl">{img.date}</a>
				</div>
			</div>
		</div>
	{/each}
	<!--    <div class="box-2"><img src="/gallery/img6.jpeg" alt="architecture"></div>-->
	<!--    <div class="box-3"><img src="/gallery/img2.jpeg" alt="architecture"></div>-->
	<!--    <div class="box-4"><img src="/gallery/img3.jpeg" alt="architecture"></div>-->
	<!--    <div class="box-5"><img src="/gallery/img4.jpeg" alt="architecture"></div>-->
</div>

<style>
	/*#overlayimg{*/
	/*    opacity: 0%;*/
	/*    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);*/
	/*    top: 0%;*/
	/*    position: absolute;*/
	/*    height: 100%;*/
	/*    padding: 5px;*/
	/*    transition: 0.3s;*/

	/*}*/

	/*#overlayimg:hover{*/
	/*    opacity: 70%;*/
	/*}*/

	.image-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		box-sizing: border-box;
		grid-template-areas:
			'item-1 item-1'
			'item-2 item-3'
			'item-4 item-5';
	}

	.box-1 {
		grid-area: item-1;
	}

	.image-grid div {
		object-fit: cover;
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
			box-sizing: border-box;
			grid-template-areas:
				'item-1 item-1 item-2 item-3'
				'item-1 item-1 item-4 item-5';
		}
	}
</style>
