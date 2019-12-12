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
        player1Character = apiUrl + characterId; // Creates an url with correct id 
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

// Optiond for the confirm/deny buttons
function confirmDeny(clicked){
    let splitClicked = clicked.split("-"); // Remove the "-" from id name and creates array ["confirm", "id"]
    let decision = splitClicked[0]; 
    let characterId = splitClicked[1];
    let cardCharacterId = document.getElementById("card" + characterId); 
    let changeConfirmId = document.getElementById("confirm-" + characterId);
    let changeDenyId = document.getElementById("deny-" + characterId);

    if(decision == "confirm"){ // Check if confirmed is clicked
        if(player1Active){ 
            sessionStorage.setItem("player1", characterId); // Send player1 id to sessionstorage
            cardCharacterId.style.padding = "12px"; // Add padding to selected player1 character
            cardCharacterId.style.border = "2px solid red"; // Add border to selected player1 character
            changeConfirmId.id = ("confirm"); // Change confirm button id back to "confirm"
            changeDenyId.id = ("deny"); // Change deny button id back to "deny"
            $('#confirmModal').modal('hide'); // Hide modal
            player1Active = false; // Set player1 to false, so player2 is active
            activeClass(); // Change active player visually
        } else {
            sessionStorage.setItem("player2", characterId); // Send player2 id to sessionstorage
            cardCharacterId.style.padding = "12px"; // Padding
            cardCharacterId.style.border = "2px solid blue"; // Border
            changeConfirmId.id = ("confirm"); // Change confirm button id back to "confirm"
            changeDenyId.id = ("deny"); // Change deny button id back to "deny"
            $('#confirmModal').modal('hide'); // Hide modal
            if (sessionStorage.getItem("player1") && sessionStorage.getItem("player2")) {
                $('#startGameModal').modal('show'); // Show start game modal if both players has selected
            } 
        }
    } else { // The active player chooses again as "No" is clicked
        console.log(characterId);
        changeConfirmId.id = ("confirm");
        changeDenyId.id = ("deny");
        $('#confirmModal').modal('hide');
    }
}

sessionStorage.clear();

// if the player clicks an image, take that image id, and 
// setCorrectPlayerUrl to have the id of the character so you get a full url
function choosePlayer(clicked) {
    switch (clicked) {
        
        case "selectJon": // if the player clicks on "selectJon" image, give setCorrectPlayerUrl the paramater of 583, which is Jon´s url ending
            setCorrectPlayerUrl("583"); // This is where the characterId is passed in
            break;
        case "selectSansa":
            setCorrectPlayerUrl("957"); // This is where the characterId is passed in
            break;
        case "selectEddard":
            setCorrectPlayerUrl("339"); // This is where the characterId is passed in
            break;
        case "selectArya":
            setCorrectPlayerUrl("148"); // This is where the characterId is passed in
            break;
        case "selectDaenerys":
            setCorrectPlayerUrl("271"); // This is where the characterId is passed in
            break;
        case "selectCersei":
            setCorrectPlayerUrl("238"); // This is where the characterId is passed in
            break;
        case "selectJaime":
            setCorrectPlayerUrl("529"); // This is where the characterId is passed in
            break;
        case "selectJoffrey":
            setCorrectPlayerUrl("565"); // This is where the characterId is passed in
            break;
        case "selectBrandon":
            setCorrectPlayerUrl("206"); // This is where the characterId is passed in
            break;
        case "selectTyrion":
            setCorrectPlayerUrl("1052"); // This is where the characterId is passed in
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
                <h4 id="characterModalName" class=" [ Cormorant ] "> ${character.name}</h4>
                <p id="characterModalGender" class=" [ lato ] ">Gender: ${character.gender}</p>
                <p id="characterModalCulture" class=" [ lato ] ">Culture: ${character.culture}</p>
                <div>
                    <h5 class=" [ Cormorant ] ">Titles:</h5>
                    <ul id="characterModalTitles" class=" [ lato ] ">
                        ${
                            // learn this by heart
                            // https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
                            character.titles.map(function(value) {
                                return `<li class=" [ lato ] ">${value}</li>`
                            }).join('')
                        }
                    </ul>
                </div>
                <div>
                    <h5 class=" [ Cormorant ] ">Aliases:</h5>
                    <ul id="characterModalAliases" class=" [ lato ] ">
                      ${
                        // learn this by heart
                        // https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
                        character.aliases.map(function(value) {
                          return `<li class=" [ lato ] ">${value}</li>`
                        }).join('') // this part joins the array together as a string and removes the commas between 
                      }
                    </ul>
                </div>`
            })
    }
    event.preventDefault();
}







