// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  
    let array = []
    let concated = text.toLowerCase().split(' ').join('')
  
    for(i=0; i<= concated.length-1; i++){
     concated.charCodeAt(i)-96 > 0 && concated.charCodeAt(i)-96 < 27 ? array.push(concated.charCodeAt(i)-96) : 0
    }
    return array.join(' ')
  }