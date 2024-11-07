/* On the first value, I passed 0 for because array indexing in JavaScript starts at 0. */

let myArray = [10, 20, 30, 40, 50];

console.log(myArray[0]);

/* For the last value, I used myArray.length - 1 because myArray.length gives the total number of elements, and subtracting 1 gets the index of the last element. */

console.log(myArray[myArray.length - 1]);

for (let i = 0; i < myArray.length; i++) { console.log(myArray[i]);
}
/*The new values appear at the end of the array because push() adds elements to the end. */

myArray.push(60, 70, 80, 90, 100); console.log(myArray);

/* The last three elements (100, 90, 80) were removed from the array because pop() removes the last element. */

myArray.pop(); myArray.pop(); myArray.pop(); console.log(myArray);

let myString = "Welcome2thedungeon"; console.log(myString.length); // Output: 17