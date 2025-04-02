function fibonacci(num) {
  let a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function fibonacciRecursive(num) {
  if (num <= 1) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

function fibonacciMemo(num, memo = {}) {
  if (num <= 1) return 1;
  if (memo[num]) return memo[num];

  return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
}
