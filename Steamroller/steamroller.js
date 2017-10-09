/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var myArr = [];
  var i = 0;
  var current = 0;
  var myFilter = /[0-9]/g;
  console.log(arr[3]);
  console.log(Array.isArray(arr[3]));
  //myArr.push(arr[0]);

  myArr = arr.map(function(task, index, array){
    return task[1];
  });

  return myArr;
}

steamrollArray([1, [2], [3, [[4]]]]);


//steamrollArray([[["a"]], [["b"]]]);// should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]);// should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]);// should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]);// should return [1, {}, 3, 4]
