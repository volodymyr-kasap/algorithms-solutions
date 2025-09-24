const { test, expect } = require('@jest/globals');
const { MyHashMap } = require('./index');


test('test 2', () => {
  // Input commands
  const commands = ['MyHashMap','put','put','get','get','put','get','remove','get'];
  // Input arguments (must match commands, each element is an array)
  const args = [[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]];

  // Simulation
  let obj = null;
  const output = [];

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    const arg = args[i];

    if (cmd === 'MyHashMap') {
      obj = new MyHashMap(...arg);
      output.push(null);
    } else {
      const result = obj[cmd](...arg);
      output.push(result === undefined ? null : result);
    }
  }
});