// Assignment Code
var generateBtn = document.querySelector("#generate");

/* All const are characters that are free to be used */
const numbers = "0123456789";
const special = "!@#$%^&*()_-+={[}]|<,>.?/`~";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

/* the prompt for passlength var shows a message telling the person to input a password with a specified length*/
function generatePassword() {
  var passLength = prompt('Password must be 8 to 128 characters long');
  
/* if the password is not within the requirements an alert pops up telling them they need to meet requirements*/
  if (passLength < 8 || passLength > 128){
    alert("Please keep password between 8 and 128 characters long");
    var passLength = prompt("Password must be 8 to 128 characters long");
  }

/* asks if they would like specific characters in their password */
var okNumber = confirm("Press OK for numbers");
var okSpecial = confirm("Press OK for special characters");
var okUppercase = confirm("Press OK for uppercase letters");
var okLowercase = confirm("Press OK for lowercase letters");
var passGen = '';

var passLength = Number(passLength);

if (okNumber) {
  passGen += numbers;
}

if (okSpecial) {
  passGen += special;
}

if (okUppercase) {
  passGen += uppercase;
}

if (okLowercase) {
  passGen += lowercase;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
