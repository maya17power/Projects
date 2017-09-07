/*

DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.push()
String.prototype.split()


*/


// function pairElement(str) {
//   var count = 0;
//   var e = str.split('');
//   var base = [['A','T'],['C','G'],['T','A'],['G','C']];
//   var match = [];
//   //console.log("Current count: "+ count );
//   //console.log(base[0]);// display per letter
//   for(var i = 0; i < e.length; i++){
//     for(var j = 0; j < base.length; j++){
//         if(e[i] === base[j][0]){
//           match.push(base[j]);
//           console.log("Current count: "+ match.length );
//         }
//           console.log("no match found");
//     }//end for loop slave
//   }//end for loop master
//   console.log(match);
//   return match;
// }

function pairElement(str) {
  var count = 0;
  var e = str.split('');
  var base = [['A','T'],['C','G'],['T','A'],['G','C']];
  var match = [];
  for(var i = 0; i < e.length; i++){
      for(var j = 0; j < base.length; j++){
          if(e[i] === base[j][0]){
            match.push(base[j]);
          }
      }
  }
  return match;
}

pairElement("GCG");

//pairElement("ATCGA");// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG");// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA");// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
