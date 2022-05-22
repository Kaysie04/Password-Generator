var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersArray = [ "!", "@", "#","$", "%", "^", "&", "(", ")", "<", ">","?"];
var randomPasswordArray = [];
var generateBtn = document.querySelector("#generate");

// Assignment code here

function generatePassword () {
        //console.log("Button clicked")

        var userChoices = [];

         // prompt: length 
        var characterLength = prompt(" Choose a password length from 8-128 characters")
        console.log(characterLength);
        if (characterLength > 7 && characterLength < 129) {
        } else {
          return "Please choose password length between 8 and 128 digits! Click 'Generate Password' to try again.";
        }

        // prompt: uppercase
        var confirmUpperCase = confirm(" Do you want your password to include UPPERCASE letters? Click 'Ok' for yes or 'Cancel' for no.")

         // create if statements for true statements
         if (confirmUpperCase) {
                userChoices.push(upperCaseArray);
                console.log(userChoices);
        }

        // prompt: lowercase
        var confirmLowerCase = confirm(" Do you want your password to include lowercase letters? Click 'Ok' for yes or 'Cancel' for no.")

        if (confirmLowerCase) {
                userChoices.push(lowerCaseArray);
                console.log(userChoices);
        }

        // prompt: numeric
         var confirmNumbers = confirm(" Do you want your password to include numbers letters? Click 'Ok' for yes or 'Cancel' for no.")

         if (confirmNumbers) {
                userChoices.push(numbersArray);
                console.log(userChoices);
        }

        // prompt: special characters
        var confirmSpecialCharacters = confirm(" Do you want your password to include special characters letters? Click 'Ok' for yes or 'Cancel' for no.")

        if (confirmSpecialCharacters) {
                userChoices.push(specialCharactersArray);
                console.log(userChoices);
        }

        //create if else statements to ensure valid values are input
        if (confirmUpperCase === false && confirmLowerCase === false && confirmNumbers === false && confirmSpecialCharacters === false) {
                return "Please choose atleast one option. Click 'Generate Password' to try again.";
        }      

        userChoices = userChoices.flat();
        
        for (let i = 0; i < characterLength; i++); {
                randomArray = (userChoices[Math.floor(Math.random() * userChoices.length)]);
                randomPasswordArray.push(randomArray);
        }

        return randomPasswordArray;      
}


// Write password to the #password input
function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);