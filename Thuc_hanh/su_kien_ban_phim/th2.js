function upArrowPressed() {
    let element = document.getElementById("nobita").value;
    element.style.top = parseFloat(element.style.bottom) + 5 + 'px';
}
function downArrowPressed() {
    let element = document.getElementById("nobita").value;
    element.style.top = parseFloat(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.right) + 5 + 'px';
}
function rightArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';
}
function moveSelection(eve) {
    switch (eve.keyCode) {
        case 37: leftArrowPressed();
            break;
        case 39 :   rightArrowPressed();
            break;
        case 38 :   upArrowPressed();
            break;
        case 40 :   downArrowPressed();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSelection);
}
