// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 10: FUNCTIONS


const input = require('readline-sync');

// TODO: After defining the function below, call it here
sayHello("Terri");

// TODO: Define a function to say hello
function sayHello(firstName) {
    console.log(`Hello, ${firstName}`);
}

// TODO: Write a function that returns a string that will describe one or more enemies
// Allow for a specific action verb
function describeEnemies(enemyType, numEnemies, actionVerb) {
    if (numEnemies > 1) {
        enemyType = `group of ${numEnemies} ${enemyType}s`;
    }
    return `A ${enemyType} is ${actionVerb} nearby`;
}

// TODO :Call describeEnemies with real values (arguments) and print the return value
console.log(describeEnemies("goblin", 1, "snarling"));
console.log(describeEnemies("techtite", 3, "hopping around"));

// TODO: Store a description in a variable and then print it
let octoDesc = describeEnemies("octorock", 4, "spitting rocks");
console.log(octoDesc);


let inventory = [];

// TODO: Write a function that adds an item to Link's inventory and announces it

function addItemToInventory(item) {
    inventory.push(item);
    console.log(`Link now has a ${item}!`);
}

// TODO: Add a sword and a shield to inventory, then print the inventory array
addItemToInventory("sword");
addItemToInventory("shield");
console.log(inventory);

// TODO: Get the player name from the user in the console
let player = input.question("Please enter your name: ");

// TODO: Write a function to greet the player with a message that can change
function greetPlayer(message) {
    let greeting = `${message}, ${player}!`
    console.log(greeting);
}

// TODO: Call the function and pass in a message 
greetPlayer("Good morning");

// TODO: Check the scope of player
console.log(player);

// TODO: Check the scope of message and greeting
//console.log(message);
//console.log(greeting);

let name = "Zelda";

// TODO: Write a function to print a sentence when you first encounter a character
// Use a parameter, name

function announceCharacter(name) {
    let introduction = `You meet ${name} as you walk through the door`;
    console.log(introduction);
}
// TODO: Call the function with the variable name as the argument
announceCharacter(name);

// TODO: Call the function with a hard-coded string
announceCharacter("Ganon");

// TODO: Print the variable name
console.log(name);1