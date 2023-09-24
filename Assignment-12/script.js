//Counting Vowels in string
const inputString = "Hello, World!";
const vowels = ["a", "e", "i", "o", "u"];
let count = 0;
let foundVowels = [];

function countVowels(string) {
  for (let letter of string) {
    if (vowels.includes(letter)) {
      count += 1;
      foundVowels.push(letter);
    }
  }
  console.log(`The Vowel Count is ${count} and the vowels are ${foundVowels}`);
}
countVowels(inputString);

// Finding Factorial of a number
function calculateFactorial(num) {
  let factorial = 1;
  for (let i = num; i >= 1; i--) {
    //console.log(i);
    factorial = factorial * i;
  }
  return factorial;
}
const number = 5;
const result = calculateFactorial(number);
console.log(`The factorial of ${number} is ${result}`);

//Calculating the Average of an Array of Numbers
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
let sum = 0;

const calculateAverage = (number) => {
  number.forEach((num) => {
    sum += num;
  });

  const average = sum / length;
  console.log(`The average sum of array is ${average}`);
};

calculateAverage(numbers);
