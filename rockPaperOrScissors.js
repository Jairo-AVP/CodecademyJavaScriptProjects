/*
Rock, Paper, or Scissors
Rock Paper Scissors is a classic two-player game. Each player chooses either rock, paper, or scissors. The items are compared, and 
whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

// Function 1: get the user's choice.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput == 'bomb') {
    return userInput;
  }else {
    console.log('This is not a valid choice! Please enter one of the following options: rock, paper, or scissors');
  }
}

// Testing the function getUserChoice.
// console.log(getUserChoice('scissors'));

// Function 2: create a function to let the computer make a choice.
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if ( randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
}

// Testing the function getComputerChoice.
// console.log(getComputerChoice());

// Function 3: to determine the winner. 
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'The user is the Winner!'
  }if (userChoice === computerChoice) {
    return "It's a tie!"
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer is the Winner!';
    } else {
      return 'The User is the Winner!'
      }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The Computer is the Winner!';
    } else {
      return 'The User is the Winner!';
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer is the Winner!';
    } else {
      return 'The User is the Winner!';
    }
  }
}

// Testing function dtermineWinner().
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));


// Function 4: To start the competition between user & computer.
function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  // Determine who won.
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

