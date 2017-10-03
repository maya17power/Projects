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
  var quot = 0;
  var loop = 1;
  var n;
  var myArr = [];

    arr.sort(function(a,b){
      return b-a;
    });

    for(var i = arr[0]; i >= arr[1]; i--){
      myArr.push(i);
    }

    do{
      quot = myArr[0] * loop * myArr[1];
    }while();

}


smallestCommons([1,5]);


//smallestCommons([1, 5]);// should return a number.
//smallestCommons([1, 5]);// should return 60.
//smallestCommons([5, 1]);// should return 60.
//smallestCommons([1, 13]);// should return 360360.
//smallestCommons([23, 18]);// should return 6056820.
