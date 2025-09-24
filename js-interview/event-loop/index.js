/*
This is a theoretical task where we can ask for an order in which we will see logs. Let’s imagine that we have this piece of code:
*/


console.log('1');

setTimeout(function(){
  console.log('2');
}, 0);

function test() {
  console.log('3');
}

test();

Promise.resolve().then(function(){console.log('4');});

console.log('5');


/*
The correct order in console.log will be 1, 3, 5, 4, 2.
The first 3 numbers are easy. But then we will see 4.
This is because promise will be pushed to the microtasks queue in an event loop, and this queue has higher priority before macro tasks.
And finally in the end we have 2 in timeout.
*/
