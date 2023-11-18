var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXUZ";
var lowercaseArr = uppercaseArr.toLocaleLowerCase();
var numbersArr ="0123456789";
var specialCharArr ="!@#$%^&*()";

var choiceArr = "";

// Assignment Code
var generateBtn = document.getElementById("generate");


function generatePassword() {


  var passwordLength = prompt("How many characters? 8-128 characters");

  if(isNaN(passwordLength)|| passwordLength < 8 || passwordLength > 128){
    alert('Password length has to be between 8 and 128 characters. Try again');
    return false;
  }

  var hasUppercase = confirm("Would you like to use capital letters?")
  var hasLowercase = confirm("Would you like to use Lowercase letters?")
  var specialcharacters = confirm("Would you like to use special characters")
  var numbers = confirm("Would you like to use numbers?")

  //console.log(passwordLength)

  if(hasUppercase){
    choiceArr += choiceArr.concat(uppercaseArr);
  };

  if(hasLowercase){
    choiceArr += choiceArr.concat(lowercaseArr);
  };

  if(specialcharacters){
    choiceArr += choiceArr.concat(specialCharArr);
  };

  if(numbers){
    choiceArr += choiceArr.concat(numbersArr);
  };

  var length = parseInt(passwordLength);
  var password = "";

  for(let i=0; i<length; i++){

    var index = Math.floor(Math.random() * choiceArr.length);
    var character = choiceArr[index]
    password += character;

  }

  return password;

}




// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);