// Assignment Code
const generateBtn = document.querySelector("#generate");

// Variables to store user input and password choices
let passwordLength;
let confirmLower;
let confirmUpper;
let confirmNumber;
let confirmSpecial;
let userChoices;

// Arrays containing character sets
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = lowerCase.map((x) => x.toUpperCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Generate password and set it in the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to initiate password generation
function generatePassword() {
  getUserInput();
  // Check if at least one criteria is chosen
  if (!userChoices.length) {
    alert("You must choose at least one criteria.");
    return "";
  }

  // Generate password based on user choices
  const passwordBlank = Array.from({ length: passwordLength }, () => getRandomChoice());
  const password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
}

// Function to get user input for password criteria
function getUserInput() {
  getPasswordLength();
  getCharacterTypes();
}

// Function to get password length from user
function getPasswordLength() {
  passwordLength = parseInt(prompt("How many characters would you like your password to have? Choose between 8 and 128"));
  // Ensure a valid password length is provided
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    getPasswordLength();
  }
}

// Function to get types of characters user wants in the password
function getCharacterTypes() {
  confirmLower = confirm("Would you like the password to contain lowercase letters?");
  confirmUpper = confirm("Would you like the password to contain uppercase letters?");
  confirmNumber = confirm("Would you like the password to contain numbers?");
  confirmSpecial = confirm("Would you like the password to contain special characters?");
  // Create an array of selected character sets based on user confirmation
  userChoices = [
    ...(confirmLower ? lowerCase : []),
    ...(confirmUpper ? upperCase : []),
    ...(confirmNumber ? numbers : []),
    ...(confirmSpecial ? special : []),
  ];
}

// Function to get a random choice from the user's selected character sets
function getRandomChoice() {
  return userChoices[Math.floor(Math.random() * userChoices.length)];
}
