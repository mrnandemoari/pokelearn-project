async function fetchData() {
  try {
    const inputPokemonName = document
      .getElementById('inputPokemonName');
    const pokemonNameValue = inputPokemonName.value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameValue}`
    );
    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }
    const data = await response.json();

    const content = document.getElementById('content');
    const pokemonSprite = document.getElementById('pokemonSprite');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonHeight = document.getElementById('pokemonHeight');

    inputPokemonName.value = '';
    content.style.display = 'flex';
    pokemonSprite.src = data.sprites.front_default;
    pokemonName.innerHTML = data.name;
    pokemonWeight.innerHTML = data.weight;
    pokemonHeight.innerHTML = data.height;
  } catch (error) {
    console.error(error);
  }
}
