<script>

	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import gsap from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	onMount(() => {

		gsap.registerPlugin(ScrollTrigger);
		

		gsap.from('.card', {
			scrollTrigger: {
				trigger: '.events-container',
				// toggleActions: 'restart none none reverse',
				toggleActions: 'play none none none',
				start: '30% center'
				// markers:true
			},
			opacity: 0,
			ease:"cric.out",
			stagger: 0.3
		});

		const mediaQuery = window.matchMedia('(min-width: 768px)');

		if (mediaQuery.matches) {
			document.getElementsByClassName('events-container')[0].scrollLeft += 0;
		}
	});
	function ScrollLeft() {
		document.getElementsByClassName('events-container')[0].scrollLeft -= 382;
		console.log(document.getElementsByClassName('events-container')[0].scrollLeft);
	}

	function ScrollRight() {
		if (document.getElementsByClassName('events-container')[0].scrollLeft < 2674) {
			document.getElementsByClassName('events-container')[0].scrollLeft += 382;
			console.log(document.getElementsByClassName('events-container')[0].scrollLeft);
		}
	}

const Events = [
	{
		date: '15/12/2022',
		name: 'MOU with i3 IT Solutionz and Rubicon Skill Development Pvt Ltd',
		image: '/g4.jpg',
		description:
			'i3 IT Solutionz and Rubicon Skill Development Pvt Ltd have signed an MOU for IT skill development collaboration.'
	},
	{
		date: '15/12/2022',
		name: 'Expert talks by Prakriti Shrivastava - Senior HR Chegg India',
		image: '/pevents/1.jpg',
		description:
			' Prakriti Shrivastava, Senior HR at Chegg India, delivers expert talks on HR topics, offering practical insights for professionals and organizations.'
	},
	{
		date: '15/12/2022',
		name: 'JAVA Training Session by Imtihiyaz Ali',
		image: '/pevents/8.jpg',
		description:
			' The program aimed to equip students with latest knowledge and skills in java provide them with competitive edge in job market.'
	},
	{
		date: '15/12/2022',
		name: 'Lumos Labs session about WEB3 Metaverse',
		image: '/pevents/2.jpg',
		description:
			' Tech talk on into the Web3 Metaverse and Digital Life by Nikhil Aparjith and Anshita Soni from Lumous Lab'
	},
	{
		date: '15/12/2022',
		name: 'Expert talks by Oliver Rayi, Director of Catherine Group',
		image: '/pevents/6.jpg',
		description:
			'Oliver Rayi, Director of Catherine Group, delivers expert talks providing valuable insights and practical guidance to inspire and empower individuals and organizations.'
	},
	{
		date: '15/12/2022',
		name: 'Motivational Speech by Youtube sensation Sudeer Sandra',
		image: '/pevents/4.jpg',
		description:
			' YouTube sensation Sudeer Sandra delivers captivating and inspiring motivational speeches that empower individuals to pursue their dreams and overcome obstacles.'
	},
	{
		date: '15/12/2022',
		name: 'Expert talks by T. Siva Rama Krishna on Blockchain Technology and Cryptography',
		image: '/pevents/7.jpg',
		description:
			'T. Siva Rama Krishna delivers expert talks on blockchain and cryptography, empowering audiences in the digital landscape.'
	},
	
];
</script>

