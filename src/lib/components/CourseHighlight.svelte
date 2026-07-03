<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const courses = [
		{
			title: 'CSE',
			image: '/gallery/g2.jpg',
			desc: 'Computer Science & Engineering',
			duration: '4 Years',
			seats: '240 Seats',
			href: `/department/${encodeURIComponent('Department of CSE')}`,
			icon: '💻',
			color: '#ffb356'
		},
		{
			title: 'AI & ML',
			image: '/Course-highlight/newAI.jpg',
			desc: 'Artificial Intelligence & Machine Learning',
			duration: '4 Years',
			seats: '120 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (AI & ML)')}`,
			icon: '🤖',
			color: '#8ecdfa'
		},
		{
			title: 'Cyber Security',
			image: '/CS-Banners/CS-images/get4.jpg',
			desc: 'CSE (Cyber Security)',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (Cyber Security)')}`,
			icon: '🛡️',
			color: '#c3b5ff'
		},
		{
			title: 'ECE',
			image: '/Course-highlight/newece.jpg',
			desc: 'Electronics & Communication Engineering',
			duration: '4 Years',
			seats: '120 Seats',
			href: `/department/${encodeURIComponent('Department of ECE')}`,
			icon: '📡',
			color: '#e7b2ff'
		},
		{
			title: 'EEE',
			image: './Course-highlight/eeenew.png',
			desc: 'Electrical & Electronics Engineering',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of EEE')}`,
			icon: '⚡',
			color: '#ff9ebb'
		},
		{
			title: 'Mechanical',
			image: '/mechnew.png',
			desc: 'Mechanical Engineering',
			duration: '4 Years',
			seats: '60 Seats',
			href: `/department/${encodeURIComponent('Department of MECH')}`,
			icon: '🔧',
			color: '#a3e635'
		}
	];

	let active = 0;
	let paused = false;
	let autoplayInterval;

	function startAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
		autoplayInterval = setInterval(() => {
			if (!paused) {
				active = (active + 1) % courses.length;
			}
		}, 4000);
	}

	onMount(() => {
		startAutoplay();
		return () => clearInterval(autoplayInterval);
	});

	function handleMouseEnter(i) {
		active = i;
		paused = true;
	}

	function handleMouseLeave() {
		paused = false;
	}
</script>

