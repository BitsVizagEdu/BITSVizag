<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import SectionTitle from '$lib/components/faculty/SectionTitle.svelte';
	import DepartmentFilter from '$lib/components/faculty/DepartmentFilter.svelte';
	import FacultyCard from '$lib/components/faculty/FacultyCard.svelte';
	import FacultySkeleton from '$lib/components/faculty/FacultySkeleton.svelte';

	const departmentOptions = [
		'ALL DEPARTMENTS',
		'BS&H',
		'CSE',
		'ECE',
		'EEE',
		'MECHANICAL',
		'CIVIL',
		'MBA',
		'Lab Programmers'
	];

	/** @type {Record<string, number>} */
	const experienceByName = {
		'B.POORNA SATYANARAYANA': 26,
		'U. Padma Mohan': 30,
		'N. Raju': 17,
		'D.Sriya Rani': 1.7,
		'K. SRINIJA': 1,
		'G. Sushma': 1,
		'G. Kishore': 4,
		'B. PRASAD': 13,
		'S. MOULI': 1,
		'K. Jeevitha': 1.5,
		'T. CHAITANYA': 7,
		'S. Harshini': 1,
		'M.Sai prasanna': 2,
		'K. Sravani Reddy': 1.5,
		'R. Mallika': 1.8,
		'P.Gayathri': 3.2,
		'N. Vineeth': 1,
		'S.Madhu Latha': 0,
		'D. KANAKESWARI': 16,
		'P. T. S. Priya': 12,
		'D. Sailaxmi': 1,
		'S. Samyukta': 5,
		'P. Joshua Raju': 10,
		'T. Pavani': 2.8,
		'CH. M. M. KOMALI': 9,
		'K. Pradeep': 20,
		'G. Ashwan Kumar': 12,
		'Dr. Y. V. Bhaskara Lakshmi': 15,
		'Dr. B. Kiranmai': 25,
		'H. Ravi Kishore': 15,
		'Ch. SANTOSHI KUMARI': 3,
		'T. Vishnu Murthy': 20,
		'G. Anil Kumar': 15,
		'D. Sudharnitha': 7,
		'G. Alirani': 2,
		'V. Madhava Rao': 12,
		'P. Arun Tez': 16,
		'B. U. S. PREM SAGAR': 15,
		'U. KAMARAJU': 14,
		'FATHIMUNNISA BEGUM': 18,
		'Reddy Ramesh': 5,
		'P. UMA CHAITHANYA': 16,
		'H. SATYANARAYANA': 14,
		'Dr. A. S. Bhanu Prasanna': 19,
		'V. Preetham Kumar': 0.7,
		'Parameswar Rao': 41,
		'N. S Appala Naidu': 42,
		'K. Jayababu': 45,
		'N. Ramesh': 18,
		'N. Donbru': 38,
		'Vikas Ranjan': 11,
		'H. Vasudeva Rao': 16,
		'K. SIVEESHA': 18,
		'B. G. S. Prasad': 14,
		'B. Santoshi kumari': 8,
		'K. NARESH KUMAR': 11,
		'L. Srinivasa': 0,
		'H. Sai rama': 3,
		'Dr. P. JAYARANGARAO': 19,
		'K .Serisha': 15,
		'L. Priyanka': 10,
		'P. MAHESH': 18,
		'P. Saranya': 5,
		'P. LAVANYA': 5,
		'K. Lavanya': 0.9,
		'S. Pavani': 0,
		'Dr. Shahazadi Begum': 6,
		'G. JYOTHI': 15,
		'P. V. Murali': 25,
		'Dr. Paromita Mukherjee': 19,
		'Dr. Piyali Varma': 20,
		'Dr. M. Mounika': 9,
		'Dr.T.Suneetha Rani': 12,
		'P.Surya Kumari': 16,
		'V. Jyothi': 2,
		'A. PYDIRAJU': 15,
		'B. V. KAVITHA': 13
	};

	const facultyData = [
		{
			title: 'Mr',
			name: 'B.POORNA SATYANARAYANA',
			qualification: 'Ph.D',
			designation: 'Professor',
			department: 'CSE',
			mobile: '9121214313',
			email: 'poornasatyanarayana@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'U. Padma Mohan',
			qualification: 'M.Tech., M.C.A',
			designation: 'Associate Professor',
			department: 'CSE',
			mobile: '9849635322',
			email: 'padmauppada23@gmail.com',
			linkedin: 'https://www.linkedin.com/padma',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'N. Raju',
			qualification: 'B.Tech',
			designation: 'Network Admin',
			department: 'CSE',
			mobile: '9849137698',
			email: 'raj.nidigantla@gmail.com',
			linkedin: 'https://in.linkedin.com/in/raj-nidigantla-5b4037110',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'D.Sriya Rani',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9381458890',
			email: 'dsriya1011@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sriya-rani-17961621b',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'K. SRINIJA',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8309666292',
			email: 'saisrinija226@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kona-janshi-venkata-modha-sai-srinija-439b5718b',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'G. Sushma',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8328181573',
			email: 'gudivadasushma30@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sushma-gudivada-58563b335',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'G. Kishore',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9177262145',
			email: 'kichunandha@gmail.com',
			linkedin: 'https://www.linkedin.com/in/gudalaraja-nandhakishore-04472987',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'B. PRASAD',
			qualification: 'Graduate',
			designation: 'System Admin',
			department: 'CSE',
			mobile: '6300298164',
			email: 'bellanaprasad1027@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'S. MOULI',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9885079970',
			email: 'moulicse06@gmail.com',
			linkedin: 'https://www.linkedin.com/in/siribariki-mouli-55a94b38b',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'K. Jeevitha',
			qualification: 'M.Tech',
			designation: 'Lab Programmer',
			department: 'CSE',
			mobile: '7075440692',
			email: 'jeevithakilli24@gmail.com',
			linkedin: 'https://www.linkedin.com/in/jeevitha-killi-831207254',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'T. CHAITANYA',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9063497372',
			email: 'Thallurichaitanya85@gmail.com',
			linkedin: 'https://www.linkedin.com/posts/bits-vizag_bitsvizag',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'S. Harshini',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7893492709',
			email: 'somuharshini0617@gmail.com',
			linkedin: 'https://www.linkedin.com/in/somu-harshini-2715a11a7',
			photo: ''
		},
		
		{
			title: 'Mrs',
			name: 'M.Sai prasanna',
			qualification: 'M.Tech., M.C.A',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7382070704',
			email: 'prasannababa2024@gmail.com',
			linkedin: 'https://www.linkedin.com/home?originalSubdomain=in',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'K. Sravani Reddy',
			qualification: 'M.Tech',
			designation: 'Lab Programmer',
			department: 'CSE',
			mobile: '7337061551',
			email: 'sravanireddymay25@gmail.com',
			linkedin: 'https://www.linkedin.com/in/karri-sravani-reddy',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'R. Mallika',
			qualification: 'B.Tech',
			designation: 'Lab Programmer',
			department: 'CSE',
			mobile: '9515812798',
			email: 'mallika282611@gmail.com',
			linkedin: 'https://www.linkedin.com/in/mallika-rayana-a7711a271',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'P.Gayathri',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9866247778',
			email: 'gayathriraghuram2016@gmail.com',
			linkedin: 'https://www.linkedin.com/in/gayathri-p-42231239b',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'N. Vineeth',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9491090696',
			email: 'vineethneela967@gmail.com',
			linkedin: 'https://www.linkedin.com/in/vineeth-neela-50b3b3170',
			photo: ''
		},
		
		{
			title: 'Ms',
			name: 'S.Madhu Latha',
			qualification: 'B.Tech',
			designation: 'Lab Programmer',
			department: 'CSE',
			mobile: '9676729809',
			email: 'madhulathasanna@gmail.com',
			linkedin: 'https://www.linkedin.com/in/madhu-latha-sanna-377279280',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'D. KANAKESWARI',
			qualification: 'M.Tech., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'CSE',
			mobile: '9908132695',
			email: 'kanakeswaridevara@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kanakeswari-vurukuti-01263a335',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'P. T. S. Priya',
			qualification: 'M.Tech., M.C.A',
			designation: 'Associate Professor',
			department: 'CSE',
			mobile: '7093275580',
			email: 'ptspriya.bits@gmail.com',
			linkedin: 'http://www.linkedin.com/in/pinnamraju-t-s-priya-503686326',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'D. Sailaxmi',
			qualification: 'M.Tech',
			designation: 'Lab Programmer',
			department: 'CSE',
			mobile: '9160814470',
			email: 'laxmisai421@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sai-laxmi-6b01b1224',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'S. Samyukta',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7981782250',
			email: 'samyukta537@gmail.com',
			linkedin: 'https://www.linkedin.com/in/surapureddy-samyukta-69b3ba144',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'P. Joshua Raju',
			qualification: 'M.Tech., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'CSE',
			mobile: '8297293834',
			email: 'josh.educato@gmail.com',
			linkedin: 'https://www.linkedin.com/in/joshua-raju-p-a11335163/',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'T. Pavani',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8501068852',
			email: 'temburupavani222@gmail.com',
			linkedin: 'https://www.linkedin.com/in/pavani-temburu-058072299',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'CH. M. M. KOMALI',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8121206946',
			email: 'komalich83@gmail.com',
			linkedin: 'https://www.linkedin.com/in/komali-ch-8531552a6',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'K. Pradeep',
			qualification: 'M.Tech., Ph.D',
			designation: 'Professor',
			department: 'ECE',
			mobile: '9966270111',
			email: 'pradeepbitsvizag@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-pradeep-kondapalli-36244a1ab',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'G. Ashwan Kumar',
			qualification: 'M.Tech., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'ECE',
			mobile: '8886065888',
			email: 'aswanphd@gmail.com',
			linkedin: 'https://www.linkedin.com/in/aswan22',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'G. Anil Kumar',
			qualification: 'M.Tech., Ph.D.',
			designation: 'Associate Professor',
			department: 'EEE',
			mobile: '8096173988',
			email: 'auphdanil@gmail.com',
			linkedin: 'https://www.linkedin.com/in/anil-kumar-358a87369',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'D. Sudhamsha',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9177228301',
			email: 'sudhamshadoki206@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'G. Alirani',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '6305862557',
			email: 'g.aliveni5181@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'V. Madhava Rao',
			qualification: 'Diploma',
			designation: 'Sr.Lab Technician',
			department: 'EEE',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'FATHIMUNNISA BEGUM',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '6301685115',
			email: 'fathima.mech@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-fathimunnisa-begum-28092476',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Reddy Ramesh',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '8500652035',
			email: 'ramesh18me.392@gmail.com',
			linkedin: 'https://in.linkedin.com/in/reddy-ramesh-b06652146',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'H. Vasudeva Rao',
			qualification: 'M.B.A., M.Com., Ph.D',
			designation: 'Associate Professor',
			department: 'MBA',
			mobile: '9885993163',
			email: 'vasumalicherla@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'K. SIVEESHA',
			qualification: 'MBA',
			designation: 'Sr. Assistant Professor',
			department: 'MBA',
			mobile: '9703193788',
			email: 'sirihr22@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kanugo-sireesha-a1b57575',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Dr. P. JAYARANGARAO',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9885597840',
			email: 'jayarangarao1@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-jayarangarao-prathipati-967249196/',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'K .Serisha',
			qualification: 'M.Sc., M.Tech',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9440938025',
			email: 'serishakathula@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kathula-serisha-b61b5b335',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'L. Priyanka',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '8074127417',
			email: 'lanka.priyanka1993@gmail.com',
			linkedin: 'https://www.linkedin.com/in/priyanka-lanka-a4b79413b',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'P. MAHESH',
			qualification: 'Ph.D., M.Phil., M.Sc.',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9866358722',
			email: 'mahe2vec@gmail.com',
			linkedin: 'https://in.linkedin.com/in/palakollu-mahesh-13ab21335',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'P. Saranya',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Civil',
			mobile: '7080907889',
			email: 'saranya.imandi@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'S. Pavani',
			qualification: 'M.E., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'Civil',
			mobile: '9573755176',
			email: 'bhanupavanidevi9@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'P. LAVANYA',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Civil',
			mobile: '7981764784',
			email: 'lavanyapusarla9494@gmail.com',
			linkedin: 'www.linkedin.com/in/lavanya-pusarla-a32a7838b',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'K. Lavanya',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Civil',
			mobile: '9182357411',
			email: 'kotnilavanya1013@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. Shahazadi Begum',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'Civil',
			mobile: '9032972944',
			email: 'drshahazadibegum@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-shahazadi-begum-788638335',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. Y. V. Bhaskara Lakshmi',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '7893676891',
			email: 'lakshmijeevan2000@gmail.com',
			linkedin:
				'https://www.linkedin.com/in/dr-bhaskara-lakshmi-yaddanapudi-439b58335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. B. Kiranmai',
			qualification: 'M.Tech., Ph.D',
			designation: 'Professor',
			department: 'ECE',
			mobile: '8500267193',
			email: 'kbabburu@gmail.com',
			linkedin: 'www.linkedin.com/in/kiranmai-b-5b5b4a3b8',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'H. Ravi Kishore',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '7989527137',
			email: 'mrkishore7709@gmail.com',
			linkedin:
				'https://www.linkedin.com/in/dr-m-ravi-kishore-6416448b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Ch. SANTOSHI KUMARI',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '7731993013',
			email: 'chintass3796@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'T. Vishnu Murthy',
			qualification: 'M.Tech',
			designation: 'Sr. Assistant Professor',
			department: 'ECE',
			mobile: '9154628433',
			email: 'vishnutbits@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'P. Arun Tez',
			qualification: 'M.Tech',
			designation: 'Sr. Assistant Professor',
			department: 'EEE',
			mobile: '9494518461',
			email: 'bitsaruntez@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'B. U. S. PREM SAGAR',
			qualification: 'M.Tech., M.B.A',
			designation: 'Sr. Assistant Professor',
			department: 'EEE',
			mobile: '9985742615',
			email: 'sagarmanthri@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sagar-manthri-726979113?trk=contact-info',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'U. KAMARAJU',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'EEE',
			mobile: '9963268636',
			email: 'raju.vechalapu@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-kamaraju-vechalapu-826b5b335?utm_source',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'P. UMA CHAITHANYA',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '9817049898',
			email: 'uma.nitw@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-pathem-uma-chaithanya',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'H. SATYANARAYANA',
			qualification: 'M.Tech',
			designation: 'Sr. Assistant Professor',
			department: 'Mechanical',
			mobile: '9491626873',
			email: 'satyamallapu@gmail.com',
			linkedin: 'https://www.linkedin.com/in/satyanarayana-mallapu-200444242',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. A. S. Bhanu Prasanna',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '8008633321',
			email: 'bhanu.3549@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'V. Preetham Kumar',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9701161391',
			email: 'preethamraju96@gmail.com',
			linkedin:
				'https://www.linkedin.com/in/preetham-kumar-341521125?utm_source=share_via&utm_content=profile&utm_medium=member_android',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Parameswar Rao',
			qualification: 'Diploma',
			designation: 'Lab Technician',
			department: 'Mechanical',
			mobile: '9618413946',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'N. S Appala Naidu',
			qualification: 'ITI',
			designation: 'Lab Technician',
			department: 'Mechanical',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'K. Jayababu',
			qualification: 'ITI',
			designation: 'Lab Technician',
			department: 'Mechanical',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'N. Ramesh',
			qualification: 'ITI',
			designation: 'Lab Technician',
			department: 'Mechanical',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'N. Donbru',
			qualification: 'ITI',
			designation: 'Lab Technician',
			department: 'Mechanical',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Vikas Ranjan',
			qualification: 'Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'Mechanical',
			mobile: '9391339296',
			email: 'vikas.ranjan7@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'B. G. S. Prasad',
			qualification: 'MBA',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9298052173',
			email: 'sivaprasadh14@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'B. Santoshi Kumari',
			qualification: 'MBA',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '8688914413',
			email: 'santoshi.bugatha@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'K. NARESH KUMAR',
			qualification: 'MBA',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9550448999',
			email: 'nareshpatnaik.k@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'L. Srinivasa',
			qualification: 'MBA',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'H. Sai rama',
			qualification: 'MBA',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '8074558577',
			email: 'sairamalanda96@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'G. JYOTHI',
			qualification:
				'M.Phil., M.Sc',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9989609399',
			email: 'jyothi.satapathy@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'P. V. Murali',
			qualification: 'M.A., B.Ed., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9492535197',
			email: 'pvmurali2000@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. Paromita Mukherjee',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9313184040',
			email: 'drparomitabitsvizag@gmail.com',
			linkedin:
				'https://www.linkedin.com/in/dr-paromita-mukherjee-7b301771?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr. Piyali Varma',
			qualification: 'M.A',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9642932971',
			email: 'mukherjeepiyali28@gmail.com',
			linkedin:
				'https://www.linkedin.com/in/piyali-varma-0794413b4?utm_source=share_via&utm_content=profile&utm_medium=member_android',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Dr. M. Mounika',
			qualification: 'M.Sc., B.Ed',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9515099654',
			email: 'mounika.mondi@gmail.com',
			linkedin: 'https://www.linkedin.com/in/mondi-mounika-b73562283',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Dr.T.Suneetha Rani',
			qualification: 'Ph.D',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '8008506949',
			email: 'sunita.gandham@gmail.com',
			linkedin: 'https://linkedin.com/in/dr-suneetha-rani-gandham-a2b68113',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'P.Surya Kumari',
			qualification: 'M.Sc',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9951934411',
			email: 'suryakumari.p85@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'V. Jyothi',
			qualification: 'M.A',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '8977615102',
			email: 'jyothivanapalli10@gmail.com',
			linkedin: 'https://www.linkedin.com/in/jyothi-vanapalli-83a9a3237',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'A. PYDIRAJU',
			qualification: 'M.A., M.L.I.Sc., M.Ed',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '7893429433',
			email: 'rajkoti10@gmail.com',
			linkedin: 'https://www.linkedin.com/in/raju-koti-21bb5a3b8',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'B. V. KAVITHA',
			qualification: 'M.Sc., B.Ed., Ph.D',
			designation: 'Sr. Assistant Professor',
			department: 'BS&H',
			mobile: '9985388148',
			email: 'sukkajatin@gmail.com',
			linkedin: '',
			photo: ''
		}
	].map((faculty) => ({
		...faculty,
		experience: experienceByName[faculty.name] ?? null
	}));

	let selectedDepartment = 'ALL DEPARTMENTS';
	let searchTerm = '';
	let isLoading = true;

	const normalize = (value = '') => value.toLowerCase().replace(/\s+/g, ' ').trim();
	const isLabProgrammer = (designation = '') => normalize(designation).includes('lab programmer');
	const normalizeNameKey = (value = '') => normalize(value).replace(/[^a-z]/g, '');

	const csePriorityOrder = [
		'B.POORNASATYANARAYANA',
		'U. Padma Mohan',
		'D. KANAKESWARI',
		'P. T. S. Priya',
		'P. Joshua Raju',
		'T. CHAITANYA',
		'S. Samyukta',
		'G. Kishore',
		'P.Gayathri',
		'M.Sai prasanna',
		'D.Sriya Rani',
		'G. Sushma',
		'S. Harshini',
		'S. MOULI',
		'K. SRINIJA',
		'N. Vineeth',
		'N. Raju',
		'B. PRASAD',
		'K. Sravani Reddy',
		'R. Mallika',
		'K. Jeevitha',
		'D. Sailaxmi',
		'S.Madhu Latha'
	];

	const csePriorityIndex = csePriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const ecePriorityOrder = [
		'Dr. B. Kiranmai',
		'K. Pradeep',
		'Dr. Y. V. Bhaskara Lakshmi',
		'H. Ravi Kishore',
		'G. Ashwan Kumar',
		'G. Arjun Kumar',
		'T. Vishnu Murthy',
		'CH. M. M. KOMALI',
		'Ch. SANTOSHI KUMARI',
		'T. Pavani'
	];

	const ecePriorityIndex = ecePriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const eeePriorityOrder = [
		'U. KAMARAJU',
		'G. Anil Kumar',
		'P. Arun Tez',
		'B. U. S. PREM SAGAR',
		'D. Sudharnitha',
		'G. Alirani',
		'V. Madhava Rao'
	];

	const eeePriorityIndex = eeePriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const mechanicalPriorityOrder = [
		'P. UMA CHAITHANYA',
		'Dr. A. S. Bhanu Prasanna',
		'FATHIMUNNISA BEGUM',
		'H. SATYANARAYANA',
		'Vikas Ranjan',
		'Reddy Ramesh',
		'V. Preetham Kumar',
		'Parameswar Rao',
		'N. S Appala Naidu',
		'K. Jayababu',
		'N. Ramesh',
		'N. Donbru'
	];

	const mechanicalPriorityIndex = mechanicalPriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const civilPriorityOrder = [
		'Pavani',
		'Dr. Shahazadi Begum',
		'P. LAVANYA',
		'P. Saranya',
		'K. Lavanya'
	];

	const civilPriorityIndex = civilPriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const mbaPriorityOrder = [
		'K. SIVEESHA',
		'H. Vasudeva Rao',
		'B. G. S. Prasad',
		'K. NARESH KUMAR',
		'B. Santoshi Kumari',
		'L. Srinivasa'
	];

	const mbaPriorityIndex = mbaPriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	const bshPriorityOrder = [
		'Dr. P. JAYARANGARAO',
		'Dr. Paromita Mukherjee',
		'Dr.T.Suneetha Rani',
		'P. V. Murali',
		'Dr. Piyali Varma',
		'P. MAHESH',
		'P.Surya Kumari',
		'G. JYOTHI',
		'K .Serisha',
		'B. V. KAVITHA',
		'L. Priyanka',
		'Dr. M. Mounika',
		'V. Jyothi',
		'A. PYDIRAJU'
	];

	const bshPriorityIndex = bshPriorityOrder.reduce(
		(map, name, index) => {
			map[normalizeNameKey(name)] = index;
			return map;
		},
		/** @type {Record<string, number>} */ ({})
	);

	// Qualification ranking system: Higher scores = Higher qualifications
	const getQualificationRank = (qualification = '') => {
		const qual = normalize(qualification);

		// Ph.D / Doctorate (highest) - rank 8
		if (qual.includes('ph.d') || qual.includes('phd') || qual.includes('doctorate')) return 8;

		// Ph.D (Pursuing) - rank 7.5
		if ((qual.includes('ph.d') || qual.includes('phd')) && qual.includes('pursuing')) return 7.5;

		// M.Phil with other degrees - rank 7
		if (qual.includes('m.phil') || qual.includes('mphil')) return 7;

		// Master's degrees: M.Tech, M.Sc, MBA, M.Com, M.C.A - rank 6
		if (
			qual.includes('m.tech') ||
			qual.includes('mtech') ||
			qual.includes('m.sc') ||
			qual.includes('msc') ||
			qual.includes('mba') ||
			qual.includes('m.com') ||
			qual.includes('mcom') ||
			qual.includes('m.c.a') ||
			qual.includes('mca')
		) {
			// M.Tech (Pursuing) - rank 6.5
			if (
				(qual.includes('m.tech') || qual.includes('mtech')) &&
				qual.includes('pursuing')
			) {
				return 6.5;
			}
			return 6;
		}

		// Bachelor's degrees: B.Tech, B.Sc, B.Ed - rank 5
		if (
			qual.includes('b.tech') ||
			qual.includes('btech') ||
			qual.includes('b.sc') ||
			qual.includes('bsc') ||
			qual.includes('b.ed') ||
			qual.includes('bed') ||
			qual.includes('bachelor')
		) {
			return 5;
		}

		// Diploma - rank 4
		if (qual.includes('diploma')) return 4;

		// Graduate - rank 3
		if (qual.includes('graduate')) return 3;

		// No qualification or unknown - rank 1
		return 1;
	};

	$: query = normalize(searchTerm);
	$: filteredFaculty = facultyData.filter((person) => {
		const departmentMatch =
			selectedDepartment === 'ALL DEPARTMENTS'
				? true
				: selectedDepartment === 'Lab Programmers'
					? isLabProgrammer(person.designation)
					: normalize(person.department) === normalize(selectedDepartment);

		const searchableText = normalize(
			`${person.name} ${person.qualification} ${person.designation} ${person.department}`
		);
		const searchMatch = query.length === 0 || searchableText.includes(query);

		return departmentMatch && searchMatch;
	});

	/**
	 * @param {{ qualification?: string }} a
	 * @param {{ qualification?: string }} b
	 */
	const sortByQualification = (a, b) =>
		getQualificationRank(b.qualification) - getQualificationRank(a.qualification);

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortCseByPriority = (a, b) => {
		const indexA = csePriorityIndex[normalizeNameKey(a.name)];
		const indexB = csePriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortEceByPriority = (a, b) => {
		const indexA = ecePriorityIndex[normalizeNameKey(a.name)];
		const indexB = ecePriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortEeeByPriority = (a, b) => {
		const indexA = eeePriorityIndex[normalizeNameKey(a.name)];
		const indexB = eeePriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortMechanicalByPriority = (a, b) => {
		const indexA = mechanicalPriorityIndex[normalizeNameKey(a.name)];
		const indexB = mechanicalPriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortCivilByPriority = (a, b) => {
		const indexA = civilPriorityIndex[normalizeNameKey(a.name)];
		const indexB = civilPriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortMbaByPriority = (a, b) => {
		const indexA = mbaPriorityIndex[normalizeNameKey(a.name)];
		const indexB = mbaPriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/**
	 * @param {{ name?: string; qualification?: string }} a
	 * @param {{ name?: string; qualification?: string }} b
	 */
	const sortBshByPriority = (a, b) => {
		const indexA = bshPriorityIndex[normalizeNameKey(a.name)];
		const indexB = bshPriorityIndex[normalizeNameKey(b.name)];
		const rankA = indexA === undefined ? Number.MAX_SAFE_INTEGER : indexA;
		const rankB = indexB === undefined ? Number.MAX_SAFE_INTEGER : indexB;

		if (rankA !== rankB) {
			return rankA - rankB;
		}

		const byQualification = sortByQualification(a, b);
		if (byQualification !== 0) {
			return byQualification;
		}

		return (a.name || '').localeCompare(b.name || '');
	};

	/** @param {{ department?: string }} person */
	const isCseDepartment = (person) => normalize(person.department) === 'cse';

	/** @param {{ department?: string }} person */
	const isEceDepartment = (person) => normalize(person.department) === 'ece';

	/** @param {{ department?: string }} person */
	const isEeeDepartment = (person) => normalize(person.department) === 'eee';

	/** @param {{ department?: string }} person */
	const isMechanicalDepartment = (person) => normalize(person.department) === 'mechanical';

	/** @param {{ department?: string }} person */
	const isCivilDepartment = (person) => normalize(person.department) === 'civil';

	/** @param {{ department?: string }} person */
	const isMbaDepartment = (person) => normalize(person.department) === 'mba';

	/** @param {{ department?: string }} person */
	const isBshDepartment = (person) => normalize(person.department) === 'bs&h';

	/** @param {string} department */
	const getDepartmentSorter = (department) => {
		const normalizedDepartment = normalize(department);

		if (normalizedDepartment === 'cse') return sortCseByPriority;
		if (normalizedDepartment === 'ece') return sortEceByPriority;
		if (normalizedDepartment === 'eee') return sortEeeByPriority;
		if (normalizedDepartment === 'mechanical') return sortMechanicalByPriority;
		if (normalizedDepartment === 'civil') return sortCivilByPriority;
		if (normalizedDepartment === 'mba') return sortMbaByPriority;
		if (normalizedDepartment === 'bs&h') return sortBshByPriority;

		return sortByQualification;
	};

	// Keep CSE lab programmers inside CSE cards and sort inside each department group.
	$: facultyMembers = filteredFaculty.filter(
		(person) => !(isLabProgrammer(person.designation) && !isCseDepartment(person))
	);

	const departmentDisplayOrder = [
		'CSE',
		'ECE',
		'EEE',
		'Mechanical',
		'Civil',
		'MBA',
		'BS&H',
		'CSE (AI & ML)',
		'M.Tech'
	];

	$: groupedFacultyMembers = facultyMembers.reduce(
		(groups, person) => {
			if (!groups[person.department]) {
				groups[person.department] = [];
			}
			groups[person.department].push(person);
			return groups;
		},
		/** @type {Record<string, Array<(typeof facultyMembers)[number]>>} */ ({})
	);

	$: orderedDepartmentGroups = /** @type {Array<[string, Array<(typeof facultyMembers)[number]>]>} */ (
		Object.entries(groupedFacultyMembers)
			.sort(([a], [b]) => {
				const indexA = departmentDisplayOrder.indexOf(a);
				const indexB = departmentDisplayOrder.indexOf(b);

				if (indexA === -1 && indexB === -1) {
					return a.localeCompare(b);
				}

				if (indexA === -1) {
					return 1;
				}

				if (indexB === -1) {
					return -1;
				}

				return indexA - indexB;
			})
			.map(([department, people]) =>
				/** @type {[string, Array<(typeof facultyMembers)[number]>]} */ ([
					department,
					[...people].sort(getDepartmentSorter(department))
				])
			)
	);

	$: labProgrammers = filteredFaculty
		.filter((person) => isLabProgrammer(person.designation) && !isCseDepartment(person))
		.sort(sortByQualification);

	$: viewKey = `${selectedDepartment}-${query}`;

	onMount(() => {
		const timer = setTimeout(() => {
			isLoading = false;
		}, 650);
		return () => clearTimeout(timer);
	});
</script>

<section class="faculty-section" id="faculty-directory">
	<div class="ambient-shape one" aria-hidden="true"></div>
	<div class="ambient-shape two" aria-hidden="true"></div>

	<div class="inner">
		<SectionTitle
			title="Meet Our Faculty"
			subtitle="Explore our experienced faculty members across departments."
		/>

		<DepartmentFilter
			departments={departmentOptions}
			{selectedDepartment}
			{searchTerm}
			on:departmentchange={(event) => (selectedDepartment = event.detail)}
			on:searchchange={(event) => (searchTerm = event.detail)}
		/>

		{#if isLoading}
			<FacultySkeleton count={8} />
		{:else}
			{#key viewKey}
				<div class="results-wrap" in:fade={{ duration: 220 }} out:fade={{ duration: 180 }}>
					{#if facultyMembers.length > 0}
						<div class="group-block" in:fly={{ y: 20, duration: 420, easing: cubicOut }}>
							{#each orderedDepartmentGroups as [department, people]}
								<section class="department-block">
									<header class="department-header">
										<h3>{department}</h3>
										<p>{people.length} Faculty</p>
									</header>
									<div class="faculty-grid">
										{#each people as person, index (person.name + person.mobile)}
											<FacultyCard faculty={person} {index} />
										{/each}
									</div>
								</section>
							{/each}
						</div>
					{/if}

					{#if labProgrammers.length > 0}
						<div class="group-block" in:fly={{ y: 20, duration: 520, easing: cubicOut }}>
							<header class="department-header">
								<h3>Lab Programmers</h3>
								<p>{labProgrammers.length} Faculty</p>
							</header>
							<div class="faculty-grid">
								{#each labProgrammers as person, index (person.name + person.mobile)}
									<FacultyCard faculty={person} isLab={true} {index} />
								{/each}
							</div>
						</div>
					{/if}

					{#if facultyMembers.length === 0 && labProgrammers.length === 0}
						<div class="empty-state" in:fade={{ duration: 220 }}>
							<h4>No faculty profiles found</h4>
							<p>Try another department or refine your search keywords.</p>
						</div>
					{/if}
				</div>
			{/key}
		{/if}
	</div>
</section>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.faculty-section {
		position: relative;
		padding: clamp(3rem, 6vw, 5.5rem) 0;
		overflow: hidden;
		background:
			radial-gradient(circle at 8% 10%, rgba(255, 255, 255, 0.7), transparent 30%),
			radial-gradient(circle at 90% 5%, rgba(224, 224, 224, 0.28), transparent 33%),
			linear-gradient(180deg, #f7f7f8 0%, #f2f2f3 45%, #fafafa 100%);
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
	}

	.inner {
		position: relative;
		z-index: 1;
		width: min(1240px, calc(100% - 32px));
		margin: 0 auto;
	}

	.ambient-shape {
		position: absolute;
		border-radius: 50%;
		filter: blur(12px);
		pointer-events: none;
		opacity: 0.45;
	}

	.ambient-shape.one {
		width: clamp(240px, 24vw, 360px);
		height: clamp(240px, 24vw, 360px);
		left: -120px;
		top: 16%;
		background: radial-gradient(circle, rgba(96, 165, 250, 0.22), rgba(73, 156, 255, 0));
		animation: drift 9s ease-in-out infinite;
	}

	.ambient-shape.two {
		width: clamp(220px, 22vw, 330px);
		height: clamp(220px, 22vw, 330px);
		right: -110px;
		top: 20%;
		background: radial-gradient(circle, rgba(113, 113, 122, 0.2), rgba(78, 216, 202, 0));
		animation: drift 11s ease-in-out infinite reverse;
	}

	.results-wrap {
		display: grid;
		gap: 1.45rem;
		margin-top: 1rem;
	}

	.group-block {
		display: grid;
		gap: 0.9rem;
	}

	.department-block {
		display: grid;
		gap: 0.75rem;
	}

	.department-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.5rem 0.2rem 0.15rem;
		border-bottom: 1px solid rgba(15, 23, 42, 0.1);
	}

	.department-header h3 {
		margin: 0;
		font-size: clamp(1rem, 1.5vw, 1.2rem);
		font-weight: 800;
		letter-spacing: 0.03em;
		color: #0f172a;
	}

	.department-header p {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 700;
		color: #334155;
		background: rgba(226, 232, 240, 0.8);
		padding: 0.22rem 0.6rem;
		border-radius: 999px;
	}

	.faculty-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 20px;
		justify-items: stretch;
	}

	.empty-state {
		text-align: center;
		border-radius: 18px;
		padding: 2.3rem 1rem;
		background: rgba(255, 255, 255, 0.84);
		border: 1px solid rgba(24, 24, 27, 0.14);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.09);
	}

	.empty-state h4 {
		margin: 0;
		font-family: 'Roboto', 'SF Pro Display', 'Segoe UI', sans-serif;
		font-size: 1.22rem;
		color: #111827;
	}

	.empty-state p {
		margin: 0.5rem 0 0;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.97rem;
		color: #52525b;
	}

	@keyframes drift {
		0%,
		100% {
			transform: translateY(0px);
		}

		50% {
			transform: translateY(16px);
		}
	}

	@media (max-width: 1200px) {
		.faculty-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 900px) {
		.faculty-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 640px) {
		.faculty-section {
			padding-top: 2.6rem;
		}

		.inner {
			width: min(1240px, calc(100% - 20px));
		}

		.faculty-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 12px;
		}
	}
</style>
