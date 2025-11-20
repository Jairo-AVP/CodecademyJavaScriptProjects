/*
Kelvin Weather
Deep in his mountainside meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However, there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, and then to Fahrenheit.
*/

// The variable below was assigned to the value of 293 kelvin degree. It also cannot be modified later on. 
const kelvin = 293;

// This variable will be used to convert kelvin to celsius degrees.
const celsius = kelvin - 273;

// This variable will be used to convert celsius to fahrenheit degrees.
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the Fahrenheit temperature and updating the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${kelvin} degrees Fahrenheit`);