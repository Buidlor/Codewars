// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) { 
    let error = 0
    for(i=0; i<=s.length; i++){
      s.charCodeAt(i) < 97 || s.charCodeAt(i) > 109 ? error++:0 
    }
   return error + "/" + s.length
  }