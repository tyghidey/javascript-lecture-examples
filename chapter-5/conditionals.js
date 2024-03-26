// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 5: CONDITIONALS


/** THE BOOLEAN DATA TYPE **/
console.log("\nThe Boolean Data Type");


// TODO: Initialize a few booleans, then print them


/** OTHER TYPES CONVERTED TO BOOLEAN **/
console.log("\nOther Types Converted to Booleans");

// TODO: Convert these strings and numbers to booleans and print the results
let scientist = "Doc Brown"; // truthy
let speechless = ""; // falsy
let jigawattsNeeded = 1.21; // truthy
let mphAtStart = 0; // falsy


/* EVALUATING BOOLEAN EXPRESSIONS */
console.log("\nEvaluating Boolean Expressions");

// TODO: Write boolean expressions and print them to see its return value


// TODO: Check to see if the current speed is high enough for time travel, storing it in the fastEnough variable, then print it
let currentSpeed = 65;
let timeTravelSpeed = 88;

let fastEnough;


/** LOOSE EQUALITY VS STRICT EQUALITY **/
console.log("\nLoose Equality vs Strict Equality");

// TODO: Compare "8.0" and 8 using both types of equality and print result


// TODO: Compare false and 0 using both types of inequality and print result


/** LOGICAL OPERATORS **/
console.log("\nLogical Operators");

// Boolean expressions, stored in variables
let expression1 = "Great Scott!" === "Great Scott" + "!";
let expression2 = 1955 <= 1985;
let expression3 = 10.04 == "10:04";

// TODO: Use the logical AND operator to determine if all three expressions are true, and print the result

// TODO: Use the logical OR operator to determine if either expression2 or expression3 is true, and print the result

// TODO: Use the logical NOT operator to print the opposite value of expression2

// TODO: Use parentheses to print the opposite of expression1 AND expression3


/** CONDITIONAL STATEMENTS **/
console.log("\nConditional Statements");

let hasPlutonium = false;

// TODO: Write an IF statement that prints a message if the DeLorean is fully equipped for time travel in 1985
// TODO: Add an ELSE statement that will print a different message if it's not ready


// TODO: Write a series of IF/ELSE statements to determine which year the DeLorean will travel to.

let cableElectrified = false;
let hasBananaPeels = true;

let destinationYear;


// TODO: If the destination year has been set, print a statement that includes it. Otherwise, print some other statement that says they're not going anywhere (anytime?). Hint: remember what we learned about what happens when conditions are not booleans;


// TODO: Use nested conditionals to print three different statements — one if the car is going 88 MPH, one if it's lower than 88 MPH, and one if the car didn't start in the first place

let carHasStarted = true;
let speed = 72;
