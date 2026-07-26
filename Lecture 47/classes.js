// console.log("My Name is Bharti Prajapati")

// classes: a blueprint
// class Human {
//     //Property
//     age = 14;//by default public
//     #wt = 80;//private
//     ht = 180;





//     //Behaviour

//     walking() {
//         console.log("I am Walking", this.#wt);
//     }

//     running() {
//         console.log("I am running");
//     }
// }

// let obj = new Human();
// console.log(obj.age);
// // console.log(obj.#wt);

// obj.walking();
// obj.running();




//private field ko class ke ander access karna possible nhi hai
// class 
// {
// #age;

// }

//getter and setter : class ke bahar access karne ke liiye hum getter and setter ka use karte hai


// class Human {
//     //Property
//     age = 14;//by default public
//     #wt = 80;//private
//     ht = 180;





//     //Behaviour

//     walking() {
//         console.log("I am Walking", this.#wt);
//     }

//     running() {
//         console.log("I am running");
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;

//     }
// }

// let obj = new Human();
// console.log(obj.age);
// // console.log(obj.#wt);

// obj.walking();
// obj.running();


//Constructor 
// class Human {
//     //Property
//     age;//by default public
//     #wt = 80;//private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }



//     //Behaviour

//     walking() {
//         console.log("I am Walking", this.#wt);
//     }

//     running() {
//         console.log("I am running");
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;

//     }
// }

// let obj = new Human(50, 190, 90);
// console.log(obj.fetchWeight);

// obj.walking();
// obj.running();

//Default Parameter:  allow to use functions with default value 
// function sayName(myName) {
//     console.log("My Name is:", myName);
// }

// sayName(); //output : undefined because hamne koi value hi nhi di 

// function sayName(myName) {
//     console.log("My Name is:", myName);
// }

// sayName("Bharti Prajapat"); // output show my name is: Bharti prajapati


//now using default parameter value
// function sayName(myName = "Shivam") { //default value show value when we give not value to function
//     console.log("My Name is:", myName);
// }

// sayName();

// function sayName(fName = "Shivam", lName = "Mogamboo") {
//     console.log("My Name is:", fName, " ", lName);
// }
// // sayName("Bharti", "Prajapati")
// sayName();

// function sayName(fName = "Shivam", lName = fName.toUpperCase()) {
//     console.log("My Name is:", fName, " ", lName);
// }
// // sayName("Bharti");
// // sayName("Prajapati");
// sayName();


// function solve(value) {
//     console.log("Hello Jii", value);
// }

// solve(15);
// solve("Bharti Prajapato");


//to create object
// function solve(value = { age: 15, wt: 90, ht: 190 }) {
//     console.log("Hello Jii", value);
// }

// // solve(15);
// // solve("Bharti Prajapato")
// solve();

//to create array
// function solve(value = [12, 43, 'bharti']) {
//     console.log("Hello Jii", value);
// }

// // solve(15);
// // solve("Bharti Prajapato")
// solve();

//null and undefined

function solve(value = 'Bharti') {
    console.log("HELLo JII ->", value);
}
solve(undefined);

//default parameter mai function 

function getAge() {
    return 190;
}

// function utility(name, age) {
//     console.log(name, " ", age);
// }
// // utility("Bharti", 20);
// utility(); //output:undefined
// utility("Bharti");

function utility(name = "Bharti", age = getAge()) {
    console.log(name, " ", age);
}

utility();

