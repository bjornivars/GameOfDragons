



let apiUrl = 'https://anapioficeandfire.com/api/characters/';
let player1Character = "";
let player2Character = "";
let player1Active = true;

function activeClass(){
if(player1Active){
    document.getElementById("player1Name").classList.add("active");
    document.getElementById("player2Name").classList.remove("active");
    document.getElementById("player2Name").classList.add("disabled");

}else{
    document.getElementById("player2Name").classList.add("active");
    document.getElementById("player1Name").classList.remove("active");
    document.getElementById("player1Name").classList.add("disabled");
    }
}
activeClass();

function setCorrectPlayerUrl(characterId){
    if(player1Active){
        player1Character = apiUrl + characterId;
        console.log("player1 " + player1Character);
    }else{
        player2Character = apiUrl + characterId;
        console.log("player2 " + player2Character);
    }
}

function choosePlayer(clicked){
    player1Character = clicked; 
    switch(player1Character){
        case "selectJon":
            setCorrectPlayerUrl("583");
          break;
          case "selectSansa":
            setCorrectPlayerUrl("957");
          break;
          case "selectEddard":
            setCorrectPlayerUrl("339");
          break;
          case "selectArya":
            setCorrectPlayerUrl("148");
          break;
          case "selectDaenerys":
            setCorrectPlayerUrl("238");
          break;
          case "selectCersei":
            setCorrectPlayerUrl("238");
          break;
          case "selectJaime":
            setCorrectPlayerUrl("529");
          break;
          case "selectJoffrey":
            setCorrectPlayerUrl("565");
          break;
          case "selectBrandon":
            setCorrectPlayerUrl("206");
          break;
          case "selectTyrion":
            setCorrectPlayerUrl("1052");
          break;
    
        default:
        player1Character = "";
      }

}
function readyUp(){
    if(player1Character != "" && player1Active){
      player1Active = false;
        console.log("character 1 = " + player1Character);
        activeClass();
    }else{
        player1Active = true;
        console.log("character 2 = " + player1Character);
        activeClass();
    }
  }



    var card = document.getElementById("cardContainer"); 
    var cardText = document.getElementById("buttonId"); 

      // If the "read more" button is clicked, add the button id to end of url
    function characterInfo_click(clicked) { 
       // cardText.innerHTML = clicked; 
        if(clicked){
            let characterUrl = apiUrl + clicked;
            fetch(characterUrl)
            .then((response) => {return response.json()})
            .then((result) => {
                var character = result;
                console.log(character.aliases);
                let name = character.name;


            })
            console.log(characterUrl);
            cardText.innerHTML = characterUrl; 
            if(characterUrl){

            }
         //   console.log(characterUrl + "/" + name)
        }
        event.preventDefault();
    }          




/*
function viewMoreFunction(name,url){ // name, url er parameter
    console.log(name, url)
    document.getElementById(name + 'ReadMore').innerHTML = '';
    fetch(url)
    .then((response) => {return response.json()})
    .then((result) => {
        var abilities = result.abilities;
        console.log(abilities);
        abilities.map((value, index) => {
            return document.getElementById(name + 'ReadMore').innerHTML += `<p>${value.ability.name}</p>`
        })
    })
}
*/



/*
https://anapioficeandfire.com/api/characters?name=Sansa%20Stark&name=Eddard%20Stark&name=Jon%20Snow&name=Jaime%20Lannister&name=Joffrey%20Baratheon&name=daenerys%20Targaryen&name=Brandon%20Stark&name=Arya%20Stark&name=Tyrion%20Lannister&aliases=Night%20King
*/