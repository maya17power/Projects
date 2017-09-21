/*
Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()

*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var filter = /[_\s]/g;//find any underscore and spaces on entire string "g".
  var filter2 = /\s+|_+/g;//find all spaces \s+ and all underscores \_+
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(filter2,'-').toLowerCase();

}

spinalCase('This Is Spinal Tap');


//spinalCase("This Is Spinal Tap");// should return "this-is-spinal-tap".
//spinalCase("thisIsSpinalTap");// should return "this-is-spinal-tap".
//spinalCase("The_Andy_Griffith_Show");// should return "the-andy-griffith-show".
//spinalCase("Teletubbies say Eh-oh");// should return "teletubbies-say-eh-oh".
//spinalCase("AllThe-small Things");// should return "all-the-small-things".
