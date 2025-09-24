const { test, expect } = require('@jest/globals');
const { MyHashSet } = require('./index');


test('test 1', () => {
  const myHashSet = new MyHashSet();

  myHashSet.add(1);      // set = [1]
  myHashSet.add(2);      // set = [1, 2]
  expect(myHashSet.contains(1)).toEqual(true);
  expect(myHashSet.contains(3)).toEqual(false);

  myHashSet.add(2);      // set = [1, 2]
  expect(myHashSet.contains(2)).toEqual(true);

  myHashSet.remove(2);   // set = [1]
  expect(myHashSet.contains(2)).toEqual(false);
});


test('test 2', () => {
  // Input commands
  const commands = ['MyHashSet','remove','add','remove','add','add','remove','add','contains','add','contains','add','contains','remove','remove','contains','add','add','add','add','contains','remove','contains','contains','remove','add','contains','add','add','contains','add','add','add','add','add','contains','add','add','remove','add','contains','add','add','add','add','remove','add','contains','add','add','add','add','remove','remove','contains','contains','add','contains','contains','add','contains','remove','contains','contains','remove','add','add','add','contains','add','contains','add','add','add','add','add','contains','contains','remove','contains','add','remove','add','add','add','contains','add','add','add','add','add','add','remove','add','contains','add','add','add','contains','add','add'];

  // Input arguments (must match commands, each element is an array)
  const args = [[],[1],[9],[24],[53],[84],[90],[34],[9],[39],[84],[18],[9],[2],[34],[18],[68],[93],[62],[24],[76],[15],[88],[46],[32],[56],[62],[68],[99],[9],[69],[74],[55],[91],[21],[83],[43],[47],[91],[17],[16],[3],[2],[29],[15],[59],[54],[2],[86],[18],[30],[69],[66],[15],[76],[55],[1],[87],[52],[61],[84],[23],[61],[19],[99],[33],[63],[72],[45],[92],[72],[7],[29],[74],[0],[97],[63],[92],[85],[0],[83],[17],[32],[35],[91],[80],[95],[75],[18],[18],[38],[43],[14],[40],[46],[25],[42],[99],[47],[57],[25]];

  // Simulation
  let obj = null;
  const output = [];

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    const arg = args[i];

    if (cmd === 'MyHashSet') {
      obj = new MyHashSet(...arg);
      output.push(null);
    } else {
      const result = obj[cmd](...arg);
      output.push(result === undefined ? null : result);
    }
  }
});