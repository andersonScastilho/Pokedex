const pokemonName = document.getElementsByClassName('pokemom_name')
const pokemonNumber = document.getElementsByClassName('pokemon_number')
const pokemonImage = document.getElementsByClassName('pokemon_image')

const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIResponse.json()
    return data
}
const renderPokemon = async (pokemon)=>{
    const data = await fetchPokemon(pokemon)
    
}
renderPokemon(25)