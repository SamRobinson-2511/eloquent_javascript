//Chapter 8: Bugs and Errors
// "use strict"; 
//Language
//Strict Mode 
function canYouSpotTheProblem(){
  "use strict"; 
  for (let counter = 0; counter < 10; counter++){
    console.log("Happy Happy")
  }
}
canYouSpotTheProblem(); 

function Person(name){this.name=name}
let ferdinand = Person("Ferdinand"); 
console.log(name);

//Types

