/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()
*/


// function uniteUnique(arr) {
//   var myArr = [];
//   var count = 0;
//   var end = "";
//   while(end === ""){//look thur all arrays and combine them to one array
//     if(arguments[count] !== undefined){
//         myArr.push(arguments[count]);
//         count++;
//     }else{
//             end = undefined;
//          }
//   }  //during combination/reduce, filter out the duplicates
//  var merge =  myArr.reduce(function(a,b){
//         return a.concat(b);
//   });
//   var reverseCount = -1;
//   console.log(merge.slice(-1) == merge[0]);
  // if(merge.slice(-1) == merge[0]){
  //   myArr.pop(merge.slice(-1));
  // }
  //   reverseCount - 1;
  //console.log(reverseCount -= 1);

  // for(var i = 0; i < myArr.length; i ++){
  //   if(){

  //   }
  // }
  // return myArr.reduce(function(a,b){
  //       return a.concat(b);
  // });

//}


function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);




}



uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);// should return [1, 3, 2, 5, 4].
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);// should return [1, 3, 2, [5], [4]].
//uniteUnique([1, 2, 3], [5, 2, 1]);// should return [1, 2, 3, 5].
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);// should return [1, 2, 3, 5, 4, 6, 7, 8].
