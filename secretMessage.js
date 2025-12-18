/*
Secret Message

Using array methods, you will transform an array of strings into a secret message!
*/

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// .pop() method: this method will remove the last string of thi array "JavaScript".
secretMessage.pop();
// console.log(secretMessage);

// .length() property: this method will help me to check the number of strings in this array.
console.log(secretMessage.length);

// .push() method: this method is used to add elements to the end of an array.
secretMessage.push('to', 'Program');
// console.log(secretMessage);

// Updating elements in an array.
secretMessage[7] = 'right';
console.log(secretMessage);

// .shift() method: this methods removes the first element from an array.
secretMessage.shift();
// console.log(secretMessage);

// .unshift() method: this method adds a element to the very beggining of an array.
secretMessage.unshift('Programming');
// console.log(secretMessage);

// .splice() method: this method can remove multiple elements and add a new element at a specific index in the array. 
secretMessage.splice(6, 5, 'know');
// console.log(secretMessage);

// .join() method: this method combines all elements of an array into a single string.
console.log(secretMessage.join(' '));

