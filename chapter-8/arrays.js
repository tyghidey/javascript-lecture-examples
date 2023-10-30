// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 8: ARRAYS

/* 
	This is the STARTER CODE. Use this to code along with the lecture recording or just practice. You can switch to the solution branch if you want to reference the final code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

/** CREATING ARRAYS & BRACKET NOTATION **/

let enemies = ["Daleks", "Cybermen", "the ones in the library", "Weeping Angels"];

// Use bracket notation to print the second element of the array. Remember that arrays are zero-indexed!


// Unlike strings, arrays ARE mutable — use bracket notation to replace the third element with the correct name, then print the entire array.


// Use bracket notation to add a new element to the array, the print the array. Calculate the next available index instead of hard-coding it


// Create an empty array, then use bracket notation to add the names of some of the Doctor's allies, then print the array.


// Try printing an element of allies at index 10. What happens?



/** THE LENGTH PROPERTY **/

// Print the length of the array of allies.


// Use the length to calculate the index of the last element of the array of enemies, and print that element.



/** COMMON ARRAY METHODS **/

/* Locate an Element within an Array */

// Check to see if Kate Stewart is in the array of allies and print the result (true or false).


// Find the index of the Weeping Angels in the enemies array and print it



/* Create by Concatenating Multiple Arrays */

let companions10 = ["Rose", "Martha", "Donna"];
let companions11 = ["Amy", "Rory"];
let companions12 = ["Clara", "Bill", "Nardole"];
let companions13 = ["Ryan", "Graham", "Yasmin"];

// Combine the three arrays into a single array and print it.



/* Create by Taking a Slice */

// Create a new array from just the middle 3 of the list of companions, then print it.



/* Create by Splitting a String */

let judoonJS = "JO BLO VO BLO SO CO RO KRO PO TO";

// Create a new array with each Judoon letter as a separate element, then print it


/* Joining an Array To Create a String */

// Print the Judoon word as a string again, this time connected by something other than just a space



/* Reverse */

// Reverse the array with all enemies and print it



/* Sort */

// Sort the companion list array alphabetically and print it.



/* Add & Remove at End of Array */

// Declare a variable to store the result when you remove the last element from the array of allies. Print the variable, then print the modified array.


// Add the name back to the end of the array, then print the modified array.



/* Add & Remove at Beginning of Array */

// Declare a variable to store the result when you remove the first element from the list of enemies. Print the variable, then print the modified array.


// Add the removed element back to the beginning of the array, then print the modified array.


/* Insert and/or Remove Anywhere in an Array */

// Remove Harriet Jones from the allies array, then print the modified array.


// Add Wilfred Mott to the list of allies, somewhere in the middle.



/** METHOD CHAINING **/

let tardis = "tardis";

// In a single line of code, change "tardis" to "T.A.R.D.I.S", then print the reassigned variable.
// Steps, which may not be in the right order:
//  split string into an array of characters
//  make all characters uppercase
//  join characters with periods


// Starting with the array of enemies, print a single string that lists the enemies in reverse alphabetical order, each separated by a comma and space.
// Steps, which must be done in a certain order:
//  While it is an array, sort it, then reverse it
//  Then join with the connector ", " to make it a string


/** MULTIDIMENSIONAL ARRAYS **/

// Put all four arrays of companions inside a single array, then print it


// Print Donna's name using bracket notation with allCompanions


// Print Clara's name using bracket notation with allCompanions

