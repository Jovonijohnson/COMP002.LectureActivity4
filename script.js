/* On the first value, I passed 0 for because array indexing in JavaScript starts at 0. */

let myArray = [10, 20, 30, 40, 50];

console.log(myArray[0]);

/* For the last value, I used myArray.length - 1 because myArray.length gives the total number of elements, and subtracting 1 gets the index of the last element. */

console.log(myArray[myArray.length - 1]);

for (let i = 0; i < myArray.length; i++) { console.log(myArray[i]);
}
