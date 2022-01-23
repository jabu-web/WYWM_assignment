//Fetches from the pokemon endpoint
let pPicture = {
  getPokemon: function (pokemonName) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((response) => response.json())
      .then((pokemonPicture) => this.displayPokemon(pokemonPicture));
  },
  //Displays the result which is the front facing sprite
  displayPokemon: function (pokemonPicture) {
    const { sprites } = pokemonPicture;
    document.querySelector(".pokemonName").src = sprites.front_default;
    console.log(pokemonPicture.sprites.front_default);
  },
  //Uses search bar input to fetch pokemon from end point and converts to lower case
  search: function () {
    this.getPokemon(document.querySelector(".searchBar").value.toLowerCase());
  },
};
//Runs search function when the button is clicked
document.querySelector(".searchButton").addEventListener("click", function () {
  pPicture.search();
});

//Fetches from the item endpoint
let iPicture = {
  getItem: function (itemName) {
    fetch("https://pokeapi.co/api/v2/item/" + itemName)
      .then((response) => response.json())
      .then((itemPicture) => this.displayItem(itemPicture));
  },

  //Displays the result which is the sprite
  displayItem: function (itemPicture) {
    const { sprites } = itemPicture;
    document.querySelector(".itemName").src = sprites.default;
    console.log(itemPicture.sprites.default);
  },

  //Uses search bar input to fetch item from end point and converts to lower case
  search: function () {
    this.getItem(document.querySelector(".searchBar2").value.toLowerCase());
  },
};

//Runs search function when the button is clicked
document.querySelector(".searchButton2").addEventListener("click", function () {
  iPicture.search();
});

//Fetches from the moves endpoint
let move = {
  getMove: function (moveName) {
    fetch("https://pokeapi.co/api/v2/move/" + moveName)
      .then((response) => response.json())
      .then((movePicture) => this.displayMove(movePicture));
  },

  //Displays the result which is information about the move
  displayMove: function (movePicture) {
    const { accuracy, pp, power } = movePicture;

    document.querySelector(".accuracy").innerHTML = "Accuracy: " + accuracy;
    document.querySelector(".pp").innerHTML = "PP: " + pp;
    document.querySelector(".power").innerHTML = "Power: " + power;
    console.log(movePicture);
  },

  //Uses search bar input to fetch move data from end point and converts to lower case
  search: function () {
    this.getMove(document.querySelector(".searchBar3").value.toLowerCase());
  },
};

//Runs search function when the button is clicked
document.querySelector(".searchButton3").addEventListener("click", function () {
  move.search();
});

//Allows enter to be used as an alternative to clicking the search buttons
document
  .querySelector(".searchBar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      pPicture.search();
    }
  });

document
  .querySelector(".searchBar2")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      iPicture.search();
    }
  });

document
  .querySelector(".searchBar3")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      move.search();
    }
  });
