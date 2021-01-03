/*Multiply
Create a function that multiples a number by another number.
Rework the syntax of the function declaration so that is uses the arrow function shorthand(browse the internet for what an arrow function is).
Write a function that accepts two numbers and validate that they are numbers.*/

function isANumber(num) {
  return typeof num === "number";
}

function areNumbers(num1, num2) {
  return isANumber(num1) && isANumber(num2);
}

function Multiply(a, b) {
  if (!areNumbers(a, b)) throw Error("The functions accepts only numbers");
  return a * b;
}

//console.log(Multiply(3,6));

Multiply = (a, b) => {
  if (!areNumbers(a, b)) throw Error("The functions accepts only numbers");
  return a * b;
};
console.log(Multiply(4, 5));

/*Exponent
Create a function named exponent that takes two numbers as parameters. 
The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function.
 Is this possible? Why/Why not? Comment your answer in the index.js file.
*/

function exponent(num1, num2) {
  let result = 1;
  for (let index = 1; index <= num2; index++) {
    result = result * num1;
  }
  return result;
}
console.log(exponent(3, 5));

/*Add Up. Create a function that takes an integer as an argument. 
//Add up all the integers from 1 to the integer you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300 */

function Addup(int) {
  let result = 0;
  for (let index = 1; index <= int; index++) {
    result = result + index;
  }
  return result;
}
console.log(Addup(600));

/*Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
Examples:
sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0
*/

/* String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
Examples:
isStrStartOfWord("bu", "button") ➞ true
isStrStartOfWord("tri", "triplet") ➞ true
isStrStartOfWord("beau", "pastry") ➞ false */

function isStrStartOfWord(str, word) {
  return word.startsWith(str);
}
console.log(isStrStartOfWord("ki", "kinjal"));

/*
Less Than or Equal to Zero? Create a function that takes a number as its only argument 
and returns true if it's less than or equal to zero, otherwise return false.
Examples:
isLEQZero(3) ➞ false
isLEQZero(0) ➞ true
isLEQZero(-4) ➞ true
isLEQZero(10) ➞ false
*/

function lessThnOrEqualToZero(n) {
  return n <= 0;
}
console.log(lessThnOrEqualToZero(9));

/*
Count Occurrences. Create a function that accepts two arguments: a string and a letter. 
The function should count the number of occurrences of that letter in the string.
Example:
countOccurrences("this is a string", "i") ➞ 3
*/

function char_count(str, letter) {
  var letter_Count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("kinjal nayan mysha", "a"));
