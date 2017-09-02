/*
Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

test
*/

var romanNum = [
 [1,"I"],[10,"X"],[100,"C"]
  ];

function loadNum(num){
  console.log(num);
  console.log(romanNum);
  return romanNum.filter(function(val){
    return val[0] == num;
  });

}


loadNum(100);
