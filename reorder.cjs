const fs = require('fs');
let content = fs.readFileSync('src/lib/components/faculty.svelte', 'utf8');

const prioMatch = content.match(/const csePriorityOrder = (\[[\s\S]*?\]);/);
let arr = eval('(' + prioMatch[1] + ')');

const fromName = 'Pulapalli Joshua Raju';
const toName = 'Elipilli Anil Kumar';

let fromIdx = arr.findIndex(n => n.includes(fromName) || n.includes('Pulapalli Joshua'));
let toIdx = arr.findIndex(n => n.includes(toName) || n.includes('Elipilli Anil'));

if (fromIdx !== -1 && toIdx !== -1) {
    let item = arr.splice(fromIdx, 1)[0];
    toIdx = arr.findIndex(n => n.includes(toName) || n.includes('Elipilli Anil'));
    arr.splice(toIdx + 1, 0, item);

    let newPrioStr = JSON.stringify(arr, null, '\t\t').replace(/"/g, "'");
    content = content.replace(prioMatch[1], newPrioStr);
    fs.writeFileSync('src/lib/components/faculty.svelte', content);
    console.log('Reordered successfully');
} else {
    console.log('Could not find one of the names.', fromIdx, toIdx);
}
