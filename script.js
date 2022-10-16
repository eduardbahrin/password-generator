// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters arrays
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var symbols = [
  "!",
  "#",
  "$",
  "&",
  "%",
  "'",
  "*",
  "+",
  "-",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "~",
  "`",
  "{",
  "|",
  "}",
  ".",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  // obtaining password length from user
  var passwordLengthAnswer = prompt(
    "Please type in a password length between 8 and 128 characters"
  );

  // convert user input to a number
  var passwordLength = parseInt(passwordLengthAnswer, 10);

  // alert user if the password length is not matching the criteria
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please input a number between 8 and 128 characters");
    return;
  }

  // confirming what characters the user wants
  var isLowercase = confirm("Would you like lowercase characters?");
  var isUppercase = confirm("Would you like uppercase characters?");
  var isSpecialChar = confirm("Would you like special characters?");
  var isNumber = confirm("Would you like number characters?");

  // alerting user if they don't choose any type of characters
  if (!isLowercase && !isUppercase && !isSpecialChar && !isNumber) {
    alert("Please choose at least one type of characters!");
    return;
  }

  var finalArray = [];

  if (isLowercase) {
    // pushing everyindividual element of the array into the final array
    finalArray.push(...lowercase);
  }

  if (isUppercase) {
    finalArray.push(...uppercase);
  }

  if (isSpecialChar) {
    finalArray.push(...symbols);
  }

  if (isNumber) {
    finalArray.push(...numbers);
  }

  password = "";

  // choosing random caracters for password; number of random characters is defined by length of password
  for (let index = 0; index < passwordLength; index++) {
    password += finalArray[Math.floor(Math.random() * finalArray.length)];
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
