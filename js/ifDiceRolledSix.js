// If dice rolled a 6, dont change the activePlayer as the same player gets another roll
function ifDiceRolledSix() {
    if (diceRollScore == 6) {
        activePlayer;
    }
    // Change the player if anything else than 6 is rolled
    else {
        nextPlayer();
    }
}