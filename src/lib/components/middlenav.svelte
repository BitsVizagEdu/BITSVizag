<nav>
	<div class="wrapper">
		<div class="logo">
			<a href="/"><img class="w-[120px]" src="/1.png" alt="" /></a>
		</div>
		<input type="radio" name="slider" id="menu-btn" />
		<input type="radio" name="slider" id="close-btn" />

		<ul class="nav-links gap-0 lg:gap-12">
			<label for="close-btn" class="btn close-btn">
				<i class="fas fa-times text-[#242526]" />
			</label>
			<li><a href="/">Home</a></li>
			<li>
				<a href="/aboutus/About-BITS-Vizag" class="desktop-item"> About Us</a>
				<input type="checkbox" id="showMega" />
				<label for="showMega" class="mobile-item">About Us</label>
				<div class="mega-box">
					<div class="content">
						<div class="row flex 3xs:gap-8 xl:gap-20 md:flex-col lg:flex-row">
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/aboutus/About-ABWS')}
							>
								<div class="row">
									<div class="dropdown__icon">
										<i class="fa-solid fa-building" />
									</div>
									<header>
										<div
											class="link-item"
											on:click={() => (window.location.href = '/aboutus/About-ABWS')}
										>
											About ABWS
										</div>
									</header>
								</div>
							</div>
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/aboutus/About-BITS-Vizag')}
							>
								<div class="row">
									<div class="dropdown__icon">
										<i class="fa-solid fa-building-columns" />
									</div>
									<header>
										<div
											class="link-item"
											on:click={() => (window.location.href = '/aboutus/About-BITS-Vizag')}
										>
											About BITS VIZAG
										</div>
									</header>
								</div>
							</div>
						</div>
						<div
							class="link-item cursor-pointer"
							on:click={() =>
								(window.location.href = '/aboutus/Message-from-Secretary & Correspondent')}
						>
							<div class="row">
								<div class="dropdown__icon">
									<i class="fa-solid fa-user" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/aboutus/Message-from-Chairman')}
									>
										Message from Secretary & Correspondent
									</div>
								</header>
							</div>
						</div>
						<div
							class="link-item cursor-pointer"
							on:click={() => (window.location.href = '/aboutus/Message-from-Principal')}
						>
							<div class="row">
								<div class="dropdown__icon">
									<i class="fa-solid fa-user" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/aboutus/Message-from-Principal')}
									>
										Message From Principal
									</div>
								</header>
							</div>
						</div>
						<!-- <div
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
						</div> -->
					</div>
				</div>
			</li>
			<li>
				<a href="/courses/Under Graduation" class="desktop-item">Courses</a>
				<input type="checkbox" id="courses" />
				<label for="courses" class="mobile-item">Courses</label>
				<div class="mega-box">
					<div class="content">
						<div class="row">
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/courses/Under Graduation')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-graduation-cap" />
								</div>
								<header>
									<div
										class="link-item ml-[-20px]"
										on:click={() => (window.location.href = '/courses/Under Graduation')}
									>
										Under Graduation
									</div>
								</header>
							</div>
						</div>
						<div
							class="link-item cursor-pointer"
							on:click={() => (window.location.href = '/courses/Post Graduation')}
						>
							<div class="row">
								<div class="dropdown__icon">
									<i class="fa-solid fa-graduation-cap" />
								</div>
								<header>
									<div
										class="link-item ml-[-40px]"
										on:click={() => (window.location.href = '/courses/Post Graduation')}
									>
										Post Graduation
									</div>
								</header>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li>
				<a
					on:click={() => (window.location.href = '/department/Department of BS&H')}
					class="desktop-item cursor-pointer"
				>
					Academics
				</a>
				<input type="checkbox" id="departments" />
				<label for="departments" class="mobile-item">Academics</label>
				<div class="mega-box">
					<div class="content">
						<div class="row">
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of CSE')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-code" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of CSE')}
									>
										Computer Science and Engineering
									</div>
								</header>
							</div>
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of BS&H')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-wand-magic-sparkles" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of BS&H')}
									>
										Basic Sciences & Humanities
									</div>
								</header>
							</div>
						</div>
						<div class="row">
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of ECE')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-lightbulb" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of ECE')}
									>
										Electronics and Communication Engineering
									</div>
								</header>
							</div>
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of CIVIL')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-screwdriver-wrench" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of CIVIL')}
									>
										Civil Engineering
									</div>
								</header>
							</div>
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of MBA')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-file-invoice" />
								</div>
								<header>
									<div
										class="link-item cursor-pointer"
										on:click={() => (window.location.href = '/department/Department of MBA')}
									>
										Management Studies
									</div>
								</header>
							</div>
						</div>
						<div class="row">
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of EEE')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-lightbulb" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of EEE')}
									>
										Electrical and Electronics Engineering
									</div>
								</header>
							</div>
							<div
								class="link-item cursor-pointer"
								on:click={() => (window.location.href = '/department/Department of MECH')}
							>
								<div class="dropdown__icon">
									<i class="fa-solid fa-gears" />
								</div>
								<header>
									<div
										class="link-item"
										on:click={() => (window.location.href = '/department/Department of MECH')}
									>
										Mechanical Engineering
									</div>
								</header>
							</div>
						</div>
					</div>
				</div>
			</li>

			<li><a href="/placements">Career Development Cell</a></li>
			<!--<li><a href="#">Academics</a></li>-->
			<li>
				<a href="#" class="desktop-item">Exam Cell</a>
				<input type="checkbox" id="exam" />
				<label for="exam" class="mobile-item">Exam Cell</label>
				<div class="mega-box">
					<div class="content">
						<div class="row">
							<div class="dropdown__icon">
								<i class="fa-solid fa-user-graduate" />
							</div>
							<header><a href="/examcell/BTECH">Engineering - B.Tech</a></header>
						</div>

						<div class="row">
							<div class="dropdown__icon">
								<i class="fa-solid fa-user-graduate" />
							</div>
							<header><a href="/examcell/MTECH">Engineering - M.Tech</a></header>
						</div>

						<div class="row">
							<div class="dropdown__icon">
								<i class="fa-solid fa-user-graduate" />
							</div>
							<header><a href="/examcell/MBA">Management Studies</a></header>
						</div>
					</div>
				</div>
			</li>

			<li><a href="/facilities">Facilities</a></li>
			<!-- <li><a href="/Mandatory">Mandatory Disclosure</a></li> -->

			<!--addons-->

			<li class="addon xl:hidden"><a href="/contactus">Contact Us</a></li>

			<li class="addon xl:hidden"><a href="/alumini-data">Alumini</a></li>
			<!--<li class="addon xl:hidden">
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
			<li class="addon xl:hidden">
				<a href="https://www.instagram.com/bits_vizag_official/" target="_blank">Social Life</a>
			</li>
			<!-- <li class="addon xl:hidden">
				<a href="/feedback">Feedback</a>
			</li> -->
			<li class="addon xl:hidden">
				<a href="/feedback">Online Grievances</a>
			</li>

			<!--addons-->
		</ul>

		<label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars text-[#242526]" /></label>
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

		background: hsl(220, 100%, 99%);
	}

	nav .wrapper {
		position: relative;
		max-width: 1600px;
		padding: 20px 45px;
		height: 80px;
		line-height: 70px;
		margin: auto;
		display: flex;
		align-items: center;
		gap: 80px;
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
		color: #253c6a;
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
			gap: 70px;
		}
	}

	@media screen and (max-width: 1447px) {
		nav .wrapper {
			gap: 70px;
		}
		.nav-links li a {
			font-size: 13px;
			font-weight: 700;
			padding: 9px 13px;
		}
	}

	@media screen and (max-width: 1402px) {
		nav .wrapper {
			gap: 70px;
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
			font-weight: 900;
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

	@media screen and (max-width: 1200px) {
		nav {
			position: sticky;
			top: 0;
			z-index: 999;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
			width: 100%;
		}
		.logo img {
			display: block;
			width: 80px; /* Reduced size for mobile */
			position: relative;
			z-index: 100;
		}
		.dropdown__icon .fa-user {
			margin-left: -5px;
			padding-top: 30px;
		}
		.dropdown__icon .fa-graduation-cap {
			margin-left: -28px;
			padding-top: 30px;
		}
		.dropdown__icon .fa-wand-magic-sparkles {
			margin-left: -10px;
			padding-top: 40px;
		}
		.dropdown__icon .fa-lightbulb {
			margin-left: -5px;
			padding-top: 30px;
		}
		.dropdown__icon .fa-gears {
			margin-left: -5px;
			padding-top: 40px;
		}

		.dropdown__icon .fa-file-invoice {
			margin-left: -5px;
			padding-top: 40px;
		}

		.dropdown__icon .fa-screwdriver-wrench {
			margin-left: -0px;
			padding-top: 40px;
		}
		.dropdown__icon .fa-code {
			margin-left: -5px;
		}
		nav .wrapper {
			justify-content: space-between;
			padding: 20px 20px; /* Reduced side padding slightly */
		}

		.wrapper .btn {
			display: block;
			padding-right: 25px;
		}

		.wrapper .nav-links {
			position: fixed;
			height: 100vh;
			width: 100%;
			max-width: 350px;
			top: 0;
			left: -100%;
			background: #ffffff;
			display: block;
			padding: 50px 10px;
			line-height: 50px;
			overflow-y: auto;
			box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
			transition: all 0.6s ease;
			z-index: 1;
		}

		/* custom scroll bar */
		::-webkit-scrollbar {
			width: 10px;
		}

		::-webkit-scrollbar-track {
			background: #242526;
		}

		::-webkit-scrollbar-thumb {
			background: #3a3b3c;
		}

		#menu-btn:checked ~ .nav-links {
			left: 0%;
		}

		#menu-btn:checked ~ .btn.menu-btn {
			display: none;
		}

		#close-btn:checked ~ .btn.menu-btn {
			display: block;
		}

		.nav-links li {
			margin: 15px 10px;
		}

		.nav-links li a {
			padding: 0 20px;
			display: block;
			font-size: 20px;
		}

		.nav-links li .link-item {
			padding: 0 0px;
			display: block;
			font-size: 15px;
			font-weight: 500;
			line-height: 30px;
			text-align: center;
		}

		.nav-links .drop-menu {
			position: static;
			opacity: 1;
			top: 65px;
			visibility: visible;
			padding-left: 20px;
			width: 100%;
			max-height: 0px;
			overflow: hidden;
			box-shadow: none;
			transition: all 0.3s ease;
		}

		#courses:checked ~ .mega-box,
		#showMega:checked ~ .mega-box,
		#departments:checked ~ .mega-box,
		#exam:checked ~ .mega-box,
		#iqac:checked ~ .mega-box {
			max-height: 100%;
		}

		.nav-links .desktop-item {
			display: none;
		}

		.nav-links .mobile-item {
			display: block;
			color: #2c426e;
			font-size: 20px;
			font-weight: 500;
			padding-left: 20px;
			cursor: pointer;
			border-radius: 5px;
			transition: all 0.3s ease;
			font-weight: bold;
		}

		.nav-links .mobile-item:hover {
			background: #2c426e;
			color: white;
		}

		.drop-menu li {
			margin: 0;
		}

		.drop-menu li a {
			border-radius: 5px;
			font-size: 18px;
		}

		.mega-box {
			position: static;
			top: 65px;
			opacity: 1;
			visibility: visible;
			padding: 0 20px;
			max-height: 0px;
			overflow: hidden;
			transition: all 0.3s ease;
		}

		.mega-box .content {
			box-shadow: none;
			flex-direction: column;
			padding: 20px 20px 0 20px;
		}

		.mega-box .content .row {
			width: 100%;
			margin-bottom: 15px;
			border-top: 1px solid rgba(255, 255, 255, 0.08);
		}

		.mega-box .content .row:nth-child(1),
		.mega-box .content .row:nth-child(2) {
			border-top: 0px;
		}

		.content .row .mega-links {
			border-left: 0px;
			padding-left: 15px;
		}

		.row .mega-links li {
			margin: 0;
		}

		.content .row header {
			font-size: 19px;
		}
	}

	nav input {
		display: none;
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
