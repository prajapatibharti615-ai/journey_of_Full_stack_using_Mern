//code 1

// const t1 = performance.now()
// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is  Para" + i;
//     document.body.appendChild(para);
// }


// const t2 = performance.now();
// console.log("Total time by code 1:" + (t2 - t1));

//performance.now() method: time stan
//js standard way to taking run: performance.now() output mai time stamp

//code2
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para" + i;
//     mydiv.appendChild(para);

// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log("Total time by code 2:" + (t4 - t3));

//Reflow: it is a process of calculating position/dimesion of element




//Repaint: It is a process of displaying content/element pixel by pixel, it is faster rather than reflow.

//Document Fragment: light weight document object 
//use: addition any element, : no reflow, no repaint

//best code
let Fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    //No reflow and no repaint for the below line
    Fragment.appendChild(para);

}
//The below line takes 1 reflow and 1 repaint
document.body.appendChild(Fragment);
