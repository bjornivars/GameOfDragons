function checkWinner(tile) {
    if (tile >= 34) {
        setPlayerImg();
        $('#winnerGameModal').modal('show');
        if(player1Active){
            document.getElementById("winnerImg").src = player1.character.src;
            console.log("player 1 WINS");
        }else {
            document.getElementById("winnerImg").src = player2.character.src;
            console.log("player 2 WINS");
        }
    }
}