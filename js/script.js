const pokemonName = document.querySelector('.pokemon_name');

const fetchpokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log(APIResponse);
    return data;
}
const renderPokemon = async (pokemon)=>{
    const data = await fetchpokemon(pokemon)
    pokemonName.innerHtml = data.name
    
}
fetchpokemon('25')