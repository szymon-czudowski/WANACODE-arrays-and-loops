// Exercise 1 - getTheSmallestNumber function

function getSmallestNumber(arr) {
        const sortedArr = arr.slice().sort((a, b) => a - b);
        return sortedArr[0];
}

getSmallestNumber([2, -5, 10, 1, 4]);
getSmallestNumber([200, 25, 4, 123, 87]);

function getSmallestNumberByLoop (arr) {
        let smallestNumber = arr[0];
        for (let i = 0; i < arr.length; i++) {
                if(arr[i] < smallestNumber ) {
                        smallestNumber = arr[i]
                }
        }
        return smallestNumber;
}

getSmallestNumberByLoop([2, -5, 10, 1, 4]);
getSmallestNumberByLoop([200, 25, 4, 123, 87]);

// Excercise 2 - write the getSquaredNumbers function - don't modify the array passed as an argument

function getSquaredNumbers(arr) {
        const squaredArray = [];
        for (let i = 0; i < arr.length; i++) {
                squaredArray.push(arr[i] * arr[i]);
        }
        return squaredArray;
}

// Excercise 3 - write the getReversedString function

function getReversedString(str) {
        return str.split("").reverse();
}
getReversedString("Hello")

// Excercise 4 - Write the isPalindrome  function.
// Inside the isPalindrome  function, call the getReversedString  function.
// It should be case-insensitive and shouldn't take spaces into consideration.

function isPalindrome(str) {
        function getReversedString(str) {
                return str.split("").reverse();
        }
        return getReversedString(str.toLowerCase()) === str.toLowerCase();
}

// Excercise 5 - Write the countLetters function.
// It should return an object representing the number of letters in the given text.
// Ignore spaces and make sure your function is case-insensitive.

function countLetters(text) {
        const cleanText = text.replace(/\s/g, '').toLowerCase();
        const letterCount = {};

        for (let i = 0; i < cleanText.length; i++) {
                const char = cleanText[i];
                if (/[a-z]/.test(char)) {
                        letterCount[char] = (letterCount[char] || 0) + 1;
                }
        }
        return letterCount;
}
// Exercise 6 - Write the getAgeDifference function that finds the difference between the youngest and oldest person.
// Inside of the getAgeDifference function call the getYoungestPerson
// and getOldestPerson functions that you write yourself.
// Function to get the youngest person's age

function getYoungestPersonAge(people) {
        if (people.length === 0) {
                return null;
        }
        let youngestPersonAge = people[0].age;
        for (let i = 0; i < people.length; i++) {
                if (people[i].age < youngestAge) {
                        youngestAge = people[i].age;
                }
        }
        return youngestPersonAge;
}

function getOldestPersonAge(people) {
        if (people.length === 0) {
                return null;
        }
        let oldestPersonAge = people[0].age;

        for (let i = 0; i < people.length; i++) {
                if (people[i].age > oldestAge) {
                        oldestPersonAge = people[i].age;
                }
        }
        return oldestPersonAge;
}
function getPeopleAgeDifference(people) {
        const youngestAge = getYoungestPersonAge(people);
        const oldestAge = getOldestPersonAge(people);
        return oldestAge - youngestAge;
}

// CODEWARS TASKS
//https://www.codewars.com/kata/5715eaedb436cf5606000381
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
        let sum = 0;
        arr.forEach(function(num) {
                if (num > 0) {
                        sum += num;
                }
        });
        return sum;
}

//https://www.codewars.com/kata/515e271a311df0350d00000f
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
        let squaredSum = 0;
        for (let i = 0; i < numbers.length; i++){
                const squaredNumbers = numbers[i]*numbers[i];
                squaredSum += squaredNumbers;
        }
        return squaredSum;
}

//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F
function abbrevName(name){
        const separatedName = name.split(" ");
        const firstName = separatedName[0];
        const lastName = separatedName[1];
        const firstNameLetter = firstName[0];
        const lastNameLetter = lastName[0];
        return firstNameLetter.toUpperCase() + "." + lastNameLetter.toUpperCase();
}

//https://www.codewars.com/kata/54edbc7200b811e956000556
//Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
        let sheepCount = 0;
        for (let i = 0; i < sheep.length; i++) {
                if(sheep[i] === true) {
                        sheepCount++;
                }
        }
        return sheepCount;
}

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
        const arrayOfNumbers = Array.from(String(n), Number);
        return arrayOfNumbers.reverse();
}

//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
//Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
        for (let i = 0; i < haystack.length; i++) {
                if(haystack[i] === "needle") {
                        return `found the needle at position ${i}`
                }
        }
}

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e
//Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
        return x.map(function(item) {
                return item * 2;
        })
}

//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
        return array.map(n => n * (-1));
}

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
//
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
        let arraySum = 0;
        for (let i = 0; i < numbers.length; i++) {
                arraySum += numbers[i];
        } return arraySum;

}

//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
//create the getArraySum function that sums the elements of a single array and use it in the arrayPlusArray function
//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.
function arrayPlusArray(arr1, arr2) {
        function getArraySum(arr) {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                        sum += arr[i];
                }
                return sum;
        }
        const sum1 = getArraySum(arr1);
        const sum2 = getArraySum(arr2);
        return sum1 + sum2;
}

//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
        let sheepNumberResult = "";

        if (num === 0 ) {
                return "";
        } else {
                for (let i = 1; i <= num; i++) {
                        sheepNumberResult += i + " sheep...";
                }
        }
        return sheepNumberResult;
}

//https://www.codewars.com/kata/563e320cee5dddcf77000158
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.

function getAverage(marks){
        let marksSum = 0;
        for (let i = 0; i < marks.length; i++) {
                marksSum += marks[i];
        }
        return Math.floor(marksSum / marks.length);
}

//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
//You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//
// For example(Input --> Output):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
        const monkeyArrayCount = [];
        for (i = 1; i <= n; i++) {
                monkeyArrayCount.push(i);
        }
        return monkeyArrayCount;
}
