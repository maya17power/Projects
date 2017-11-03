/*
Validate US Telephone Numbers
Return true if the passed string is a valid US phone number.

The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

We can use special selectors in Regular Expressions to select a particular type of value.

One such selector is the digit selector \d which is used to retrieve one digit (e.g. numbers 0 to 9) in a string.

In JavaScript, it is used like this: /\d/g.

Appending a plus sign (+) after the selector, e.g. /\d+/g, allows this regular expression to match one or more digits.

The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.

Instructions
Use the \d selector to select the number of numbers in the string, allowing for the possibility of one or more digit.

RegExp /\d+/g;
.match()

Relevant Links

RegExp353
regexpal.com697
regex101.com/534

^ denotes the beginning of the string (1\s?)? checks allows for a “1” or a "1 " at the beginning.
\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 a”).
Lastly we use regex.test(str) to test if the string adheres to the regular expression and return true or false.


regexObj.test(str) //true if there is a match between the regular expression and the specified string; otherwise, false.


*/


function telephoneCheck(str) {
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
   return regex.test(str);
}


//telephoneCheck("555-555-5555");


//telephoneCheck("555-555-5555");// should return a boolean.
//telephoneCheck("1 555-555-5555");// should return true.
// telephoneCheck("1 (555) 555-5555");// should return true.
// telephoneCheck("5555555555");// should return true.
// telephoneCheck("555-555-5555");// should return true.
// telephoneCheck("(555)555-5555");// should return true.
// telephoneCheck("1(555)555-5555");// should return true.
//telephoneCheck("555-5555");// should return false.
//telephoneCheck("5555555");// should return false.
//telephoneCheck("1 555)555-5555");// should return false.
// telephoneCheck("1 555 555 5555");// should return true.
// telephoneCheck("1 456 789 4444");// should return true.
// telephoneCheck("123**&!!asdf#");// should return false.
// telephoneCheck("55555555");// should return false.
 telephoneCheck("(6505552368)");// should return false
// telephoneCheck("2 (757) 622-7382");// should return false.
// telephoneCheck("0 (757) 622-7382");// should return false.
// telephoneCheck("-1 (757) 622-7382");// should return false
// telephoneCheck("2 757 622-7382");// should return false.
// telephoneCheck("10 (757) 622-7382");// should return false.
// telephoneCheck("27576227382");// should return false.
// telephoneCheck("(275)76227382");// should return false.
// telephoneCheck("2(757)6227382");// should return false.
// telephoneCheck("2(757)622-7382");// should return false.
// telephoneCheck("555)-555-5555");// should return false.
// telephoneCheck("(555-555-5555");// should return false.
// telephoneCheck("(555)5(55?)-5555");//
