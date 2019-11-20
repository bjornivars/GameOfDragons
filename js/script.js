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
        if (confirm('Are you sure you want to be this character?')) {
            sessionStorage.setItem("player1", player1Character);
            player1Active = false;
            activeClass();
        } else {
            // Do nothing!
        }
        
    } else {
        player2Character = apiUrl + characterId;
        console.log("player2 " + player2Character);
        if (confirm('Are you sure you want to be this character?' )) {
            sessionStorage.setItem("player2", player2Character);

        } else {
            // Do nothing!
        }

        if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2")) {
            console.log("nice");
            $('#startGameModal').modal('show');

        }
    }
}
sessionStorage.clear();

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

                character.titles.map((value, index) => {
                    return document.getElementById('characterModalTitles').innerHTML += `
                    <li>${value}</li> `
                })
                character.aliases.map((value, index) => {
                    return document.getElementById('characterModalAliases').innerHTML += `
                    <li>${value}</li> `
                })



            })
        console.log(characterUrl);
        //apiText.innerHTML = characterUrl;

        //   console.log(characterUrl + "/" + name)
    }
    // Stop site from reloading on every button click
    event.preventDefault();
}






/*
*/