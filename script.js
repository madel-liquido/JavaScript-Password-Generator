var generateBtn = document.querySelector("#generate");
var min = 8;
var max = 128;

function generatePassword() {
    var passwordLengthPrompt = prompt("Please specify password length (must be at least 8 characters and no more than 128 characters)");
    var passwordLength = parseInt(passwordLengthPrompt);

    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = lowerChars.toUpperCase();
    var numberChars = "0123456789";
    var specialChars = "!#$%&()*+,-./:;<=>?@[^_{|}~";

    var guaranteedChars = [];
    var possibleChars = "";
    var password = "";

    document.getElementById("password").value = ""
    if (passwordLength >= min && passwordLength <= max && passwordLength !== NaN) {
        if (confirm("Does your password require lowercase characters?")) {
            possibleChars += lowerChars;
            guaranteedChars.push(lowerChars[Math.floor(Math.random() * lowerChars.length)]);
        }

        if (confirm("Does your password require uppercase characters?")) {
            possibleChars += upperChars;
            guaranteedChars.push(upperChars[Math.floor(Math.random() * upperChars.length)]);
        }

        if (confirm("Does your password require a number?")) {
            possibleChars += numberChars;
            guaranteedChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
        }

        if (confirm("Does your password require a special character?")) {
            possibleChars += specialChars;
            guaranteedChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
        }
        console.log(guaranteedChars);

    } else {
        alert("Please enter a valid password length.");
        var max_count = 5;
        if (--max_count > 0) {
            generatePassword()
        }
    }

    var charArray = possibleChars.split("");
    for (var i = 0; i < passwordLength; i++) {
        var elementOne = charArray[Math.floor(Math.random() * charArray.length)];
        password += elementOne;
    }

    var passwordArray = password.split("");
    for (var i = 0; i < guaranteedChars.length; i++) {
        passwordArray[i] = guaranteedChars[i]
    }

    if (guaranteedChars.length !== 0) {
        var finalPassword = passwordArray.join('');
    } else {
        alert("Could not generate password because no criteria were specified.");
        var finalPassword = document.getElementById("password").defaultValue;
    }
    return finalPassword;
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
document.getElementById("password").value = generatePassword();




