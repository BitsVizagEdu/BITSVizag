<script>
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import SectionTitle from '$lib/components/faculty/SectionTitle.svelte';
	import DepartmentFilter from '$lib/components/faculty/DepartmentFilter.svelte';
	import FacultyCard from '$lib/components/faculty/FacultyCard.svelte';
	import FacultySkeleton from '$lib/components/faculty/FacultySkeleton.svelte';

	const departmentOptions = ['ALL DEPARTMENTS', 'CSE', 'BS&H', 'ECE', 'EEE', 'MECHANICAL', 'MBA'];

	/** @type {Record<string, number>} */
	const experienceByName = {
		'B.POORNA SATYANARAYANA': 26,
		'U. Padma Mohan': 30,
		'N. Raju': 17,
		'S.Durga Prasad': 22,
		'D.Sriya Rani': 1.7,
		'K. SRINIJA': 1,
		'G. Sushma': 1,
		'G. Kishore': 4,
		'B. PRASAD': 13,
		'S. MOULI': 1,
		'K. Jeevitha': 1.5,
		'T. CHAITANYA': 7,
		'P. JAYARANGARAO': 32,
		'Paromita Mukherjee': 11,
		'P. V. Murali': 25,
		'T.Suneetha Rani': 13,
		'P. UMA CHAITHANYA': 16,
		'A. S. Bhanu Prasanna': 12,
		'Shahazadi Begum': 12,
		'S. Pavani': 0,
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
		'G. Aswan Kumar': 12,
		'Y. V. Bhaskararao': 15,
		'B. Kiranmai': 25,
		'H. Ravi Kishore': 15,
		'Ch. SANTOSHI KUMARI': 3,
		'T. Vishnu Murthy': 20,
		'E. Anil Kumar': 15,
		'D. Sudharshan': 7,
		'G. Aliveni': 2,
		'Rudra Prathap Das': 30,
		'S. Durga Prasad': 22,
		'P. Arun Tez': 16,
		'B. U. S. PREM SAGAR': 15,
		'U. KAMARAJU': 14,
		'FATHIMUNNISA BEGUM': 18,
		'Reddy Ramesh': 5,
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
		'Dr. Shahazadi Begum': 6,
		'G. JYOTHI': 15,
		'Dr. Paromita Mukherjee': 19,
		'Dr. Piyali Varma': 20,
		'Dr. M. Mounika': 9,
		'Dr.T.Suneetha Rani': 12,
		'P.Surya Kumari': 16,
		'V. Jyothi': 2,
		'A. PYDIRAJU': 15,
		'B. V. KAVITHA': 13,
		'Boyidi Poorna Satyanarayana': 26,
		'Dr. Boyidi Poorna Satyanarayana': 26,
		'Elipilli Anil Kumar': 15,
		'Dr. Elipilli Anil Kumar': 15,
		'Gudivada Sushma': 1,
		'Kona Janshi Venkata Modha Sai Srinija': 1,
		'Pulapalli Joshua Raju': 10,
		'Siribariki Mouli': 1,
		'Vurukuti Kanakeswari': 16,
		'Polamarasetty Arun Tez': 16,
		'Penmetsa Trinadh Santosh Priya': 12,
		'Devadi Sriya Rani': 1.7,
		'Killi Jeevita': 1.5,
		'Mangipudi Sai Prasanna': 2,
		'Rayana Mallika': 1.8,
		'Sravani Reddy Karri': 1.5,
		'Srirangam Durga Prasad': 22,
		'Uppada Padma Mohan': 30,
		'Neela Vineeth': 1,
		'Panchareddy Gayathri': 3.2,
		'Somu Harshini': 1,
		'Surapureddy Samyukta': 5,
		'Thalluri Chaitanya': 7
	,
		'Kamaraju Vechalapu': 14,
		'Bhuvanagiri Hindu': 5,
		'Binnada Lohidas': 5,
		'Bobbili Lakshminarayana': 5,
		'Doki Sudhamsha': 8,
		'Gompa Rajesh': 5,
		'Gurla Aliveni': 7,
		'Kasi Venkateswararao': 25,
		'Manthri Venkta Satya Prem Sagar': 15,
		'Terukoti Divya': 5,
		'Velagala L S S Phani Reddy': 5,
		'Modugu Kranthi Kumar': 5,
		'Pallapothula Naga Praveen Kumar': 5,
		'Pathem Uma Chaithanya': 16,
		'A S Bhanu Prasanna': 19,
		'Fathimunnisa Begum': 18,
		'Andiboyina Sireesha': 5,
		'Azeez Mohammed Ali': 5,
		'Bodapati Durga Prasad': 5,
		'Dharmala Venkata Padmaja': 5,
		'Maddula Leela Sai Suguna Mani': 5,
		'Mallapu Satyanarayana': 14,
		'Pothina Surya Rao': 5,
		'Vadapalli Preetham Kumar': 0.7,
		'Vamsi Krishna Balaga': 5,
		'Maturi Kishore': 5,
		'Mallavarapu Rajan Babu': 25,
		'Babburu Kiranamaii': 25,
		'Rudra Pratap Das': 30,
		'Kondapalli Pradeep': 20,
		'Ravi Kishore Maddugaru': 15,
		'Yaddanapudi Venkata Bhaskara Lakshmi': 15,
		'Gera Aswani Kumar': 12,
		'Chinta Santoshi Kumari': 3,
		'Hari Sai Krishna Tripurana': 5,
		'Kaki Venkata Sagara Srujana': 5,
		'Kumar R N': 5,
		'M M Komali Chittapragada': 9,
		'Mariserla Sri Lakshmi': 5,
		'Moningi Ravindra Kumar': 5,
		'Nallanichakravartula Satya Srinivasa Santosh Phani Krishna': 5,
		'Punyamantula Venkata Hari Krishna Babu': 5,
		'Antharakonda Ramesh': 5,
		'Sonti Sowjanya': 5,
		'Talari Sai Kumari': 5,
		'Temburu Pavani': 2.8,
		'Vishnu Murty Tammineni': 20,
		'Bhyri Priyanka': 5,
		'P PREETHI': 5,
		'Dusi Narasimha Murty': 15,
		'Jayarangarao Prathipati': 32,
		'Ganduri Uma Sankar': 15,
		'Samareddy Sravan Kumar': 15,
		'Palla Venkata Murali': 25,
		'Gandham Suneetha Rani': 13,
		'Kathula Serisha': 15,
		'Gollamandala Noel': 5,
		'Gottumukkala Jyothi': 15,
		'Kamada Piyali Varma': 20,
		'Lanka Priyanka': 10,
		'Mondi Mounika': 9,
		'Palakollu Mahesh': 18,
		'Pulli Eswararao': 5,
		'Pydikondala Surya Kumari': 16,
		'Sriperembudhuru Sowmya Latha': 5,
		'Sukka Venkatakavitha': 13,
		'Yarra Appalaraju': 5,
		'Vidhyarani Mehar': 5,
		'Aratikatla Pydi Raju': 15,
		'Choppa Chandra Sekhar': 15};

	const facultyData = [
		
		
		
		
		
		
		
		
		
		
		{
			title: 'Mr',
			name: 'H. Vasudeva Rao',
			qualification: 'M.B.A., M.Com., Ph.D',
			designation: 'Assistant Professor',
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
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9703193788',
			email: 'sirihr22@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kanugo-sireesha-a1b57575',
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
			title: 'Mr',
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
			title: 'Dr',
			name: 'Shahazadi Begum',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'Civil',
			mobile: '9032972944',
			email: 'drshahazadibegum@gmail.com',
			linkedin: 'https://www.linkedin.com/in/dr-shahazadi-begum-788638335',
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
			title: 'Dr',
			name: 'Gollapalli Venkata Lakshmi',
			qualification: '',
			designation: 'Associate Professor',
			department: 'MBA',
			mobile: '9848244732',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Bobbili Devi',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '7396362754',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Bugatha Naga Sai',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '8121937579',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Chukka Sathish',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9490863326',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Kandalam Yamuna Satya Pravallika',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9963390618',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Kiran Kumar Tripurana',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9989074888',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Sadagana Chaitanya',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9182128278',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Sidda Abhishek',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9381980051',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Sidda Alekhya',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '8179243661',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Uddanda Pratyusha',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '8367316439',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Vanjarana V Kanaka Mahalakshmi',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '9000241760',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: '',
			name: 'Yellabilli Sunitha',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'MBA',
			mobile: '6303799308',
			email: '',
			linkedin: '',
			photo: ''
		},
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		{
			title: 'Dr',
			name: 'Boyidi Poorna Satyanarayana',
			qualification: 'M.Tech., Ph.D',
			designation: 'Professor',
			department: 'CSE',
			mobile: '9121214313',
			email: 'poornasatyanarayana@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Srirangam Durga Prasad',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'CSE',
			mobile: '8712297422',
			email: '@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Uppada Padma Mohan',
			qualification: 'M.Tech., M.C.A',
			designation: 'Associate Professor',
			department: 'CSE',
			mobile: '9346335322',
			email: 'padmauppada23@gmail.com',
			linkedin: 'https://www.linkedin.com/padma',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Elipilli Anil Kumar',
			qualification: 'M.Tech., Ph.D.',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8096173988',
			email: 'auphdanil@gmail.com',
			linkedin: 'https://www.linkedin.com/in/anil-kumar-358a87369',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Boyidi Vani',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9121709043',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Bugatha S Sailaja',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9392788062',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Dakineni Durgaprasad',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9441313059',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Dulam Devee Sivaprasad',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9573333345',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Gudivada Sushma',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8328181573',
			email: 'gudivadasushma30@gmail.com',
			linkedin: 'https://www.linkedin.com/in/sushma-gudivada-58563b335',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Kona Janshi Venkata Modha Sai Srinija',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8309666292',
			email: 'saisrinija226@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kona-janshi-venkata-modha-sai-srinija-439b5718b',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Myrala Kanthi Kiran',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9848082371',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Neela Vineeth',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9660729816',
			email: 'vineethneela967@gmail.com',
			linkedin: 'https://www.linkedin.com/in/vineeth-neela-50b3b3170',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Panchareddy Gayathri',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9862477778',
			email: 'gayathriraghuram2016@gmail.com',
			linkedin: 'https://www.linkedin.com/in/gayathri-p-42231239b',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Pulapalli Joshua Raju',
			qualification: 'M.Tech., Ph.D',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8297293834',
			email: 'josh.educato@gmail.com',
			linkedin: 'https://www.linkedin.com/in/joshua-raju-p-a11335163/',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Siribariki Mouli',
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
			name: 'Somu Harshini',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7893492079',
			email: 'somuharshini0617@gmail.com',
			linkedin: 'https://www.linkedin.com/in/somu-harshini-2715a11a7',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Surapureddy Samyukta',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7980782250',
			email: 'samyukta537@gmail.com',
			linkedin: 'https://www.linkedin.com/in/surapureddy-samyukta-69b3ba144',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Thalluri Chaitanya',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9490263303',
			email: 'Thallurichaitanya85@gmail.com',
			linkedin: 'https://www.linkedin.com/posts/bits-vizag_bitsvizag',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Vurukuti Kanakeswari',
			qualification: 'M.Tech., Ph.D',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9908132695',
			email: 'kanakeswaridevara@gmail.com',
			linkedin: 'https://www.linkedin.com/in/kanakeswari-vurukuti-01263a335',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Polamarasetty Arun Tez',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9494518461',
			email: 'bitsaruntez@gmail.com',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Penmetsa Trinadh Santosh Priya',
			qualification: 'M.Tech., M.C.A',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7093275580',
			email: 'ptspriya.bits@gmail.com',
			linkedin: 'http://www.linkedin.com/in/pinnamraju-t-s-priya-503686326',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Devadi Sriya Rani',
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
			name: 'Killi Jeevita',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7075440692',
			email: 'jeevithakilli24@gmail.com',
			linkedin: 'https://www.linkedin.com/in/jeevitha-killi-831207254',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Mangipudi Sai Prasanna',
			qualification: 'M.Tech., M.C.A',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7382070704',
			email: 'prasannababa2024@gmail.com',
			linkedin: 'https://www.linkedin.com/home?originalSubdomain=in',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Sunnapu Naveena Priya',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9963778476',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Gunji Sravani',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8074008507',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Purushotham Teja Sai Mani Bhargav',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9989837230',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Koviri Prapurna',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '8919450150',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Mummidi Durga Bhavani',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9391218799',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Manikeswaram Krishna Kumari',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9100500370',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Adapaka Uma Devi',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9492262857',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Sudheerkamal Batta',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9603439439',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Bathula Bhagyalakshmi',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9014595116',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Medisetti Snehadivya',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9059850579',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Boddu Rammurthy Naidu',
			qualification: '',
			designation: 'Assistant Professor of Practice',
			department: 'CSE',
			mobile: '9885666241',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Batchu Ganesh Chandra',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9052438366',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Rayana Mallika',
			qualification: 'B.Tech',
			designation: 'Teaching Assistant',
			department: 'CSE',
			mobile: '9515812798',
			email: 'mallika282611@gmail.com',
			linkedin: 'https://www.linkedin.com/in/mallika-rayana-a7711a271',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Sravani Reddy Karri',
			qualification: 'M.Tech',
			designation: 'Teaching Assistant',
			department: 'CSE',
			mobile: '7337061551',
			email: 'sravanireddymay25@gmail.com',
			linkedin: 'https://www.linkedin.com/in/karri-sravani-reddy',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'M Sai Jyothi',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Anudeep',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mrs',
			name: 'Botchu Aparna',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '7396585623',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Ashok Kumar Ratanala',
			qualification: '',
			designation: 'Assistant Professor',
			department: 'CSE',
			mobile: '9160766133',
			email: '',
			linkedin: '',
			photo: ''
		}
	,
		{
			title: 'Dr',
			name: 'Kamaraju Vechalapu',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'EEE',
			mobile: '9963268636',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Bhuvanagiri Hindu',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '8977741234',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Binnada Lohidas',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '8790949565',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Bobbili Lakshminarayana',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9618994579',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Doki Sudhamsha',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9177228301',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Gompa Rajesh',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '8106992143',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Gurla Aliveni',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '6305862557',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Kasi Venkateswararao',
			qualification: 'M.Tech., Ph.D',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '8897173977',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Manthri Venkta Satya Prem Sagar',
			qualification: 'M.Tech., M.B.A',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '7799885355',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Terukoti Divya',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9553007531',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Velagala L S S Phani Reddy',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9966963328',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Modugu Kranthi Kumar',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '9550090904',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Pallapothula Naga Praveen Kumar',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'EEE',
			mobile: '8978180559',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Pathem Uma Chaithanya',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '9817049898',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'A S Bhanu Prasanna',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '8008633321',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Fathimunnisa Begum',
			qualification: 'M.Tech., Ph.D',
			designation: 'Associate Professor',
			department: 'Mechanical',
			mobile: '9966540481',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Andiboyina Sireesha',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '6617920112',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Azeez Mohammed Ali',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9676873876',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Bodapati Durga Prasad',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9494714351',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Dharmala Venkata Padmaja',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9985888669',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Maddula Leela Sai Suguna Mani',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '8297830888',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Mallapu Satyanarayana',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9491626873',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Pothina Surya Rao',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '8374302229',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Reddy Ramesh',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '8500652035',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Vadapalli Preetham Kumar',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9701161391',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Vamsi Krishna Balaga',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9492017425',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Vikas Ranjan',
			qualification: 'Ph.D',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '7794868025',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Maturi Kishore',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'Mechanical',
			mobile: '9502034507',
			email: '',
			linkedin: '',
			photo: ''
		}
,
		{
			title: 'Dr',
			name: 'Mallavarapu Rajan Babu',
			qualification: 'Ph.D',
			designation: 'Principal',
			department: 'ECE',
			mobile: '9492618186',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Babburu Kiranamaii',
			qualification: 'Ph.D',
			designation: 'Professor',
			department: 'ECE',
			mobile: '8500267193',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Rudra Pratap Das',
			qualification: 'Ph.D',
			designation: 'Professor',
			department: 'ECE',
			mobile: '9640552861',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Kondapalli Pradeep',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '9160350380',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Ravi Kishore Maddugaru',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '7989527137',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Yaddanapudi Venkata Bhaskara Lakshmi',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '7893676891',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Gera Aswani Kumar',
			qualification: 'M.Tech',
			designation: 'Associate Professor',
			department: 'ECE',
			mobile: '8886065888',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Chinta Santoshi Kumari',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '7731993013',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Hari Sai Krishna Tripurana',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8247069915',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Kaki Venkata Sagara Srujana',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '9110378493',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Kumar R N',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '9676397891',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'M M Komali Chittapragada',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8121206946',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Mariserla Sri Lakshmi',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8121979622',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Moningi Ravindra Kumar',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8919641346',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Nallanichakravartula Satya Srinivasa Santosh Phani Krishna',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '9441092231',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Punyamantula Venkata Hari Krishna Babu',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8142349157',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Antharakonda Ramesh',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '9247856668',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Sonti Sowjanya',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '6303483862',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Talari Sai Kumari',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '9550448999',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Temburu Pavani',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '8501068852',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Vishnu Murty Tammineni',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '7893312721',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Bhyri Priyanka',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '7382126203',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'P PREETHI',
			qualification: 'M.Tech',
			designation: 'Assistant Professor',
			department: 'ECE',
			mobile: '',
			email: '',
			linkedin: '',
			photo: ''
		}
,
		{
			title: 'Dr',
			name: 'Dusi Narasimha Murty',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9398688852',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Jayarangarao Prathipati',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9885597842',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Ganduri Uma Sankar',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9885056352',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Paromita Mukherjee',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9313184040',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Samareddy Sravan Kumar',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9494369900',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Palla Venkata Murali',
			qualification: 'M.A., B.Ed., Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '9492535197',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Dr',
			name: 'Gandham Suneetha Rani',
			qualification: 'Ph.D',
			designation: 'Associate Professor',
			department: 'BS&H',
			mobile: '8008506949',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Kathula Serisha',
			qualification: 'M.Sc., M.Tech',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9440938025',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Gollamandala Noel',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '7989675577',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Gottumukkala Jyothi',
			qualification: 'M.Phil., M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9989609399',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Kamada Piyali Varma',
			qualification: 'M.A',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9642932971',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Lanka Priyanka',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '8074127417',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Mondi Mounika',
			qualification: 'M.Sc., B.Ed',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9515099654',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Palakollu Mahesh',
			qualification: 'Ph.D., M.Phil., M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9866358722',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Pulli Eswararao',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9705059627',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Pydikondala Surya Kumari',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9951934411',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Sriperembudhuru Sowmya Latha',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9848585013',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Sukka Venkatakavitha',
			qualification: 'M.Sc., B.Ed., Ph.D',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '9985388148',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Yarra Appalaraju',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '8500337689',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Ms',
			name: 'Vidhyarani Mehar',
			qualification: 'M.Sc',
			designation: 'Assistant Professor',
			department: 'BS&H',
			mobile: '6301298509',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Aratikatla Pydi Raju',
			qualification: 'M.A., M.L.I.Sc., M.Ed',
			designation: 'Chief Librarian',
			department: 'BS&H',
			mobile: '7893429433',
			email: '',
			linkedin: '',
			photo: ''
		},
		{
			title: 'Mr',
			name: 'Choppa Chandra Sekhar',
			qualification: 'M.P.Ed',
			designation: 'Physical Director',
			department: 'BS&H',
			mobile: '9885075455',
			email: '',
			linkedin: '',
			photo: ''
		}
].map((faculty) => {
		// Normalize name for experience lookup (remove Dr. prefix and extra spaces)
		const lookupName = (faculty.name || '').replace(/^\s*dr\.?\s+/i, '').trim();
		return {
			...faculty,
			experience: experienceByName[lookupName] ?? experienceByName[faculty.name] ?? null
		};
	});

	let selectedDepartment = 'CSE';
	let searchTerm = '';
	let isLoading = true;

	const normalize = (value = '') => value.toLowerCase().replace(/\s+/g, ' ').trim();
	const isLabProgrammer = (designation = '') => normalize(designation).includes('lab programmer');
	const normalizeNameKey = (value = '') =>
		normalize(value)
			.replace(/^dr\.?\s+/i, '')
			.replace(/[^a-z]/g, '');

	const csePriorityOrder = [
		'Dr. Boyidi Poorna Satyanarayana',
		'Uppada Padma Mohan',
		'Srirangam Durga Prasad',
		'Vurukuti Kanakeswari',
		'Polamarasetty Arun Tez',
		'Dr. Elipilli Anil Kumar',
		'Penmetsa Trinadh Santosh Priya',
		'Pulapalli Joshua Raju',
		'Thalluri Chaitanya',
		'Surapureddy Samyukta',
		'Panchareddy Gayathri',
		'Mangipudi Sai Prasanna',
		'Rayana Mallika',
		'Devadi Sriya Rani',
		'Killi Jeevita',
		'Sravani Reddy Karri',
		'Gudivada Sushma',
		'Kona Janshi Venkata Modha Sai Srinija',
		'Neela Vineeth',
		'Siribariki Mouli',
		'Somu Harshini',
		'Boyidi Vani',
		'Bugatha S Sailaja',
		'Dakineni Durgaprasad',
		'Dulam Devee Sivaprasad',
		'Myrala Kanthi Kiran',
		'Sunnapu Naveena Priya',
		'Gunji Sravani',
		'Purushotham Teja Sai Mani Bhargav',
		'Koviri Prapurna',
		'Mummidi Durga Bhavani',
		'Manikeswaram Krishna Kumari',
		'Adapaka Uma Devi',
		'Sudheerkamal Batta',
		'Bathula Bhagyalakshmi',
		'Medisetti Snehadivya',
		'Boddu Rammurthy Naidu',
		'Batchu Ganesh Chandra',
		'M Sai Jyothi',
		'Anudeep',
		'Botchu Aparna',
		'Ashok Kumar Ratanala'
	];

	const csePriorityIndex = csePriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const ecePriorityOrder = [
		'Mallavarapu Rajan Babu',
		'Babburu Kiranamaii',
		'Rudra Pratap Das',
		'Kondapalli Pradeep',
		'Ravi Kishore Maddugaru',
		'Yaddanapudi Venkata Bhaskara Lakshmi',
		'Gera Aswani Kumar',
		'Chinta Santoshi Kumari',
		'Hari Sai Krishna Tripurana',
		'Kaki Venkata Sagara Srujana',
		'Kumar R N',
		'M M Komali Chittapragada',
		'Mariserla Sri Lakshmi',
		'Moningi Ravindra Kumar',
		'Nallanichakravartula Satya Srinivasa Santosh Phani Krishna',
		'Punyamantula Venkata Hari Krishna Babu',
		'Antharakonda Ramesh',
		'Sonti Sowjanya',
		'Talari Sai Kumari',
		'Temburu Pavani',
		'Vishnu Murty Tammineni',
		'Bhyri Priyanka',
		'P PREETHI'
	];

	const ecePriorityIndex = ecePriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const eeePriorityOrder = [
		'Kamaraju Vechalapu',
		'Bhuvanagiri Hindu',
		'Binnada Lohidas',
		'Bobbili Lakshminarayana',
		'Doki Sudhamsha',
		'Gompa Rajesh',
		'Gurla Aliveni',
		'Kasi Venkateswararao',
		'Manthri Venkta Satya Prem Sagar',
		'Terukoti Divya',
		'Velagala L S S Phani Reddy',
		'Modugu Kranthi Kumar',
		'Pallapothula Naga Praveen Kumar'
	];

	const eeePriorityIndex = eeePriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const mechanicalPriorityOrder = [
		'A S Bhanu Prasanna',
		'Pathem Uma Chaithanya',
		'Fathimunnisa Begum',
		'Andiboyina Sireesha',
		'Azeez Mohammed Ali',
		'Bodapati Durga Prasad',
		'Dharmala Venkata Padmaja',
		'Maddula Leela Sai Suguna Mani',
		'Mallapu Satyanarayana',
		'Pothina Surya Rao',
		'Reddy Ramesh',
		'Vadapalli Preetham Kumar',
		'Vamsi Krishna Balaga',
		'Vikas Ranjan',
		'Maturi Kishore'
	];

	const mechanicalPriorityIndex = mechanicalPriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const civilPriorityOrder = [
		'S. Pavani',
		'Dr. Shahazadi Begum',
		'P. LAVANYA',
		'P. Saranya',
		'K. Lavanya'
	];

	const civilPriorityIndex = civilPriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const mbaPriorityOrder = [
		'K. SIVEESHA',
		'H. Vasudeva Rao',
		'B. G. S. Prasad',
		'K. NARESH KUMAR',
		'B. Santoshi Kumari',
		'L. Srinivasa'
	];

	const mbaPriorityIndex = mbaPriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

	const bshPriorityOrder = [
		'Dusi Narasimha Murty',
		'Jayarangarao Prathipati',
		'Ganduri Uma Sankar',
		'Paromita Mukherjee',
		'Samareddy Sravan Kumar',
		'Palla Venkata Murali',
		'Gandham Suneetha Rani',
		'Kathula Serisha',
		'Gollamandala Noel',
		'Gottumukkala Jyothi',
		'Kamada Piyali Varma',
		'Lanka Priyanka',
		'Mondi Mounika',
		'Palakollu Mahesh',
		'Pulli Eswararao',
		'Pydikondala Surya Kumari',
		'Sriperembudhuru Sowmya Latha',
		'Sukka Venkatakavitha',
		'Yarra Appalaraju',
		'Vidhyarani Mehar',
		'Aratikatla Pydi Raju',
		'Choppa Chandra Sekhar'
	];

	const bshPriorityIndex = bshPriorityOrder.reduce((map, name, index) => {
		map[normalizeNameKey(name)] = index;
		return map;
	}, /** @type {Record<string, number>} */ ({}));

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
			if ((qual.includes('m.tech') || qual.includes('mtech')) && qual.includes('pursuing')) {
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

	$: groupedFacultyMembers = facultyMembers.reduce((groups, person) => {
		if (!groups[person.department]) {
			groups[person.department] = [];
		}
		groups[person.department].push(person);
		return groups;
	}, /** @type {Record<string, Array<(typeof facultyMembers)[number]>>} */ ({}));

	$: orderedDepartmentGroups =
		/** @type {Array<[string, Array<(typeof facultyMembers)[number]>]>} */ (
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
				.map(
					([department, people]) =>
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
			subtitle="Experienced mentors shaping academic excellence across every department."
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
		padding: clamp(2.6rem, 5vw, 4.4rem) 0;
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
		gap: 1.3rem;
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
		padding: 0.35rem 0.1rem 0.1rem;
		border-bottom: 1px solid rgba(15, 23, 42, 0.1);
	}

	.department-header h3 {
		margin: 0;
		font-size: clamp(0.98rem, 1.3vw, 1.13rem);
		font-weight: 700;
		letter-spacing: 0.01em;
		color: #0f172a;
	}

	.faculty-name {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.2;
		font-weight: 700;
		color: #0f172a;
		white-space: nowrap;
		letter-spacing: -0.01em;
	}

	.department-header p {
		margin: 0;
		font-size: 0.76rem;
		font-weight: 600;
		color: #475569;
		background: rgba(226, 232, 240, 0.55);
		padding: 0.2rem 0.52rem;
		border-radius: 999px;
	}

	.faculty-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 2rem;
		justify-items: stretch;
		align-items: stretch;
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
			padding-top: 2rem;
		}

		.inner {
			width: calc(100% - 16px);
		}

		.faculty-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 0.6rem;
		}
	}
</style>
