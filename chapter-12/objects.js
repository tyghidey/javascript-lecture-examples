// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 12: OBJECTS

/* 
	This is the STARTER CODE. Use this to code along with the lecture recording or just practice. You can switch to the solution branch if you want to reference the final code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** THE JAVASCRIPT OBJECT **/

/* A Data Structure */

// Create an object to represent the pirate flag. Give it a name, color, and description of the image.


// Print the object to see its keys and values


/** ACCESSING OBJECT PROPERTIES */

/* Using a Key to Access a Value */

// Print the name using bracket notation

// Print the color using dot notation

// Print a template literal that describes the flag using all three properties — use a mix of bracket notation and dot notation



/** MODIFYING OBJECTS **/

/* Reassigning a Value to an Existing Key */

let blackPearl = {
	name: "Black Pearl",
	captain: "Jack Sparrow",
	crew: "pirates"
};

// Update the data when Barbossa and the crew mutiny and steal the gold

// Change the captain using dot notation

// Replace the crew using bracket notation

// Print the object to see the updated value


/* Adding a New Key-Value Pair to an Object */

let interceptor = {
	name: "Interceptor",
};

// After Jack and Will steal the ship from the Royal Navy and sail to Tortuga, the Interceptor has a new captain and crew.

// Use dot notation to add the new captain

// Use bracket notation to add a description of the new crew

// Print the object to see the new properties


/** OBJECT METHODS **/

/* Referencing an Existing Function */

function setSail() {
	console.log("Weigh anchor! Hoist the sails! Split-quick, you dibbies!");
}

// Add a property "sail" to the Interceptor, and assign the setSail function as a method 

// Print the ship object to show the new property

// Call the method on one of the ships
// NOTE: You MUST use DOT notation for calling methods

// What happens if you use the original function name instead of the key?


/* Defining an Anonymous Function */

let phrases = [
	"Wind in yer sails",
	"Dead men tell no tales",
	"Shiver me timbers",
	"Walk the plank",
	"Uh-oh. Fire in the hole!",
	"Any port in a storm"
];

// Create an object for Cotton's parrot with its owner's name, species and a method called "speak" which will print a random phrase from the array above


// Call the speak method three times



/* The this Keyword */

// Add a property called "describe" to the Black Pearl object and define an anonymous function that prints a description of the ship with its name, crew, and captain


// Print the object to see the new method

// Call the method


/** ITERATING THROUGH OBJECT KEYS **/

/* The for...in Loop */

let elizabeth = {
	firstName: "Elizabeth",
	lastName: "Swann",
	jewelry: "gold medallion",
	likes: ["Will Turner", "breathing"],
	dislikes: ["Captain Barbossa", "corsets"]
}

// Use a for...in loop to print the keys and values together in a template literal
// NOTE: you MUST use bracket notation when the key is a variable



/** OBJECTS STORING OTHER DATA STRUCTURES **/

/* Objects Storing Arrays */

// Print each of Elizabeth's likes and dislikes
// Assume the two arrays have the same length



/* Objects Storing Objects */

let barbossa = {
	name: "Hector Barbossa",
	ship: "The Black Pearl",
	pet: {
		name: "Jack",
		species: "capuchin monkey"
	}
}

// Print the monkey's name

// Loop through Barbossa's pet's keys and print both values



/** WORKING WITH AN ARRAY OF OBJECTS **/

let gibbs = {
	name: "Joshamee Gibbs",
	position: "first mate"
}
let anamaria = {
	name: "Anamaria",
	position: "sailor"
}
let cotton = {
	name: "Cotton",
	position: "sailor"
}
let ragetti = {
	name: "Ragetti",
	position: "sailor"
}

// Store all four crew members in an array

// Print the new array

// Print the names and positions of all members in motleyCrew
