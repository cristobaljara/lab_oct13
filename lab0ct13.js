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

function has23(a){
 return (a [0]==2|| a [1]==3)||(a [1]==2|| a [0]==3);
}

var numbers = [];

console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5])); 


function fix23(a){
  for (var i = 1; i < a.length; i++) {
    if (a[i] === 3 && a[i-1] === 2) {
      a[i] = 0;
    }
  }
  return a;
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));  

