
//defining a function
const square = function(x){
  return x*x;
}
console.log(square(12))

const makeNoise = function(){
  console.log('Pling!')
}
makeNoise();

const power = function(base, exponent){
  let result = 1; 
  for(let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}
console.log(power(2,10))


//bindings and scope
let x = 10; 
if (true){
  let y = 20; 
  var z = 30;
  console.log(x + y + z);
}
console.log(x+z)

const halve = function(n){
  return n/2;
}
let n = 10;
console.log(halve(100))
console.log(n)

//nested scope
const hummus = function(factor){
  const ingredient = function(amount, unit, name){
    let ingredientAmount = amount * factor;
    if(ingredientAmount > 1){
      unit += "s";
    };
    console.log(`${ingredientAmount} ${unit} ${name}`)
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}
console.log(hummus(1))

//functions as values 
console.clear()

// let launchMissiles = function() {
//   missileSystem.launch("now");
// }
// if(safeMode){
//   launchMissiles = function(){/* do nothing */}
// }

//declaration notation 
function square1(x) {
  return x * x; 
}

console.log("The future says:", future())

function future(){
  return "You'll never have flying cars";
}


//arrow functions 
const power1 = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++ ){
    result *= base;
  }
  return result;
}
console.log(power1(2, 10))

const square2 = (x) => { return x * x }; 
const square3 = x => x * x;

const horn = () => {
  console.log("Toot")
}
horn();

//the call stack 
function greet(who){
  console.log("hello " + who);
}
greet("Harry");
console.log("Bye");

//optional arguments 
function square4(x){return x*x}
console.log(square4(4, true, 'hedgehog'));

function minus(a, b){
  if(b===undefined) return -a;
  else return a - b;
}
console.log(minus(6))

function power2(base, exponent = 2){
  let result = 1;
  for (let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}
console.log(power2(4));
console.log(power(2, 6));

console.log("C", "O", 2);


//closure 
function wrapValue(n){
  let local = n;
  return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());


function multiplier(factor){
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));


//recursion
function power2(base, exponent){
  if(exponent == 0){
    return 1;
  } else {
    return base * power(base, exponent -1);
  }
}

console.log(power(2, 3));


function findSolution(target){
  function find(current, history){
    if(current == target){
      return history;
    } else if(current > target){
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`)
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));


//growing functions 
function printFarmInventory(cows, chickens){
  let cowString = String(cows);
  while(cowString.length < 3){
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens)
  while(chickenString.length < 3){
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label){
  let numberString = String(number);
  while(numberString.length < 3){
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory1(cows, chickens, pigs){
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory1(7, 11, 3);


function zeroPad(number, width){
  let string = String(number);
  while (string.length < width){
    string = "0" + string;
  }
  return string;
}

function printFarmInventory2(cows, chickens, pigs){
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(8, 8, 10);

//functions and side effects
