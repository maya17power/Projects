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
  var html = {//build object with value pairs
  '\"':"&amp;",
  "\'":"&apos;",
  ">":"&gt;",
  "<":"&lt;",
  "&":"&amp;"
  };

  return str.split('').map(function(entity){//split the string and map(iterate thru values)
   return html[entity] || entity;//return entity inside html variable OR just return entity.
  }).join('');//join string back together.
}

convertHTML("Dolce & Gabbana");

//convertHTML("Dolce & Gabbana");// should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"');// should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Shindler's List");// should return Shindler&​apos;s List.
//convertHTML("<>");// should return &​lt;&​gt;.
//convertHTML("abc");// should return abc.
