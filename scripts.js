document.write("hello world");

let pokemonList = [
  {
    name: "squirtle",
    height: 0.5,
    types: ["water", "grass"],
  },

  {
    name: "evvee",
    height: 0.3,
    types: ["water", "speed"],
  },

  {
    name: "charmander",
    height: 0.6,
    types: ["fairy", "ice"],
  },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height < 0.6 && pokemonList[i].height > 0.3) {
    console.log(pokemonList[i].name + " is average");
  } else if (pokemonList[i].height <= 0.3) {
    console.log(pokemonList[i].name + " is small");
  } else {
    console.log(pokemonList[i].name + " is large");
  }
}
