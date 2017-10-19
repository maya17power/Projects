/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object

*/

function addTogether() {//create a variable function to return number value or anything else as undefined.
var checkNumber = function(val){
  if(typeof val !== 'number'){
    return undefined;
  }else{
    return val;
  }
};

if(arguments.length > 1){//calculate for perameters greater then 1.
  var a = checkNumber(arguments[0]);//manually confirm value 0 is a number
  var b = checkNumber(arguments[1]);//manually confirm value 1 is a number
  if(a === undefined || b === undefined){//if both values are not numbers, return undefined. Otherwise add them together.
    return undefined;
  }else{
    return a+b;
  }
}else{//or else, if there is only one value;
  var c = arguments[0];//manually save the one value to variable
  if(checkNumber(c)){//check to see if the value is a number
    return function(arg2){//if it is a number return a function with arg2 perameter.
      if(c === undefined || checkNumber(arg2) === undefined){//check to see if single value variable and if perameter arg2 is not a number then return undefined. Otherwise add them together.
         return undefined;
      }else{
        return c + arg2;
      }
    };
  }
}


}

addTogether(2,3);


// addTogether(2, 3);// should return 5.
// addTogether(2)(3);// should return 5.
// addTogether("http://bit.ly/IqT6zt");// should return undefined.
// addTogether(2, "3");// should return undefined.
// addTogether(2)([3]);// should return undefined.
