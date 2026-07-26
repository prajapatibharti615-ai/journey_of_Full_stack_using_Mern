// console.log("~Bharti Prajapati"); //


//Common In-built Objects in JS
//Math: object 

console.log("The value of Pi:", Math.PI);

console.log("The Maximum value is:", Math.max(45, 656, 4, 3, 43434, 232321, 443, 76484));

console.log("The Minimum value is:", Math.min(45, 656, 4, 3, 43434, 232321, 443, 76484));
console.log("The Round Value is:", Math.round(1.4));

console.log("The smallest value of the decimal value is:", Math.floor(1.9));
console.log("The greatest value of the decimal value is:", Math.ceil(1.9));

console.log(Math.abs(-5));
console.log("The Random value is:", Math.random());
console.log(Math.sqrt(5));
console.log(Math.pow(4, 5));

console.log(Math.pow(2, 5));
console.log(Math.pow(2, 10));




//Date Object : date and time, Year and month, week. 
let curr = new Date();
// console.log(curr);

let date = new Date('June 20 1998 07:15');
console.log(date);

//parameter format
let newDate = new Date(1998, 5, 22, 7);
console.log(newDate);

// newDate.getMonth
console.log(newDate.getDay());
console.log(newDate.getFullYear());

//set function 
console.log(newDate.setFullYear(2005));

console.log(newDate);