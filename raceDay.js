/* 
Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners 
for the race and give them instructions on race day.


Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners 
are assigned a race number and start time based on their age and registration.

Race number:

- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.
- Start time:

- Adult registrants run at 9:30 am or 11:00 am.
  - Early adults run at 9:30 am.
  - Late adults run at 11:00 am.

- Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/


// Assign a random race number between 0 and 999.
let raceNumber = Math.floor(Math.random() * 1000);
 
// Set whether the runner registered ealry (true or false).
const registeredEarly = true;

// Set the runner's age.
const runnersAge = 18;

// If the runner is an adult and registered early, add 1000 to their race number.
if (runnersAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Determine race time and print instructions.
if (runnersAge > 18 && registeredEarly) {
  console.log(`Your race starts at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`Your race starts at 11:00 am. Your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`Your race starts at 12:30 pm. Your race number is ${raceNumber}`);
} else {
  console.log('Please go to the registration desk');
}
