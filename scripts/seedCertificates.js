// @ts-nocheck
import fs from 'fs';
import path from 'path';

const MERN_STUDENTS = [
	{ file: '1.png', name: 'KOYYA AKASH', roll: '23NR1A0589', certId: 'TSS/MERN/2026/589' },
	{ file: '2.png', name: 'HYMA PAPANA', roll: '23NR1A0565', certId: 'TSS/MERN/2026/565' },
	{ file: '3.png', name: 'V.SAI NAVYA SREE', roll: '23NR1A05I6', certId: 'TSS/MERN/2026/5I6' },
	{ file: '4.png', name: 'TELU MAHESH NAIDU', roll: '23NR1A05G9', certId: 'TSS/MERN/2026/5G9' },
	{ file: '5.png', name: 'PALAKOLLU PRANEETH SATYA MANIKANTA', roll: '23NR1A05C1', certId: 'TSS/MERN/2026/5C1' },
	{ file: '6.png', name: 'VURITY PRAVALLIKA', roll: '23NR1A05I8', certId: 'TSS/MERN/2026/5I8' },
	{ file: '7.png', name: 'KOYYA FLORENCE ANGEL', roll: '23NR1A0590', certId: 'TSS/MERN/2026/590' },
	{ file: '8.png', name: 'CH HARSHA VARDHAN', roll: '23NR1A0537', certId: 'TSS/MERN/2026/537' },
	{ file: '9.png', name: 'PANATHALA JYOTHI', roll: '23NR1A05C4', certId: 'TSS/MERN/2026/5C4' },
	{ file: '10.png', name: 'GURRALA CHARAN', roll: '24NR5A0511', certId: 'TSS/MERN/2026/511' },
	{ file: '11.png', name: 'CHEKURTHI YASWANTH', roll: '24NR5A0509', certId: 'TSS/MERN/2026/509' },
	{ file: '12.png', name: 'TERLI APPALA NAIDU', roll: '24NR5A0523', certId: 'TSS/MERN/2026/523' },
	{ file: '13.png', name: 'SALEELA SRINUVASA RAO', roll: '23NR1A05F5', certId: 'TSS/MERN/2026/5F5' },
	{ file: '14.png', name: 'ALLA SHANMUKHA SATISH', roll: '24NR5A0504', certId: 'TSS/MERN/2026/504' },
	{ file: '15.png', name: 'TRIVENI DASARI', roll: '23NR1A0546', certId: 'TSS/MERN/2026/546' },
	{ file: '16.png', name: 'CHAPPA GEETANJALI', roll: '23NR1A0526', certId: 'TSS/MERN/2026/526' },
	{ file: '17.png', name: 'GIRISH KUMAR PODUGU', roll: '23NR1A05D8', certId: 'TSS/MERN/2026/5D8' },
	{ file: '18.png', name: 'KENGAM RAJENDRA', roll: '23NR1A0578', certId: 'TSS/MERN/2026/578' },
	{ file: '19.png', name: 'LAGUDU JYOTHI PRASAD', roll: '23NR1A0594', certId: 'TSS/MERN/2026/594' },
	{ file: '20.png', name: 'GANTYADA DEEKSHITHA', roll: '23NR1A0557', certId: 'TSS/MERN/2026/557' },
	{ file: '21.png', name: 'TUPAKULA MADAN KUMAR', roll: '23NR1A05H8', certId: 'TSS/MERN/2026/5H8' },
	{ file: '22.png', name: 'EROTHU YOGESWARI', roll: '23NR1A0552', certId: 'TSS/MERN/2026/552' },
	{ file: '23.png', name: 'SUMITH KUMAR SINGH', roll: '23NR1A05G2', certId: 'TSS/MERN/2026/5G2' },
	{ file: '24.png', name: 'DHARANI KOLLI', roll: '23NR1A0582', certId: 'TSS/MERN/2026/582' },
	{ file: '25.png', name: 'GANDAMANI VENKATA RAMANA', roll: '23NR1A0554', certId: 'TSS/MERN/2026/554' },
	{ file: '26.png', name: 'CHEEPURUPALLI RAMBABU', roll: '23NR1A0538', certId: 'TSS/MERN/2026/538' },
	{ file: '27.png', name: 'BANDARU SATISH', roll: '23NR1A0517', certId: 'TSS/MERN/2026/517' },
	{ file: '28.png', name: 'AKASH SNEHA', roll: '23NR1A0504', certId: 'TSS/MERN/2026/504' },
	{ file: '29.png', name: 'MAHANKALI AKHIL', roll: '23NR1A0598', certId: 'TSS/MERN/2026/598' },
	{ file: '30.png', name: 'SAVALA HARI PRASAD', roll: '23NR1A05F8', certId: 'TSS/MERN/2026/5F8' },
	{ file: '31.png', name: 'DADI RESHMA', roll: '23NR1A0543', certId: 'TSS/MERN/2026/543' },
	{ file: '32.png', name: 'YEDIDHA DAVID ABHISHEK', roll: '24NR5A0525', certId: 'TSS/MERN/2026/525' },
	{ file: '33.png', name: 'BAGATHI SATHWIK', roll: '23NR1A0515', certId: 'TSS/MERN/2026/515' },
	{ file: '34.png', name: 'ALUPANA BHARAT KALYAN REDDY', roll: '23NR1A0506', certId: 'TSS/MERN/2026/506' },
	{ file: '35.png', name: 'RONGALI SATYA VENKATA SANDEEP', roll: '23NR1A05F2', certId: 'TSS/MERN/2026/5F2' },
	{ file: '36.png', name: 'BATTULA PRAVEEN KUMAR', roll: '24NR5A0507', certId: 'TSS/MERN/2026/507' },
	{ file: '37.png', name: 'PILLA PYDIRAJU', roll: '24NR5A0519', certId: 'TSS/MERN/2026/519' },
	{ file: '38.png', name: 'DARIMISETTI POOJITHA', roll: '23NR1A0545', certId: 'TSS/MERN/2026/545' },
	{ file: '39.png', name: 'DUVVANA AJAY KUMAR', roll: '23NR1A0550', certId: 'TSS/MERN/2026/550' },
	{ file: '40.png', name: 'KEERTHANA THONDAVARAPU', roll: '23NR1A05H3', certId: 'TSS/MERN/2026/5H3' },
	{ file: '41.png', name: 'CHANDAKA LAKSHMI MONIKA', roll: '23NR1A0535', certId: 'TSS/MERN/2026/535' },
	{ file: '42.png', name: 'THONDAVARAPU KARTHIKEYA', roll: '23NR1A05H2', certId: 'TSS/MERN/2026/5H2' },
	{ file: '43.png', name: 'SRIJA YARNAGULA', roll: '23NR1A05J1', certId: 'TSS/MERN/2026/5J1' },
	{ file: '44.png', name: 'BUSA VIVEK', roll: '23NR1A0534', certId: 'TSS/MERN/2026/534' },
	{ file: '45.png', name: 'PARASANA NAGA SRI VAISHNAVI', roll: '23NR1A05C9', certId: 'TSS/MERN/2026/5C9' },
	{ file: '46.png', name: 'BHUMIREDDI NIKITHA', roll: '23NR1A0527', certId: 'TSS/MERN/2026/527' },
	{ file: '47.png', name: 'YELLETI SUNIL SAI', roll: '24NR5A0526', certId: 'TSS/MERN/2026/526' },
	//{ file: '48.png', name: 'SAHITH KUMAR BADIREDDY', roll: '23NR1A0514', certId: 'TSS/MERN/2026/514' },
	{ file: '48.png', name: 'GURUVAJI YERUPALLI', roll: '23NR1A05J3', certId: 'TSS/MERN/2026/5J3' },
	{ file: '49.png', name: 'CHIRANJEEVI', roll: '23NR1A05F4', certId: 'TSS/MERN/2026/5F4' },
	//{ file: '50.png', name: 'NIKITHA AALLA', roll: '23NR1A0501', certId: 'TSS/MERN/2026/501' },
	{ file: '50.png', name: 'ANDIBOYINA YELIJARANI', roll: '23NR1A0509', certId: 'TSS/MERN/2026/509' },
	{ file: '51.png', name: 'BOTTA NAVYA SRI SAI SURYA TEJASWI', roll: '23NR1A0530', certId: 'TSS/MERN/2026/530' },
	{ file: '52.png', name: 'P.SANDIL', roll: '23NR1A05E6', certId: 'TSS/MERN/2026/5E6' },
	{ file: '53.png', name: 'SONGA PURNEMA', roll: '23NR1A05G1', certId: 'TSS/MERN/2026/5G1' },
	{ file: '54.png', name: 'UDAY KUMAR DAKOJI', roll: '23NR1A0544', certId: 'TSS/MERN/2026/544' },
	{ file: '55.png', name: 'MEDA ANUSHA', roll: '23NR1A05A8', certId: 'TSS/MERN/2026/5A8' },
	{ file: '56.png', name: 'MAHESWARI DEVARAKONDA', roll: '23NR1A0547', certId: 'TSS/MERN/2026/547' },
	{ file: 'D5.png', name: 'JEY SURYA DAMODHAR', roll: '23NR1A05D5', certId: 'TSS/MERN/2026/5D5' },
	{ file: '542.png', name: 'DADI OMIKA', roll: '23NR1A0542', certId: 'TSS/MERN/2026/542' },

];

