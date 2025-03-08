//Data Structures: Objects and Arrays


//Data Sets
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]); 
console.log(listOfNumbers[0]); 
console.log(listOfNumbers[2 - 1]); 

//Properties
//Methods
let doh = "Doh"; 
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());


let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence); 
console.log(sequence.pop());
console.log(sequence);

//Objects
let day1 = {
  squirrel: false, 
  events: ['work', 'touched tree', 'pizza', 'running']
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
  work: "Went to work", 
  "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys({x: 0, y: 0, z:2}));

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

// let journal = [
//   {events: ['work', 'touched tree', 'pizza', 'running', 'television'], 
//   squirrel: false}, 
//   {events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], 
//    squirrel: false}, 
//   {events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'], 
//    squirrel: true}
// ];

//Mutability
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

//The Lycanthrope's Log

let journal = [];
function addEntry(events, squirrel){
  journal.push({events, squirrel});
};

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

//Computing correlation   
function phi(table){
  return (table[3] * table[0] - table[2] * table[1]) / 
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) * 
              (table[0] + table[2]));
};
console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal){
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++){
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
};

console.log(tableFor("pizza", journal));