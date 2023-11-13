// TODO: Import items to test


/** UNIT TESTING **/

/*
	Write a test for the msPerYear variable. It should be exactly 31557600000.
*/

// TODO: Create a describe block for the variable, then write a specification inside it


/*
	Write a test for each of the properties in the object bucky
*/

// TODO: Create a describe block for the entire object

	// TODO: Write each specification as an it block inside the describe block
	
	// TODO: Test the value of fullName

	
	// TODO: Write 2 tests for the value of nickname — it should be "Bucky" and NOT "The Winter Soldier"


	// TODO: Test that triggerWords includes "longing", "daybreak", and "homecoming"


	// TODO: Test that the age property is greater than 100


	// TODO: Test that Bucky is no longer a Hydra agent



/** TEST-DRIVEN DEVELOPMENT **/

/*
	Write a new describe block for the isAlphaOnly function. Test positive cases, negative cases, and edge cases
*/

// TODO: Test data — will need to be moved into a beforeEach() function 
let cap = {
	fullName: "Steve Rogers",
	nickname: "Cap",
	age: Math.round((new Date() - new Date(1918, 7, 4)) / msPerYear),
	catchphrases: ["I could do this all day.", "Language!"]
};


// TODO: Write a describe block for the isAlphaOnly function	

	// POSITIVE CASES
	// TODO: Write a test for nickname

	
	// NEGATIVE CASES
	// TODO: Write tests for non-alpha characters like numbers and punctuation

	
	// EDGE CASES
	// TODO: Write a test for spaces (is allowed)

	// TODO: Write a test for empty string (not allowed)

	// TODO: Write a test for non-string types (not allowed)

	// TODO: Write a test for null value
