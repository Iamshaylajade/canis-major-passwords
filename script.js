var characterLength =
// var choiceArr = []

var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 
var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbersArr = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];


// Assignment Code
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
   var correctprompts = getPrompts();  //returns true or false

   if (correctprompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
   }
}

function generatePassword() {
  // generatePassword according to the prompts selected
}

function getPrompts() {
  choiceArr = [];
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
