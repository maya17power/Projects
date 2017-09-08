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
  var initChar = str.charCodeAt(0);
  var charCount = [];
  console.log("string length: " + str.length);//display how many characters we are working with?
  console.log("initCharacter: " + initChar); //display the first character on the string?

  //add the init character of the string and add the length to return the correct sequence.
  for(var i = 0; i < str.length; i++){

      if(str.indexOf(String.fromCharCode(initChar + i)) == -1){
         return String.fromCharCode(initChar + i);
      }
         undefined;

  }
  console.log("character missing: " + charCount);
  var myString = String.fromCharCode(str.charCodeAt(0) + 1);

  //console.log("convert charCount: " + myString);

  // for(var j = 0; j < charCount.lenght; j++){

  // }




  // else find that character and return it.
  // otherwise if all characters found return undefined.

  //return str;
}

fearNotLetter("abce");


//fearNotLetter("abce");// should return "d".
//fearNotLetter("abcdefghjklmno");// should return "i".
//fearNotLetter("bcd");// should return undefined.
//fearNotLetter("yz");// should return undefined.
