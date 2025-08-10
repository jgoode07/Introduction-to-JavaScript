'use strict';

// --------------------------- M1.2 Exercise 1: Celsius to Fahrenheit ---------------------------

// --- Celsius to Fahrenheit ---
// Ask the user for a number and store it as Celsius
let celsius = parseFloat(prompt("Enter a temperature in Celsius:", ""));

// Convert Celsius to Fahrenheit
let fahrenheitFromC = (celsius * 9/5) + 32;

// Output result using string concatenation and one decimal place 
console.log(celsius.toFixed(1) + " Celsius is " + fahrenheitFromC.toFixed(1) + " Fahrenheit");

// --- Fahrenheit to Celsius ---
// Ask the user for a number and store it as Fahrenheit
let fahrenheit = parseFloat(prompt("Enter a temperature in Fahrenheit:", ""));

// Convert Fahrenheit to Celsius
let celsiusFromF = (fahrenheit - 32) * 5/9;

// Output result using string concatenation and one decimal place
console.log(fahrenheit.toFixed(1) + " Fahrenheit is " + celsiusFromF.toFixed(1) + " Celsius");


// --------------------------- M1.2 Exercise 2: Largest of three numbers ---------------------------
// Note: This doesn't check for duplicate numbers or handle cases where nothing is entered.

// Ask the user for three numbers and store them as numbers
let a = parseFloat(prompt("Enter the first number:", ""));
let b = parseFloat(prompt("Enter the second number:", ""));
let c = parseFloat(prompt("Enter the third number:", ""));

// Assign the largest number to a variable
let largest;

// Compare the numbers using if-else statements and logical AND (&&) operators
if (a > b && a > c) {
    largest = a;
} else if (b > a && b > c) {
    largest = b;
} else {
    largest = c;
}

// Output result using string concatenation
console.log("The largest number is " + largest);


// --------------------------- M1.2 Exercise 3: Odd numbers from 1 to 50 ---------------------------

// Loop through numbers starting from 1 to 50
for (let i = 1; i <= 50; i++) {
   // Check if the number is odd using the modulus/remainder operator and strict NOT equals
    if (i % 2 !== 0) {
        console.log(i);  // Output each odd number to the console
    }
}


// --------------------------- M1.2 Exercise 4: Millionaire savings account ---------------------------

// Initialize variables 
let balance = 500; // starting balance - hard coded
let yearsTo100k = 0;
let yearsToMillion = 0;
let year = 0;

// Loop until balance reaches 1 million
while (balance < 1000000) {
    balance *= 2; // double the balance each year
    year++; // Increment year after each iteration

    // Records the year it first reaches 100k
    if (balance >= 100000 && yearsTo100k === 0) {
        yearsTo100k = year;
    }
}

// After loop ends, total years is yearsToMillion
yearsToMillion = year;

// Output the results
console.log("Years to reach $100,000: " + yearsTo100k);
console.log("Years to reach $1,000,000: " + yearsToMillion);