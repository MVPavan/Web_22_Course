document.addEventListener("keydown",playDrum);

function returnSound(key){
  let word = null;
  switch(key){
    case "w":
      word = "tom-1";
      break;
    case "a":
      word = "tom-2";
      break;
    case "s":
      word = "tom-3";
      break;
    case "d":
      word = "tom-4";
      break;
    case "j":
      word = "crash";
      break;
    case "k":
      word = "kick";
      break;
    case "l":
      word = "snare";
      break;

    default:
      console.log("Failed key : "+key);
  }
  return "sounds/"+word+".mp3";
}

function playDrum(event){
  let sound = new Audio(returnSound(event.key));
  sound.play().then();
}
