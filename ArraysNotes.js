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