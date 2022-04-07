
function readImg(num){
  return "images/dice" + Math.floor(Math.random()*6+1) + ".png";
}

function randomDice() {
  document.querySelectorAll("img")[0].setAttribute("src",readImg());
  document.querySelectorAll("img")[1].setAttribute("src",readImg());
}


// randomDice();
