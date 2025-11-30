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

// Function 1: it takes the user's input, makes it lowercase, and checks if it's valid ('rock', 'paper', 'scissors', or 'bomb'). If valid, it returns the choice. 
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid choice! Enter either: rock, paper, scissors, bomb');
  }
};

// Testing getUserChoice() function with the input of 'rock.'
// console.log(getUserChoice('rock'));


// Function 2: it randomly picks a number (0, 1, or 2) and returns 'rock', 'paper', or 'scissors' based on the number.
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
    return 'scissors';
  }
};

// Testing getComputerChoice() function several times ans printing the result to the console. 
console.log(getComputerChoice());


// Function 3: it compares the user's and computer's choices. If both are the same, it's a tie. If the user chose 'bomb', the user wins. Otherrwise, it checks the rules of the game to decide who wins.

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'The user won!'
  } if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The computer won!";
    }
  } if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'The user won!';
      }
    } if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'The user won!'
      }
    }
  };

// Testing determineWinner() function.
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock'));

// Function 4: It calls the above functions, prints both choices, and prints who won. 
function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  // Determine who won.
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();