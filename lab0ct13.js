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

function maxTriple(arr) {
var first = arr[0];
var last = arr[arr.length-1];
var middle = arr[(arr.length-1) / 2];
  
return Math.max (first, last, middle);

}


console.log(maxTriple([1, 2, 3]));
console.log(maxTriple([1, 5, 3]));
console.log(maxTriple([5, 2, 3]));


function swapEnds(arr) {
var first = arr.shift();
var last = arr.pop();
  arr.push(first);
  arr.unshift(last)
  return arr;

}


console.log(swapEnds([1, 2, 3, 4]));
console.log(swapEnds([1, 2, 3]));
console.log(swapEnds([8, 6, 7, 9, 5]));


function unlucky1(arr) {
if (arr[0] == 1 && arr[1] == 3) {
    return true;
}
else if (arr[1] == 1 && arr[2] == 3)  {
    return true;  
}
  
else if (arr[arr.length-2] == 1 && arr[arr.length-1] == 3)  {
    return true;  
}
  
else {
  
  return false;
}
}


console.log(unlucky1([1, 3, 4, 5]));
console.log(unlucky1([2, 1, 3, 4, 5]));
console.log(unlucky1([1, 1, 1]));

function front11(arr1,arr2) {

  var a = [];

  if (arr1.length > 0) {
    a.push(arr1.shift());
  }

  if (arr2.length > 0) {
    a.push(arr2.shift());
  }

  return a;

}

  console.log(front11([1, 2, 3], [7, 9, 8]));
  console.log(front11([1],[2]));
  console.log(front11([1, 7],[]));