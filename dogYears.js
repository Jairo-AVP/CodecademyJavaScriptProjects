/*
Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in dog years to account for their growth compared to a human of the same age. In 
some ways, we could say that time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age 
into dog years.
*/

// This variable contains my actual age in 2025.
let myAge = 37;

// This variable will be used to calculate my dog age.
let earlyYears = 2;

earlyYears *= 10.5;

// Subtracting the value of 2 to myAgen variable.
let laterYears = myAge - 2;

// Calculating my later dog years.
laterYears *= 4;

// Printing my current work so far.
console.log(earlyYears);
console.log(laterYears);

// This sis variable holds my age in dog years.
let myAgeInDogYears = earlyYears + laterYears;

// Applying the .toLowerCcase() method to myName variable.
let myName = 'Jairo'.toLowerCase();

// Printing the calculation to the console with a string in it.
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);