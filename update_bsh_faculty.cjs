const fs = require('fs');

let facultyContent = fs.readFileSync('src/lib/components/faculty.svelte', 'utf-8');

const bshFaculty = [
  { name: 'Dr.Dusi Narasimha Murty', des: 'Associate Professor', mob: '9398688852', gender: 'Male', exp: 15, qual: 'Ph.D' },
  { name: 'Dr.Jayarangarao Prathipati', des: 'Associate Professor', mob: '9885597842', gender: 'Male', exp: 32, qual: 'Ph.D' },
  { name: 'Dr.Ganduri Uma Sankar', des: 'Associate Professor', mob: '9885056352', gender: 'Male', exp: 15, qual: 'Ph.D' },
  { name: 'Dr.Paromita Mukherjee', des: 'Associate Professor', mob: '9313184040', gender: 'Female', exp: 11, qual: 'Ph.D' },
  { name: 'Dr.Samareddy Sravan Kumar', des: 'Associate Professor', mob: '9494369900', gender: 'Male', exp: 15, qual: 'Ph.D' },
  { name: 'Palla Venkata Murali', des: 'Associate Professor', mob: '9492535197', gender: 'Male', exp: 25, qual: 'M.A., B.Ed., Ph.D' },
  { name: 'Dr.Gandham Suneetha Rani', des: 'Associate Professor', mob: '8008506949', gender: 'Female', exp: 13, qual: 'Ph.D' },
  { name: 'Kathula Serisha', des: 'Assistant Professor', mob: '9440938025', gender: 'Female', exp: 15, qual: 'M.Sc., M.Tech' },
  { name: 'Gollamandala Noel', des: 'Assistant Professor', mob: '7989675577', gender: 'Male', exp: 5, qual: 'M.Sc' },
  { name: 'Gottumukkala Jyothi', des: 'Assistant Professor', mob: '9989609399', gender: 'Female', exp: 15, qual: 'M.Phil., M.Sc' },
  { name: 'Kamada Piyali Varma', des: 'Assistant Professor', mob: '9642932971', gender: 'Female', exp: 20, qual: 'M.A' },
  { name: 'Lanka Priyanka', des: 'Assistant Professor', mob: '8074127417', gender: 'Female', exp: 10, qual: 'M.Sc' },
  { name: 'Mondi Mounika', des: 'Assistant Professor', mob: '9515099654', gender: 'Female', exp: 9, qual: 'M.Sc., B.Ed' },
  { name: 'Palakollu Mahesh', des: 'Assistant Professor', mob: '9866358722', gender: 'Male', exp: 18, qual: 'Ph.D., M.Phil., M.Sc' },
  { name: 'Pulli Eswararao', des: 'Assistant Professor', mob: '9705059627', gender: 'Male', exp: 5, qual: 'M.Sc' },
  { name: 'Pydikondala Surya Kumari', des: 'Assistant Professor', mob: '9951934411', gender: 'Female', exp: 16, qual: 'M.Sc' },
  { name: 'Sriperembudhuru Sowmya Latha', des: 'Assistant Professor', mob: '9848585013', gender: 'Female', exp: 5, qual: 'M.Sc' },
  { name: 'Sukka Venkatakavitha', des: 'Assistant Professor', mob: '9985388148', gender: 'Female', exp: 13, qual: 'M.Sc., B.Ed., Ph.D' },
  { name: 'Yarra Appalaraju', des: 'Assistant Professor', mob: '8500337689', gender: 'Male', exp: 5, qual: 'M.Sc' },
  { name: 'Vidhyarani Mehar', des: 'Assistant Professor', mob: '6301298509', gender: 'Female', exp: 5, qual: 'M.Sc' },
  { name: 'Aratikatla Pydi Raju', des: 'Chief Librarian', mob: '7893429433', gender: 'Male', exp: 15, qual: 'M.A., M.L.I.Sc., M.Ed' },
  { name: 'Choppa Chandra Sekhar', des: 'Physical Director', mob: '9885075455', gender: 'Male', exp: 15, qual: 'M.P.Ed' }
];

function getTitle(name, gender) {
  if (name.toLowerCase().startsWith('dr.')) return 'Dr';
  return gender === 'Female' ? 'Ms' : 'Mr';
}

function getCleanName(name) {
  if (name.toLowerCase().startsWith('dr.')) return name.substring(3).trim();
  return name;
}

// 1. We remove ALL existing BS&H faculty objects from facultyData array in faculty.svelte
let facultyDataStrMatch = facultyContent.match(/const facultyData = \[([\s\S]*?)\]\.map/);
if (!facultyDataStrMatch) {
  console.log("Could not find facultyData array");
  process.exit(1);
}
let facultyDataStr = facultyDataStrMatch[1];

// This regex removes objects where department is 'BS&H'
let newFacultyDataStr = facultyDataStr.replace(/{[^{]*?department:\s*'BS&H'[^}]*?},?/g, '');

// Clean up trailing commas if any inside the matched array content
newFacultyDataStr = newFacultyDataStr.replace(/,\s*$/, '\n');

// Append new BS&H entries
let newEntries = "";

bshFaculty.forEach(f => {
  newEntries += `,\n\t\t{
\t\t\ttitle: '${getTitle(f.name, f.gender)}',
\t\t\tname: '${getCleanName(f.name)}',
\t\t\tqualification: '${f.qual}',
\t\t\tdesignation: '${f.des}',
\t\t\tdepartment: 'BS&H',
\t\t\tmobile: '${f.mob}',
\t\t\temail: '',
\t\t\tlinkedin: '',
\t\t\tphoto: ''
\t\t}`;
});

newFacultyDataStr = newFacultyDataStr + newEntries + '\n';
facultyContent = facultyContent.replace(facultyDataStrMatch[1], newFacultyDataStr);

// 2. Add them to experienceByName
let expMatch = facultyContent.match(/const experienceByName = {([\s\S]*?)};/);
if (expMatch) {
  let expContent = expMatch[1];
  bshFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  facultyContent = facultyContent.replace(expMatch[1], expContent);
}

// 3. Update priority orders
const bshPriority = bshFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const bshPriorityOrder = \[[^\]]*\];/, `const bshPriorityOrder = [\n\t\t${bshPriority}\n\t];`);

fs.writeFileSync('src/lib/components/faculty.svelte', facultyContent);

// UPDATE Department of BS&H.svelte
let deptBshContent = fs.readFileSync('src/routes/department/[slug]/components/Department of BS&H.svelte', 'utf-8');

let newBshRows = `const facultyRows = [\n`;
bshFaculty.forEach((f, index) => {
  newBshRows += `\t\t{
\t\t\tname: '${getTitle(f.name, f.gender)}. ${getCleanName(f.name)}',
\t\t\trole: '${f.des}',
\t\t\texp: '${f.exp}+ Years',
\t\t\tqual: '${f.qual}',
\t\t\tmobile: '${f.mob}'
\t\t}${index === bshFaculty.length - 1 ? '' : ','}\n`;
});
newBshRows += `\t];`;

deptBshContent = deptBshContent.replace(/const facultyRows = \[[\s\S]*?\];/, newBshRows);
fs.writeFileSync('src/routes/department/[slug]/components/Department of BS&H.svelte', deptBshContent);

console.log('Update complete.');
