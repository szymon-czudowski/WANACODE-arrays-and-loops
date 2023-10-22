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
        return str.split("").reverse().join("");
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
function getYoungestPerson(people) {
    if (people.length === 0) {
        return null;
    }
    let youngestPersonAge = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (people[i].age < youngestPersonAge) {
            youngestPersonAge = people[i].age;
        }
    }
    return youngestPersonAge;
}
function getOldestPerson(people) {
    if (people.length === 0) {
        return null;
    }
    let oldestPersonAge = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (people[i].age > oldestPersonAge) {
            oldestPersonAge = people[i].age;
        }
    }
    return oldestPersonAge;
}
function getAgeDifference(people) {
    const youngestAge = getYoungestPerson(people);
    const oldestAge = getOldestPerson(people);

    if (youngestAge !== null && oldestAge !== null) {
        return oldestAge - youngestAge;
    } else {
        return null;
    }
}