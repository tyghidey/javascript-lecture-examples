// Class 17 Lecture: The Modern JavaScript Landscape

/** TERNARY OPERATOR **/

let pikeInChair = true; // otherwise Spock is in command
let phrase;

if (pikeInChair) {
  phrase = 'Hit it!';
} else {
  phrase = 'I would like the ship to go... now.';
}

// TODO: Write an equivalent expression for the if/else block above using a ternary expression

// TODO: Print the phrase generated by the ternary expression


/** SPREAD OPERATOR **/

let crew1 = ['Captain Pike', 'Number One', 'Spock'];
let crew2 = ['Uhura', "La'an", 'Ortegas', 'Hemmer', 'Kyle'];
let crew3 = ["Dr. M'Benga", 'Nurse Chapel'];

// TODO: Use the spread operator to combine all Enterprise members into a single array

// TODO: Print the new array


/** DESTRUCTURING **/

/* Destructuring Arrays */

// TODO: Create variables doctor and nurse from crew3, then print each

// TODO: Create variables captain and scienceOfficer from crew1
// Use an extra comma to skip over Number One


/* Destructuring Objects */

let enterprise = {
  shipName: 'Enterprise',
  registryNumber: 'NCC-1701',
  class: 'Constitution',
};

// TODO: Create variables shipName and registry from enterprise, then print each


/** FOR...OF LOOPS **/

/* With a Simple Array */

// TODO: Iterate over crew2 and print each name


/* With a Map Class Object */

let federationFounders = [
  [1, 'United Earth'],
  [2, 'Confederacy of Vulcan'],
  [3, 'Andorian Empire'],
  [4, 'United Planets of Tellar'],
  [5, 'Alpha Centauri Concordium'],
];

let fedFoundersMap = new Map(federationFounders);

// TODO: Print the map to see its structure

// TODO: Use a for...of loop to print each member as an ordered list


/** ARROW FUNCTIONS **/

function explore(planet) {
  console.log(`Let's go boldly toward ${planet}`);
}

// TODO: Rewrite explore() as an arrow function stored in goBoldly

// TODO: Call goBoldly with the planet Nibiru

function makeItGo(speedFactor, type = 'impulse') {
  if (type === 'warp') {
    console.log(`Warp factor ${speedFactor}`);
  } else {
    console.log(`${speedFactor} impulse`);
  }
}

// TODO: Rewrite makeItGo() as an arrow function stored in hitIt
// Use a ternary expression for logging the correct phrase

// TODO: Call hitIt() with full/impulse and again with 8/warp


/** MAPPING OVER AN ARRAY **/

let planets = ['Andoria', 'Vulcan', 'Earth', 'Kronos', 'Risa'];

// TODO: Create a new array where all planet names are all caps

// TODO: Print the new array
