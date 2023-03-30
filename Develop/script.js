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

//for uppercase letters
upper = [];

//options in a global scope
var options;

var toUpper = function (X) {
  return X.toUpperCase();
};

//adding uppercase variable
alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = writePassword();
  document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function writePassword() {

  //giving the user the first prompt
  enter = parseInt(prompt("How many characters would you like to choose for your password? Choose between 8 and 128"));
  
  //prompt value
  if (!enter) {
    alert("Needs a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("You need to choose between 8 and 128"));

  //prompt questions
  }else {
    confirmCharacter = confirm("Will this have any special characters?");
    confirmNumber = confirm("Will this have any numbers?");
    confirmUppercase = confirm("Will this have any Uppercase letters?");
    confirmLowercase = confirm("Will this have any Lowercase letters");
  };

  //if statement with all false variables 
  if (!confirmUppercase && !confirmLowercase && !confirmCharacter && !confirmNumber) {
    options = alert("You must select an option.");
  }

  //else if statements with all 4,3,2,1 possibilities
  else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
    options = character.concat(number, alphabet, alphabet2);
}
  else if (confirmCharacter && confirmNumber &&confirmUppercase) {
    options = character.concat(number, alphabet2);
  }

  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    options = character.concat(number, alphabet);
  }

  else if (confirmCharacter && confirmNumber) {
    options = character.concat(number);
  }

  else if (confirmCharacter && confirmLowercase) {
    options = character.concat(alphabet);
  }

  else if (confirmCharacter && confirmUppercase) {
    options = character.concat(alphabet2);
  }

  else if (confirmNumber && confirmLowercase) {
    options = number.concat(alphabet)
  }

  else if (confirmNumber && confirmUppercase) {
    options = number.concat(alphabet2)
  }
  
  else if (confirmUppercase && confirmLowercase) {
    options = alphabet2.concat(alphabet)
  }

  else if (confirmNumber) {
    options = number;
  }

  else if (confirmCharacter) {
    options = character;
  }

  else if (confirmLowercase) {
    options = alphabet;
  }

  else if (confirmUppercase) {
    options = upper.concat (alphabet2)
  };

  //variable for password
  var password = [];

  //random password generator method
  for (var i = 0; i < enter; i++) {
    var pickOptions = options [Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
  
  //grabs the "id" element for password to generate random password
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }
}