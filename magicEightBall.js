/* 
Magic Eight Ball

You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project, we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, and then our program will output a random fortune.
*/

// let userName = 'Pamela';
// userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

// let userQuestion = 'Will I win the lottery?';
// console.log(`${userName} asks: ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);
// // console.log(randomNumber);

// // Determine the magic Eight Ball's response based on the random number
// let eightBall = randomNumber;

// if (randomNumber === 0) {
//   eightBall = 'It is certain'
// } else if (randomNumber === 1) {
//   eightBall = 'It is decidedly so';
// } else if (randomNumber === 2) {
//   eightBall = 'Reply hazy try again';
// } else if (randomNumber === 3) {
//   eightBall = 'Cannot predict now';
// } else if (randomNumber === 4) {
//   eightBall = 'Do not count on it';
// } else if (randomNumber === 5) {
//   eightBall = 'My sources say no';
// } else if (randomNumber === 6) {
//   eightBall = 'Outlook not so good';
// } else if (randomNumber === 7) {
//   eightBall = 'Signs point to yes';
// }

// console.log(eightBall)


/*
Final Task: If you started with if / else if / else statements, convert them to a switch statements.
*/
// Getting the name of the person who will be told their fortune.
let userName = 'Cutucho'

// Creating ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Getting the question that will be answered by the Magic Eight Ball.
let userQuestion = 'Will I win the lottery?'
// console.log(`${userName} would like to know: `)
// console.log(userQuestion)
console.log(`${userName ? userName : 'User'} would like to know: ${userQuestion}`);

// Generate a random number between 0 and 7 for the Magic Eight Ball response
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

// Creating a control flow for answering telling the fortune.
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  eightBall = 'It is certain';
  break;
}

// Logging to the terminal the Magic Eight's Answer.
console.log(eightBall);