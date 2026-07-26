// function sayMyname(finalName) {
//     console.log(finalName);
// }
// sayMyname("Bharti");

// sayMyname("Bharti"); // function hoisting , jaha per function current scope ke ander shift ho jaye sabse top per.
// function sayMyname(finalName) {
//     console.log(finalName);
// }

//variable hoisting:

// console.log(age);
// var age = 25; //in variable hoisting only shift var age not assign the value.


//using let and const keyword




//using function expression : not work give refernce error.


// sayHello();
// function sayHello() {
//     console.log("Hello how are you");
// }


// sayhello();
// let sayhello = function () {
//     console.log("Hello How are you? "); //ReferenceError
// }


// Class hoisting: not possible in hoisitng


//function calls in javascript

// let greet = function () {
//     console.log("Greeting for the day");
// }

// greet();

//how to pass function

//why called first class citizen to function?
// function greetMe(greet, fullName) {
//     console.log("Hello", fullName);
//     greet();

// }
// function greet() {
//     console.log("Greeting for the day");
// }

// greetMe(greet, "Bharti Prajapati");

// function solve(number) {
//     return function (number) {
//         return number * number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);


//data structure ke ander store

//array of function
// const arr = [
//     function (a, b) {
//         return a + b;
//     },
//     function (a, b) {
//         return a - b;
//     },
//     function (a, b) {
//         return a * b;
//     }
// ];

// let first = arr[1];
// let ans = first(5, 10);
// console.log(ans);


// let obj = {
//     age: 25,
//     wt: 43,
//     ht: 180,
//     greet: () => {
//         console.log("Hello Shivam?");
//     }
// }
// console.log(obj.age);
// obj.greet();


