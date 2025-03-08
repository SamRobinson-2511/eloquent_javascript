let total = 0, count = 1;
while (count <= 10){
  total += count;
  count += 1;
}
console.log(total)

function factorial(n){
  if(n==0){
    return 1;
  } else {
    return factorial(n-1)*n;
  }
}
console.log(factorial(8));

//Chapter 1: Values, Types, and Operators
//Chapter 2: Program Structure
let caught = 5 * 5;
console.log(caught)

let ten = 10;
console.log(ten*ten);

let mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35; 
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one+two);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

//return values
console.log(Math.max(2,4))
console.log(Math.min(2, 4)+100);

//control flow
// let theNumber = Number(prompt("Pick a number"))
// console.log("Your number is the square root of " + theNumber * theNumber);

//conditional execution 
// let theNumber = Number(prompt("Pick a number"))
// if(!Number.isNaN(theNumber)){
//   console.log("Your number is the square root of " + theNumber * theNumber)
// }
if (1 + 1 == 2) console.log("It's true");

// let theNumber = Number(prompt("Pick a number"));
// if(!Number.isNaN(theNumber)){
//   console.log("Your number is the square root of " + theNumber*theNumber)
// } else {
//   console.log("Hey. Why didn't you give me a number?")
// }

// let num = Number(prompt("Pick a number")); 
// if(num < 10){
//   console.log("Small");
// } else if (num < 100){
//   console.log("Medium")
// } else {
//   console.log("Large")
// }

//while and do loops
// let number = 0;
// while (number <= 12){
//   console.log(number);
//   number = number + 2;
// }

let result = 1; 
let counter = 0;
while (counter < 10){
  result = result * 2;
  counter = counter + 1;
}
console.log(result);


// let yourName; 
// do {
//   yourName = prompt("Who are you?")
// } while (!yourName);
// console.log(yourName)

if (false != true){
  console.log("That makes sense");
  if(1 < 2){
    console.log("No surprise there.")
  }
}

//for loops
for (let number = 0; number <= 12; number = number +2){
  console.log(number);
}

let result1 = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
  result1 = result1 * 2;
}
console.log(result1);

//breaking out of a loop
for (let current = 20; ;current = current + 1){
  if (current % 7 == 0){
    console.log(current);
    break;
  }
}

//updating bindings succinctly 
// for (let number = 0; number <= 12; number += 2){
//   console.log(number)
// }

// //switch 
// switch(prompt("What is the weather like?")){
//   case "rainy":
//     console.log("Remember to bring an umbrella");
//     break;
//   case "sunny":
//     console.log("Dress lightly");
//   case "cloudy":
//     console.log("Go outside");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }

//looping a triangle 

for (let triangle = "#"; triangle.length <= 7; triangle += "#"){
  console.log(triangle)
}

console.log(Array(7).fill().map((_, i) => "#".repeat(i + 1)).join('\n'));


//fizzbuzz
for (let i = 1; i <= 100; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log("FizzBuzz");
  } else if (i%3==0){
    console.log("Fizz");
  } else if (i%5 == 0){
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//chess board
console.clear();