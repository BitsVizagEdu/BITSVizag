export let items = [
    'About-ABWEC',
    'About-BITS',
    'Message-from-Secretary-&-Correspondent',
    'Message-from-Principal'
];

/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, ' ');
}