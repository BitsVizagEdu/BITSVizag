export let items = []

/**
 * @param {string} text
 */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, " ")
}