// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// var UNInum = [48, 57];
// var UNIupper = [65, 90];
// var UNIlower = [97, 122];
// var UNIsym = [33, 47];



// var upper = document.querySelector("#uppercase").checked;
// var lower = document.querySelector("#lowercase").checked;
// var numbers = document.querySelector("#numbers").checked;
// var symbols = document.querySelector("#symbols").checked;