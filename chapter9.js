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


//Matches and Groups 
let match = /\d+/.exec("one two 100");
console.log(match); ;
console.log(match.index); 

console.log("one two 100".match(/\d+/)); 

let quotedText = /'([^']*)'/; 
console.log(quotedText.exec("she said 'hello'")); 

console.log(/bad(ly)?/.exec("bad")); 
console.log(/(\d)+/.exec("123")); 

//The Date Class
console.log(new Date()); 
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); 

console.log(new Date(2013, 11, 19).getTime()); 
console.log(new Date(138740760000000))

function getDate(string){
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day)
}
console.log(getDate("1-30-2003")); 
console.log(/cat/.test("concatenate")); 
console.log(/\bcat\b/.test("concatenate")); 


//Choice Patterns
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); 
console.log(animalCount.test("15 pigchickens")); 

//The Mechanics of Matching
