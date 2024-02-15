

function getRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);


    var color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
}

function changeColor() {

    var divElement = document.querySelector(".color-div");

    var randomColor = getRandomColor();

    divElement.style.backgroundColor = randomColor;
    // console.log(randomColor);
}
