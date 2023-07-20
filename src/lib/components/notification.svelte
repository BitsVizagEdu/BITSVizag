<div class="marquee">
	<h3>
		<div class="marquee-wrapper">
			<div class="marquee-title">
				<span class="text-stroke-black"> BITS VIZAG </span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>&nbsp;&nbsp;&nbsp;
				<span class="text-stroke-black"> BITS VIZAG </span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>&nbsp;&nbsp;&nbsp;
				<span class="text-stroke-black"> BITS VIZAG </span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>
				<span class="text-stroke-black">BITS VIZAG</span>
				<span>BITS VIZAG</span>&nbsp;&nbsp;&nbsp;
			</div>
			<div class="marquee-title" />
		</div>
	</h3>
</div>

<style>
    	/* Marquee Css */

	.marquee {
		width: 100%;
		padding: 5px 20px;
		border-top: 1px solid #000000;
		border-bottom: 1px solid #000000;
		text-align: center;
		overflow: hidden;
	}

	.marquee h3 {
		font-size: 20px;
		font-weight: 700;
		text-transform: uppercase;
	}

	.marquee .marquee-wrapper {
		width: 100000px;
		animation: marqueeAnimation 40s linear 0s infinite running;
	}

	.marquee h3 .marquee-title {
		margin-right: 20px;
		float: left;
	}

	.text-stroke-black {
		color: transparent;
		-webkit-text-stroke: 1px;
		-webkit-text-stroke-color: #000000;
	}

	@keyframes marqueeAnimation {
		100% {
			transform: translateX(-3500px);
		}
	}

	@media (max-width: 992px) {
		.marquee h3 {
			font-size: 20px;
		}
	}

	@media (max-width: 549px) {
		.marquee h3 {
			font-size: 18px;
		}
	}
</style>