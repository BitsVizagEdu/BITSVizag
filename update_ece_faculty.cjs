const fs = require('fs');

let facultyContent = fs.readFileSync('src/lib/components/faculty.svelte', 'utf-8');

const eceFaculty = [
  { name: 'Dr.Mallavarapu Rajan Babu', des: 'Principal', mob: '9492618186', gender: 'Male', exp: 25, qual: 'Ph.D' },
  { name: 'Dr.Babburu Kiranamaii', des: 'Professor', mob: '8500267193', gender: 'Female', exp: 25, qual: 'Ph.D' },
  { name: 'Dr.Rudra Pratap Das', des: 'Professor', mob: '9640552861', gender: 'Male', exp: 30, qual: 'Ph.D' },
  { name: 'Dr.Kondapalli Pradeep', des: 'Associate Professor', mob: '9160350380', gender: 'Male', exp: 20, qual: 'Ph.D' },
  { name: 'Dr.Ravi Kishore Maddugaru', des: 'Associate Professor', mob: '7989527137', gender: 'Male', exp: 15, qual: 'Ph.D' },
  { name: 'Dr.Yaddanapudi Venkata Bhaskara Lakshmi', des: 'Associate Professor', mob: '7893676891', gender: 'Female', exp: 15, qual: 'Ph.D' },
  { name: 'Dr.Gera Aswan Kumar', des: 'Associate Professor', mob: '8886065888', gender: 'Male', exp: 12, qual: 'Ph.D' },
  { name: 'Chinta Santoshi Kumari', des: 'Assistant Professor', mob: '7731993013', gender: 'Female', exp: 3, qual: 'M.Tech' },
  { name: 'Hari Sai Krishna Tripurana', des: 'Assistant Professor', mob: '8247069915', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Kaki Venkata Sagara Srujana', des: 'Assistant Professor', mob: '9110378493', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Kumar R N', des: 'Assistant Professor', mob: '9676397891', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'M M Komali Chittapragada', des: 'Assistant Professor', mob: '8121206946', gender: 'Female', exp: 9, qual: 'M.Tech' },
  { name: 'Mariserla Sri Lakshmi', des: 'Assistant Professor', mob: '8121979622', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Moningi Ravindra Kumar', des: 'Assistant Professor', mob: '8919641346', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Nallanichakravartula Satya Srinivasa Santosh Phani Krishna', des: 'Assistant Professor', mob: '9441092231', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Punyamantula Venkata Hari Krishna Babu', des: 'Assistant Professor', mob: '8142349157', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Antharakonda Ramesh', des: 'Assistant Professor', mob: '9247856668', gender: 'Male', exp: 5, qual: 'M.Tech' },
  { name: 'Sonti Sowjanya', des: 'Assistant Professor', mob: '6303483862', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Talari Sai Kumari', des: 'Assistant Professor', mob: '9550448999', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'Temburu Pavani', des: 'Assistant Professor', mob: '8501068852', gender: 'Female', exp: 2.8, qual: 'M.Tech' },
  { name: 'Vishnu Murty Tammineni', des: 'Assistant Professor', mob: '7893312721', gender: 'Male', exp: 20, qual: 'M.Tech' },
  { name: 'Bhyri Priyanka', des: 'Assistant Professor', mob: '7382126203', gender: 'Female', exp: 5, qual: 'M.Tech' },
  { name: 'P PREETHI', des: 'Assistant Professor', mob: '', gender: 'Female', exp: 5, qual: 'M.Tech' }
];

function getTitle(name, gender) {
  if (name.toLowerCase().startsWith('dr.')) return 'Dr';
  return gender === 'Female' ? 'Ms' : 'Mr';
}

function getCleanName(name) {
  if (name.toLowerCase().startsWith('dr.')) return name.substring(3).trim();
  return name;
}

// 1. We remove ALL existing ECE faculty objects from facultyData array in faculty.svelte
let facultyDataStrMatch = facultyContent.match(/const facultyData = \[([\s\S]*?)\]\.map/);
if (!facultyDataStrMatch) {
  console.log("Could not find facultyData array");
  process.exit(1);
}
let facultyDataStr = facultyDataStrMatch[1];

// This regex removes objects where department is 'ECE'
let newFacultyDataStr = facultyDataStr.replace(/{[^{]*?department:\s*'ECE'[^}]*?},?/g, '');

// Clean up trailing commas if any inside the matched array content
newFacultyDataStr = newFacultyDataStr.replace(/,\s*$/, '\n');

// Append new ECE entries
let newEntries = "";

eceFaculty.forEach(f => {
  newEntries += `,\n\t\t{
\t\t\ttitle: '${getTitle(f.name, f.gender)}',
\t\t\tname: '${getCleanName(f.name)}',
\t\t\tqualification: '${f.qual}',
\t\t\tdesignation: '${f.des}',
\t\t\tdepartment: 'ECE',
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
  eceFaculty.forEach(f => {
    expContent += `,\n\t\t'${getCleanName(f.name)}': ${f.exp}`;
  });
  facultyContent = facultyContent.replace(expMatch[1], expContent);
}

// 3. Update priority orders
const ecePriority = eceFaculty.map(f => `'${getCleanName(f.name)}'`).join(',\n\t\t');
facultyContent = facultyContent.replace(/const ecePriorityOrder = \[[^\]]*\];/, `const ecePriorityOrder = [\n\t\t${ecePriority}\n\t];`);

fs.writeFileSync('src/lib/components/faculty.svelte', facultyContent);

// UPDATE Department of ECE.svelte
let deptEceContent = fs.readFileSync('src/routes/department/[slug]/components/Department of ECE.svelte', 'utf-8');

let newEceRows = `const facultyRows = [\n`;
eceFaculty.forEach((f, index) => {
  newEceRows += `\t\t{
\t\t\tname: '${getTitle(f.name, f.gender)}. ${getCleanName(f.name)}',
\t\t\trole: '${f.des}',
\t\t\texp: '${f.exp}+ Years',
\t\t\tqual: '${f.qual}',
\t\t\tmobile: '${f.mob}'
\t\t}${index === eceFaculty.length - 1 ? '' : ','}\n`;
});
newEceRows += `\t];`;

deptEceContent = deptEceContent.replace(/const facultyRows = \[[\s\S]*?\];/, newEceRows);
fs.writeFileSync('src/routes/department/[slug]/components/Department of ECE.svelte', deptEceContent);

console.log('Update complete.');
