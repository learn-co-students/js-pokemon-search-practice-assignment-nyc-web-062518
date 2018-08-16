document.addEventListener("DOMContentLoaded", function() {

  let inputValue = document.getElementById("pokemon-search-input")
  let pokemons = pokemonData.pokemons
  let pokemonContainer = document.getElementById("pokemon-container")

  let findMatchedPokemon = (values) =>
     pokemons.filter( (pokemon) => {
       return pokemon.name.includes(values)
    })

  let showPokemonCard = (pokemons) => {
    pokemons.map(pokemon => {
      let pokemonDiv = document.createElement('div')
      pokemonContainer.appendChild(pokemonDiv)
      return pokemonDiv.innerHTML = displayPokemon(pokemon)
    }).join("")
    // debugger
  }

  function displayPokemon(pokemon) {
    pokemonContainer.addEventListener("click", e=>{

    if (e.target.innerHTML === "flip card" && e.target.getAttribute("data-pokename") === pokemon.name){
        // debugger
        let pokemonImage = e.target.parentNode.querySelector('img')
        if (pokemonImage.src === pokemon.sprites.back) {
          pokemonImage.src = pokemon.sprites.front
        } else {
          pokemonImage.src = pokemon.sprites.back
        }
      }
    })

    return `<div>
      <div class="pokemon-container">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${pokemon.sprites.front}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
  }

  // getting the sprites
  // pokemons.forEach(pokemon => (console.log(pokemon.sprites.front)))
  // pokemons.forEach(pokemon => (console.log(pokemon.sprites.back)))

  inputValue.addEventListener("keyup", e =>{
    let typedValues = (e.target.value)
    let filteredPokemons = findMatchedPokemon(typedValues)

    while (pokemonContainer.firstChild) {
      pokemonContainer.removeChild(pokemonContainer.firstChild)
    }

    if (typedValues != ""){
      showPokemonCard(filteredPokemons)

    }

  })




})
