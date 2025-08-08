// Joe Goode - M1.2 Exercise 1: Celsius to Fahrenheit

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


// M1.2 Exercise 2: Largest of three numbers
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