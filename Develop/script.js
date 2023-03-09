
// GenerateBtn var delcared with an Event Listener 
var generateBtn =document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays that contain the elements that came be in the password letters,numbers and special characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declaring more Var 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Ask how long our password will be 
function generatePassword() {
  var confirmLength = (prompt("How long do you want your password to be?"));

  // Loop to start logic
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length needs to  be between 8-128 total characters. Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } }
