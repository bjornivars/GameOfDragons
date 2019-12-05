
// Start song and show start play
window.onload=function()  //executes when the page finishes loading
{
    document.getElementById("myAudio").play();
    this.testMute();
	setTimeout(func1, 4000);  //sets a timer which calls function func1 after 2,000 milliseconds = 2 secs.
	
};
function func1()
{
	document.getElementById("startGame").className="show1";
}

