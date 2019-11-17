



let apiUrl = 'https://anapioficeandfire.com/api/characters/';
let player1 = "";
let player2 = "";
    

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