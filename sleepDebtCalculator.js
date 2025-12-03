/* Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll 
calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// Function 1: Determining how many hours of sleep I got each night of the last week.
function getSleepHours(day) {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 11;
    case 'friday':
      return 7;
    case 'saturday':
      return 8;
    case 'sunday':
    return 6;
  }
};

// Testing getSleepHours() function.
// console.log(getSleepHours('monday'));
// console.log(getSleepHours('tuesday'));
// console.log(getSleepHours('wednesday'));
// console.log(getSleepHours('thursday'));
// console.log(getSleepHours('friday'));
// console.log(getSleepHours('saturday'));
// console.log(getSleepHours('sunday'));

// Function 2: This function helps us to get the total hours that I actually slept.
const getActualSleepHours = () => 
getSleepHours('monday') + 
getSleepHours('tuesday') + 
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday');

// Function 3: This function will help us get the ideal sleep hours I prefer. 
function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
};

// Testing getidealSleepHours() function.
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

// Function 4: This function will help us to calculate sleep debt.
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('I got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`I got ${actualSleepHours - idealSleepHours} hour(s) more sleep than I needed this week.`);
  } else {
    console.log(`I got ${idealSleepHours - actualSleepHours} hour(s) less sleep than I needed this week. I should get more rest.`);
  }
};

calculateSleepDebt();


