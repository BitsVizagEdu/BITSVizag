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

function getTitle(name, gender) {
  if (name.toLowerCase().startsWith('dr.')) return 'Dr';
  return gender === 'Female' ? 'Ms' : 'Mr';
}

function getCleanName(name) {
  if (name.toLowerCase().startsWith('dr.')) return name.substring(3).trim();
  return name;
}

// 1. We remove ALL existing EEE faculty objects from facultyData array in faculty.svelte
let facultyDataStrMatch = facultyContent.match(/const facultyData = \[([\s\S]*?)\]\.map/);
if (!facultyDataStrMatch) {
  console.log("Could not find facultyData array");
  process.exit(1);
}
let facultyDataStr = facultyDataStrMatch[1];

// This regex removes objects where department is 'EEE'
let newFacultyDataStr = facultyDataStr.replace(/{\s*title: [\s\S]*?department:\s*'EEE'[\s\S]*?},?/g, '');

// Clean up trailing commas if any inside the matched array content
newFacultyDataStr = newFacultyDataStr.replace(/,\s*$/, '\n');

// Append new EEE entries
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

newFacultyDataStr = newFacultyDataStr + newEntries + '\n';
facultyContent = facultyContent.replace(facultyDataStrMatch[1], newFacultyDataStr);

// 2. Add them to experienceByName
let expMatch = facultyContent.match(/const experienceByName = {([\s\S]*?)};/);
if (expMatch) {
  let expContent = expMatch[1];
  eeeFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  facultyContent = facultyContent.replace(expMatch[1], expContent);
}

// 3. Update priority orders
const eeePriority = eeeFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const eeePriorityOrder = \[[^\]]*\];/, `const eeePriorityOrder = [\n\t\t${eeePriority}\n\t];`);

fs.writeFileSync('src/lib/components/faculty.svelte', facultyContent);

// UPDATE Department of EEE.svelte
let deptEeeContent = fs.readFileSync('src/routes/department/[slug]/components/Department of EEE.svelte', 'utf-8');

// Find facultyRows and replace it
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

console.log('Update complete.');
