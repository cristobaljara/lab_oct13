function rotateLeft3(word){
  var first = word.shift();
  word.push(first);
  
  return word;
}

var numbers = [];
var abc  = rotateLeft3(numbers);

console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));  


function reverse3(word){
  return word.reverse();

}

var numbers = [];
var abc  = reverse3(numbers);

console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));  

