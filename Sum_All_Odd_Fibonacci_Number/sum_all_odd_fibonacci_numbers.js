/*
Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder
*/


function sumFibs(num) {
var a= 1;
var b= 0;
var temp;
var fc = [];
var myNum = num;
var mySum;
  while(num >= 0){
    temp = a;
    a = a+b;
    b = temp;
    num--;
    fc.push(temp);
  }

 return fc.filter(function(val){
    if(val <= myNum && val % 2){
     return val;
    }
  });
}

sumFibs(4);



//sumFibs(1);// should return a number.
//sumFibs(1000);// should return 1785.
//sumFibs(4000000);// should return 4613732.
//sumFibs(4);// should return 5.
//sumFibs(75024);// should return 60696.
//sumFibs(75025);// should return 135721.