const JAVA_STUDENTS = [
	{ file: '1.png', name: 'KOLAKANIVENKATAPAVANKUMAR', roll: '24NR5A0513', certId: 'TSS/JAVA/2026/513' },
	{ file: '2.png', name: 'YARRA NITHIN', roll: '23NR1A05J2', certId: 'TSS/JAVA/2026/5J2' },
	{ file: '3.png', name: 'BERA BHARATHI', roll: '23NR1A0525', certId: 'TSS/JAVA/2026/525' },
	{ file: '4.png', name: 'REDDY TEJASWINI', roll: '23NR1A05F1', certId: 'TSS/JAVA/2026/5F1' },
	{ file: '5.png', name: 'JYOTHIBODDANA', roll: '23NR1A0529', certId: 'TSS/JAVA/2026/529' },
	{ file: '6.png', name: 'PASALA MANIKANTA', roll: '23NR1A05D0', certId: 'TSS/JAVA/2026/5D0' },
	{ file: '7.png', name: 'PAMALA MANISHA', roll: '23NR1A05C3', certId: 'TSS/JAVA/2026/5C3' },
	{ file: '8.png', name: 'K TARUN KUMAR', roll: '24NR5A0514', certId: 'TSS/JAVA/2026/514' },
	{ file: '9.png', name: 'MURTHY SAI SAMPATH', roll: '23NR1A05B5', certId: 'TSS/JAVA/2026/5B5' },
	{ file: '10.png', name: 'PUJARI SIVANAGA RAMBABU', roll: '23NR1A05E5', certId: 'TSS/JAVA/2026/5E5' },
	{ file: '11.png', name: 'T.PRASANTHI', roll: '23NR1A05G8', certId: 'TSS/JAVA/2026/5G8' },
	{ file: '12.png', name: 'KOTTAPU NAVYA DEEPIKA', roll: '23NR1A0587', certId: 'TSS/JAVA/2026/587' },
	{ file: '13.png', name: 'MATTA BHAVYA SRI', roll: '23NR1A05A7', certId: 'TSS/JAVA/2026/5A7' },
	{ file: '14.png', name: 'KOTTIVADA THOMAS PRAVEEN', roll: '23NR1A0588', certId: 'TSS/JAVA/2026/588' },
	{ file: '15.png', name: 'DIVYA MIDATANA', roll: '23NR1A05B1', certId: 'TSS/JAVA/2026/5B1' },
	{ file: '16.png', name: 'BENDALAM BHOOMIKA', roll: '23NR1A0524', certId: 'TSS/JAVA/2026/524' },
	{ file: '17.png', name: 'AKULA GOVIND', roll: '24NR5A0502', certId: 'TSS/JAVA/2026/502' },
	{ file: '18.png', name: 'UTPREKSHA GUNDU', roll: '23NR1A0564', certId: 'TSS/JAVA/2026/564' },
	{ file: '19.png', name: 'DIVYA REDDI', roll: '23NR1A05E9', certId: 'TSS/JAVA/2026/5E9' },
	{ file: '20.png', name: 'TULASI KALYANI SINGUPILLA', roll: '23NR1A05H6', certId: 'TSS/JAVA/2026/5H6' },
	{ file: '21.png', name: 'KURRA NARASIMHA', roll: '23NR1A0593', certId: 'TSS/JAVA/2026/593' },
	{ file: '22.png', name: 'MALLA BHAVYA', roll: '23NR1A05A0', certId: 'TSS/JAVA/2026/5A0' },
	{ file: '23.png', name: 'DEEPIKA SIRAPARAPU', roll: '23NR1A05F9', certId: 'TSS/JAVA/2026/5F9' },
	{ file: '24.png', name: 'METRA ROHITH NAGA PRASAD', roll: '23NR1A05B0', certId: 'TSS/JAVA/2026/5B0' },
	{ file: '25.png', name: 'SANDHYA RANI.THALABATLA', roll: '23NR1A05H1', certId: 'TSS/JAVA/2026/5H1' },
	{ file: '26.png', name: 'PANDRANKI LEELA PRASAD', roll: '23NR1A05C5', certId: 'TSS/JAVA/2026/5C5' },
	{ file: '27.png', name: 'KOLLU TANMAI SREE RISHITHA', roll: '23NR1A0583', certId: 'TSS/JAVA/2026/583' },
	{ file: '28.png', name: 'TIRUVURU HAVISH NAIDU', roll: '23NR1A05H5', certId: 'TSS/JAVA/2026/5H5' },
	{ file: '29.png', name: 'BANKUPALLI BHARADWAJ', roll: '23NR1A05D9', certId: 'TSS/JAVA/2026/5D9' },
	{ file: '30.png', name: 'BRINDHA LOGANATHAN', roll: '23NR1A0531', certId: 'TSS/JAVA/2026/531' },
	{ file: '31.png', name: 'PRUDHVIRAJ PUJARI', roll: '23NR1A05E4', certId: 'TSS/JAVA/2026/5E4' },
	{ file: '32.png', name: 'BAMMIDI HARITHA', roll: '23NR1A0516', certId: 'TSS/JAVA/2026/516' },
	{ file: '33.png', name: 'AMBALLA MANASA', roll: '23NR1A0507', certId: 'TSS/JAVA/2026/507' },
	{ file: '34.png', name: 'MUGADA SURYA TEJA', roll: '23NR1A05B3', certId: 'TSS/JAVA/2026/5B3' },
	{ file: '35.png', name: 'GEDDAVALASA SRAVANI', roll: '23NR1A0558', certId: 'TSS/JAVA/2026/558' },
	{ file: '36.png', name: 'TEPPALA PRATYUSHA', roll: '23NR1A05H0', certId: 'TSS/JAVA/2026/5H0' },
	{ file: '37.png', name: 'INJARAPU AVINASH', roll: '23NR1A0567', certId: 'TSS/JAVA/2026/567' },
	{ file: '38.png', name: 'KORBILLI TAMANNA', roll: '23NR1A05J4', certId: 'TSS/JAVA/2026/5J4' },
	{ file: '39.png', name: 'POTHULA VARSHITHA', roll: '23NR1A05E2', certId: 'TSS/JAVA/2026/5E2' },
	{ file: '40.png', name: 'MOUNIKA GOTTAPU', roll: '23NR1A0561', certId: 'TSS/JAVA/2026/561' },
	{ file: '41.png', name: 'MEENA PEDIREDLA', roll: '23NR1A05D2', certId: 'TSS/JAVA/2026/5D2' },
	{ file: '42.png', name: 'KANDULA MOHITH REDDY', roll: '23NR1A0575', certId: 'TSS/JAVA/2026/575' },
	{ file: '43.png', name: 'ISSURU SAILAJA', roll: '23NR1A0569', certId: 'TSS/JAVA/2026/569' },
	{ file: '44.png', name: 'NARALA SWATHI', roll: '23NR1A05B9', certId: 'TSS/JAVA/2026/5B9' },
	{ file: '45.png', name: 'JOGI GOWRI SANKAR', roll: '23NR1A0573', certId: 'TSS/JAVA/2026/573' },
	{ file: '46.png', name: 'PATNANA KALPANA', roll: '23NR1A05D1', certId: 'TSS/JAVA/2026/5D1' },
	{ file: '47.png', name: 'YARAGADA PREETHI', roll: '23NR1A05J0', certId: 'TSS/JAVA/2026/5J0' },
	{ file: '48.png', name: 'VADDI DEEPIKA', roll: '23NR1A05I0', certId: 'TSS/JAVA/2026/5I0' },
	{ file: '49.png', name: 'TALARI MEGHANA', roll: '23NR1A05G5', certId: 'TSS/JAVA/2026/5G5' },
	{ file: '50.png', name: 'VASIPILLI SWAROOPA', roll: '23NR1A05I4', certId: 'TSS/JAVA/2026/5I4' },
	{ file: '51.png', name: 'THOTA.SAI MANIKANTA', roll: '23NR1A05H4', certId: 'TSS/JAVA/2026/5H4' },
	{ file: '52.png', name: 'EATI RISHITHA', roll: '23NR1A0551', certId: 'TSS/JAVA/2026/551' },
	{ file: '53.png', name: 'NAGIREDDY AVANAJA', roll: '23NR1A05B8', certId: 'TSS/JAVA/2026/5B8' },
	{ file: '54.png', name: 'SIREESHA YAMPALLA', roll: '23NR1A05I9', certId: 'TSS/JAVA/2026/5I9' },
	{ file: '55.png', name: 'PADALA PRIYANKA', roll: '23NR1A05C0', certId: 'TSS/JAVA/2026/5C0' },
	{ file: '56.png', name: 'KOTHAPALLI SAMPATH KUMAR', roll: '23NR1A0586', certId: 'TSS/JAVA/2026/586' },
	{ file: '57.png', name: 'SALMAN SOMBARKI', roll: '23NR1A05G0', certId: 'TSS/JAVA/2026/5G0' },
	{ file: '58.png', name: 'HEMA VARSHINI AKULA', roll: '23NR1A0505', certId: 'TSS/JAVA/2026/505' },
	{ file: '59.png', name: 'GANDI NAGA DURGA SINDHU', roll: '23NR1A0556', certId: 'TSS/JAVA/2026/556' },
	{ file: '60.png', name: 'APIREDDI RAMA', roll: '23NR1A0512', certId: 'TSS/JAVA/2026/512' },
	{ file: '61.png', name: 'VANA SWAPNA', roll: '23NR1A05I1', certId: 'TSS/JAVA/2026/5I1' },
	{ file: '62.png', name: 'TATTA MANEESHA', roll: '23NR1A05G7', certId: 'TSS/JAVA/2026/5G7' },
	{ file: '63.png', name: 'M VANSHIKA', roll: '23NR1A05A3', certId: 'TSS/JAVA/2026/5A3' },
	{ file: '64.png', name: 'GANDHULI LIKHITHA', roll: '23NR1A0555', certId: 'TSS/JAVA/2026/555' },
	{ file: '65.png', name: 'DUPANA YAMUNA', roll: '23NR1A0549', certId: 'TSS/JAVA/2026/549' },
	{ file: '66.png', name: 'PINNINTI YAMINI', roll: '23NR1A05D7', certId: 'TSS/JAVA/2026/5D7' },
	{ file: '67.png', name: 'SANKARAPU NAGAMANI', roll: '23NR1A05F6', certId: 'TSS/JAVA/2026/5F6' },
];

