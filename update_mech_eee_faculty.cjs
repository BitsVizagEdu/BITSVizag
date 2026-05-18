const fs = require('fs');

let facultyContent = fs.readFileSync('src/lib/components/faculty.svelte', 'utf-8');

const eeeFaculty = [
  { name: 'Dr.Kamaraju Vechalapu', des: 'Associate Professor', mob: '9963268636', gender: 'Male', exp: 14, qual: 'Ph.D', role: 'HOD - Associate Professor' },
  { name: 'Bhuvanagiri Hindu', des: 'Assistant Professor', mob: '8977741234', gender: 'Female', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Binnada Lohidas', des: 'Assistant Professor', mob: '8790949565', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Bobbili Lakshminarayana', des: 'Assistant Professor', mob: '9618994579', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Doki Sudhamsha', des: 'Assistant Professor', mob: '9177228301', gender: 'Female', exp: 8, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Gompa Rajesh', des: 'Assistant Professor', mob: '8106992143', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Gurla Aliveni', des: 'Assistant Professor', mob: '6305862557', gender: 'Female', exp: 7, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Kasi Venkateswararao', des: 'Assistant Professor', mob: '8897173977', gender: 'Male', exp: 25, qual: 'M.Tech., Ph.D', role: 'Professor' },
  { name: 'Manthri Venkta Satya Prem Sagar', des: 'Assistant Professor', mob: '7799885355', gender: 'Male', exp: 15, qual: 'M.Tech., M.B.A', role: 'Assistant Professor' },
  { name: 'Terukoti Divya', des: 'Assistant Professor', mob: '9553007531', gender: 'Female', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Velagala L S S Phani Reddy', des: 'Assistant Professor', mob: '9966963328', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Modugu Kranthi Kumar', des: 'Assistant Professor', mob: '9550090904', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' },
  { name: 'Pallapothula Naga Praveen Kumar', des: 'Assistant Professor', mob: '8978180559', gender: 'Male', exp: 5, qual: 'M.Tech', role: 'Assistant Professor' }
];

const mechFaculty = [
  { name: 'Dr.Pathem Uma Chaithanya', des: 'Associate Professor', mob: '9817049898', gender: 'Female', exp: 16, qual: 'M.Tech., Ph.D' },
  { name: 'Dr.A S Bhanu Prasanna', des: 'Associate Professor', mob: '8008633321', gender: 'Female', exp: 19, qual: 'M.Tech., Ph.D' },
  { name: 'Dr.Fathimunnisa Begum', des: 'Associate Professor', mob: '9966540481', gender: 'Female', exp: 18, qual: 'M.Tech., Ph.D' },
  { name: 'Andiboyina Sireesha', des: 'Assistant Professor', mob: '6617920112', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Azeez Mohammed Ali', des: 'Assistant Professor', mob: '9676873876', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Bodapati Durga Prasad', des: 'Assistant Professor', mob: '9494714351', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Dharmala Venkata Padmaja', des: 'Assistant Professor', mob: '9985888669', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Maddula Leela Sai Suguna Mani', des: 'Assistant Professor', mob: '8297830888', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Mallapu Satyanarayana', des: 'Assistant Professor', mob: '9491626873', gender: 'Male', exp: 14, qual: 'M.Tech' },
  { name: 'Pothina Surya Rao', des: 'Assistant Professor', mob: '8374302229', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Reddy Ramesh', des: 'Assistant Professor', mob: '8500652035', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Vadapalli Preetham Kumar', des: 'Assistant Professor', mob: '9701161391', gender: 'Male', exp: 0.7, qual: 'M.Tech' },
  { name: 'Vamsi Krishna Balaga', des: 'Assistant Professor', mob: '9492017425', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Vikas Ranjan', des: 'Assistant Professor', mob: '7794868025', gender: 'Male', exp: 11, qual: 'Ph.D' },
  { name: 'Maturi Kishore', des: 'Assistant Professor', mob: '9502034507', gender: 'Male', exp: 5, qual: 'M.Tech' }
];

function getTitle(name, gender) {
  if (name.toLowerCase().startsWith('dr.')) return 'Dr';
  return gender === 'Female' ? 'Ms' : 'Mr';
}

function getCleanName(name) {
  if (name.toLowerCase().startsWith('dr.')) return name.substring(3).trim();
  return name;
}

// 1. We remove ALL existing EEE and MECH faculty objects from facultyData array in faculty.svelte
let facultyDataStrMatch = facultyContent.match(/const facultyData = \[([\s\S]*?)\]\.map/);
if (!facultyDataStrMatch) {
  console.log("Could not find facultyData array");
  process.exit(1);
}
let facultyDataStr = facultyDataStrMatch[1];

// This regex removes objects where department is 'EEE' or 'Mechanical'
let newFacultyDataStr = facultyDataStr.replace(/{[^{]*?department:\s*'(EEE|Mechanical)'[^}]*?},?/g, '');

// Clean up trailing commas if any inside the matched array content
newFacultyDataStr = newFacultyDataStr.replace(/,\s*$/, '\n');

// Append new EEE & MECH entries
let newEntries = "";

eeeFaculty.forEach(f => {
  newEntries += `,\n\t\t{
\t\t\ttitle: '${getTitle(f.name, f.gender)}',
\t\t\tname: '${getCleanName(f.name)}',
\t\t\tqualification: '${f.qual}',
\t\t\tdesignation: '${f.des}',
\t\t\tdepartment: 'EEE',
\t\t\tmobile: '${f.mob}',
\t\t\temail: '',
\t\t\tlinkedin: '',
\t\t\tphoto: ''
\t\t}`;
});

mechFaculty.forEach(f => {
  newEntries += `,\n\t\t{
\t\t\ttitle: '${getTitle(f.name, f.gender)}',
\t\t\tname: '${getCleanName(f.name)}',
\t\t\tqualification: '${f.qual}',
\t\t\tdesignation: '${f.des}',
\t\t\tdepartment: 'Mechanical',
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
  eeeFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  mechFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  facultyContent = facultyContent.replace(expMatch[1], expContent);
}

// 3. Update priority orders
const eeePriority = eeeFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const eeePriorityOrder = \[[^\]]*\];/, `const eeePriorityOrder = [\n\t\t${eeePriority}\n\t];`);

const mechPriority = mechFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const mechanicalPriorityOrder = \[[^\]]*\];/, `const mechanicalPriorityOrder = [\n\t\t${mechPriority}\n\t];`);

fs.writeFileSync('src/lib/components/faculty.svelte', facultyContent);

// UPDATE Department of EEE.svelte
let deptEeeContent = fs.readFileSync('src/routes/department/[slug]/components/Department of EEE.svelte', 'utf-8');

let newEeeRows = `const facultyRows = [\n`;
eeeFaculty.forEach((f, index) => {
  newEeeRows += `\t\t{
\t\t\tname: '${getTitle(f.name, f.gender)}. ${getCleanName(f.name)}',
\t\t\trole: '${f.role}',
\t\t\texp: '${f.exp}+ Years',
\t\t\tqual: '${f.qual}',
\t\t\tmobile: '${f.mob}'
\t\t}${index === eeeFaculty.length - 1 ? '' : ','}\n`;
});
newEeeRows += `\t];`;

deptEeeContent = deptEeeContent.replace(/const facultyRows = \[[\s\S]*?\];/, newEeeRows);
fs.writeFileSync('src/routes/department/[slug]/components/Department of EEE.svelte', deptEeeContent);

// UPDATE Department of MECH.svelte
let deptMechContent = fs.readFileSync('src/routes/department/[slug]/components/Department of MECH.svelte', 'utf-8');

let newMechRows = `const facultyRows = [\n`;
mechFaculty.forEach((f, index) => {
  newMechRows += `\t\t{
\t\t\tname: '${getTitle(f.name, f.gender)}. ${getCleanName(f.name)}',
\t\t\trole: '${f.des}',
\t\t\texp: '${f.exp}+ Years',
\t\t\tqual: '${f.qual}',
\t\t\tmobile: '${f.mob}'
\t\t}${index === mechFaculty.length - 1 ? '' : ','}\n`;
});
newMechRows += `\t];`;

deptMechContent = deptMechContent.replace(/const facultyRows = \[[\s\S]*?\];/, newMechRows);
fs.writeFileSync('src/routes/department/[slug]/components/Department of MECH.svelte', deptMechContent);

console.log('Update complete.');
