const fetchpokemon = async (pokemon)=>{

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    console.log(data)
    console.log(APIResponse);
    return data;
}
const renderPokemon = async (pokemon)=>{
    const data = await fetchpokemon(pokemon)
}
fetchpokemon(25)