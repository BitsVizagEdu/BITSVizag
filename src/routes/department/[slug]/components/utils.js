export let items = [
    'Department of CSE',
    'Department of CSE (AI & ML)',
    'Department of CSE (Cyber Security)',
    'Department of ECE',
    'Department of EEE',
    'Department of MECH',
    'Department of BS&H'
]

/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, " ")
}