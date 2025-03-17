//9. Regular Expressions

let re1 = new RegExp("abc")
let re2 = /abc/;

let eighteenPlus = /eighteen\+/; 

//Testing for Matches
console.log(/abc/.test("abcde"))
console.log(/abc/.test("abxde")); 

//Sets of Characters
console.log(/[0123456789]/.test("in 1992")); 
console.log(/[0-9]/.test("in 1992"))

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"))
console.log(dateTime.test("30-jan-2003 15:20"))

let notBinary = /[^01]/; 
console.log(notBinary.test("101001000100010"))
console.log(notBinary.test("10002000101001"))

//Repeating Parts of a Pattern
console.log(/'\d+'/.test(" '123' ")); 
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test(" '' "));

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour")); 
console.log(neighbor.test("neighbor")); 

let dateTime1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/; 
console.log(dateTime1.test("1-30-2003 8:45"));

//Grouping Subexpressions
let cartoonCrying = /boo+(hoo+)+/i; 
console.log(cartoonCrying.test("Boohoooohoohooo")); 


