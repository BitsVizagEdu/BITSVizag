export let items = [
    'About-AEWS',
    'About-BITS',
    'Message-from-Secretary-&-Correspondent',
    'Message-from-Principal'
];

/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, ' ');
}