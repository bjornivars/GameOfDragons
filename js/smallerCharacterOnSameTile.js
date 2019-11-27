function smallerCharactersOnSameTile() {
    if (scores[1] == scores[0]) {
        setPlayerImg();
        player1Character.style.width = "48%";
        player2Character.style.width = "48%";
    } else {
        setPlayerImg();
        player1Character.style.width = "100%";
        player2Character.style.width = "100%";
    }

}