<section data-aos="fade-down" class="events my-20 bg-white rounded-[50px]">
	<div
		class="events-head  w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center p-4"
	>
		<h1 data-aos="fade-up" data-aos-anchor-placement="top-center" 
			class="md:text-6xl text-2xl 	 font-black md:basis-3/4 text-gray-800 md:m-4 md:ml-6"
		>
			Placement News
		</h1>
		<div data-aos="fade-up" data-aos-anchor-placement="top-center"  class="flex md:basis-1/4 scale-[0.7] md:scale-[1] justify-end md:mr-20">
			<div on:click={ScrollLeft} class="arrow-left cursor-pointer rotate-0 md:ml-6">
				<svg
					class="w-[25pt] md:w-[50pt]"
					height="50pt"
					viewBox="0 0 100.000000 100.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
						fill="rgb(66, 66, 66)"
						stroke="none"
					>
						<path
							d="M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252
                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651
                    -107 -709 230 -50 295 226 546 518 471z"
						/>
						<path
							d="M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82
                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60
                    76 91 48 91 -4 0 -48 -41 -97 -90z"
						/>
					</g>
				</svg>
			</div>
			<div on:click={ScrollRight} class="arrow-right cursor-pointer rotate-180 md:ml-6">
				<svg
					class="w-[25pt] md:w-[50pt]"
					height="50pt"
					viewBox="0 0 100.000000 100.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<g
						transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
						fill="rgb(66, 66, 66)"
						stroke="none"
					>
						<path
							d="M386 944 c-225 -54 -376 -286 -338 -517 62 -367 512 -513 773 -252
                    329 330 18 879 -435 769z m219 -39 c312 -81 418 -473 191 -701 -241 -240 -651
                    -107 -709 230 -50 295 226 546 518 471z"
						/>
						<path
							d="M325 590 l-90 -90 92 -92 c73 -73 95 -90 105 -80 10 10 -2 27 -57 82
                    l-69 70 224 2 c192 3 225 5 225 18 0 13 -33 15 -225 18 l-224 2 68 69 c59 60
                    76 91 48 91 -4 0 -48 -41 -97 -90z"
						/>
					</g>
				</svg>
			</div>
		</div>
	</div>

	<div
		class="events-container rounded-b-[2.5rem] shadow-lg md:px-4 py-4 pr-8 flex flex-nowrap overflow-x-auto bg-white h-[600px] "
	>
		<div class=" hidden md:block  w-[100px] p-2 relative mx-4 " id="none" />
		{#each Events as event, i}
			<div class="card  w-[350px] p-2 relative mx-4 " id={`card-${i}`}>
				<div class="cards-grad absolute z-0">
					<div
						id="grad-1"
						class="w-[300px]  z-0 absolute top-[-10px] left-[12.5px] rounded-3xl  opacity-0 h-[100px]   bg-gradient-to-r from-cyan-500 to-blue-500 "
					/>
					<div
						id="grad-2"
						class="w-[270px] -z-10 absolute top-[-20px] left-[30px] rounded-3xl opacity-0  h-[100px]  bg-gradient-to-br from-green-200 via-green-400 to-purple-700 "
					/>
				</div>
				<div
					class="card-image-parent rounded-t-3xl relative z-10 overflow-hidden h-[300px] mb-[-120px]"
				>
					<img
						alt="event-image"
						class="rounded-t-3xl pointer-events-none card-image-child h-[100%] w-[100%] object-cover object-center "
						src={`${event.image}`}
					/>
				</div>
				<div
					class="card-content h-[350px]  grid items-center  relative z-20 bg-white  rounded-3xl p-6 "
				>
					<h6 class="content-date text-base font-semibold  text-gray-500">
						{event.date}
					</h6>
					<h1 class="content-head text-2xl font-bold text-gray-800 ">
						{event.name}
					</h1>
					<p class="content-description font-medium text-justify  text-gray-600 ">
						{event.description}
					</p>
					<div class="content-view text-right pr-2 opacity-0 font-semibold text-gray-400">More...</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.events-container {
		scroll-behavior: smooth;
	}
	.card-content {
		pointer-events: none;
		box-shadow: 0 60px 44px -49px rgb(40 46 74 / 20%);
		border: 1px solid #e7ebeb;
	}
	.events-container::-webkit-scrollbar {
		display: none;
	}
	.events-container {
		-webkit-overflow-scrolling: touch;
	}
	.card {
		flex: 0 0 auto;
		cursor: pointer;
	}
	.card-image-child {
		transition: all 0.6s ease;
	}
	.card:hover .card-image-child,
	.card:focus .card-image-child {
		transform: scale(1.2);
		transition: all 0.6s ease;
	}
	#grad1,
	#grad2 {
		transition: all 0.7s ease;
		box-shadow: 0 -22px 4px -20px rgb(5 25 122 / 15%);
	}
	.card:hover #grad-1,
	.card:focus #grad-1 {
		transform: translateY(-5px);
		transition: all 0.5s ease;
		opacity: 1;
		/* transition-delay: 0s; */
	}
	.card:hover #grad-2,
	.card:focus #grad-1 {
		transform: translateY(-5px);
		transition: all 0.7s ease;
		opacity: 1;
		/* transition-delay: 0.2s; */
	}
	.card:hover .content-view,
	.card:focus .content-view {
		color: rgba(0, 0, 0, 0.753);
		color: rgb(66, 66, 66);
	}
</style>
