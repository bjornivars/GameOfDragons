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
        
        
        // Add border to clicked character
        $(".cards-img").click(function(){
            $(this).parent().addClass("focusPlayer1");
        });


    } else {
        player2Character = apiUrl + characterId;
        console.log("player2 " + player2Character);
        $(".cards-img").click(function(){
            $(this).parent().css("border","2px solid blue");
        });
    }
}

// if the player clicks an image, take that image id, and 
// setCorrectPlayerUrl to have the id of the character so you get a full url
function choosePlayer(clicked) {
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
    if (player1Character != "" && player1Active) {
        player1Active = false;
        console.log("character 1 = " + player1Character);

        // Set activeClass to player1 since it is his turn to select character
        activeClass();

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