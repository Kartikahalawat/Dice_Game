var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var srcImg1 = "images/dice" + randomNumber1 + ".png";
var srcImg2 = "images/dice" + randomNumber2 + ".png";


document.querySelector(".img1").setAttribute("src", srcImg1);
document.querySelector(".img2").setAttribute("src", srcImg2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}