//variable scope: global scope, function scope, block scope.

// global scope

// var keyword
// var age = 15;
// console.log(age);
// {
//     console.log(age);
// }
// if (true) {
//     console.log(age)
// }

// for (let i = 0; i < 2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("Hii", age);
// }
// sayHello();

// with let keyword
// let age = 15;
// console.log(age);
// {
//     console.log(age);
// }
// if (true) {
//     console.log(age)
// }

// for (let i = 0; i < 2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("Hii", age);
// }
// sayHello();


// with const keyword
// const age = 15;
// console.log(age);
// {
//     console.log(age);
// }
// if (true) {
//     console.log(age)
// }

// for (let i = 0; i < 2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("Hii", age);
// }
// sayHello();



// function scope
// function sayHello() {
//     var name = 'Earth'
//     console.log("Helo World", name);
// }

// sayHello();


// function sayHello() {
//     var fullname = 'Earth'
//     console.log("Helo World", fullname);
// }
// console.log(fullname);

// sayHello(); // not accesible var let and const keyword


// {
//     var height = 180;

// }
// console.log(height);


// //not accesible in outside using let keyword show error
// {
//     let age = 100;
// }
// console.log(age);


// //same with const keyword not accesible show error
// {
//     const age = 100;
// }
// console.log(age);


// Temporal Dead Zone in JS
// let marks = 100;
// console.log(marks);

// console.log(marks);//show reference error with let keyword
// let marks = 100;
// // console.log(marks);

// console.log(marks);//show reference error with const keyword
// const marks = 100;


// console.log(marks);
// console.log('Babbar');
// console.log("Bharti");
// const marks = 100; //Temporal dead zone
// console.log(marks);