document.addEventListener("DOMContentLoaded", () => {
  //check to see page loaded
  console.log("HOLA");

  // check what data is
  let pokemons = pokemonData.pokemons;

  // find form input
  let pokemonForm = document.getElementById("pokemon-search-input");

  // add event listener based on search query
  pokemonForm.addEventListener("keyup", event => {
    // // move to findMatchingPokemon function
    // let searchInput = event.target.value
    //
    // // find whatever pokemon includes the search input
    // let matchingPokemons = pokemons.filter(pokemon => {
    //   return pokemon.name.includes(searchInput)
    // })
    let matchedPokemon = findMatchingPokemon()

    generatePokemonContainerDiv(matchedPokemon)

  })

  const findMatchingPokemon = () => {
    let searchInput = event.target.value

    // find whatever pokemon includes the search input
    let matchingPokemons = pokemons.filter(pokemon => {
      return pokemon.name.includes(searchInput)
    })
    return matchingPokemons
  }

  // take this array of matching pokemons
  // iterate over each pokemon
  // find the pokemon-container div
  //populate that with each pokemon card with the details
  // ie, find the div container, create elements, append to container

  const generatePokemonDiv = (p) => {
    console.log(p)
  }

  function generatePokemonContainerDiv(matched) {
    return `<div id='lists'>${matched.map(generatePokemonDiv).join('')}</div>`

  }


})
