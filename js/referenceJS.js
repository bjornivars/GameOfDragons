let player1Active = true;

var imageClickArryn = document.getElementById("houseArryn");
imageClickArryn.addEventListener("click",function(){
    setPlayerHouse("houseArryn");
});
var imageClickStark = document.getElementById("houseStark");
imageClickStark.addEventListener("click",function(){
    setPlayerHouse("houseStark");
});
var imageClickBaratheon = document.getElementById("houseBaratheon");
imageClickBaratheon.addEventListener("click",function(){
    setPlayerHouse("houseBaratheon");
});
var imageClickLannister = document.getElementById("houseLannister");
imageClickLannister.addEventListener("click",function(){
    setPlayerHouse("houseLannister");
});



function activePlayer(){
    if(player1Active){
        // add active class to player1
        document.getElementById("player1Name").classList.add("active");
        // disable player 2
        document.getElementById("player2Name").disabled = true;
        document.getElementById("player1Name").disabled = false;
        document.getElementById("player2Name").classList.remove("active");

    }else{

        // remove active class from player1
        document.getElementById("player1Name").classList.remove("active");
        // add active class to player2
        document.getElementById("player2Name").classList.add("active");
        // disable player 1
        document.getElementById("player1Name").disabled = true;
        document.getElementById("player2Name").disabled = false;
    }
}
activePlayer();


function setupPlayer1(){
    let player1 = document.getElementById("player1Name").value;
    sessionStorage.setItem("Player1Name", player1);

}

function setupPlayer2(){
    let player2 = document.getElementById("player2Name").value;
    sessionStorage.setItem("Player2Name", player2);


}

function startUpValues(){

    if(player1Active){
        setupPlayer1();
        player1Active = false;
    }else{
        setupPlayer2();
    }
    activePlayer();

}




function setPlayerHouse(house){
    if(player1Active){
        var player1House = document.getElementById(house).src;
        sessionStorage.setItem("Player1House", player1House);
    }else{
        var player2House = document.getElementById(house).src;
        sessionStorage.setItem("Player2House", player2House);
    }
}




// Remove token to reset players
function removeToken(){
    sessionStorage.removeItem("Player1Name");
    sessionStorage.removeItem("Player2Name");
    sessionStorage.removeItem("Player1House");
    sessionStorage.removeItem("Player2House");


    var text1 = document.getElementById('player1Name');
    var text2 = document.getElementById('player2Name');
    text1.value = '';
    text2.value = '';


    player1Active = true;
    activePlayer();

}