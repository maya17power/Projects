/*

Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()
(i % Number) !== 0



*/

function sumPrimes(max) {
  var sieve = [];
  var i;
  var j;
  var primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes.reduce(function(previous, current){
    return previous + current;
  },0);
}

sumPrimes(10);


//sumPrimes(10);// should return a number.
//sumPrimes(10);// should return 17.
//sumPrimes(977);// should return 73156.
