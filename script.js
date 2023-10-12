// Assignment Code
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var characters = "!@#$%&*[]";

var generateBtn = document.getElementById("generate");
function generatePassword() {

var passwordLength = prompt("How many characters?");
var hasUppercase = prompt ("Would you like to use capital letters?")
var hasLowercase = prompt ("Would you like to use Lowercase letters?")
var specialcharacters = prompt ("Would you like to use special characters")

console.log(passwordLength)
console.log("Welcome to generate password");
return "Type New Password";

// Prompt the user for the password criteria
// Password length at least 8 characters
// Lowercase, uppercase, numbers, special characters
// Validate the input.
// Generte password based on criteria
// display password 

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
