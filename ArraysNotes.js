// ACCESSING ELEMENTS
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0]
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// UPDATE ELEMENTS
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados'
console.log(groceryList);
// OUTPUT [ 'bread', 'avocados', 'milk' ]

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);
// OUTPUT: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]
// [ 'Mayo' ]
// [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// .length Property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
// output: 3

// push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('shovel','clean');
console.log(chores);
// OUTPUT:[ 'wash dishes',
//   'do laundry',
//   'take out trash',
//   'shovel',
//   'clean' ]

// pop()
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores)
// OUTPUT: [ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

// more Array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
// groceryList.slice([0,1,2]);
console.log(groceryList.slice(1, 4));
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);