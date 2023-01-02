// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
    // your code here
    return cap >= on + wait ?  0 : (on + wait) - cap
  }