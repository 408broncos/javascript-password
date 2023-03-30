// Assignment code here
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var enter;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//adding the special character options
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "{", "[", "}", "]", "|", ";", ":", "'", "<", ">", ".", "?", "/", "`", "~", "+", "=", "}", "]",];

//adding number options
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//adding alphabet options
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k" ,"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
