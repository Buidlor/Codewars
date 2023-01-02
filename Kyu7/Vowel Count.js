// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    const vowel = ['a','e','i','o','u']
    return str.split('').filter(strele => vowel.includes(strele)).length
}