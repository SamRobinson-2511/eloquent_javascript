//9. Regular Expressions

let re1 = new RegExp("abc")
let re2 = /abc/;

let eighteenPlus = /eighteen\+/; 

//Testing for Matches
console.log(/abc/.test("abcde"))
console.log(/abc/.test("abxde")); 

//Sets of Characters
console.log(/[0123456789]/.test("in 1992")); 
