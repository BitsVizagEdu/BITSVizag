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
	/* Fonts are loaded in app.html */

	nav {
		position: sticky;
		top: 56px; /* Below Middlenav */
		z-index: 997;
		width: 100%;
		background: #d22626;
		font-family: 'Roboto', sans-serif;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
	}

	nav .wrapper {
		max-width: 1600px;
		padding: 0 24px;
		height: 40px;
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
		padding: 8px 16px;
		transition: all 0.25s ease;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		border-radius: 8px;
		display: flex;
		align-items: center;
		font-weight: 500;
		font-family: 'Poppins', sans-serif;
		font-weight: 600;
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
			font-size: 14px;
			padding: 10px 18px;
			letter-spacing: 0.02em;
			background: rgba(255, 255, 255, 0.05);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}
	}
</style>
