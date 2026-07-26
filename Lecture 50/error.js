// Compile time error
// syntax error
// console.log(1;


// runtime error
// console.log(x);

// Handling:how to  gracefully handle
// try catch block


// try {
//     console.log("try block starts here")
//     console.log(x);//reeference error
//     console.log("try block ends here")
// }
// catch (e) {
// define karte hai, error ke sath app kya karna chahte hai
// retry logic
// fallback mechanism
// logging
// custom error

//     console.log("I am inside catch block")
//     // console.log("Your Error is Here:", err)
// }

// // finally block: this will run everytime
// // try{//}
// // catch(e){//}
// // finally{//}
// // finally {
// //     console.log("I will run everytime, as i am finally block")
// // }

// Throw keyword

// try {
//     //reference error
//     console.log(x);
// }
// catch (err) {
//     throw new Error("Bhai Pahle declare karo, fhir print karna");
// }

// let errorCode = 100;
// if (errorCode == 100) {
//     throw new Error("Invalid Json")
// }