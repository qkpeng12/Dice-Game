var imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function dice () {
var n = Math.random();
var m = Math.random();
n = n * 6;
m = m * 6;
n = Math.floor(n);
m = Math.floor(m);
return [n,m];
}

var j = dice();

// var newImg1 = imgArray[j[0]];
// var newImg2 = imgArray[j[1]];

document.querySelectorAll("img.dice-img")[0].setAttribute("src",imgArray[j[0]]);
document.querySelectorAll("img.dice-img")[1].setAttribute("src",imgArray[j[1]]);

if (j[0] > j[1] ) {
	document.querySelector("h1").innerText = "🚩Player 1 Wins";
} else if (j[0] < j[1] ) {
	document.querySelector("h1").innerText = "Player 2 Wins🚩";
}
else {
	document.querySelector("h1").innerText = "Please Draw Again";
}
