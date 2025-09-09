/*
This is a simple task, the main idea is to create logic that will reverse words in the target phrase. 
For example, we have this sentence: This is an example!. Reversed variant will be sihT si na !elpmaxe. 
Here we can check how the candidate knows arrays, and arrays methods.
*/

const reversePhrase = (str) => str.split(' ').map((item) => item.split('').reverse().join('')).join(' ');

module.exports = { reversePhrase };