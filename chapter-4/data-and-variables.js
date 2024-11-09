// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 4: DATA & VARIABLES


/**** DATA TYPES ****/

/* THE STRING */

// TODO: Change the values for each string
// Remember that quotes within a quote require using single quotes
let emptyString = ""; // no characters
let space = " "; // space only
let zeeOrZed = "z"; // single letter
let farmBoy = "Westley"; // single word
let manInBlack = "Dread Pirate Roberts"; // multiple words
let memorableQuote = 'Inigo said, "Hello, My name is....."'; // quotes inside quotes
let rottenTomatoesScore = "97"; // numbers, but as a string

console.log(memorableQuote);

/* THE NUMBER */

// TODO: Change the values for each number
let numberOfOutlaws = 3; // integer
let mostlyDead = 0.985; // decimal
let energyLevelAfterRevival = -86; // negative


/**** PRINTING TO THE CONSOLE ****/

// TODO: print a string, then print a number

// TODO: Use the command 'node data-and-variables.js' (without quotes) in the terminal to see the output


/* FORMATTING */

// TODO: Add newline and tag characters to format an indented list
// Un-comment the next line before running the program again
console.log('\nFezzik & Inigo: \n\t"That Vizzini, he can fuss." \n\t"I think he like to scream at us." \n\t"Probably he means no harm." \n\t"He\'s really very short on charm."');

/**** DETECTING TYPES & CONVERTING DATA ****/

/* DETECTING TYPES */

// TODO: Print the type of a string of characters to the console
console.log(typeof "ROUS");
// TODO: Print the type of a negative number to the console
console.log(typeof -2);

/* CONVERTING DATA */

// TODO: Convert 4 to a string and print the result, then verify the type
console.log(String(4));
console.log(typeof  String(4));

// TODO: Convert "10000" to a number and print the result, then check the type

console.log(Number("10000"));
console.log(typeof Number("10000"));

// TODO: Try to convert "Humperdinck" to a number and print the result, then check the type
console.log(Number("Humperdinck"));
console.log(typeof Number("Humperdinck"));

/**** THE VARIABLE ****/

// TODO: Declare & initialize a string variable, then print it
let vizziniPhrase = "Inconceivable!";
console.log(vizziniPhrase);

// TODO: Declare & initialize a number variable, then print it
let numberOfTimesSpoken = 3;
console.log(numberOfTimesSpoken);

// TODO: Give the newest variable a new value, then print it
numberOfTimesSpoken = 5;
console.log(numberOfTimesSpoken);

// TODO: Declare another variable and then print before initializing:
let inigoResponse;
console.log(inigoResponse); // gives us undefined

// TODO: Initialize the variable, then print it again:
inigoResponse = "You keep using that word. I do not think it means what you think it means.";
console.log(inigoResponse);

/**** THE CONSTANT ****/

// TODO: Declare and initialize a constant
// Use the allcaps underscore naming convention
const MOVIE_TITLE = "The Princess Bride"; 
console.log(MOVIE_TITLE);

// TODO: Try to assign a new value to the constant. 
// What happens when you run the program?
//MOVIE_TITLE = "Some other title"; --> not allowed will cause error
console.log(MOVIE_TITLE);
// Comment out the line so we won't keep seeing the error


/**** WHAT'S IN A NAME? *****/

// These are not great choices for variable names. 
let book = 'The Princess Bride: S. Morgenstern\'s Classic Tale of True Love and High Adventure, The "Good Parts" Version';
let name = "William Goldman";
let type = "adventure";
let kind = "hardcover";
let books = 10;

// TODO: Declare new variables for the values above
// They should be descriptive, specific and obvious about data type
let bookTitle = 'The Princess Bride: S. Morgenstern\'s Classic Tale of True Love and High Adventure, The "Good Parts" Version';
let bookAuthor = "William Goldman";
let bookGenre = "adventure";
let bookFormat = "hardcover";
let numCopiesAvailable = 10;

/**** EVALUATING EXPRESSIONS WITH OPERATORS ****/

/* Arithmetic */

let a = 7;
let b = 2;
// TODO: Print the difference between a and b using the arithmetic operator for subtraction
console.log(a - b);

let m = 7
// TODO: Print m to the 4th power using the exponentiation operator
// In this case, create a variable to store the result, then print the variable name

let mToTheFourthPower = m **4;
console.log(mToTheFourthPower);


/* INCREMENT & DECREMENT */

// Incrementing
let x = 5;

// TODO: Print x++, then print x, then print ++x
// Try to guess the values that will result with each console.log()

console.log(x++);
console.log(x);
console.log(++x);

// TODO: Increment x one more time without printing it, then print x on the next line

// Decrementing
let y = 19;

// TODO: Print y--, then print y, then print y--
// Try to guess the values that will result with each console.log()

console.log(y--);
console.log(y);
console.log(y--);

// TODO: Decrement y one more time without printing it, then print y on the next line


/* MODULO */

// TODO: Print the remainder from 100 with a modulus of 7
// 7 * 14 = 98, so we expect the value to be 2

console.log(100 % 7);

// TODO: Print the remainder from 6 with a modulus of 2
// 2 * 3 = 6, so we expect the value to be 0

console.log( 6 % 2);

/* ORDER OF OPERATIONS */

// TODO: un-comment the line below and run the program to verify the result is 42
console.log(8 * (2 + 2**2) - 36 / (14 - 2**3));


/* STRING BUILDING */

let titleAfterMawage = "Princess";
let originalName = "Buttercup";

// TODO: Print the title and name together
console.log(titleAfterMawage + " " + originalName);

// TODO: What happens if you have a mix of strings and numbers? Try it out.
let numberOfShips = 4;
console.log("You write " + numberOfShips + " copies of a letter. I'll send my " + numberOfShips + " fastest ships, one in each direction.");

/* COMPOUND ASSIGNMENT */

let numberOfBoos = 3;

// TODO: After Buttercup asks the Ancient Woman why she is booing her, she booed 5 more times. Increase the value of the variable, then print it.
numberOfBoos = 3;
numberOfBoos += 5;
console.log(numberOfBoos);


/**** GETTING USER INPUT ****/

// TIP: During development, you play the role of user so you can test your own code

// TODO: Import the readline-sync library as the constant input
// Normally this would go at the top of the file

const input = require( 'readline-sync');

// TODO: Print a greeting to the user
console.log("Welcome to the fan club");

// TODO: Ask the user for a name and store it in a variable
let favoriteCharacter = input.question("\nWho is your favorite character?\n\t");
// TODO: Print a response to the user that includes their input
console.log("\n" + favoriteCharacter + "? That's my favorite character too!");

// TODO: Ask the user for another name and store it in a variable
let sixFiguredMan = input.question("\nPop quiz! Who is the Six-Fingered Man?\n\t");

// TODO: Print a response to the user that includes their input
console.log("\nThat is correct!");

// TODO: Go back and clean up the output using special characters so it is easier to read in the console

// BONUS: After doing your prep work for class 2 (chapter 5), add logic to the final response to the user so that they see something different if their answer was incorrect
