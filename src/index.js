document.addEventListener("DOMContentLoaded", () => {

  const inputElement = document.getElementById('pokemon-search-input')
  const pokemons = pokemonData.pokemons
  const pokeContainerDiv = document.getElementById('pokemon-container')

  let newDiv = document.createElement('div')
  pokeContainerDiv.appendChild(newDiv)

  // listen for key being entered in input, and adding div for each pokemon if pokemon name includes input
  inputElement.addEventListener('keyup', e => {
    let inputValue = e.target.value

    let matchingPokes = pokemons.filter(pokemon => {
      return pokemon.name.includes(inputValue)
    })

    let iteration = matchingPokes.map(pokemon => {
      // iterate but also generate a div
      return `
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
        </div>
      `
    }).join("")

    newDiv.innerHTML = iteration

  })

  pokeContainerDiv.addEventListener('click', e => {
    // check to see the p tag 'flip card' is clicked
    // p tag has class 'flip-image'
    if (e.target.className.includes('flip-image')) {
      //get img element
      let imgCollection = e.target.parentNode.getElementsByTagName('img')
      let imgElement = [...imgCollection][0]

      // find the pokemon in the database based on the pokemon name in p dataset.pokename
      // to get the pokemon sprite links from database
      let pElementPokemonName = e.target.dataset.pokename
      let pokemon = pokemons.find(pokemon => pokemon.name === pElementPokemonName)
      // pokemon.sprites.front or pokemon.sprites.back would be image sources
      // change imgElement src to the sprites

      // check to see if the source contains the word 'back', if so change to front sprite
      // if not, change to back sprite
      if (imgElement.src.includes('back')) {
        imgElement.src = pokemon.sprites.front
      } else {
        imgElement.src = pokemon.sprites.back
      }
    }
  })

})
