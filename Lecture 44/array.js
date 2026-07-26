// let obj = {

//     name: "Bharti Prajapati",
//     // "name": "Bharti Prajapati"// when we have space then use double inverted commans.
//     age: 25,
//     weight: 85,
//     height: "5ft 3inch",
//     greet: function () {
//         console.log("Hello, How are you?");
//     }

// };

// console.log(obj);
// obj.greet();

// console.log(typeof (obj))

//Homework: shallow copy and deep copy?

//arrays: collection of items/elements.
//syntax: [ ]
// arrays constructor
// creation of array

// let arr = [1, 2, 3, 4, 5];
// // console.log(arr);

// //array constructor:
// let brr = new Array('Bhart', 1, true);
// brr.push('Prajapati')
// brr.pop();
// brr.shift();
// brr.unshift("Bharti Prajapati");
// brr.push(20);
// brr.push(40);
// brr.push(70);

// // console.log(brr.slice(2, 4));

// brr.splice(1, 0, 'Shivam')
// console.log(brr);

// console.log(typeof (arr));

// console.log(typeof (brr));

// console.log(brr[0]);
// console.log(brr[1]);
// console.log(brr[2]);

// Built-in Methods: Push, pop, shift, slice, unshift, splice, map, filter, reduce, soft, indexof, find.
// Push method: insert at end
// pop method: remove last item
// shift method: remove first item
// unshift method: add - value left side mode mai

// splice - content change : insert, replace, remove

// map: arr[10,20,30]

// let arr = [10, 20, 30];

// arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })



// let ansArray = arr.map((number) => {
//     return number * number;

// })
// console.log(ansArray);


// filter Method:
// let arr = [10, 20, 30, 11, 21, 44, 51];
// let evenArray = arr.filter((number) => {

//     // return number % 2 == 0;

//     // if (number % 2 == 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// });
// console.log(evenArray)

// let arr = [1, 2, 'love', 'kunal', null];

// let ans = arr.filter((value) => {
//     // if (typeof (value) == 'string')
//     if (typeof (value) == 'number') {
//         return true;

//     }
//     else {
//         return false;
//     }
// })
// console.log(ans);


// Reduce: accumlator, current
// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;

// }, 0);
// console.log(ans);

// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();

// //homework: how to do sort in desecending order
// console.log(arr);
// console.log(arr.indexOf(9))

// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("Length:", length);


// //traditional loop
// for (let index = 0; index < length; index++) {
//     console.log(arr[index]);

// }

// arr.forEach((value, index) => {
//     console.log("Number:", value, "Index:", index);

// })

// for-in: enumarable property
// let obj = {

//     name: "Bharti Prajapati",
//     // "name": "Bharti Prajapati"// when we have space then use double inverted commans.
//     age: 25,
//     weight: 85,
//     height: "5ft 3inch",
//     greet: function () {
//         console.log("Hello, How are you?");
//     }

// };
// for (let key in obj) {
//     console.log(key, "", obj[key]);
// }

// for-of

// let arr = [10, 20, 30, 40];
// for (let value of arr) {
//     console.log(value);

// }

// let fullName = 'BhartiPrajapati';
// for (let val of fullName) {
//     console.log(val);
// }

// let arr = [10, 20, 30, 40, 50];
// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let index = 0; index < len; index++) {
//         sum = sum + arr[index];
//     }
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);

// let arr = [10, 20, 30, 40, 50];
// function getSum(arr) {
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }
// let totalSum = getSum(arr);
// console.log(totalSum);









