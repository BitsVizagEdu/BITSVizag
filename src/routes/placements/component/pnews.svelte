<!-- <script>
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
			ease: 'cric.out',
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
			date: '10/08/2023',
			name: 'BITS Vizag and G-TEC DST GITAM Join Hands Through Meaningful MOU Signing Ceremony.',
			image: '/pevents/gitam.jpg',
			description:
				'BITS Vizag and G-TEC | DST GITAM join in impactful MOU for enhanced collaboration. '
		},
		{
			date: '22/07/2023',
			name: 'MOU Signing Ceremony - BITS Vizag and London School of Digital Business, UK',
			image: '/pevents/lsdb.jpg',
			description:
				'BITS Vizag and London School of Digital Business signed an MOU, enhancing digital education and opportunities. An International Interactive Workshop on the same was held. '
		},
		{
			date: '15/06/2023',
			name: 'MOU with i3 IT Solutionz and Rubicon Skill Development Pvt Ltd',
			image: '/g4.jpg',
			description:
				'i3 IT Solutionz and Rubicon Skill Development Pvt Ltd have signed an MOU for IT skill development collaboration.'
		},
		{
			date: '03/05/2023',
			name: 'Expert talks by Prakriti Shrivastava - Senior HR Chegg India',
			image: '/pevents/1.jpg',
			description:
				' Prakriti Shrivastava, Senior HR at Chegg India, delivers expert talks on HR topics, offering practical insights for professionals and organizations.'
		},
		{
			date: '22/04/2023',
			name: 'JAVA Training Session by Imtihiyaz Ali',
			image: '/pevents/8.jpg',
			description:
				' The program aimed to equip students with latest knowledge and skills in java provide them with competitive edge in job market.'
		},
		{
			date: '05/04/2023',
			name: 'Lumos Labs session about WEB3 Metaverse',
			image: '/pevents/2.jpg',
			description:
				' Tech talk on into the Web3 Metaverse and Digital Life by Nikhil Aparjith and Anshita Soni from Lumous Lab'
		},
		{
			date: '20/03/2023',
			name: 'Expert talks by Oliver Rayi, Director of Catherine Group',
			image: '/pevents/6.jpg',
			description:
				'Oliver Rayi, Director of Catherine Group, delivers expert talks providing valuable insights and practical guidance to inspire and empower individuals and organizations.'
		},
		{
			date: '04/03/2023',
			name: 'Motivational Speech by Youtube sensation Sudeer Sandra',
			image: '/pevents/4.jpg',
			description:
				' YouTube sensation Sudeer Sandra delivers captivating and inspiring motivational speeches that empower individuals to pursue their dreams and overcome obstacles.'
		}
	];
</script>

<section
	data-aos="fade-down"
	class="events my-12 md:my-20 bg-white rounded-[30px] md:rounded-[50px] overflow-hidden max-w-7xl mx-auto px-2 lg:px-4"
>
	<div
		class="events-head w-full mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-8"
	>
		<h1
			data-aos="fade-up"
			data-aos-anchor-placement="top-center"
			class="md:text-5xl text-3xl font-bold font-outfit text-slate-800 md:basis-3/4 mb-4 md:mb-0 md:ml-6"
		>
			Placement News
		</h1>
		<div
			data-aos="fade-up"
			data-aos-anchor-placement="top-center"
			class="flex md:basis-1/4 scale-[0.8] md:scale-[1] justify-center md:justify-end md:mr-10 gap-4 mt-2 md:mt-0"
		>
			<div
				role="button"
				tabindex="0"
				on:click={ScrollLeft}
				on:keydown={(e) => e.key === 'Enter' && ScrollLeft()}
				class="arrow-left cursor-pointer rotate-0 transition-transform active:scale-90 hover:scale-105"
			>
				<svg
					class="w-[40px] md:w-[60px]"
					height="auto"
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
			<div
				role="button"
				tabindex="0"
				on:click={ScrollRight}
				on:keydown={(e) => e.key === 'Enter' && ScrollRight()}
				class="arrow-right cursor-pointer rotate-180 transition-transform active:scale-90 hover:scale-105"
			>
				<svg
					class="w-[40px] md:w-[60px]"
					height="auto"
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
		class="events-container rounded-b-3xl md:rounded-b-[50px] shadow-lg md:px-4 py-4 pr-4 md:pr-8 flex flex-nowrap overflow-x-auto bg-white"
	>
		<div class="hidden md:block w-[100px] p-2 relative mx-4 shrink-0" id="none" />
		{#each Events as event, i}
			<div class="card w-[280px] sm:w-[350px] p-2 relative mx-2 sm:mx-4 shrink-0" id={`card-${i}`}>
				<div class="cards-grad absolute z-0 hidden md:block">
					<div
						id="grad-1"
						class="w-[300px] z-0 absolute top-[-10px] left-[12.5px] rounded-3xl opacity-0 h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500"
					/>
					<div
						id="grad-2"
						class="w-[270px] -z-10 absolute top-[-20px] left-[30px] rounded-3xl opacity-0 h-[100px] bg-gradient-to-br from-green-200 via-green-400 to-purple-700"
					/>
				</div>
				<div
					class="card-image-parent rounded-t-3xl relative z-10 overflow-hidden h-[240px] md:h-[300px] mb-[-80px] md:mb-[-120px]"
				>
					<img
						alt="Event representation"
						class="rounded-t-3xl pointer-events-none card-image-child h-[100%] w-[100%] object-cover object-center"
						src={`${event.image}`}
					/>
				</div>
				<div
					class="card-content h-[280px] md:h-[350px] grid items-center relative z-20 bg-white rounded-3xl p-4 md:p-6"
				>
					<h6 class="content-date text-sm md:text-base font-semibold text-[#2672d5]">
						{event.date}
					</h6>
					<h1 class="content-head text-lg md:text-2xl font-bold text-slate-800 leading-snug">
						{event.name}
					</h1>
					<p
						class="content-description font-medium text-left text-sm md:text-base text-slate-600 line-clamp-4"
					>
						{event.description}
					</p>
					<div
						class="content-view text-right pr-2 opacity-0 font-semibold text-gray-400 text-sm md:text-base"
					>
						More...
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.events-container {
		scroll-behavior: smooth;
		scrollbar-width: none; /* Firefox */
	}
	.card-content {
		pointer-events: none;
		box-shadow: 0 40px 40px -30px rgba(40, 46, 74, 0.15);
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
</style> -->
