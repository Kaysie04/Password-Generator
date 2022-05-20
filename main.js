// Assignment code here



function generatePassword() {
   
    characterLength = prompt(
        "How many characters long would you like your password to be? \nMinimum: 8 Digits \nMaximum: 128 digits")
    while (characterLength < 7 || characterLength > 129) {
        characterLength= prompt ("Please choose password length between 8 and 128 digits!")
    }

    confirmLowerCase = confirm(
            "Do you want lowercase letters as a part of your password?");
    confirmUpperCase = confirm(
            "Do you want uppercase letters as a part of your password?");
    confirmNumbers = confirm(
            "Do you want numbers as a part of your password?");
    confirmSpecialCharacters = confirm(
            "Do you want special characters as a part of your password?");
    
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  
}

  

  //passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);