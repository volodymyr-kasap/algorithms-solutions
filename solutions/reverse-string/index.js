function reverse (str) {
  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString;
}

function reverse2 (str) {
  let reversedString = [];

  for (const character of str) {
    reversedString = character + reversedString;
  }

  return reversedString;
}

module.exports = {
  reverse,
}
