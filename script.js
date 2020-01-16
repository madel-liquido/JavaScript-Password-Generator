// Assignment Code
var generateBtn = document.querySelector("#generate");
var min = 8;
var max = 128;

var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = lowerChars.toUpperCase();
var numberChars = "0123456789";
var specialChars = "!#$%&()*+,-./:;<=>?@[^_{|}~";
var guaranteedChars = [];
var chars = [];
var characters = "";
var password = "";


//need to include while loop for question
//clear the box after each password



function generatePassword() {
    var passwordLengthPrompt = prompt("Please specify password length (must be at least 8 characters and no more than 128 characters)");
    var passwordLength = parseInt(passwordLengthPrompt);
    document.getElementById("password").value = ""
    if (passwordLength >= min && passwordLength <= max && passwordLength !== NaN) {
        if (confirm("Does your password require lowercase characters?")) {
            characters += lowerChars;
            guaranteedChars.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
        }

        if (confirm("Does your password require uppercase characters?")) {
            characters += upperChars;
            guaranteedChars.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
        }

        if (confirm("Does your password require a number?")) {
            characters += numberChars;
            guaranteedChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
        }

        if (confirm("Does your password require a special character?")) {
            characters += specialChars;
            guaranteedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
        }

    } else {
        alert("Please enter a valid password length.");
    }

    charArray = characters.split("");
    console.log(charArray);


    for (var i = 0; i < passwordLength; i++) {
        var elementOne = charArray[Math.floor(Math.random() * charArray.length)];
        password += elementOne;
    }

    var passwordArray = password.split("");
    for (var i = 0; i < guaranteedChars.length; i++) {
        passwordArray[i] = guaranteedChars[i]
    }

    var finalPassword = passwordArray.join('');
    return finalPassword;
}

//concatenate possible characters with guaranteed


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add password to textbox/display area
document.getElementById("password").value = generatePassword();


//create separate arrays with guaranteed characters based on prompt