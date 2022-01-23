let pPicture = {
  getPokemon: function (pokemonName) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((response) => response.json())
      .then((pokemonPicture) => this.displayPokemon(pokemonPicture));
  },

  displayPokemon: function (pokemonPicture) {
    const { sprites } = pokemonPicture;
    document.querySelector(".pokemonName").src = sprites.front_default;
    console.log(pokemonPicture.sprites.front_default);
  },

  search: function () {
    this.getPokemon(document.querySelector(".searchBar").value.toLowerCase());
  },
};

document.querySelector(".searchButton").addEventListener("click", function () {
  pPicture.search();
});

let iPicture = {
  getItem: function (itemName) {
    fetch("https://pokeapi.co/api/v2/item/" + itemName)
      .then((response) => response.json())
      .then((itemPicture) => this.displayItem(itemPicture));
  },

  displayItem: function (itemPicture) {
    const { sprites } = itemPicture;
    document.querySelector(".itemName").src = sprites.default;
    console.log(itemPicture.sprites.default);
  },
  search: function () {
    this.getItem(document.querySelector(".searchBar2").value.toLowerCase());
  },
};
document.querySelector(".searchButton2").addEventListener("click", function () {
  iPicture.search();
});

let move = {
  getMove: function (moveName) {
    fetch("https://pokeapi.co/api/v2/move/" + moveName)
      .then((response) => response.json())
      .then((movePicture) => this.displayMove(movePicture));
  },

  displayMove: function (movePicture) {
    const { accuracy, pp, power } = movePicture;

    document.querySelector(".accuracy").innerHTML = "Accuracy: " + accuracy;
    document.querySelector(".pp").innerHTML = "PP: " + pp;
    document.querySelector(".power").innerHTML = "Power: " + power;
    console.log(movePicture);
  },
  search: function () {
    this.getMove(document.querySelector(".searchBar3").value.toLowerCase());
  },
};
document.querySelector(".searchButton3").addEventListener("click", function () {
  move.search();
});

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
