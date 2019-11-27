function winner() {
    if (scores[0] >= 34) {
        setPlayerImg();
        $('#winnerGameModal').modal('show');
        document.getElementById("winnerImg").src = player1Character.src
    } else if (scores[1] >= 34) {
        setPlayerImg();
        $('#winnerGameModal').modal('show');
        document.getElementById("winnerImg").src = player2Character.src
    }
}