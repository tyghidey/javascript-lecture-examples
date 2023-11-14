// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 16: MORE ON TYPES

/* 
	This is the STARTER CODE. Use this to code along with the lecture recording or just practice. You can switch to the solution branch if you want to reference the final code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/* Primitives */

let boy = "Andy";
let age = 6;
let hasBabySister = true;

let favoritePizzaPlace = null;
let favoriteIceCream;

function printValueAndType(data) {
	console.log("\nValue: " + data);
	console.log("Type: " + typeof data);
}

// TODO: Call the function for each variable above


/* Data Structures */

let toyNames = ["Hamm", "Slinky Dog", "Wheezy"];

let neighborKid = {
	firstName: "Sid",
	lastName: "Phillips",
	pastime: "torturing toys"
};

// TODO: Call the function to print the value and type of the array and object


/* Null and Undefined */

function playGame() {
	console.log("Hey, this is fun!");
}

let pizzaPlanet = {
	food: "pizza",
	drink: "soda",
	doesDeliveries: true,
	videoGames: null,
  // TODO: add play method
}

// TODO: Print the videoGames property

// TODO: Print a nonexistent property of pizzaPlanet, hours

// TODO: Call the play method
