
var numbers = [78,45,98,56];

numbers.push(150); // appends new elements to the end of the array and returns new length of an array 
console.log(numbers);

numbers.pop(); // remove the last element from the array and returns it
console.log(numbers);

numbers.unshift(80); // insert new element at the start of the aeeay and returns the new length of an array
console.log(numbers);

numbers.shift(80); // remove the first element from an array and returns it. if the array is an empty, undefined is returned and the array is not defined
console.log(numbers);
