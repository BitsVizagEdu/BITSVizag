/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    if (!text) return '';
    return text.replace(/-/g, ' ');
}
