// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {  
    return s.replace(/!/g,"");  //regex ! out using the global flag (/g)
}