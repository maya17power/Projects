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
  var myStr = str.split('');
  var enti = [['"',"&amp; "],["'","&apos; "],[">","&gt;"],["<","&lt;"],["&","&amp;"]];
  //var e = str.split('');
  var match;
  for(var i = 0; i < str.length; i++){
      for(var j = 0; j < enti.length; j++){
          if(str[i] === enti[j][0]){
            console.log(str[i]);
            match = str.replace(str[i],enti[j][1]);
          }
      }
  }
  return match;
}

convertHTML("Dolce & Gabbana");

//convertHTML("Dolce & Gabbana");// should return Dolce &​amp; Gabbana.
//convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
//convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
//convertHTML('Stuff in "quotation marks"');// should return Stuff in &​quot;quotation marks&​quot;.
//convertHTML("Shindler's List");// should return Shindler&​apos;s List.
//convertHTML("<>");// should return &​lt;&​gt;.
//convertHTML("abc");// should return abc.
