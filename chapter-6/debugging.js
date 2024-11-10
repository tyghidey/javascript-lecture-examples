// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 6: DEBUGGING


/** DEBUGGING **/
console.log("\nDebugging");

// TODO: Un-comment the code below. What happens when you run the program?
// TODO: Find and fix all 3 errors — let the error messages guide you on the first two; the third one is a logic error (test both true and false values for hadFirstKiss)

let hadFirstKiss = true;

if (hadFirstKiss) { // logic error (this line is a string instead of Boolean)
	console.log("\nMarty McFly lives! He will not fade from existence.");
} else {
	console.log("\nOh no! George and Lorraine didn't fall in love, and Marty McFly will never be born.");
}
