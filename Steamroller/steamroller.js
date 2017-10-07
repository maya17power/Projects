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
  arr.forEach(function(val){
   myArr.push(Array.isArray(arr));
   //console.log("is array " + Array.isArray(val));

  });
  return myArr;
}

steamrollArray([1, [2], [3, [[4]]]]);


//steamrollArray([[["a"]], [["b"]]]);// should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]);// should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]);// should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]);// should return [1, {}, 3, 4]
