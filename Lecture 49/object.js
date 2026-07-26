
//Dynamic Nature: Object
let obj = {
    age: 12,
    wt: 68,
    ht: 180
};

console.log(obj);
obj.color = 'white';
console.log(obj);

//Object Cloning
//There are three ways of object cloning: 
//1. spread operator (...)Example: let src={age:12} let data={...age}


let src = {
    age: 12,
    wt: 68,
    ht: 180
};

let dest = { ...src };
let dest = src //same output
src.age = 90;
console.log("Src:", src);
console.log("Dest:", dest);


//2. Assign: dest=object.assign ({}, src)
//Using Assign how to clean object method
let src = {
    age: 12,
    wt: 68,
    ht: 180
};
let src2 = {
    value: 101,
    name: "Bharti Prajapati"
}


let dest = Object.assign({}, src, src2);

src.age = 90;
console.log("Src:", src);
console.log("Dest:", dest);


//3. Iteration: object: {age:12, wt:90,ht:180};
//
let src = {
    age: 12,
    wt: 68,
    ht: 180
};

let dest = {};

//cloning using iteration
for (let key in src) {
    // console.log(key);
    let newKey = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone
    dest[newKey] = newValue
}
src.age = 90;
console.log("Src:", src);
console.log("Dest:", dest);

//Garbage Collector: in c++ heap memory create, not deallocate
//in JavaScript: Garbage Collector: not free memory whose not usable in
//GC is a memory management tool, jiska prime focus ye hai ek asi memory jo use mai nhi hai, free karaata hai
//  performance improve karaata hai and memory leak se Save karta hai, this is Garbage Collector.
//no control
//run in background





