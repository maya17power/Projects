/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

*/

function smallestCommons(arr) {
  for(var i = 1; i <= 60; i++){
        if(i % 5 === 0){
      console.log(i);
    }
        if(i % 4 === 0){
      console.log(i);
    }
        if(i % 3 === 0){
      console.log(i);
    }
        if(i % 2 === 0){
      console.log(i);
    }
        if(i % 1 === 0){
      console.log(i);
    }
  }
}


smallestCommons([1,5]);


//smallestCommons([1, 5]);// should return a number.
//smallestCommons([1, 5]);// should return 60.
//smallestCommons([5, 1]);// should return 60.
//smallestCommons([1, 13]);// should return 360360.
//smallestCommons([23, 18]);// should return 6056820.