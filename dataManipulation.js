// Task 2: Data Manipulation

const sumArrayIntegers = (arr) => {

   if(!Array.isArray(arr)){
    throw new Error('Input must be an array of integers.');
   }
   
   const sum = arr.reduce((acc, num) => {
    if (!Number.isInteger(num)) {
      throw new Error('Array must contain only Integers.');
    }
    return acc + num;
  }, 0);

  return sum;

};

// Example usage:'
const integersArray = [1, 2, 3, 4, 5];
const result = sumArrayIntegers(integersArray);
console.log('Sum:', result); // Output: Sum: 15