<section class="pathways-section" on:mouseleave={handleMouseLeave}>
	<!-- Header Section -->
	<div class="pathways-header">
		<h2 class="header-title">Explore Academic Pathways</h2>
		<p class="header-desc">
			Discover our AICTE-approved, UGC-recognised engineering programmes. Crafted to align with global industry demands and build exceptional careers.
		</p>
	</div>

	<!-- Capsule Accordion List -->
	<div class="capsule-list" role="list">
		{#each courses as course, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<article
				class="capsule-card {active === i ? 'active' : ''}"
				style="--accent-color: {course.color};"
				on:mouseenter={() => handleMouseEnter(i)}
				on:click={() => { active = i; paused = true; }}
				role="listitem"
			>
				<!-- Background Image -->
				<img
					src={course.image}
					alt={course.title}
					class="card-bg-image"
					loading="lazy"
				/>

				<!-- Gradients Overlay -->
				<div class="card-overlay" class:dim={active !== i}></div>

				<!-- Floating Bottom Bar Content -->
				<div class="bottom-bar {active === i ? 'expanded-bar' : 'collapsed-bar'}">
					<a href={course.href} class="icon-circle" aria-label="Explore {course.title}">
						{#if course.title === 'CSE'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Desktop-Code--Streamline-Flex-Gradient" height="24" width="24">
								<g id="desktop-code--desktop-device-display-computer-code-terminal-html-css-programming-system 1">
									<path id="Union" fill="url(#paint0_linear_9379_32)" fill-rule="evenodd" d="M11.0118.444391c-2.87202-.259188-5.15139-.259188-8.02339 0C1.69271.561324.648622 1.57609.465359 2.86584c-.287146 2.02086-.287145 3.43664 0 5.4575C.648622 9.61309 1.69271 10.6279 2.98841 10.7448c.65542.0591 1.27998.1048 1.88776.1369l-.2217 1.2489c-.46092.032-.92293.0732-1.38669.1239-.41176.0449-.70912.4152-.66416.8269.04496.4118.4152.7092.82697.6642 2.39949-.262 4.74713-.262 7.14661 0 .4118.045.782-.2524.827-.6642.0449-.4117-.2524-.782-.6642-.8269-.4658-.0509-.92996-.0923-1.39296-.1243l-.22157-1.2485c.60732-.0322 1.23143-.0778 1.88633-.1369 1.2957-.1169 2.3398-1.13171 2.523-2.42146.2872-2.02086.2872-3.43664 0-5.4575-.1832-1.28975-1.2273-2.304516-2.523-2.421449ZM3.12324 1.93832c2.78229-.25109 4.97142-.25109 7.75376 0 .5859.05288 1.0851.52136 1.1727 1.13854.2673 1.88088.2673 3.15458 0 5.03546-.0876.61719-.5868 1.08566-1.1727 1.13854-2.78234.2511-4.97147.2511-7.75377 0-.58595-.05288-1.08509-.52135-1.17279-1.13854-.26725-1.88088-.26725-3.15458 0-5.03546.0877-.61718.58684-1.08566 1.1728-1.13854Zm4.79445 1.56821c.22266-.26377.61698-.29709.88074-.07444l.00182.00154.00381.00324.01339.01142.04804.04149c.04076.03547.09831.08615.1671.14839.1369.12385.32146.29633.50784.48754.18372.18848.3824.40856.53937.62661.0784.10898.1559.23042.2158.35734.0563.11909.1199.28981.1199.48502 0 .19522-.0636.36593-.1199.48502-.0599.12692-.1374.24836-.2158.35734-.15697.21805-.35565.43813-.53937.62661-.18638.19122-.37094.36369-.50784.48755-.06879.06223-.12634.11291-.1671.14838l-.04804.04149-.01339.01143-.00381.00324-.00116.00098c-.26377.22265-.65874.18988-.8814-.07388-.22263-.26374-.18934-.65801.07435-.88068l1.14715-1.20748c-.01773-.03026-.04197-.06768-.07401-.1122-.10467-.14544-.25479-.31491-.41987-.48427-.16242-.16663-.32665-.3203-.45135-.43312-.06201-.0561-.11346-.10139-.14899-.13231l-.04053-.03501-.00994-.00848-.00217-.00184c-.26369-.22267-.29727-.61719-.07464-.88092Zm-2.71588-.07444c.26377-.22265.65809-.18933.88075.07444.22263.26373.18904.65825-.07465.88092l-.00216.00184-.00995.00848-.04052.03501c-.03554.03092-.08698.07621-.149.13231-.12469.11282-.28893.26649-.45134.43312-.16509.16936-.3152.33883-.41988.48427-.03204.04452-.05627.08194-.074.1122L6.0082 6.80216c.26369.22267.29699.61694.07436.88068-.22266.26376-.61764.29653-.8814.07388L5.2 7.75574l-.00382-.00324-.01339-.01143-.04803-.04149c-.04077-.03547-.09832-.08615-.16711-.14838-.1369-.12386-.32146-.29633-.50784-.48755-.18371-.18848-.38239-.40856-.53932-.62661-.07843-.10898-.15591-.23042-.21587-.35734-.05626-.11909-.11984-.2898-.11984-.48502 0-.19521.06358-.36593.11984-.48502.05996-.12692.13744-.24836.21587-.35734.15693-.21805.35561-.43813.53932-.62661.18638-.19121.37094-.36369.50784-.48754.06879-.06224.12634-.11292.16711-.14839l.04803-.04149.01339-.01142L5.2 3.43363l.00181-.00154Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9379_32" x1=".769" x2="16.155" y1="1.341" y2="10.013" gradientUnits="userSpaceOnUse">
										<stop stop-color="#00d078"></stop>
										<stop offset="1" stop-color="#007df0"></stop>
									</linearGradient>
								</defs>
							</svg>
						{:else if course.title === 'AI & ML'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Cyborg-2--Streamline-Flex-Gradient" height="22" width="22">
								<g id="cyborg-2--artificial-robotics-intelligence-machine-technology-android">
									<path id="Union" fill="url(#paint0_linear_9380_365)" fill-rule="evenodd" d="M6.99968 0c-.52693 0-1.0092.149747-1.35925.499801-.35006.350054-.4998.832319-.4998 1.359249 0 .52694.14974 1.0092.4998 1.35926.17394.17395.38054.29843.60904.37966v.89592c-1.16047.0058-2.36247.03932-3.41289.23265-.82476.1518-1.45491.79053-1.6368 1.58971-.19884.87364-.19883 1.5693-.1988 2.8863v.08759c-.00003 1.31706-.00004 2.01266.1988 2.88636.18189.7991.81204 1.4379 1.6368 1.5897C4.10733 14.0001 5.59991 14 6.97245 14h.05706c1.37254 0 2.86512.0001 4.13589-.2338.8247-.1518 1.4549-.7906 1.6368-1.5897.1988-.8737.1988-1.5693.1988-2.88635v-.08759c0-1.31701 0-2.01266-.1988-2.88631-.1819-.79918-.8121-1.43791-1.6368-1.58971-1.0514-.1935-2.25452-.22691-3.41593-.23267v-.89575c.22867-.08122.43541-.20576.60946-.37981.35006-.35006.4998-.83232.4998-1.35926 0-.52693-.14974-1.009195-.4998-1.359249C8.00888.149747 7.52661 0 6.99968 0ZM5.01989 6.85988c.34517 0 .625.27982.62499.625v.59051c0 .34518-.27982.625-.625.625s-.625-.27983-.625-.62501v-.5905c.00001-.34518.27983-.625.62501-.625Zm4.58691.625c0-.34518-.27982-.625-.625-.625s-.625.27982-.625.625v.5905c0 .34518.27982.62501.62499.62501.34518 0 .62501-.27982.62501-.625v-.59051ZM5.42432 9.7183c-.16857-.29696-.5451-.404-.84506-.23874-.30233.16657-.41238.54664-.24581.84904l.54741-.3016c-.54741.3016-.54758.3013-.54741.3016l.00068.0012.00075.0014.00167.0029.00406.0072.01108.0189c.00871.0145.02011.0329.03432.0546.02838.0434.06817.1002.12031.166.10398.1312.25912.3004.4731.4682.43439.3405 1.09758.6632 2.02224.6632.92465 0 1.58784-.3227 2.02223-.6632.21398-.1678.36912-.337.47311-.4682.05213-.0658.09193-.1226.1203-.166.01421-.0217.02561-.0401.03432-.0546l.01108-.0189.00407-.0072.00167-.0029.00074-.0014c.00017-.0003.00068-.0012-.54673-.3028l.54741.3016c.16657-.3024.05652-.68247-.24581-.84904-.29996-.16526-.67649-.05822-.84506.23874-.00103.00171-.00355.00579-.00759.01197-.00957.01462-.02742.04056-.05406.07417-.05355.06758-.14049.16345-.26463.26076-.24184.1896-.63905.397-1.25105.397-.61201 0-1.00922-.2074-1.25106-.397-.12414-.09731-.21108-.19318-.26463-.26076-.02664-.03361-.04449-.05955-.05406-.07417-.00404-.00618-.00656-.01026-.00759-.01197Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9380_365" x1="14.041" x2="-3.726" y1="16.965" y2="6.147" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ffd600"></stop>
										<stop offset="1" stop-color="#ff007a"></stop>
									</linearGradient>
								</defs>
							</svg>
						{:else if course.title === 'Cyber Security'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Fingerprint-Cyber-Streamline-Flex-Gradient" height="22" width="22">
								<g id="fingerprint-cyber-id-security">
									<path id="Union-cyber" fill="url(#paint0_linear_9371_6090_cyber)" fill-rule="evenodd" d="M5.06942 1.76257c.60574-.17586 1.25592-.26287 1.91628-.26287 2.42623 0 4.6003 1.13982 5.2035 3.52139.1017.40153.5096.6446.9112.5429.4015-.10169.6446-.50964.5429-.91118-.8302-3.2779-3.81575-4.653115176-6.6576-4.653115176-.78995 0-1.58186.103847176-2.33449.322352176-.39779.115486-.62664.531578-.51116.929373.11549.39778.53158.62664.92937.51115Zm-3.42649.39008c.27689-.30807.75109-.33335 1.05916-.05647.30807.27688.33336.75108.05648 1.05915-.93341 1.03856-1.26671 2.68208-1.2574 4.58925.00834 1.70858.28761 3.47682.5196 4.94572.02388.1512.0473.2995.06983.444.06383.4092-.2162.7928-.62547.8566-.40927.0638-.792786-.2162-.856614-.6255-.022361-.1434-.045889-.292-.070166-.4454C.307995 11.4644.0101213 9.5821.0011852 7.7519-.00858329 5.75125.321685 3.62274 1.64293 2.15265Zm6.47429 2.56858c-.36151-.12969-.75511-.18235-1.13147-.18235-.64579 0-1.31254.15338-1.80522.55704-.46444.38052-.88788 1.07674-.88788 2.41633 0 .41421-.33578.75-.75.75-.41421 0-.75-.33579-.75-.75 0-1.68653.5528-2.85199 1.43725-3.57663.8562-.70149 1.911-.89674 2.75585-.89674.50754 0 1.07904.06993 1.63799.27046.38988.13987.59255.56932.45268.9592-.13987.38989-.56932.59256-.9592.45269Zm1.38887 1.49139c-.12197-.39585.10004-.81563.49591-.9376.3958-.12198.8156.10004.9376.49589.1566.50824.2391 1.0868.2391 1.74114 0 1.57799-.2187 3.06415-.4347 4.15015-.1084.5447-.2169.9928-.2989 1.3064-.041.157-.0755.2805-.1.3659-.0123.0427-.0221.0759-.029.0991l-.0081.027-.0024.0077-.0007.0024-.0003.0011c-.0001.0001-.0001.0002-.7165-.2218l.7165.2218c-.1227.3957-.54291.6172-.93855.4946-.39558-.1226-.61689-.5427-.49438-.9383l.00137-.0044.00591-.0197c.0054-.018.01367-.046.02439-.0834.02145-.0747.05269-.1867.09048-.3313.07562-.2893.17721-.7083.27899-1.2198.20423-1.0265.40587-2.40931.40587-3.85745l-.00003-.01923c-.0016-.52028-.06802-.94093-.17256-1.2802ZM3.06872 10.7766c-.06569-.409.21259-.79376.62157-.85945.40897-.06569.79376.21255.85944.62155.11924.7424.25834 1.3698.36721 1.8101.05439.22.10109.3927.13378.509.01634.0582.02916.1022.03767.131l.00944.0315.0021.0069.0003.001c.12239.3956-.09883.8157-.49436.9383-.39564.1226-.81579-.0987-.93842-.4943l.71637-.2221c-.71637.2221-.71635.2222-.71637.2221l-.00059-.0019-.00105-.0034-.00349-.0115-.01225-.0409c-.0104-.0352-.02516-.0859-.04345-.151-.03657-.1302-.08734-.3181-.14582-.5546-.11686-.4726-.26506-1.1414-.39208-1.9323Zm3.91724-.0915c.41421 0 .75.3358.75.75v1.0035c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75v-1.0035c0-.4142.33579-.75.75-.75Zm1.1514-1.41575c-.41421 0-.75-.33579-.75-.75 0-.33692-.09139-.51447-.15926-.59448-.06133-.0723-.1375-.1089-.24243-.1089-.10494 0-.18111.0366-.24243.1089-.06787.08001-.15926.25756-.15926.59448 0 .41421-.33579.75-.75.75-.41422 0-.75-.33579-.75-.75 0-.60431.16642-1.15345.51538-1.56482.3555-.41908.85518-.63856 1.38631-.63856.53113 0 1.0308.21948 1.38631.63856.34896.41138.51538.96051.51538 1.56482 0 .41421-.33579.75-.75.75Zm5.10754-2.43932c.4142-.00222.7518.33176.754.74597.0101 1.8863-.2991 3.8416-.5365 5.3428-.0243.1539-.0479.3029-.0703.4466-.0637.4093-.4472.6894-.8565.6256-.4093-.0638-.6893-.4472-.6256-.8565.0225-.1441.0458-.2917.0696-.4425.2392-1.5161.5287-3.35128.5193-5.10796-.0022-.41421.3318-.75179.746-.75401Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9371_6090_cyber" x1="13.952" x2="-2.627" y1="14.003" y2="4.679" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ff51e3"></stop>
										<stop offset="1" stop-color="#1b4dff"></stop>
									</linearGradient>
								</defs>
							</svg>
						{:else if course.title === 'ECE'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Cloud-Data-Transfer--Streamline-Flex-Gradient" height="22" width="22">
								<g id="cloud-data-transfer--cloud-data-transfer-internet-server-network 1">
									<path id="Union" fill="url(#paint0_linear_9379_17)" fill-rule="evenodd" d="M4.69652.694647C5.40486.225134 6.29498 0 7.31414 0c1.24264 0 2.29354.335564 3.05226 1.03521.6612.60961 1.0503 1.44934 1.1807 2.45131.6686.08839 1.2456.34459 1.6777.78941.5307.54619.7752 1.30702.7752 2.18473 0 .98707-.3194 1.76824-.849 2.36593-.4971.56091-1.1543.93263-1.8333 1.18231-.1375-.17011-.3055-.32035-.5018-.44211-.3233-.20046-.6815-.29759-1.03594-.30044V8.05044c0-1.10457-.89543-2-2-2-.40945 0-.79015.12304-1.10716.33415-.04192-.02631-.08551-.05177-.13085-.07626-1.02402-.5533-1.96394-.10242-2.3636.19049-.5157.37794-1.45229 1.15385-2.1713 2.31344-.10547.1701-.18233.34986-.23191.53364-.30051-.1971-.57979-.42784-.824421-.69838C.361725 7.99617 0 7.14245 0 6.05785c0-1.11328.314737-2.05731.979945-2.72252.594465-.59447 1.411615-.90904 2.373225-.96923.41759.09996.81241.27264 1.1612.49077.57108.35715.96963.80472 1.14395 1.17681.14644.31257.51854.44726.83112.30082.31257-.14644.44725-.51854.30082-.83112-.30053-.64147-.89204-1.25538-1.61309-1.70632-.34341-.21476-.72722-.39959-1.1394-.53499.19264-.21428.4124-.404134.65875-.567423ZM3.31142 10.6699c-.35203-.2183-.46047-.6806-.24219-1.03263.60125-.96968 1.39804-1.63428 1.84785-1.96393.21175-.15519.61397-.32404 1.0305-.09898.40204.21722.49103.62859.49103.87827v4.79597c0 .4142-.33578.75-.75.75-.41421 0-.75-.3358-.75-.75V9.65389c-.20701.22345-.41383.48241-.59455.77381-.21828.3521-.68061.4605-1.03264.2422Zm4.2095 3.2211c-.40204-.2172-.49103-.6286-.49103-.8783V8.21673c0-.41421.33578-.75.75-.75.41421 0 .75.33579.75.75v3.59467c.20701-.2234.41383-.4823.59455-.7738.21828-.352.68061-.4604 1.03266-.2422.352.2183.4604.6806.2422 1.0327-.60128.9696-1.39807 1.6342-1.84788 1.9639-.21175.1552-.61397.324-1.0305.099Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9379_17" x1="2.288" x2="13.596" y1="2.692" y2="8.957" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ffd600"></stop>
										<stop offset="1" stop-color="#00d078"></stop>
									</linearGradient>
								</defs>
							</svg>
						{:else if course.title === 'EEE'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Charging--Streamline-Flex-Gradient" height="22" width="22">
								<g id="charging--phone-mobile-charge-device-electricity-power-battery-charging">
									<path id="Union" fill="url(#paint0_linear_9380_295)" fill-rule="evenodd" d="M2.90533 2.90533C2.02135 3.78931 1.5 5.13805 1.5 7c0 .32227.01571.62961.04628.922.04308.41197-.25597.78086-.667934.82393-.411968.04308-.7808537-.25597-.82393-.66793C.0180739 7.73043 0 7.37089 0 7c0-2.13805.603648-3.91431 1.84467-5.15533C3.08569.603648 4.86195 0 7 0c2.13805 0 3.9143.603648 5.1553 1.84467C13.3964 3.08569 14 4.86195 14 7c0 .37089-.0181.73043-.0544 1.078-.0431.41196-.412.71101-.8239.66793-.412-.04307-.7111-.41196-.668-.82393.0306-.29239.0463-.59973.0463-.922 0-1.86195-.5214-3.21069-1.4053-4.09467C10.2107 2.02135 8.86195 1.5 7 1.5c-1.86195 0-3.21069.52135-4.09467 1.40533Zm9.98217 6.76131c.37.18637.5187.63736.3324 1.00726-.4273.848-1.0268 1.5517-1.7862 2.0899-.338.2395-.8061.1596-1.0456-.1783-.2395-.338-.1597-.8061.1782-1.0456.5535-.3922.9935-.905 1.314-1.54094.1864-.36991.6373-.5187 1.0072-.33232Zm-10.76776.33232c-.18638-.36991-.63734-.5187-1.00725-.33232-.369919.18637-.518705.63736-.332327 1.00726.427247.848 1.026747 1.5517 1.786207 2.0899.33796.2395.80608.1596 1.04557-.1783.2395-.338.15969-.8061-.17827-1.0456-.55345-.3922-.99349-.905-1.31393-1.54094Zm2.6405 3.00934c.06823-.4085.45473-.6844.86329-.6162.42355.0707.88237.1076 1.37647.1076.4941 0 .95291-.0369 1.37647-.1076.40856-.0682.79506.2077.86329.6162.06822.4086-.20768.7951-.61623.8633-.51315.0857-1.05511.1281-1.62353.1281-.56842 0-1.11039-.0424-1.62353-.1281-.40856-.0682-.68445-.4547-.61623-.8633ZM6.9575 3.02307c.48319-.4366 1.21117-.06926 1.21117.55201v2.58685h1.44564c.60199 0 .96449.6789.60659 1.17512-.96192 1.33408-1.95532 2.53512-3.17798 3.63985-.48318.4366-1.21116.0693-1.21116-.552V7.83807H4.38611c-.60197 0-.96444-.6789-.60663-1.17512.96196-1.33408 1.95537-2.53512 3.17802-3.63988Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9380_295" x1="13.953" x2="-2.626" y1="14.003" y2="4.676" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ff51e3"></stop>
										<stop offset="1" stop-color="#1b4dff"></stop>
									</linearGradient>
								</defs>
							</svg>
						{:else if course.title === 'Mechanical'}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Wrench-Hand--Streamline-Flex-Gradient" height="22" width="22">
								<g id="wrench-hand--crescent-tool-construction-tools-wrench-setting-edit-adjust">
									<path id="Union" fill="url(#paint0_linear_9371_9121)" fill-rule="evenodd" d="M9.14413.590474C8.53577.495351 7.98145.567688 7.51319.822777c-.46887.255423-.82736.680983-1.06661 1.248693-.2194.52062-.28347 1.02991-.18039 1.50838.07963.36966.2563.70823.51879 1.01014.06877.0791.08876.19094.04449.28594-.05402.11592-.10777.23293-.16097.35106-.03889.08634-.0242.18667.03217.26276.2868.3872.4767.84242.54724 1.32325.01912.13038.12712.23293.2589.23293h.16787c.40977 0 .85417.12277 1.26062.33383.13503.07012.30594.01992.36702-.11943.04027-.09189.08012-.18444.1194-.27766.12272-.29118.23688-.58156.34549-.86867.03708-.09803.13108-.16183.23569-.16785.3994-.02297.7652-.13295 1.0854-.33411.4144-.26038.7342-.6619.9536-1.18253.2293-.54403.2888-1.07549.1657-1.57186-.1231-.49635-.4229-.93376-.8705-1.30002-.0613-.0502-.1429-.06832-.2197-.04885-.0769.01947-.1399.07422-.17.14758-.0097.02382-.0197.0478-.0299.07194-.0809.19198-.1599.39448-.233.58171-.0534.13688-.1037.26573-.1491.37619-.117.28437-.2237.50467-.3432.66108-.1148.15033-.22905.22579-.36348.24918-.14331.02494-.35145-.00187-.66467-.14656-.31628-.14611-.46895-.282-.54002-.39882-.06496-.10679-.08072-.22916-.04205-.40424.04069-.1842.13568-.39981.26881-.67366.02742-.05639.05629-.11496.08619-.17559.11092-.22495.23596-.47858.3526-.75536.01488-.03531.02983-.070066.04484-.104264.03119-.071036.02763-.152526-.00963-.220571-.03727-.068046-.10401-.114936-.18066-.126921ZM5.85108 7.98513l-.13428.3108h1.95788c.53831 0 1.61493.5383 1.61493 1.61492 0 1.07665-1.08252 3.53915-2.22761 3.53915-1.17605 0-3.38065-.2185-4.59108-.3998-.44155-.0661-.74094-.4464-.74094-.8928V9.65301c0-.18345.05046-.36336.14587-.52005L3.79764 5.9766c.18132-.29781.52843-.45181.87091-.38639.75131.1435 1.26938.75808 1.3487 1.45572.03164.27825-.00652.56971-.12752.84976l-.03865.08944c.00003-.00007-.00003.00007 0 0Z" clip-rule="evenodd"></path>
								</g>
								<defs>
									<linearGradient id="paint0_linear_9371_9121" x1="13.184" x2="-2.817" y1="16.182" y2="6.895" gradientUnits="userSpaceOnUse">
										<stop stop-color="#ffd600"></stop>
										<stop offset="1" stop-color="#e61f84"></stop>
									</linearGradient>
								</defs>
							</svg>
						{/if}
					</a>
					
					{#if active === i}
						<div class="meta-info" in:fade={{ duration: 300 }}>
							<h3 class="meta-title">{course.title}</h3>
							<p class="meta-desc">{course.desc}</p>
							<div class="meta-stats">
								<span class="stat-tag">{course.duration}</span>
								<span class="stat-tag">{course.seats}</span>
							</div>
						</div>
					{:else}
						<span class="collapsed-title">{course.title}</span>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.pathways-section {
		max-width: 1280px;
		margin: 0 auto;
		padding: 5rem 2rem;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	.pathways-header {
		text-align: center;
		max-width: 800px;
		margin: 0 auto 4rem;
	}

	.header-title {
		font-size: clamp(2rem, 3.5vw, 3.5rem);
		font-weight: 700;
		color: #0f172a;
		letter-spacing: -0.02em;
		margin: 0 0 1rem;
	}

	.header-desc {
		font-size: clamp(0.95rem, 1.1vw, 1.15rem);
		line-height: 1.6;
		color: #64748b;
		margin: 0;
	}

	.capsule-list {
		display: flex;
		gap: 1.25rem;
		height: 480px;
		width: 100%;
	}

	.capsule-card {
		position: relative;
		height: 100%;
		flex: 1;
		border-radius: 9999px;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.8s cubic-bezier(0.25, 1, 0.3, 1);
		box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
	}

	.capsule-card:hover {
		box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
	}

	.capsule-card.active {
		flex: 5.5;
		border-radius: 2rem;
		cursor: default;
	}

	.card-bg-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 1.2s cubic-bezier(0.25, 1, 0.3, 1);
	}

	.capsule-card.active:hover .card-bg-image {
		transform: scale(1.03);
	}

	.card-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.25) 60%, transparent 100%);
		z-index: 1;
		transition: opacity 0.5s ease;
	}

	.card-overlay.dim {
		background: rgba(15, 23, 42, 0.45);
	}

	.capsule-card:hover .card-overlay.dim {
		background: rgba(15, 23, 42, 0.25);
	}

	.bottom-bar {
		position: absolute;
		inset: 0;
		z-index: 2;
		display: flex;
		transition: all 0.6s cubic-bezier(0.25, 1, 0.3, 1);
		box-sizing: border-box;
	}

	.collapsed-bar {
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		padding: 2.2rem 0.5rem;
		gap: 0.5rem;
	}

	.expanded-bar {
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-end;
		padding: 2.2rem 2.5rem;
		gap: 1.5rem;
	}

	.icon-circle {
		width: 52px;
		height: 52px;
		background: #ffffff;
		border: 1px solid rgba(15, 23, 42, 0.06);
		border-radius: 50%;
		display: grid;
		place-items: center;
		box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
		transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
		text-decoration: none;
		flex-shrink: 0;
	}

	.icon-circle:hover {
		transform: scale(1.1);
		background-color: var(--accent-color);
		border-color: transparent;
		box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
	}

	.icon-circle svg {
		width: 28px;
		height: 28px;
		display: block;
		overflow: visible;
	}

	.meta-info {
		color: #ffffff;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.meta-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.01em;
	}

	.meta-desc {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.8);
		margin: 0 0 0.5rem;
		font-weight: 500;
	}

	.meta-stats {
		display: flex;
		gap: 0.75rem;
	}

	.stat-tag {
		font-size: 0.75rem;
		font-weight: 700;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(4px);
		padding: 0.25rem 0.65rem;
		border-radius: 9999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.collapsed-title {
		font-size: 0.75rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		pointer-events: none;
		margin-top: 0.35rem;
		text-align: center;
	}

	/* Responsive tweaks */
	@media (max-width: 992px) {
		.capsule-list {
			height: 420px;
		}

		.expanded-bar {
			bottom: 1.5rem;
			left: 1.5rem;
			gap: 1rem;
		}

		.meta-title {
			font-size: 1.4rem;
		}

		.meta-desc {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 640px) {
		.pathways-section {
			padding: 3rem 1rem;
		}

		.capsule-list {
			flex-direction: column;
			height: auto;
			gap: 0.75rem;
		}

		.capsule-card {
			height: 80px;
			border-radius: 9999px;
			flex: none !important;
			width: 100%;
			transition: all 0.5s ease;
		}

		.capsule-card.active {
			height: 220px;
			border-radius: 1.5rem;
		}

		.collapsed-bar {
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding: 1.1rem 1.5rem;
			gap: 1rem;
		}

		.collapsed-title {
			font-size: 1.1rem;
			color: #ffffff;
			margin-top: 0;
			text-align: left;
		}

		.icon-circle {
			width: 44px;
			height: 44px;
		}

		.icon-circle svg {
			width: 22px;
			height: 22px;
		}

		.expanded-bar {
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-end;
			padding: 1.5rem;
			gap: 1rem;
		}

		.meta-info {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			text-align: left;
			gap: 0.15rem;
		}

		.meta-title {
			font-size: 1.15rem;
			font-weight: 700;
		}

		.meta-desc {
			font-size: 0.8rem;
			line-height: 1.35;
			margin: 0 0 0.35rem;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-align: left;
		}

		.stat-tag {
			font-size: 0.65rem;
			padding: 0.15rem 0.5rem;
		}
	}
</style>
