



function changeText() {
    let myHeading = document.getElementById('fheading');
    fheading.textContent = "To See My Project" //text content
}

let myHeading = document.getElementById('fheading');
fheading.addEventListener('click', changeText);


function buttonTextchange() {
    let myButton = document.getElementById('fbutton');
    myButton.textContent = "Project1"
}
let myButton = document.getElementById('fbutton');
myButton.addEventListener('click', buttonTextchange);


function buttonColorchange() {
    let colorButton = document.getElementById('sbutton');
    colorButton.style.backgroundColor = "blue"
}
let colorButton = document.getElementById('sbutton');
colorButton.addEventListener('dblclick', buttonColorchange);

function buttonMouse() {
    let mouseButton = document.getElementById('tbutton');
    mouseButton.style.backgroundColor = 'magenta'


}
let mouseButton = document.getElementById('tbutton');
mouseButton.addEventListener('mouseover', buttonMouse);


function buttonMouseone() {
    let mouseButtonout = document.getElementById('fobutton');
    mouseButtonout.style.backgroundColor = 'yellow'


}
let mouseButtonout = document.getElementById('fobutton');
mouseButtonout.addEventListener('mouseout', buttonMouseone);