//Function

// Syntax: function functionname(Parameter)
// {

// }


// Function definition
// function sayMyName() {
//     console.log("Bharti Prajapati")
// }

// Function call
// sayMyName();


// Print Counting
// function printCounting() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// printCounting();


// function printNumber(num) {
//     console.log("Printing Number:", num);
// }

// printNumber(5);

// function getAverage(num1, num2) {
//     let avg = (num1 + num2) / 2;
//     console.log(avg);
// }
// getAverage(3, 70);

// Return Functions
// function getSum(a, b, c) {
//     let sum = a + b + c;
//     return sum; //return ek asa keyword hai jo functions ke ander focus karta hai
// ki jis bhi person ne function call kiya hai usko mai apne aage jo value likhi gyi hai vo return ker dunga.
// }

// let ans = getSum(1, 2, 3);
// console.log('Printing Sum:', ans);


// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;

//     //Unreachable statements
//     // let a = 10;
//     // let b = 15;
//     // let sum = a + b;
//     // console.log(sum);
// }
// // let getName = getMyName("Bharti", "Prajapati");
// let getName = getMyName(7, 7);
// console.log("My Name is:", getName);


// Function Expression
// const getMultiplication = function (a, b) {
//     return a * b;
// }
// let ans = getMultiplication(2, 20);
// console.log(ans);

// function squareNumber(num){
//     let ans=num**2;
//     return ans;
// }
// let squareNumber = function (num) {
//     let ans = num ** 2;
//     return ans;
// }
// let ans = squareNumber(5);
// console.log(ans);

// ARROW FUNCTION:

// function getExp(x, y) {
//     let ans = x ** y;
//     return ans;
// }
// console.log(getExp(2, 10));

// let getExp = function (x, y) {
//     let ans = x ** y;
//     return ans;
// }
// console.log(getExp(2, 10));

//Arrow function
// let getExp = (x, y) => {
//     let ans = x ** y;
//     return ans;
// }
// console.log(getExp(2, 10));


//Practice Code
// function myName() {
//     console.log("Bharti Prajapati");
// }

// myName();

// function usingLoop() {
//     for (let i = 15; i > 0; i--) {
//         console.log(i);
//     }



// }
// usingLoop();

// function greet(name) {
//     console.log("Hello My Name is :" + name);
// }
// greet("Bharti Prajapati");

function greet(name = 'Bharti') {
    console.log("Hello My name is : " + name);
}
greet();
greet("Shivam");