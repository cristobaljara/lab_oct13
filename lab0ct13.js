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


function isEverywhere(arr,b) {
if (arr[0]==b){
  
    for (var i = 0; i < arr.length; i++) {
    if (i%2==0 && arr[i]!==b) {
        return false;
      
      }
  }
  
  
}
  
 if (arr[1]==b){
  
    for (var i = 0; i < arr.length; i++) {
    if (i%2==1 && arr[i]!==b) {
        return false;
      
      }
  }
  
  
} 
  return true;


}

  console.log(isEverywhere([1, 2, 1, 3], 1)); 
  console.log(isEverywhere([1, 2, 1, 3], 2));
  console.log(isEverywhere([1, 2, 1, 3, 4], 1));
  console.log(isEverywhere([1, 1, 1, 1], 1));
  console.log(isEverywhere([3, 1, 8, 1], 1));

  function tenRun(arr) {
  var j = null
  
    for (var i = 0; i < arr.length; i++) {
        
        if(arr[i]%10==0){
          
         j=(arr[i]); 

        }
        else if (j != null){
          
          arr[i]= j;
          
        }      
      }
  
  return arr;
}

  console.log(tenRun([2, 10, 3, 4, 20, 5])); 
  console.log(tenRun([10, 1, 20, 2])); 
  console.log(tenRun([10, 1, 9, 20])); 



function shiftLeft(word){
  return word.slice(1).concat(word[0])
}

console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1])); 


function evenOdd(arr){

var a = [];
var b = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {

      a.push(arr[i])

    }

    else{

      b.push(arr[i])  
    }

  }

  return a.concat(b);

}

console.log(evenOdd([1, 0, 1, 0, 0, 1, 1]) )
console.log(evenOdd([3, 3, 2]) )
console.log(evenOdd([2, 2, 2]) )


function fizzBuzz(a,b){

  var arr = []

  for (var i = a; i < b; i++) {

      if (i%3==0&&i%5==0) {

        arr.push("FizzBuzz")
      }else if (i%3==0) {
        arr.push("Fizz")
      }else if (i%5==0) {
        arr.push("Buzz")
      }else  {
        arr.push(i)
      }
  }

return arr;

}

console.log(fizzBuzz(1,6))
console.log(fizzBuzz(1,8))
console.log(fizzBuzz(1,11))x