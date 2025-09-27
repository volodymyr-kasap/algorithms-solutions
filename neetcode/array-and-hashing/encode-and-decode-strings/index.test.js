const { Solution } = require('./index');

test('test 1', () => {
  const solution = new Solution();

  const input = ['neet','code','love','you'];


  const encoded = solution.encode(input);
  const result = solution.decode(encoded);

  expect(result).toEqual(['neet','code','love','you']);
});

test('test 2', () => {
  const solution = new Solution();

  const input = ['we','say',':','yes'];


  const encoded = solution.encode(input);
  const result = solution.decode(encoded);

  expect(result).toEqual(['we','say',':','yes']);
});

test('test 3', () => {
  const solution = new Solution();

  const input = [];


  const encoded = solution.encode(input);
  const result = solution.decode(encoded);

  expect(result).toEqual([]);
});



test('test 3', () => {
  const solution = new Solution();

  const input = ['test_', '3'];


  const encoded = solution.encode(input);
  const result = solution.decode(encoded);

  expect(result).toEqual(['test_', '3']);
});

test('test 4', () => {
  const solution = new Solution();

  const input = ['test###', '4'];


  const encoded = solution.encode(input);
  const result = solution.decode(encoded);

  expect(result).toEqual(['test###', '4']);
});

