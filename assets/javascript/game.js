
// This function resets the game at win/loss.
function start () {
// Put every letter of the alphabet in an array for the computer to choose from.
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
userChoiceArray = [];
remainingGuesses = 9;
remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;
}
// Set variables for game conditions and outcomes.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var userChoiceText = document.getElementById("userchoice-text");
var remainingGuessesText = document.getElementById("remainingGuesses-text");
var directionsText = document.getElementById("directions-text");
var alphabet = [];
start();
// Create an empty array for user choices.
var userChoiceArray = [];

// Variables for number of remaining user guesses and score.
var remainingGuesses = 9;
var userWins = 0;
var userLosses = 0;

document.onkeyup = function(event){
// Set a variable for the keys pressed by user.
    var userChoice = event.key;

// Set a variable for the computer guess.
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// Code for outcome of the game.
    if (userChoice == computerChoice) {
    alert ("YOU WIN ^__^");
    userWins++;
    start();
    }   else if (remainingGuesses == 0) {
        alert ("OOPS!!! YOU LOSE Q__Q");
        userLosses++;
        start();
        }
        else {
        userChoiceArray.push(userChoice);
        remainingGuesses--;
        }

directionsText.textContent = "";

winsText.textContent = "Wins: " + userWins;
lossesText.textContent = "Losses: " + userLosses;
remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;
userChoiceText.textContent = "User Choices: " + userChoiceArray;
    };