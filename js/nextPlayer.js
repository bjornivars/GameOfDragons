function nextPlayer() {
    //Next player
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    diceRollScore = 0;
}