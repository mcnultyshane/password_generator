// Assigning Code variables.
// beginning with the variables needed for the entered value from the user.
var length;
var LCConfirm;
var UCConfirm
var NumConfirm
var SpecCharConfirm

// the arrays we will be using for the password elements.
// Lower case letter array.
var lowerCase1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  Upper case letter array.
var upperCase2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Number array.
var numbers3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Special character array.
var specChar4 = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

// variable for the "if-else staements."
var enteredInfo;

//  variable and event for activating prompts and confirms on main page button push.
var getGen = document.querySelector("#generate");

getGen.addEventListener("click", function () {
  finalpass = generatePassword();
  document.getElementById("password").placeholder = finalpass;
});

// listing out prompts and confirms.
function generatePassword() {

  length = parseInt(prompt("How long would you like your password?  Please enter a size between 8 and 128 characters and select your password parameters:"));

  if (!length) {
    alert("We need a size to continue...");

  } else if (length < 8) {
    length = parseInt(prompt("We need a number of 8 or greater."));
  } else if (length > 128) {
    length = parseInt(prompt("That's too large!  Less than 128 characters, please."));
  } else {
    LCConfirm = confirm("Would you like the password to have lower case letters?");
    UCConfirm = confirm("Would you like the password to have UPPER CASE letters?");
    NumConfirm = confirm("Would you like the password to have numbers?");
    SpecCharConfirm = confirm("Would you like the password to have special characters?");
  };

  // Begining 'If-Else' section for establishing our array:

  // First choice is if no criteria is met.
  if (!LCConfirm && !UCConfirm && !NumConfirm && !SpecCharConfirm) {
    enteredInfo = alert("Please choose the correct parameters for your password.");
  }

  // 'else if' statement if all (4) criteria are true
  else if (LCConfirm && UCConfirm && NumConfirm && SpecCharConfirm) {
    enteredInfo = lowerCase1.concat(upperCase2, numbers3, specChar4);
  }

  // 'else if' statement if only three (3) criteria are true .
  else if (LCConfirm && UCConfirm && NumConfirm) {
    enteredInfo = lowerCase1.concat(upperCase2, numbers3);
  } else if (LCConfirm && NumConfirm && SpecCharConfirm) {
    enteredInfo = lowerCase1.concat(numbers3, specChar4);
  } else if (LCConfirm && UCConfirm && SpecCharConfirm) {
    enteredInfo = lowerCase1.concat(upperCase2, specChar4);
  } else if (UCConfirm && NumConfirm && SpecCharConfirm) {
    enteredInfo = upperCase2.concat(numbers3, specChar4);
  }

  // 'else if' statement if only two (2) criteria are true
  else if (LCConfirm && UCConfirm) {
    enteredInfo = lowerCase1.concat(upperCase2);
  } else if (LCConfirm && NumConfirm) {
    enteredInfo = lowerCase1.concat(numbers3);
  } else if (LCConfirm && SpecCharConfirm) {
    enteredInfo = lowerCase1.concat(specChar4);
  } else if (UCConfirm && NumConfirm) {
    enteredInfo = upperCase2.concat(numbers3);
  } else if (UCConfirm && SpecCharConfirm) {
    enteredInfo = upperCase2.concat(specChar4);
  } else if (NumConfirm && SpecCharConfirm) {
    enteredInfo = numbers3.concat(specChar4);
  }

  // finally, else if to provide for only one option.
  else if (LCConfirm) {
    enteredInfo = lowerCase1;
  } else if (NumConfirm) {
    enteredInfo = numbers3;
  } else if (UCConfirm) {
    enteredInfo = upperCase2;
  } else if (SpecCharConfirm) {
    enteredInfo = specChar4;
  }

  var tempArray = [];

  for (var i = 0; i < length; i++) {
    var pickChoices = enteredInfo[Math.floor(Math.random() * enteredInfo.length)];
    tempArray.push(pickChoices);
  }
// code for turning our temporary password array into a string.
  var tempArray = tempArray.join("")
  UserInput(tempArray)
  return tempArray;

};

function UserInput(tempArray) {
  document.getElementById("password").textContent = tempArray;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}



