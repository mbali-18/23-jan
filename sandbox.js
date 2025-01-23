// For loop: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While loop: Print even numbers between 2 and 20
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// Do-While loop: Countdown from 5
let countdown = 5;
do {
    console.log(countdown);
    countdown--;
} while (countdown > 0);

// Factorial of 5 using a for loop
let factorial = 1;
for (let i = 5; i > 0; i--) {
    factorial *= i;
}
console.log("Factorial of 5:", factorial);

// Nested loop: Multiplication table from 1 to 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " x " + j + " = " + i * j);
    }
}

// For loop with an array of numbers
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Break statement: Stop the loop when number 7 is found
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// Continue statement: Skip number 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum from 1 to 100:", sum);

// For-in loop: Iterating through an object
let person = { name: "Mbali", age: 22, country: "South Africa" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);
