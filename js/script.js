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



let apiUrl = 'https://anapioficeandfire.com/api/characters/';

  fetch(apiUrl)
.then((response) => {return response.json()})
.then((result) => {
    var character = result;
    console.log(character);
/*
    character.map((value,index) => {
        return document.getElementById('card').innerHTML += `<div>
        <h1>${value.aliases}</h1>
        <a> Read more </a>`
    })
*/
    
})

    // If the "read more" button is clicked, fetch api + character id 
    var card = document.getElementById("cardContainer"); 
    var cardText = document.getElementById("buttonId"); 

  
    function characterInfo_click(clicked) { 
        cardText.innerHTML = clicked; 
        if(clicked){
            let characterUrl = apiUrl + clicked;
            console.log(characterUrl);
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