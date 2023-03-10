
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
// Alerts tellls user how long passwordd will be
alert(`Your password will be ${confirmLength} characters long`);
 // password questions 
 var confirmSpeChar = confirm("Click OK to confirm,for special characters");
 var confirmNumChar = confirm("Click OK to confirm,for  numbers");    
 var confirmLowerCase = confirm("Click OK to confirm, for lowercase characters");
 var confirmUpperCase = confirm("Click OK to confirm, for uppercase characters");
   // loop to help with password requirments 
   while(confirmUpperCase === false && confirmLowerCase === false && confirmSpeChar === false && confirmNumChar === false) {
      alert("Choose at least one Requirment for password");
      var confirmSpeChar = confirm("Click OK to confirm, for special characters");
      var confirmNumChar = confirm("Click OK to confirm, for numbers");    
      var confirmLowerCase = confirm("Click OK to confirm, for lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm, for uppercase characters");   
 } 
 // Requirements for passwordd 
 var passwordChar = []
      
    if (confirmSpecialChar) {
      passwordChar = passwordChar.concat(specialChar)
    }

    if (confirmNumericChar) {
      passwordChar = passwordChar.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordChar = passwordChar.concat(letterLower)
    }

    if (confirmUpperCase) {
      passwordChar = passwordChar.concat(letterUpper)
    }

      console.log(passwordChar)