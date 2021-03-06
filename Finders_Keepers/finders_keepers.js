/*
Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.filter()

*/

function findElement(arr, func) {
  //var num = arr.filter(function(val){return func(val);})[0];//my version
  return arr.filter(func)[0];//reduced version
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


//findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })// should return 8.
//findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })// should return undefined.
