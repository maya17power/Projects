/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt() //'ABC'.charCodeAt(0); // returns 65
String.fromCharCode() //String.fromCharCode(65, 66, 67);  // returns "ABC"


*/

function fearNotLetter(str) {
  console.log(str.length);//display how many characters we are working with?
  console.log(str.charCodeAt(0)); //display the first character on the string?
  //if you add +1, it should be the character in synch with alphabet.
  // else find that character and return it.
  // otherwise if all characters found return undefined.

  //return str;
}

fearNotLetter("abce");


//fearNotLetter("abce");// should return "d".
//fearNotLetter("abcdefghjklmno");// should return "i".
//fearNotLetter("bcd");// should return undefined.
//fearNotLetter("yz");// should return undefined.
