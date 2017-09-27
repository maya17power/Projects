/*

Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
*/

function sumPrimes(num) {
  var p = [];
  for(var i = 0; i <= num; i++){
    if((i) !== 1 && (i % 2) !==  0 && (i % 3) !== 0){
      console.log(i);
    }
  }
}

sumPrimes(10);


//sumPrimes(10);// should return a number.
//sumPrimes(10);// should return 17.
//sumPrimes(977);// should return 73156.
