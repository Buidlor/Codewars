// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

JavaScript:
function duplicateEncode(word){
  var answ = '';
  
  for (let i = 0; i < word.length; i++){
    var n= 0;
    for (let j = 0; j < word.length; j++){
      if (word[i].toLowerCase() == word[j].toLowerCase()){
        n++;
      }
    }
    if (n > 1){
      answ = answ +')';
    }
    else{ answ = answ + '(';}
      
  }
  return answ;
  
}