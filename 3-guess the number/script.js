let randomNumber = Math.floor(Math.random() * 100 + 1);
let numberOfTries = 0;
const maxTries = 10;

function guessNumber() {
  //Collect input from the user
  let guessTheNumber = document.querySelector('.inputs-Values').value;
  let output = document.querySelector('.final-output');
  let triesOutput = document.querySelector('.Tries-output');
  let guess = Number(guessTheNumber); 
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess === '' || isNaN(guess) || guess < 1 || guess > 100) {
    output.textContent = "Please enter a number between 1 and 100";
    return; 
  }
  numberOfTries++; 
  let remainingTries = maxTries - numberOfTries; 
  triesOutput.textContent = `Remaining tries: ${remainingTries}`; 

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  if (guess > randomNumber) {
    output.textContent = "Number is too high, try again.";
  } else if (guess < randomNumber) {
    output.textContent = "Number is too low, try again.";
  } else {
    output.textContent = `Guess is correct. You win! The number was ${randomNumber}.`;
  }

  if (numberOfTries >= maxTries) {
    output.textContent = `Game over! You've used all your tries. The number was ${randomNumber}.`;
  }

}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector('.inputs-Values').value = '';
  //Reset tries, and triesTaken by the user
  numberOfTries = 0
  document.querySelector('.final-output').textContent = "New game started! Guess a number between 1 and 100.";
  document.querySelector('.Tries-output').textContent = `Remaining tries: ${maxTries}`;
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);


