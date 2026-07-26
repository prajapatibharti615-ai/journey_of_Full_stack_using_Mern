// Loop:what? - set of instruction- repeatedly execute then use loop.
// Issue: Bulky, Buggy, maintability
// Three Fundamentals loop
// 1. for Loop
// 2. while Loop
// 3. do-while loop

// for loop
// Syntax: for(initialization;condition ;updation ;)
// {
// Loop Logic
// }

// Ten times Bharti Print
//Dry Run
// for (let i = 1; i <= 10; i++) {
//     console.log("Bharti Prajapti")
// }


// Print Counting: 1 to 5
// for (let i = 1; i <= 5; i++) {
//     console.log("Counting", i);
// }

// Reverse Counting
// for (let i = 5; i > 0; i--) { //i=i-1, --i
//     console.log(i);
// }

//Keyword: Break and continue
//Break: reach- iteration when quick stop,
// for (let i = 1; i <= 6; i++) {
//     if (i == 4) {
//         break;

//     }
//     else {
//         console.log(i);
//     }
// }

// Continue:continue- skip current-iteration and go next iteration without skipping.
// for (let i = 1; i <= 4; i++) {
//     if (i == 3) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }


//While Loop:
//Syntax of While Loop:
// initialisation
// while(condition)
// {
// loop logic
// updation

// }


// let i = 1;
// while (i <= 10) {
//     console.log("Bharti");
//     i++;
// }


// Counting Printing
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// Reverse Counting using while loop
// let i = 10;
// while (i > 0) {
//     console.log(i);
//     --i;
// }

// let i = 1;
// while (i < 5) {
//     if (i == 3)
//         break;
//     else
//         console.log(i);
//     i++;
// }

// let i = 1;
// while (i < 5) {
//     if (i == 3) {
//         i++; //add for reduce infinite loop
//         continue;
//     }
//     else {
//         console.log(i)
//     }
//     i++;
// }

// do-while loop
// let i = 1;
// do {
//     console.log("bharti");
//     i++;
// } while (i <= 10);

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i < 6);

// let i = 5;
// do {
//     console.log(i);
//     --i;
// } while (i > 0);


// Strings : sequence of character
// "Bharti" "B" " "  ''

// let firstName = "bharti";
// let lastName = 'prajapat';
// console.log(typeof (firstName));

// let firstName = "bharti genious"; //not next line double and single commans
// let lastName = 'prajapat';
// let nameMy = `Bharti Prajapati
// BCA SStudent.`
// console.log(firstName);
// console.log(nameMy);


// let namemy = new String("Bharti Prajapati");
// console.log(namemy);

//Homework: difference between both strings print ways

// Operation of string:
// - Concatenation
// - substring
// - length
// - uppercasse
// - lowercase
// - location

// let op1 = 'English ';
// let op2 = 'HINDI';

// let ans = op1 + op2;
// console.log(ans);

// let finalAns = `op1+op2`;
// let finalAns = `${op1}${op2}`;
// console.log(finalAns);

// console.log(op2.length);//find lenght
// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase());


// Substring
// let str = "Babbar";
// // console.log(str.substring(2));

// console.log(str.substring(2, 4));

// let sentence = "Hello Jee Kaise ho saare";
// let words = sentence.split(' ');
// console.log(words);






