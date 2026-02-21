export let items = ['Under-Graduation', 'Post-Graduation']

/**
 * @param {string} text
 */
export function replaceHyphenWithSpace(text) {
    return text.replace(/-/g, " ")
}