let pokemonRepository = (function () {
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

  pokemonList.forEach((item) => console.log(item));

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: "test" });

// to check if the pokemon was added to list or not
console.log(pokemonRepository.getAll()); // []
