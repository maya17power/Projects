const myArray = ['a','a','b','c','d','e','e'];

console.log("original array " + myArray);

const removeDup = new Set(myArray);

console.log("using just Set data object " + removeDup);
console.log("next step is to convert it back to array by using spread operator ... ");

const convertToArray = [...removeDup];
console.log("After using spread opeator to convert object to array " + convertToArray);

console.log("example using Array.from " + Array.from(new Set(myArray)));


First, we are creating a new Setby passing an array. Because Setonly allows unique values, all duplicates will be removed.
const uniqueSet = new Set(found);
console.log(found);

Now the duplicates are gone, we’re going to convert it back to an array by using the spread operator ...
const backToArray = [...uniqueSet];
console.log(found);

Alternatively, you can also use Array.from to convert a Set into an array:
Array.from(new Set(found));
console.log(found);
