// LECTURE EXAMPLES
// WEBDEV UNIT 1, CHAPTER 15: SCOPE

/* 
	This is the STARTER CODE. Use this to code along with the lecture recording or just practice. You can switch to the solution branch if you want to reference the final code.

	If Carrie is your primary instructor, 
  you can locate the YouTube playlist for your cohort here:
	https://youtube.com/@CodeWithCarrie
*/

// Some data to work with
let toys = [
	{
		name: "Woody",
		description: "cowboy",
		catchphrases: [ "There's a snake in my boot!", "Reach for the sky!" ]
	},
	{
		name: "Buzz Lightyear",
		description: "space ranger",
		catchphrases: [ "This is an intergalactic emergency.", "To infinity and beyond!" ]
	},
	{
		name: "Mr. Potato Head",
		description: "potato",
		catchphrases: [ "Prepare to meet Mr. Angry Eyes!", "You uncultured swine!" ]
	},
	{
		name: "Rex",
		description: "dinosaur",
		catchphrases: [ "I'm going for fearsome here, but I just don't feel it! I'm think I'm just coming off as annoying.", "But look at my little arms! I can't press the fire button and jump at the same time!" ]
	},
	{
		name: "Bo Peep",
		description: "shepherdess",
		catchphrases: [ "Be who you are right now.", "He's not lost. Not anymore." ]
	}
];

// TODO: Write a function describeToys() that takes an array and accesses each object one at a time, printing a sentence using the following template literal: 
// `${name} is a toy ${desc} who says things like, "${quote1}" and "${quote2}"\n`


// TODO: Call the function and pass in the array toys

// TODO: Change the scope of desc to global by removing the keyword let, and print it below

// TODO: Remove the keyword let from quote1 above, then declare it with let below. Try printing it. What happens?

// TODO: Remove the keyword let from quote2 above, then declare it with var below. Try printing it. What happens?
