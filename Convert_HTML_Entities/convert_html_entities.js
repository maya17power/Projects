/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()

*/

function convertHTML(str) {
  var enti = [34,38,39,60,62,];
  var format = "&"+val+";";
  var val = "";
  console.log(str[6].charCodeAt());
  console.log(String.fromCharCode(38));

 return  str.filter(function(val){
    return val;
  });

  //console.log(format);
  // &colon;&rpar;
  //return str;
}

convertHTML("Dolce & Gabbana");

//convertHTML("Dolce & Gabbana");// should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"');// should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Shindler's List");// should return Shindler&​apos;s List.
//convertHTML("<>");// should return &​lt;&​gt;.
//convertHTML("abc");// should return abc.
