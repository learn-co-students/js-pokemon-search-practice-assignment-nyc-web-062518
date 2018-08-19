document.addEventListener("DOMContentLoaded", function() {
const pokemonArray = pokemonData.pokemons;
let pokemonForm = document.getElementById("pokemon-search-input");
let pokeContainer = document.getElementById('pokemon-container');


pokemonForm.addEventListener("keyup", event => {
  let input = event.target.value;
  let pokemonList = findMatching(input);
  pokemonList.forEach(poke => render(poke));
});

function findMatching(inputText){
  pokeContainer.innerHTML = ""
  return pokemonArray.filter(pokemon =>
     pokemon.name.includes(inputText));
}

//to do next:
function render(p){
  let pokemonCard = document.createElement('div');
      console.log('rendered successfully!')
  pokemonCard.innerHTML = `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${p.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id= "${p.name}" src="${p.sprites["front"]}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${p.name}" data-action="flip-image">flip card</p>
        </div>`
  pokeContainer.appendChild(pokemonCard);


}

})
