//Chapter 5: Higher Order Functions

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);


//Abstraction
//Abstracting Repetition
for (let i = 0; i<10; i++){
  console.log(i)
}

function repeat(n, action){
  for (let i = 0 ; i < n; i++){
    action(i);
  }
}
repeat(3, console.log)
console.clear();

let labels = []; 
repeat(5, i => {
  labels.push(`Unit ${i + 1}`)
})
console.log(labels)

//Higher Order Functions
function greaterThan(n){
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));


//functions that change other functions 
function noisy(f){
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result)
  }
}
noisy(Math.min)(3,2,1);

//functions that provide new types of control flow 
function unless(test, then){
  if(!test) then()
}

repeat(3, n=>{
  unless(n % 2 == 1, () => {
    console.log(n, "is even")
  })
})

//forEach as an higher - order function
// ["A", "B"].forEach(i => console.log(i));

//Script Data Set


//Filtering Arrays
function filter(array, test){
  let passed = [];
  for (let element of array){
    if(test(element)){
      passed.pushed(element);
    }
  }
  return passed; 
}

// console.log(SCRIPTS.filter(s => s.direction == "ttb")); 
