/*
This small task helps to check the candidate’s understanding of this keyword. How it works, and how we can use it. Here is the code:
*/

const object = {
  name: 'John Cohnor',
  printName() {
    console.log(this.name);
  }
};

object.printName(); // what we will see here

const printName = object.printName;

printName(); // what we will se in console here


/*
There are 2 questions. What we will see in object.printName(). 
Here we call method printName, and as this is a point to object - the correct answer is John Cohnor . 
In the next line, we save our method to the new variable and then call it. 
And in this case, we will lose our context, and we will se undefined. 
To fix this case we can bind context in const printName = object.printName.bind(object) or we can use call/apply and call the function with the correct context printName.apply(object)
*/