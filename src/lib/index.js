/** 
 * Takes an array and a prefix and creates a prefixed string with those elements from the array wrapped in quotes
 */
const makeTypes=  (arr = []) => arr.map(e => `'${e}'`).join(' | ').replace(/\./g, '')
/**
 * matches css class selectors for example .block
 * @param {string} str 
 */
const getSelectors = (str = '') => str.match(/\.\w+/g)
const pipe = (...fns) => (value) => fns.reduce((output, fn)=> fn(output), value)
module.exports = {
    makeTypes,
    getSelectors,
    pipe
}