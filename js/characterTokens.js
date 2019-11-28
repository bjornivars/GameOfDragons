// Set images to the players
function setPlayerImg() {
    player1.character.src = "graphics/img/icons/" + player1.playerName + ".png";
    player2.character.src = "graphics/img/icons/" + player2.playerName + ".png";
}


// Resize characters if they are on same tile
function smallerCharactersOnSameTile() {
    if (player1.tile == player2.tile) {
        setPlayerImg();
        player1.character.style.width = "48%";
        player2.character.style.width = "48%";
    } else {
        setPlayerImg();
        player1.character.style.width = "100%";
        player2.character.style.width = "100%";
    }
}



