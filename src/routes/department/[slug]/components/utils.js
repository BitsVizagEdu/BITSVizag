export let items = ['Department of BS&H', 'Department of CSE', 'Department of CSE (AI & ML)', 'Department of CSE (Cyber Security)', 'Department of ECE', 'Department of EEE', 'Department of CIVIL', 'Department of MECH', 'Department of MBA']

/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, " ")
}