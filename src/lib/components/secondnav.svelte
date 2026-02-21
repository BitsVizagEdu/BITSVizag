<nav>
	<div class="wrapper">
		<ul class="nav-links">
			<li><a href="/gallery">Gallery</a></li>
			<li><a href="/Students">Students</a></li>
			<li><a href="/Industry-Linkages">Industry & International Linkages</a></li>
			<li><a href="/infrastructure">Infrastructure</a></li>
			<li><a href="/finance-quality">Finance & Quality</a></li>
			<li><a href="/Mandatory">Disclosures</a></li>
			<li>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeLM-fVFfXfLMtIzC2QcO-djxj14gqkW1F18eGdqG9m9mt-Sg/viewform"
					target="_blank">Online Grievances</a
				>
			</li>
			<li><a href="/contactus">Contact Us</a></li>
		</ul>
	</div>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

	nav {
		z-index: 98;
		width: 100%;
		background: #d22626;
		font-family: 'Outfit', sans-serif;
	}

	nav .wrapper {
		max-width: 1600px;
		padding: 0 20px;
		height: 52px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: stretch;
	}

	.nav-links {
		display: flex;
		flex: 1;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
		white-space: nowrap;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.nav-links li {
		display: flex;
		align-items: center;
		height: 100%;
		position: relative;
	}

	.nav-links li a {
		color: rgba(255, 255, 255, 0.95);
		text-decoration: none;
		font-size: 14px;
		padding: 10px 16px;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-transform: none;
		letter-spacing: 0.03em;
		border-radius: 8px;
		display: flex;
		align-items: center;
		font-weight: 700;
		font-family: 'Source Sans 3', Arial, sans-serif;
	}

	.nav-links li a:hover {
		color: #ffffff;
		background: rgba(255, 255, 255, 0.12);
		transform: translateY(-1px);
	}

	.nav-links li a:active {
		transform: translateY(0);
		background: rgba(255, 255, 255, 0.2);
	}

	@media screen and (max-width: 1200px) {
		nav {
			overflow: hidden;
		}

		nav .wrapper {
			padding: 0;
			height: 50px;
			justify-content: flex-start;
			overflow-x: auto;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
		}

		nav .wrapper::-webkit-scrollbar {
			display: none;
		}

		.nav-links {
			padding: 0 20px;
			gap: 4px;
		}

		.nav-links li a {
			font-size: 10.5px;
			padding: 8px 12px;
			letter-spacing: normal;
		}
	}
</style>
