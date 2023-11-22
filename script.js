// Assignment Code
const generateBtn = document.querySelector("#generate");

let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;

const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = lowerCase.map((x) => x.toUpperCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Generate password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  getUserInput();
  if (!userChoices.length) {
    alert("You must choose at least one criteria.");
    return "";
  }

  const passwordBlank = Array.from({ length: passwordLength }, () => getRandomChoice());
  const password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
}

function getUserInput() {
  getPasswordLength();
  getCharacterTypes();
}

function getPasswordLength() {
  passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    getPasswordLength();
  }
}

function getCharacterTypes() {
  confirmLower = confirm("Would you like the password to contain lowercase letters?");
  confirmUpper = confirm("Would you like the password to contain uppercase letters?");
  confirmNumber = confirm("Would you like the password to contain numbers?");
  confirmSpecial = confirm("Would you like the password to contain special characters?");
  userChoices = [
    ...(confirmLower ? lowerCase : []),
    ...(confirmUpper ? upperCase : []),
    ...(confirmNumber ? numbers : []),
    ...(confirmSpecial ? special : []),
  ];
}

function getRandomChoice() {
  return userChoices[Math.floor(Math.random() * userChoices.length)];
}
