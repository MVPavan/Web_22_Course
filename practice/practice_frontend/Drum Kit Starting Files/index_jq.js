
jQuery(document).keydown(playDrum);

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
  if(word){
    return "sounds/"+word+".mp3";
  }else{
    return null;
  }
}

function playDrum(event){
  let sound_file =  returnSound(event.key)
  if(sound_file){
    let sound = new Audio(sound_file);
    sound.play().then();
  }
}
