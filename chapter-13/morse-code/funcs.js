/** OBJECT WITH KEY/VALUE PAIRS **/

const morseMap = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  ";": "-.-.-.",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  "+": ".-.-.",
  "=": "-...-",
  "&": ".-...",
  "$": "...-..-"
};


/** FUNCTIONS **/

// TODO: Write a function to convert a single character to Morse code.


// TODO: Write a function that uses translateChar() to translate a word


// TODO: Write a function that uses translateWord() to translate a string of words



/** EXPORT FUNCTIONS **/

/* 	
	Note: to run an interactive program you really only need translateAll() but we will test the others with a few console.log() statements 
*/

// TODO: Export all three functions
module.exports = {
	translateChar: translateChar,
	translateWord: translateWord,
	translateAll: translateAll
}
