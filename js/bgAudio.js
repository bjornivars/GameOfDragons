
let soundPlay = document.getElementById("myAudio");
let audioBtn = document.getElementById("audioText");
// Start song and show start play
window.onload=function()  //executes when the page finishes loading
{
    soundPlay.play();;
	
};




function toggleAudio() {
    if (soundPlay.paused){
        myAudio.play();
        audioBtn.innerHTML = "Mute Music";
    } else {
        myAudio.pause();
        audioBtn.innerHTML = "Play Music";
    }
   // return soundPlay.paused ? myAudio.play() : myAudio.pause();
  };