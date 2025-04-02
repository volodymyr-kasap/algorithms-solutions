const { flatObjectKeys } = require('./index');
const { test, expect } = require('@jest/globals');


test('flatObjectKeys', () => {
  const r = flatObjectKeys({
    a: 1,
    b: 2,
    c: {
      ca: 4,
      cb: 5,
      cc: {
        ccc: 6,
        cbb: 7
      },
    },
  });

  expect(r).toEqual([
    'a',   'b',   'c',
    'ca',  'cb',  'cc',
    'ccc', 'cbb',
  ])
});
