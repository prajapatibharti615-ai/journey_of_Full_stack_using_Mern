let box = document.getElementById("box");
let button = document.getElementById("fbutton");

let width = 100;
button.addEventListener('click', function () {

    width += 100;
    if (width > 400) {
        width = 100;
    }

    box.style.width = width + "px";

});


let box2 = document.getElementById('box2');
let colorButton = document.getElementById('colorbtn');

colorButton.addEventListener('click', function () {

})


