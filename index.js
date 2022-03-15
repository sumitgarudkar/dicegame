var randomNumber1 = Math.round((Math.random() * 5) + 1);
var randomNumber2 = Math.round((Math.random() * 5) + 1);

var image1 = "images/dice"+randomNumber1+".png";
var image2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText = "Player 1 Wins✔";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins✔";
}
else {
  document.querySelector("h1").innerText = "Draw🎲";
}

document.querySelector(".refresh-button").addEventListener("click",function(){
  window.location.reload();
});
