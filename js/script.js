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
        document.getElementById("player2Name").classList.remove("disabled");
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
        $('#confirmModal').modal('show'); // Show confirm modal
        document.getElementById("confirm").id = ("confirm-" + characterId); // Change id of "confirm"
        document.getElementById("deny").id = ("deny-" + characterId); // Change id of "deny"
    } else {
        player2Character = apiUrl + characterId;
        console.log("player2 " + player2Character);
        $('#confirmModal').modal('show'); 
        document.getElementById("confirm").id = ("confirm-" + characterId);
        document.getElementById("deny").id = ("deny-" + characterId);
    }
}

function confirmDeny(clicked){
    let splitClicked = clicked.split("-");
    let decision = splitClicked[0];
    let characterId = splitClicked[1];
    console.log(splitClicked);
    if(decision == "confirm"){
        console.log("yeah");
        if(player1Active){
            sessionStorage.setItem("player1", characterId);
            document.getElementById("card" + characterId).style.padding = "12px";
            document.getElementById("card" + characterId).style.border = "2px solid red";
            document.getElementById("confirm-" + characterId).id = ("confirm");
            document.getElementById("deny-" + characterId).id = ("deny");
            $('#confirmModal').modal('hide');
            player1Active = false;
            activeClass();
        }else{
            sessionStorage.setItem("player2", characterId);
            document.getElementById("card" + characterId).style.padding = "12px";
            document.getElementById("card" + characterId).style.border = "2px solid blue";
            document.getElementById("confirm-" + characterId).id = ("confirm");
            document.getElementById("deny-" + characterId).id = ("deny");
            $('#confirmModal').modal('hide');
            if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2")) {
                console.log("nice");
                $('#startGameModal').modal('show');
            } 
        }
    }else{
        console.log("nope");
        console.log(characterId);
        document.getElementById("confirm-" + characterId).id = ("confirm");
        document.getElementById("deny-" + characterId).id = ("deny");
        $('#confirmModal').modal('hide');
    }
}

sessionStorage.clear();

// if the player clicks an image, take that image id, and 
// setCorrectPlayerUrl to have the id of the character so you get a full url
function choosePlayer(clicked) {
    switch (clicked) {
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
            setCorrectPlayerUrl("271");
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
    }
}

// Just for visual look of api in html
var apiText = document.getElementById("apiText");

// If the "read more" button is clicked, add the button id to end of url
function characterInfo_click(clicked) {
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
                let character = result;
                document.getElementById("modalBody").innerHTML = `
                <h4 id="characterModalName"> ${character.name}</h4>
                <p id="characterModalGender">Gender: ${character.gender}</p>
                <p id="characterModalCulture">Culture: ${character.culture}</p>
                <div>
                    <p>Titles:</p>
                    <ul id="characterModalTitles">
                        ${
                            // learn this by heart
                            // https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
                            character.titles.map(function(value) {
                                return `<li>${value}</li>`
                            }).join('')
                        }
                    </ul>
                </div>
                <div>
                    <p>Aliases:</p>
                    <ul id="characterModalAliases">
                      ${
                        // learn this by heart
                        // https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
                        character.aliases.map(function(value) {
                          return `<li>${value}</li>`
                        }).join('')
                      }
                    </ul>
                </div>`
            })
    }
    event.preventDefault();
}







