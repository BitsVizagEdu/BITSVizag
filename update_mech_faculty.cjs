const fs = require('fs');

let facultyContent = fs.readFileSync('src/lib/components/faculty.svelte', 'utf-8');

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

// 1. We remove ALL existing MECH faculty objects from facultyData array in faculty.svelte
let facultyDataStrMatch = facultyContent.match(/const facultyData = \[([\s\S]*?)\]\.map/);
if (!facultyDataStrMatch) {
  console.log("Could not find facultyData array");
  process.exit(1);
}
let facultyDataStr = facultyDataStrMatch[1];

// This regex removes objects where department is 'Mechanical'
let newFacultyDataStr = facultyDataStr.replace(/{\s*title: [\s\S]*?department:\s*'Mechanical'[\s\S]*?},?/g, '');

// Clean up trailing commas if any inside the matched array content
newFacultyDataStr = newFacultyDataStr.replace(/,\s*$/, '\n');

// Append new MECH entries
let newEntries = "";

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
  mechFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  facultyContent = facultyContent.replace(expMatch[1], expContent);
}

// 3. Update priority orders
const mechPriority = mechFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const mechanicalPriorityOrder = \[[^\]]*\];/, `const mechanicalPriorityOrder = [\n\t\t${mechPriority}\n\t];`);

fs.writeFileSync('src/lib/components/faculty.svelte', facultyContent);

// UPDATE Department of MECH.svelte
let deptMechContent = fs.readFileSync('src/routes/department/[slug]/components/Department of MECH.svelte', 'utf-8');

// Find facultyRows and replace it
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
