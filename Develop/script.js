
// GenerateBtn var delcared with an Event Listener 
var generateBtn =document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays that contain the elements that came be in the password letters,numbers and special characters
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declaring more Var 
var confirmLength = "";
var confirmSpeChar;
var confirmNumChar;
var confirmUpperCase;
var confirmLowerCase;

// Ask how long our password will be 
function generatePassword() {
  var confirmLength = (prompt("How long do you want your password to be?"));

  // Loop starts
  while(confirmLength <= 7 || confirmLength >= 129) {
     alert("Password length needs to  be between 8-128 total characters. Try again");
     var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } }
// Alert the number of charactes the user will have  
alert(`Your password will be ${confirmLength} characters long`);
 // Determine parameters of password 
 var confirmSpeChar = confirm("Click OK to confirm if you would like to include special characters");
 var confirmNumChar = confirm("Click OK to confirm if you would like to include numeric characters");    
 var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
 var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
   // Loop if answer is outside the parameters 
   while(confirmUpperCase === false && confirmLowerCase === false && confirmSpeChar === false && confirmNumChar === false) {
     alert("You must choose at least one parameter");
     var confirmSpeChar = confirm("Click OK to confirm if you would like to include special characters");
     var confirmNumChar = confirm("Click OK to confirm if you would like to include numeric characters");    
     var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
     var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
 } 