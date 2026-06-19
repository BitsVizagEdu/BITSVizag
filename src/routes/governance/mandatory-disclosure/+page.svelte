<script>
	const institutionFacts = [
		{ label: 'Website', value: 'www.bitsvizag.com', href: 'https://www.bitsvizag.com' },
		{ label: 'Phone', value: '0891-2569933', href: 'tel:08912569933' },
		{ label: 'Email', value: 'principal@bitsvizag.com', href: 'mailto:principal@bitsvizag.com' },
		{ label: 'Fax', value: '0891-2568811' },
		{ label: 'Admission Code', value: 'BABA' },
		{ label: 'University Code', value: 'NR' }
	];

	const boardMembers = [
		['1', 'Kondru Sri Lakshmi', 'Secretary & Correspondent', 'secretary@bitsvizag.com', '8008844099'],
		['2', 'Bhyri Ramarao', 'President', 'ramaraobhyri@bitsvizag.com', '9441292799'],
		['3', 'Kondru Chiranjeevi', 'Vice-President', 'chiranjeevi.kondru@bitsvizag.com', '8074988550'],
		['4', 'Bhairi Srinu', 'Joint Secretary', 'srinubhairi@bitsvizag.com', '8008844399'],
		['5', 'Kondru Jagadeeswararao', 'Treasurer', 'jagadeeswararao.kondru@bitsvizag.com', '9440275888'],
		['6', 'Kondru Sunitha', 'Executive Member', 'sunitha.kondru@bitsvizag.com', '8074988550'],
		['7', 'Morathoti Gopi Krishna', 'Executive Member', 'gopikrishna@bitsvizag.com', '8828009456']
	];

	const advisoryBody = [
		['01', 'Dr. M. Rajan Babu', 'Principal, BITS(A)', 'Chairman'],
		['02', 'Dr. K. Babulu', 'Professor, Dept. of ECE & DE, JNTUGV', 'Member'],
		['03', 'Dr. K. Chandra Bhushana Rao', 'Professor, Dept. of ECE & DAP, JNTUGV', 'Member'],
		['04', 'Dr. K. Sri Kumar', 'Professor, Dept. of EEE, JNTUGV', 'University Nominee-Member'],
		['05', 'Dr. B. Vijaya Saradhi', 'Professor, Dept. of CE, UCOE(A), A.U', 'Member'],
		['06', 'Dr. P. Vmasi Krishna', 'Professor, Dept. of ME, NIT Warangal', 'Member'],
		['07', 'Mr. Suresh Dakavarapu', 'Director, Dizbi', 'Member'],
		['08', 'Dr. B. S. N. Murthy', 'Professor, Dept. of ME & DE, GITAM University', 'Member'],
		['09', 'Dr. B. Poorna Satyanarayana', 'Dean Academics, BITS(A)', 'Member'],
		['10', 'Dr. D. N. Murti', 'Controller of Examinations, BITS(A)', 'Member'],
		['11', 'Mrs. S. Pavani', 'HOD, CE', 'Member'],
		['12', 'Mr. K. Venkateswara Rao', 'HOD, EEE', 'Member'],
		['13', 'Dr. P. Uma Chaithanya', 'HOD, ME', 'Member'],
		['14', 'Dr. B. Kiranmai', 'HOD, ECE', 'Member'],
		['15', 'Mr. S. Durga Prasad', 'HOD, CSE', 'Member'],
		['16', 'Dr. K. Rajendra Prasad', 'HOD, AIML', 'Member'],
		['17', 'Mr. P. Joshua Raju', 'HOD, CS&TPO', 'Member'],
		['18', 'Dr. P. Jayaranga Rao', 'HOD, BS&H', 'Member'],
		['19', 'Mrs. K. Sireesha', 'HOD, MBA', 'Member'],
		['20', 'Mr. T. Kiran Kumar', 'Associate Professor, MBA', 'Member']
	];

	const antiRagging = [
		['1', 'Dr. M. Rajan Babu', 'Principal', 'ECE', 'Chairman', '8008844699'],
		['2', 'Dr. A. S. B. Prasanna', 'Associate Professor', 'ME', 'Coordinator', '8008633321'],
		['3', 'Dr. E. Anil Kumar', 'Associate Professor', 'EEE', 'Member', '8096173988'],
		['4', 'Dr. Fathimunisa Begum', 'Associate Professor', 'ME', 'Member', '6301685115'],
		['5', 'Dr. Shahazadi Begum', 'Associate Professor', 'CE', 'Member', '9502960116'],
		['6', 'Dr. B. Kiranmai', 'Associate Professor & HOD', 'ECE', 'Member', '8500267193'],
		['7', 'Mrs. Komali', 'Assistant Professor', 'ECE', 'Member', '8121206946'],
		['8', 'Mr. S. Durga Prasad', 'Associate Professor & HOD', 'CSE', 'Member', '9293733176'],
		['9', 'Dr. D. N. Murthy', 'Associate Professor & COE', 'BSH', 'Member', '9581880098'],
		['10', 'Mrs. K. Sireesha', 'Associate Professor & HOD', 'MBA', 'Member', '9059416941']
	];

	const icc = [
		['1', 'Presiding Officer', 'Dr. A. S. Bhanu Prasanna', 'Convenor', 'Bhanu3459@gmail.com'],
		['2', 'Employee member', 'Dr. B. Kiranmai', 'HOD / ECE', 'hod.ece@bitsvizag.com'],
		['3', 'Employee member', 'Mrs. K. Sirisha', 'I/C HOD / BSH', 'hod.bsh@bitsvizag.com'],
		['4', 'Non-teaching member', 'Mr. Nagendra', 'Sr. Assistant', '7989158047'],
		['5', 'Non-teaching member', 'Mr. Prasad', 'Sr. Assistant', '6300298164'],
		['6', 'Student member', 'Bhavani', '3rd ME', '-'],
		['7', 'Student member', 'Trisha Jhansi', '3rd ECE', '-']
	];

	const scst = [
		['1', 'Chairman', 'Dr. M. Rajan Babu, Principal', '9492618186'],
		['2', 'Liaison Officer - SC/ST', 'Dr. K. Pradeep, Associate Professor, ECE', '9966270111'],
		['3', 'Member', 'Vasu, Student, 4th Mech', '-']
	];

	const iqac = [
		['1', 'Dr. M. Rajan Babu', 'Principal', 'Chairperson'],
		['2', 'Dr. K. Sri Lakshmi', 'Secretary and Correspondent', 'Member'],
		['3', 'Dr. D. N. Murthy', 'Controller of Examinations', 'Member'],
		['4', 'Mr. S. Durga Prasad', 'HoD, CSE', 'Member'],
		['5', 'Dr. B. Kiranmai', 'HoD, ECE', 'Member'],
		['6', 'Dr. P. Uma Chaithanya', 'HoD, Mechanical Engineering', 'Member'],
		['7', 'Dr. V. Kamaraju', 'HoD, EEE', 'Member'],
		['8', 'Dr. P. Jayaranga Rao', 'HoD, Basic Science and Humanities', 'Member'],
		['9', 'Mrs. S. Pavani', 'HoD, Civil Engineering', 'Member'],
		['10', 'Mrs. K. Sireesha', 'HoD, MBA', 'Member'],
		['17', 'Mr. A. Revanth', 'HR Manager, HCL', 'Employer / Industry Member'],
		['18', 'Dr. Ch. Sukumar', 'CEO, Omni Hospitals, Visakhapatnam', 'Industrialist Member'],
		['19', 'Mr. G. Meghashyam', 'Alumni', 'Member'],
		['24', 'Mr. S. Durga Prasad', 'Dean', 'IQAC Coordinator']
	];

	const programRows = [
		['Civil Engineering', '01', '60'],
		['Electrical and Electronics Engineering', '02', '60'],
		['Mechanical Engineering', '03', '60'],
		['Electronics and Communication Engineering', '04', '120'],
		['Computer Science and Engineering', '05', '240'],
		['Artificial Intelligence and Machine Learning', '61', '60'],
		['Cyber Security', '59', '60']
	];

	const bestPractices = [
		{
			title: 'Outcome-Based Education',
			description:
				'A student-centered model that keeps course outcomes, program outcomes, and assessment accountability visible throughout the semester.',
			points: ['CO and PO alignment', 'Lesson plans and course files', 'Mentoring for weak, average, and bright students']
		},
		{
			title: 'Employability Skills Enhancement',
			description:
				'A structured 300-hour training journey that builds communication, aptitude, technical confidence, and placement readiness.',
			points: ['Verbal and written skills', 'Aptitude and logical ability', 'Mock interviews and placement preparation']
		}
	];

	const disclosureHighlights = [
		'Updated on 30 March 2026',
		'Affiliated to JNTU GV',
		'NAAC Accredited and AICTE Approved',
		'ISO 9001:2015 Certified'
	];
</script>

<svelte:head>
	<title>Mandatory Disclosure | Governance | BITS Vizag</title>
	<meta
		name="description"
		content="Premium mandatory disclosure page for BITS Vizag with governance data, committees, academic structure, and direct PDF access."
	/>
</svelte:head>

<main class="overflow-hidden bg-slate-950 text-white">
	<section class="relative">
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.3),_transparent_30%),radial-gradient(circle_at_left,_rgba(14,165,233,0.18),_transparent_26%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]"></div>
		<div class="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:42px_42px]"></div>

		<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
			<div class="max-w-5xl">
				<div class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200 backdrop-blur">
					<i class="fa-solid fa-file-shield" aria-hidden="true"></i>
					AICTE Mandatory Disclosure
				</div>
				<h1 class="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
					Mandatory Disclosure
					<span class="block bg-gradient-to-r from-orange-300 via-amber-100 to-sky-200 bg-clip-text text-transparent">
						for a compliance-first institution
					</span>
				</h1>
				<p class="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
					A premium web page that converts the official PDF into a readable, high-trust experience for students, parents, and regulators.
				</p>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="/pdfs/BITS-Mandatory-Disclosure.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400">
						<i class="fa-solid fa-file-pdf" aria-hidden="true"></i>
						Open source PDF
					</a>
					<a href="/governance" class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/14">
						<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
						Back to governance
					</a>
				</div>
			</div>

			<div class="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{#each disclosureHighlights as highlight}
					<div class="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(2,6,23,0.45)]">
						<p class="text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Highlight</p>
						<p class="mt-4 text-lg font-semibold text-white">{highlight}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
		<div class="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
			<div class="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">Institutional snapshot</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">BABA Institute of Technology and Sciences (A)</h2>
				<p class="mt-4 text-slate-600 leading-8">
					Approved by AICTE New Delhi, NAAC Accredited, affiliated to JNTU GV, and ISO 9001:2015 certified.
				</p>
				<p class="mt-2 text-slate-600 leading-8">
					Bakkannapalem Village, Madhurawada Post, Visakhapatnam - 530 048, India.
				</p>

				<div class="mt-6 grid gap-3 sm:grid-cols-2">
					{#each institutionFacts as fact}
						<div class="rounded-2xl bg-slate-50 p-4">
							<div class="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{fact.label}</div>
							{#if fact.href}
								<a href={fact.href} class="mt-2 block text-sm font-semibold text-slate-900 hover:text-orange-600">{fact.value}</a>
							{:else}
								<p class="mt-2 text-sm font-semibold text-slate-900">{fact.value}</p>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div class="rounded-[2rem] bg-slate-900 p-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
				<div class="flex items-center justify-between gap-4">
					<div>
						<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Live preview</p>
						<h2 class="mt-3 text-2xl font-black tracking-tight">Official PDF snapshot</h2>
					</div>
					<a href="/pdfs/BITS-Mandatory-Disclosure.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5">
						<i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i>
						Open
					</a>
				</div>
				<div class="mt-5 overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/60">
					<iframe
						title="BITS Vizag Mandatory Disclosure PDF preview"
						src="/pdfs/BITS-Mandatory-Disclosure.pdf"
						class="h-[520px] w-full"
					></iframe>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="max-w-3xl">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">Governance</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Board members and advisory body</h2>
			</div>

			<div class="mt-10 grid gap-6 xl:grid-cols-2">
				<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<h3 class="text-2xl font-bold text-slate-900">Members of the Board</h3>
					<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">No.</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Role</th>
									<th class="px-4 py-3">Email</th>
									<th class="px-4 py-3">Contact</th>
								</tr>
							</thead>
							<tbody>
								{#each boardMembers as row}
									<tr class="border-t border-slate-100">
										{#each row as cell, index}
											<td class="px-4 py-3 align-top text-slate-700 {index === 1 ? 'font-semibold text-slate-900' : ''}">
												{cell}
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<h3 class="text-2xl font-bold text-slate-900">Academic Advisory Body</h3>
					<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">No.</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Designation</th>
									<th class="px-4 py-3">Role</th>
								</tr>
							</thead>
							<tbody>
								{#each advisoryBody as row}
									<tr class="border-t border-slate-100">
										{#each row as cell, index}
											<td class="px-4 py-3 align-top text-slate-700 {index === 1 ? 'font-semibold text-slate-900' : ''}">
												{cell}
											</td>
										{/each}
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
				<div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">Governance rhythm</p>
					<h3 class="mt-3 text-2xl font-black tracking-tight">How decisions and feedback move through the institution</h3>
					<ul class="mt-5 space-y-3 text-sm leading-7 text-slate-600">
						<li>Board of studies and Academic Advisory Body meetings are held quarterly.</li>
						<li>Faculty and students participate in academic monitoring, curriculum review, and mentoring.</li>
						<li>Feedback is collected at the beginning and end of each semester and reviewed for action.</li>
						<li>Grievances, complaints, and anonymous suggestions are handled through structured channels.</li>
					</ul>
				</div>

				<div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-sky-600">Grievances</p>
					<h3 class="mt-3 text-xl font-bold">Redressal mechanisms</h3>
					<p class="mt-4 text-sm leading-7 text-slate-600">
						The institution maintains grievance redressal, online complaint handling, and anti-ragging mechanisms to keep the campus transparent and responsive.
					</p>
				</div>

				<div class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-rose-600">Safety</p>
					<h3 class="mt-3 text-xl font-bold">Anti-ragging and ICC</h3>
					<p class="mt-4 text-sm leading-7 text-slate-600">
						Dedicated committees handle ragging prevention, POSH-related concerns, and safe reporting pathways for women employees and students.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="max-w-3xl">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">Committee details</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Key committee composition and support systems</h2>
			</div>

			<div class="mt-10 grid gap-6 xl:grid-cols-2">
				<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<h3 class="text-2xl font-bold text-slate-900">Anti Ragging Committee</h3>
					<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">No.</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Role</th>
									<th class="px-4 py-3">Contact</th>
								</tr>
							</thead>
							<tbody>
								{#each antiRagging as row}
									<tr class="border-t border-slate-100">
										<td class="px-4 py-3 text-slate-700">{row[0]}</td>
										<td class="px-4 py-3 font-semibold text-slate-900">{row[1]}</td>
										<td class="px-4 py-3 text-slate-700">{row[4]}</td>
										<td class="px-4 py-3 text-slate-700">{row[5]}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>

				<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<h3 class="text-2xl font-bold text-slate-900">Internal Complaints Committee</h3>
					<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">No.</th>
									<th class="px-4 py-3">Category</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Contact</th>
								</tr>
							</thead>
							<tbody>
								{#each icc as row}
									<tr class="border-t border-slate-100">
										<td class="px-4 py-3 text-slate-700">{row[0]}</td>
										<td class="px-4 py-3 text-slate-700">{row[1]}</td>
										<td class="px-4 py-3 font-semibold text-slate-900">{row[2]}</td>
										<td class="px-4 py-3 text-slate-700">{row[4]}</td>
									</tr>
								{/each}
							</tbody>
					</table>
					</div>
				</div>
			</div>

			<div class="mt-6 grid gap-6 xl:grid-cols-2">
				<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
					<h3 class="text-2xl font-bold text-slate-900">SC / ST Committee</h3>
					<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">No.</th>
									<th class="px-4 py-3">Designation</th>
									<th class="px-4 py-3">Name</th>
									<th class="px-4 py-3">Contact</th>
								</tr>
							</thead>
							<tbody>
								{#each scst as row}
									<tr class="border-t border-slate-100">
										<td class="px-4 py-3 text-slate-700">{row[0]}</td>
										<td class="px-4 py-3 font-semibold text-slate-900">{row[1]}</td>
										<td class="px-4 py-3 text-slate-700">{row[2]}</td>
										<td class="px-4 py-3 text-slate-700">{row[3]}</td>
									</tr>
								{/each}
							</tbody>
					</table>
				</div>
			</div>

			<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
				<h3 class="text-2xl font-bold text-slate-900">IQAC Members</h3>
				<div class="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
					<table class="min-w-full text-left text-sm">
						<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
							<tr>
								<th class="px-4 py-3">No.</th>
								<th class="px-4 py-3">Name</th>
								<th class="px-4 py-3">Designation</th>
								<th class="px-4 py-3">Portfolio</th>
							</tr>
						</thead>
						<tbody>
							{#each iqac as row}
								<tr class="border-t border-slate-100">
									<td class="px-4 py-3 text-slate-700">{row[0]}</td>
									<td class="px-4 py-3 font-semibold text-slate-900">{row[1]}</td>
									<td class="px-4 py-3 text-slate-700">{row[2]}</td>
									<td class="px-4 py-3 text-slate-700">{row[3]}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
			</div>
		</div>
	</section>

	<section class="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
				<div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
					<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-300">Programs approved by AICTE</p>
					<h2 class="mt-3 text-3xl font-black tracking-tight">Approved UG and PG intake</h2>
					<p class="mt-4 text-slate-300 leading-8">
						The disclosure captures both B.Tech and M.Tech approvals along with MBA intake, giving visitors a clean snapshot of the academic scale.
					</p>
					<a href="/pdfs/BITS-Mandatory-Disclosure.pdf" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400">
						<i class="fa-solid fa-download" aria-hidden="true"></i>
						Download PDF
					</a>
				</div>

				<div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
					<div class="overflow-x-auto rounded-[1.5rem] bg-white text-slate-900">
						<table class="min-w-full text-left text-sm">
							<thead class="bg-slate-100 text-slate-500 uppercase text-[11px] tracking-[0.18em]">
								<tr>
									<th class="px-4 py-3">Program</th>
									<th class="px-4 py-3">Code</th>
									<th class="px-4 py-3">Intake</th>
								</tr>
							</thead>
							<tbody>
								<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold">Structural Engineering</td><td class="px-4 py-3">57</td><td class="px-4 py-3">18</td></tr>
								<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold">Power Electronics & Electrical Drives</td><td class="px-4 py-3">54</td><td class="px-4 py-3">18</td></tr>
								<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold">CAD/CAM</td><td class="px-4 py-3">04</td><td class="px-4 py-3">18</td></tr>
								<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold">Computer Science Technology</td><td class="px-4 py-3">59</td><td class="px-4 py-3">18</td></tr>
								<tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold">Masters of Business Administration</td><td class="px-4 py-3">00</td><td class="px-4 py-3">180</td></tr>
								{#each programRows as row}
									<tr class="border-t border-slate-100">
										<td class="px-4 py-3 font-semibold">{row[0]}</td>
										<td class="px-4 py-3">{row[1]}</td>
										<td class="px-4 py-3">{row[2]}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="max-w-3xl">
				<p class="text-sm font-bold uppercase tracking-[0.28em] text-orange-600">Best practices</p>
				<h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Institutional practices that keep the system strong</h2>
			</div>

			<div class="mt-10 grid gap-6 lg:grid-cols-2">
				{#each bestPractices as practice}
					<div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm">
						<div class="flex items-center gap-3 text-orange-600">
							<i class="fa-solid fa-award text-xl" aria-hidden="true"></i>
							<h3 class="text-2xl font-bold text-slate-900">{practice.title}</h3>
						</div>
						<p class="mt-4 text-sm leading-7 text-slate-600">{practice.description}</p>
						<div class="mt-6 space-y-3">
							{#each practice.points as point}
								<div class="flex gap-3 rounded-2xl bg-white px-4 py-3">
									<div class="mt-1 h-2.5 w-2.5 rounded-full bg-orange-500"></div>
									<p class="text-sm leading-6 text-slate-700">{point}</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</main>