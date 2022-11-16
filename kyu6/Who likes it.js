// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//JavaScript:
function likes(names) {
  var array = [];
  array = names;
  if (array == ''){return 'no one likes this' ;}
  if (array.length == 1){return array +  ' likes this';}
  if (array.length == 2){return array.join(" and ") + " like this";}
  if (array.length == 3){return array[0] +', ' + array[1] + ' and ' + array[2] + ' like this';}
  if (array.length > 3) {return array[0] +', ' + array[1] + ' and ' + parseInt(array.length - 2)   + ' others like this'; }
  
}