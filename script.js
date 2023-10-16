var uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXUZ";
var lowercaseArr = uppercaseArr.toLocaleLowerCase();
var numbersArr ="0123456789";
var specialCharArr ="!@#$%^&*()";

var choiceArr = "";

// Assignment Code
var generateBtn = document.getElementById("generate");


function generatePassword() {

  var passwordLength = prompt("How many characters?");

  var hasUppercase = confirm("Would you like to use capital letters?")
  var hasLowercase = confirm("Would you like to use Lowercase letters?")
  var specialcharacters = confirm("Would you like to use special characters")
  var numbers = confirm("Would you like to use numbers?")

  //console.log(passwordLength)

  if(hasUppercase){
    choiceArr += uppercaseArr;
  };

  if(hasLowercase){
    choiceArr += lowercaseArr;
  };

  if(specialcharacters){
    choiceArr += specialCharArr;
  };

  if(numbers){
    choiceArr += numbersArr;
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