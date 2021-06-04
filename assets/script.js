// Assignment Code variables
// beginning entered value form the user.
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
var specChar4 = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"];

var enteredInfo
console.log("hello world");

var LCConfirm 
var UCConfirm 
var NumConfirm 
var SpecCharConfirm 

var combo1 =lowerCase1.concat(upperCase2, numbers3, specChar4)

var generateBtn = document.querySelector("#generate");


// beginning to generate password
function generatePassword() {
  length = parseInt(prompt("How long would you like your password?  Please enter a size between 8 and 128 characters:"));
}
  
if (!length) {
    alert ("We need a size to continue...");
  } else if (length < 8) {
    length = parseInt(prompt("We need a number of *8or greater."));
  } else if (length > 128) {
     length = parseInt(prompt("That's too large!  Less that 128 characters, please."));
  } else {
      LCConfirm = confirm("Would you like the password to have lower case letters?");
      UCConfirm = confirm("Would you like the password to have UPPER CASE letters?");
      NumConfirm = confirm("Would you like the password to have numbers?");
      SpecCharConfirm = confirm("Would you like the password to have special characters?");

};

if (!LCConfirm && !UCConfirm && !NumConfirm && !SpecCharConfirm) {
   enteredInfo = alert("You must choose at lease one criteria for your password.");
}
   else if (LCConfirm && UCConfirm && NumConfirm && SpecCharConfirm)
   enteredInfo =lowerCase1.concat(upperCase2, numbers3, specChar4)


//return unique password based on user's submitted criteria


// GIVEN I need a new, secure password
// THEN I am presented with a series of prompts for password criteria
//  How many prompts do i need?

// 1. confirm for lowercase
// 2. confirm for uppercase
// 3. confirm for number
// 4. confirm for special character
// 5. prompt for password lenght between 8 and 128 characters.



// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// window.alert ("Welcome to the Password Generator")
// var greenlight= confirm("Would you like a password generated for you?")

// if (greenlight !== true) {
//   window.alert ("Thank you for visiting!  We will be here when you need us." )
// }
