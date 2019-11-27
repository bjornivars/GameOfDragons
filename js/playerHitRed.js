function player1HitRed(){

    if(scores[0] == trap1.tileId){
        console.log("okay trap 1");
        scores[0] - trap1.penalty;
        console.log(scores[0] - trap1.penalty);
    } else if(scores[0] == trap2.tileId){
        console.log("okay trap 2");
        scores[0] - trap2.penalty;
        console.log(scores[0] - trap2.penalty);
    } else if(scores[0] == trap3.tileId){
        console.log("okay trap 3");
        scores[0] - trap3.penalty;
        console.log(scores[0] - trap3.penalty);
    } else if(scores[0] == trap4.tileId){
        console.log("okay trap 4");
        scores[0] - trap4.penalty;
        console.log(scores[0] - trap4.penalty);
    } else if(scores[0] == trap5.tileId){
        console.log("okay trap 5");
        scores[0] - trap5.penalty;
        console.log(scores[0] - trap5.penalty);
    }  
}

function player2HitRed(){
    if(scores[1] == trap1.tileId){
        console.log("okay trap 1");
        scores[1] - trap1.penalty;
        console.log(scores[1] - trap1.penalty);
        let x = scores[1].toString();
        document.getElementById(x).appendChild(player2Character);
    } else if(scores[1] == trap2.tileId){
        console.log("okay trap 2");
        scores[1] - trap2.penalty;
        console.log(scores[1] - trap2.penalty);
    } else if(scores[1] == trap3.tileId){
        console.log("okay trap 3");
        scores[1] - trap3.penalty;
        console.log(scores[1] - trap3.penalty);
    } else if(scores[1] == trap4.tileId){
        console.log("okay trap 4");
        scores[1] - trap4.penalty;
        console.log(scores[1] - trap4.penalty);
    } else if(scores[1] == trap5.tileId){
        console.log("okay trap 5");
        scores[1] - trap5.penalty;
        console.log(scores[1] - trap5.penalty);
    } 
}