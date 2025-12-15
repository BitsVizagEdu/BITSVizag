<nav>
	<div class="wrapper justify-center">
		<ul class="nav-links gap-16">
			<!--<li>
                           <div
							class="link-item cursor-pointer"
							on:click={() => (window.location.href = '/affilation-reports')}
						>
							<div class="row">
								<div class="dropdown__icon">
									<i class="fa-solid fa-note-sticky"></i>
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/affilation-reports')}
									>
										Affilation Reports
									</div>
								</header>
							</div>
						</div> 
                        </li>-->

			<!--<li><a href="#">Academics</a></li>-->
			<li>
				<a
					href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=359985"
					target="_blank">Online Payment</a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/bits_vizag_official/" target="_blank">Social Life</a>
			</li>

			<li><a href="/gallery">Gallery</a></li>
			<li><a href="/Mandatory">Mandatory Disclosure</a></li>

			<!-- <li><a href="/alumini-data">Alumini</a></li> -->
			<!--<li>
                <a href="/examcell" class="desktop-item">Exam Cell</a>
                <input type="checkbox" id="exam"/>
                <label for="exam" class="mobile-item">Exam Cell</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <div class="dropdown__icon">
                                <i class="fa-solid fa-user-graduate"/>
                            </div>
                            <header><a href="/examcell/Engineering">Engineering</a></header>
                        </div>
                        <div class="row">
                            <div class="dropdown__icon">
                                <i class="fa-solid fa-user-graduate"/>
                            </div>
                            <header><a href="/examcell/MBA">Management Studies</a></header>
                        </div>
                    </div>
                </div>
            </li>-->

			<!-- <li><a href="/facilities">Facilities</a></li> -->
			<!-- 
			<li><a href="/gallery">Gallery</a></li> -->

			<li><a href="/NIRF">NIRF</a></li>
			<li>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeLM-fVFfXfLMtIzC2QcO-djxj14gqkW1F18eGdqG9m9mt-Sg/viewform"
					>Online Grievances</a
				>
			</li>
			<li><a href="/contactus">Contact Us</a></li>
		</ul>
	</div>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

	.dropdown__icon i {
		font-size: 2.3rem;
		color: hsl(220, 68%, 54%);
		border-radius: 50%;
		padding: 11px 10px;
		margin-left: 20px;
	}

	.dropdown__icon .fa-code {
		margin-left: -20px;
	}

	.dropdown__icon .fa-wand-magic-sparkles {
		margin-left: -10px;
	}

	.dropdown__icon .fa-lightbulb {
		margin-left: -5px;
	}

	.dropdown__icon .fa-gears {
		margin-left: -5px;
	}

	.dropdown__icon .fa-file-invoice {
		margin-left: -5px;
	}

	.dropdown__icon .fa-screwdriver-wrench {
		margin-left: -0px;
	}

	.dropdown__icon .fa-user-graduate {
		margin-left: -45px;
	}

	.dropdown__icon .fa-graduation-cap {
		margin-left: -35px;
	}

	.dropdown__icon .fa-building-columns {
		margin-left: -5px;
	}
	.dropdown__icon .fa-building {
		margin-left: -5px;
	}

	.dropdown__icon .fa-user {
		margin-left: -0px;
	}

	nav {
		z-index: 99;
		width: 100%;

		background: #d22626;
	}

	nav .wrapper {
		position: relative;
		max-width: 1600px;
		padding: 20px 0px;
		height: 50px;
		line-height: 70px;
		margin: auto;
		display: flex;
		align-items: center;
		gap: 50px;
	}

	.wrapper .logo a {
		color: #253c6a;
		font-size: 30px;
		font-weight: 600;
		text-decoration: none;
	}

	.wrapper .nav-links {
		display: inline-flex;
	}

	.nav-links li {
		list-style: none;
	}

	.nav-links li .link-item {
		color: #253c6a;
		text-decoration: none;
		font-size: 16px;
		font-weight: 600;
		padding: 9px 10px;
		border-radius: 5px;
		transition: all 0.3s ease;
		font-family: 'Poppins', sans-serif;
	}

	.nav-links li .link-item:hover {
		color: hsl(220, 68%, 54%);
	}

	.nav-links li a {
		color: #ffffff;
		text-decoration: none;
		font-size: 15px;
		font-weight: 600;
		padding: 9px 20px;
		border-radius: 5px;
		transition: all 0.3s ease;
		font-family: 'Poppins', sans-serif;
	}

	.nav-links li a:hover {
		color: hsl(220, 68%, 54%);
	}

	.nav-links .mobile-item {
		display: none;
		font-weight: bold;
	}

	.nav-links li:hover .drop-menu,
	.nav-links li:hover .mega-box {
		transition: all 0.3s ease;
		top: 70px;
		opacity: 1;
		visibility: visible;
	}

	.drop-menu li a {
		width: 100%;
		display: block;
		padding: 0 0 0 15px;
		font-weight: 400;
		border-radius: 0px;
	}

	.mega-box {
		position: absolute;
		left: 0;
		width: 100%;
		top: 85px;
		opacity: 0;
		visibility: hidden;
		text-align: center;
		z-index: 1;
	}

	.mega-box .content {
		background: #ffffff;
		padding: 11px 100px;
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		box-shadow: 50px 40px 10px rgba(0, 0, 0, 0.15);
		border-radius: 10px 10px 10px 10px;
	}

	.mega-box .content .row {
		line-height: 45px;
	}

	.mega-box .content .row header a {
		color: hsl(220, 48%, 28%);
		font-weight: bold;
		margin-left: -40px;
	}

	.content .row .mega-links {
		margin-left: -40px;
		border-left: 1px solid rgba(255, 255, 255, 0.09);
	}

	.row .mega-links li {
		padding: 0 20px;
	}

	.row .mega-links li a {
		padding: 0px;
		padding: 0 20px;
		color: #253c6a;
		font-size: 15px;
		display: block;
	}

	.row .mega-links li a:hover {
		color: hsl(220, 68%, 54%);
	}

	.wrapper .btn {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		display: none;
	}

	.wrapper .btn.close-btn {
		position: absolute;
		right: 30px;
		top: 10px;
	}

	@media screen and (max-width: 1347px) {
		nav .wrapper {
			gap: 50px;
		}
	}
	@media screen and (max-width: 1447px) {
		nav .wrapper {
			gap: 50px;
		}
		.nav-links li a {
			font-size: 13px;
			font-weight: 700;
			padding: 9px 13px;
		}
	}
	@media screen and (max-width: 1402px) {
		nav .wrapper {
			gap: 30px;
		}
		.nav-links li a {
			font-size: 14px;
			font-weight: 700;
			padding: 9px 13px;
		}
	}
	@media screen and (max-width: 1300px) {
		nav .wrapper {
			gap: 30px;
		}
		.nav-links li a {
			font-size: 13px;
			font-weight: 700;
			padding: 9px 13px;
		}
	}

	@media screen and (max-width: 1240px) {
		.nav-links li a {
			font-size: 12px;
			font-weight: 700;
			padding: 9px 10px;
		}

		.nav-links li .link-item {
			font-size: 14px;
			font-weight: 700;
		}
	}
	@media screen and (max-width: 1163px) {
		.nav-links li a {
			font-size: 11px;
			font-weight: 700;
			padding: 9px 10px;
		}
	}
	@media screen and (max-width: 1101px) {
		.nav-links li a {
			font-size: 10px;
			font-weight: 700;
			padding: 9px 10px;
		}

		.nav-links li .link-item {
			font-size: 11px;
			font-weight: 700;
		}
	}
	@media screen and (max-width: 1037px) {
		.nav-links li a {
			font-size: 10px;
			font-weight: 700;
		}

		.nav-links li .link-item {
			font-size: 11px;
			font-weight: 700;
		}
	}
	@media screen and (max-width: 975px) {
		.nav-links li a {
			font-size: 9px;
			font-weight: 700;
		}

		.nav-links li .link-item {
			font-size: 11px;
			font-weight: 700;
		}
	}

	@media screen and (max-width: 430px) {
		nav .wrapper {
			max-width: 350px;
		}
	}

	@media screen and (max-width: 970px) {
		nav {
			display: block;
			width: 100%;
			overflow-x: auto;
			white-space: nowrap;
			-webkit-overflow-scrolling: touch;
			background: #d22626; /* Ensure red background */
			position: relative; /* Removed sticky */
			/* top: 0; Removed top */
			/* z-index: 50; Removed z-index */
			box-shadow: none; /* Removed shadow */
		}

		nav::-webkit-scrollbar {
			display: none;
		}

		nav .wrapper {
			display: flex;
			align-items: center;
			justify-content: flex-start; /* Start from left to avoid hiding first item */
			width: 100%;
			padding: 0;
			height: 40px;
		}

		.nav-links {
			display: flex;
			gap: 15px; /* Reduced gap */
			padding: 0;
			margin: 0;
			position: relative;
			left: 0;
			height: auto;
			width: auto;
			background: transparent;
			box-shadow: none;
			overflow: visible;
		}

		.nav-links li {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.nav-links li a {
			display: inline-block;
			color: white; /* Ensure text is white */
			font-size: 12px;
			font-weight: 700; /* Bolder text */
			text-transform: uppercase; /* Uppercase for premium feel */
			letter-spacing: 0.5px;
			padding: 0 5px;
			background: transparent; /* Removed white shade */
			border-radius: 4px;
			text-decoration: none;
			transition: all 0.3s ease;
		}

		.nav-links li a:hover,
		.nav-links li a:active {
			background: rgba(255, 255, 255, 0.25);
			color: white;
		}

		/* Removed unused sidebar specific styles for mobile */
	}

	.body-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		text-align: center;
		padding: 0 30px;
	}

	.body-text div {
		font-size: 45px;
		font-weight: 600;
	}
</style>
