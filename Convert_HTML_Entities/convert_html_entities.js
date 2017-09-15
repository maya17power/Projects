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
  var enti = [34,39,60,62,];
  var format = "&"+val+";";
  var val = "";
  console.log(String.fromCharCode(enti[0]));

  console.log(format);

  //var strFilter = str.replace(,);

  for(var i = 0; i < str.length; i++){
    console.log(str[i]);
  }
}

convertHTML("Dolce & Gabbana");

//convertHTML("Dolce & Gabbana");// should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"');// should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Shindler's List");// should return Shindler&​apos;s List.
//convertHTML("<>");// should return &​lt;&​gt;.
//convertHTML("abc");// should return abc.
