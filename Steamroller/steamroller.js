/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

*/

function steamrollArray(arr) {
  var myArr = arr.reduce(function(a, b){
    return a.concat(Array.isArray(b) ? steamrollArray(b) : b);
  },[]);
  return myArr;
  // I'm a steamroller, baby
}

steamrollArray([1, [2], [3, [[4]]]]);


//steamrollArray([[["a"]], [["b"]]]);// should return ["a", "b"].
//steamrollArray([1, [2], [3, [[4]]]]);// should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]);// should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]);// should return [1, {}, 3, 4]
