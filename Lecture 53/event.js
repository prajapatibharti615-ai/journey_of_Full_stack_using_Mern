
function changeText() {
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Bharti"


}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);


// Second method to addEventListener but not good
let fpara = document.getElementById('fpara');

fpara.addEventListener('click', function changeText() {
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Bharti"


});

//For removeEventListener
fpara.removeEventListener('click', changeText);

//phases of Event 
// 1. capturing phase
// 2. at-target phase
// 3. bubbling phase
//addEventListener(): by default: bubbling phase mai add ho rha hota hai
//if we change convert in capturing phse; true-usecapture

//Event Object: 

function changeText() {
    console.log(event);//to check event in addEventlistener event object example
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Bharti"


}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

//Default Action:
//<a> - anchor tag: click: default behavior
//change anchor tag ka defualt behaviour using event.preventDefault();
let anchorElement = document.getElementById('fanchor');
anchorElement.addEventListener('click', function (event) {
    event.preventDefault();
    anchorElement.textContent = 'Click done bhai'

});

//Avoiding too many listener: 
let paras = document.querySelectorAll('p');
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', function () {
        alert("You Have Clicked on Para:" + (i + 1));

    })
}

console.log("Hii")
// let paras = document.querySelectorAll('p');

// function alertPara(event) {
//     alert("You have clicked on para:" + event.target.textContent);
// }
// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }


function alertPara(event) {
    if (event.target.nodeName == 'SPAN') { //conditonal behaviour
        alert("You have clicked on para:" + event.target.textContent);

    }
}

let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara)


