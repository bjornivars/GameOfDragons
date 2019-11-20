// **************************************************************************





// Some global variables....
let apiUrl = 'https://anapioficeandfire.com/api/characters/';
let player1Character = "";
let player2Character = "";
let player1Active = true;

// Gives CSS styling to the active and disabled player
function activeClass() {
    if (player1Active) {
        document.getElementById("player1Name").classList.add("active");
        document.getElementById("player2Name").classList.remove("active");
        document.getElementById("player2Name").classList.add("disabled");

    } else {
        document.getElementById("player2Name").classList.add("active");
        document.getElementById("player1Name").classList.remove("active");
        document.getElementById("player1Name").classList.add("disabled");
    }
}
activeClass();

// Set the correct URL to the current players choice of character
function setCorrectPlayerUrl(characterId) {
    if (player1Active) {
        player1Character = apiUrl + characterId;
        console.log("player1 " + player1Character);
        
    } else {
        player2Character = apiUrl + characterId;
        console.log("player2 " + player2Character);
    }
}

var items = document.getElementsByClassName(".cards-img");

var currentSelected = "";
var previousSelected = "0";
var hasPlayerChanged = false;


function setPlayerBorder() {
    if(!player1Active && !hasPlayerChanged){
         currentSelected = "";
         previousSelected = "0";
         hasPlayerChanged = true;
    }
    var eventTargetId =  event.target.id;

    if(previousSelected === currentSelected){
        currentSelected = eventTargetId;

    }else if(currentSelected != "" && previousSelected != "" && currentSelected != previousSelected){
        previousSelected = currentSelected;
        currentSelected = eventTargetId;
    }
    
    else{
        currentSelected = eventTargetId;
        previousSelected = eventTargetId;
    }
    if(player1Active){
        document.getElementById(previousSelected).parentNode.classList.remove("focusPlayer1");
        document.getElementById(currentSelected).parentNode.classList.add("focusPlayer1");
    } else{

            document.getElementById(previousSelected).parentNode.classList.remove("focusPlayer2");
            document.getElementById(currentSelected).parentNode.classList.add("focusPlayer2");
    }
    console.log("previousSelected = " + previousSelected)
    console.log("currentSelected = " + currentSelected)
}


// if the player clicks an image, take that image id, and 
// setCorrectPlayerUrl to have the id of the character so you get a full url
function choosePlayer(clicked) {
    setPlayerBorder();


        player1Character = clicked;

    switch (player1Character) {
        // if the player clicks on "selectJon" image, give setCorrectPlayerUrl the paramater of 583, which is Jon´s url ending
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
            // Set defult to empty string
        default:
            player1Character = "";
    }

}

// Checks if the players have chosen a character.
function readyUp() {

    // if player1 has chosen a character, and player1 is the active player
    if (player1Character !== "" && player1Active) {
        player1Active = false;
        console.log("character 1 = " + player1Character);

        // Set activeClass to player1 since it is his turn to select character
        activeClass();
       document.getElementById("readyUpBtn").style.display = "none";
       document.getElementById("startBtn").style.display = "block";
        // document.getElementById("readyUpBtn").removeAttribute('onclick');

    } else if(player1Character == ""){
        alert("Player 1 needs to choose a character");
    }
    else if(player2Character != ""){
        // if player1 HAS chosen a character and is no longer the active player
        player1Active = true;
        console.log("character 2 = " + player2Character);

        // Set activeClass to player2 since it is his turn to select character
        activeClass();
    } else if(player2Character == ""){
        alert("Player 2 needs to choose a character");
    } 
    }
//console.log(player1Character + " ll " + player2Character);


function sendToStorage(){

    console.log(player1Character + " 0 " + player2Character);
    
    }
    

//sessionStorage.clear();



// Just for visual look of api in html
var apiText = document.getElementById("apiText");

// If the "read more" button is clicked, add the button id to end of url
function characterInfo_click(clicked) {
    // apiText.innerHTML = clicked; 

    // clicked is the id of the button clicked in the html
    if (clicked) {
        // add id to end of url
        let characterUrl = apiUrl + clicked;

        // fetch said url
        fetch(characterUrl)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                var character = result;
                console.log(character.name);
                console.log(character.mother);

                // Make content for Modal view of character
                document.getElementById("characterModalName").innerHTML = character.name;
                document.getElementById("characterModalGender").innerHTML = "Gender: " + character.gender;
                document.getElementById("characterModalCulture").innerHTML = "Culture: " + character.culture;
                document.getElementById('characterModalTitles').innerHTML = "";
                document.getElementById('characterModalAliases').innerHTML = "";


                // FIXXXXXXX saves titles of other characters that has been clicked on
                character.titles.map((value, index) => {
                    return document.getElementById('characterModalTitles').innerHTML += `
                    <li>${value}</li> `
                })
                // FIXXXXXXX saves aliases of other characters that has been clicked on
                character.aliases.map((value, index) => {
                    return document.getElementById('characterModalAliases').innerHTML += `
                    <li>${value}</li> `
                })



            })
        console.log(characterUrl);
        apiText.innerHTML = characterUrl;
        if (characterUrl) {

        }

        //   console.log(characterUrl + "/" + name)
    }
    // Stop site from reloading on every button click
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


// **************************************************************************






















// **************************************************************************

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











// code from :::
// https://stackoverflow.com/questions/50702802/how-to-print-all-character-names-from-game-of-thrones-api-which-is-in-paginated
/*
function getItems(page) {
    var req = new XMLHttpRequest();
  
    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //console.log(req.getResponseHeader("link"));
        let charObj = JSON.parse(this.responseText);
        for (let i = 0; i < charObj.length; i++) {
          let p = document.createElement("p");
          let name = document.createTextNode(charObj[i].name);
          p.appendChild(name);
          document.body.appendChild(p);
        }
      }
    };
    req.open("GET", "https://www.anapioficeandfire.com/api/characters?page=" + page + "&pageSize=10", true);
    req.send();
  };
  
  for (let i = 1; i <= 214; i++) {
    getItems(i)
  }

// END OF BORROWED CODE
*/


    // a = forrige
    // c = valgt
    if(a === c) {
        c = event.target.id;
    } else if(c != "" && a != "" && c != a){
        a = c;
        c = event.target.id;
    } else {
        c = event.target.id;
        a = event.target.id;
    }   
    console.log("Valgt: " + c);
    console.log("Forrige: " + a);
    document.getElementById(a).parentNode.classList.remove("focusPlayer1");
    document.getElementById(c).parentNode.classList.add("focusPlayer1");