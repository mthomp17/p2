/*
    CIT 281 Project 1
    Name: Mallory Thompson
*/

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
    }
    console.log(result);

/*
Create a new function getRandomLetter() that will return a single, random, lowercase letter. Note the following about this function:

This function will also include the alphabet constant.
Include a single line comment above the function that documents the purpose/functionality of the function.
Update the for loop to call getRandomLetter().
*/
// This function first gets a random number between the letters of the alphabet, then returns it as a letter to the console log
function getRandomLetter() {
    let letter = parseInt((Math.random() * (122 - 97)).toFixed(0)) + 97; 
    return String.fromCharCode(letter);
}


console.log(getRandomLetter());
/*
getSortedString(string) that will return a string in ascending order (i.e., xpacd would return acdpx). Note the following about this function:

The function body MUST be a single line of code. How? Consider array methods.
Include a single line comment above the function that documents the purpose/functionality of the function.
*/

function getSortedString(sort){
    return sort.split('').sort().join('');
}
console.log(getSortedString(getRandomString(10,20)));