const STATIC_DIR = path.resolve('static');
const DATA_DIR = path.resolve('src/lib/server/data');
const DB_FILE = path.join(DATA_DIR, 'certificates.json');

if (!fs.existsSync(DATA_DIR)) {
	fs.mkdirSync(DATA_DIR, { recursive: true });
}

console.log('--- Verifying Files & Seeding Database ---');

const records = [];
let mernErrors = 0;
let javaErrors = 0;

// 1. Process MERN
for (const s of MERN_STUDENTS) {
	const relPath = `CSE-Certificates/MERN/${s.file}`;
	const absPath = path.join(STATIC_DIR, relPath);
	if (!fs.existsSync(absPath)) {
		console.warn(`[MERN WARN] Missing file: ${absPath}`);
	}

	records.push({
		id: `CERT-MERN-${s.roll.toUpperCase()}`,
		studentName: s.name.toUpperCase().trim(),
		rollNumber: s.roll.toUpperCase().trim(),
		program: 'Full-Stack Development',
		programSlug: 'fullstack',
		certificateFilePath: relPath,
		certificateId: s.certId,
		certificateStatus: 'active',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	});
}

// 2. Process Java
for (const s of JAVA_STUDENTS) {
	const relPath = `CSE-Certificates/JAVA/${s.file}`;
	const absPath = path.join(STATIC_DIR, relPath);
	if (!fs.existsSync(absPath)) {
		console.warn(`[JAVA WARN] Missing file: ${absPath}`);
	}

	records.push({
		id: `CERT-JAVA-${s.roll.toUpperCase()}`,
		studentName: s.name.toUpperCase().trim(),
		rollNumber: s.roll.toUpperCase().trim(),
		program: 'Java Full Stack Development',
		programSlug: 'java',
		certificateFilePath: relPath,
		certificateId: s.certId,
		certificateStatus: 'active',
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString()
	});
}

console.log(`MERN certificates processed: ${MERN_STUDENTS.length}, missing files: ${mernErrors}`);
console.log(`JAVA certificates processed: ${JAVA_STUDENTS.length}, missing files: ${javaErrors}`);

fs.writeFileSync(DB_FILE, JSON.stringify(records, null, 2), 'utf-8');
console.log(`SUCCESS: Generated ${DB_FILE} with ${records.length} records!`);
