/*
Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
string.prototype.substring() // is similar to slice(), substring() can go backwards were slice() cannot.
String.prototype.substr() // substr second perameter is the move up count for example: substr(10,4) 4 is the number of characters it will move up from 10th position starting from 0.
String.prototype.split()
Run tests (ctrl + enter)


*/
function translatePigLatin(str) {
   var word = str.split('');
   var vowel = ["a","e","i","o","u"];
   var nonVowel = [];
   var moveNonVowel = [];

   if(vowel.indexOf(word[0]) != -1){
     return str + "way";
   }

   for(var i = 0; i <= 3; i++){
     if(vowel.indexOf(word[i]) === -1){
       nonVowel.push(word[i]);
     }
       console.log("found");
   }

   for(var j = 0; j < nonVowel.length; j++){
       if(nonVowel[j] == word[j]){
          moveNonVowel.push(nonVowel[j]);
       }
   }

   return str.substr(moveNonVowel.length) + moveNonVowel.join('') + "ay";

}

//translatePigLatin("consonant");


//translatePigLatin("california"); //should return "aliforniacay".
//translatePigLatin("paragraphs"); //should return "aragraphspay".
//translatePigLatin("glove"); //should return "oveglay".
//translatePigLatin("algorithm"); //should return "algorithmway".
translatePigLatin("eight"); //should return "eightway".
