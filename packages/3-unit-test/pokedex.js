const pokemons = [
  { name: 'Paras', types: ['Bicho', 'Planta'] },
  { name: 'Bulbasaur', types: ['Planta', 'Veneno'] },
  { name: 'Pikachu', types: ['Elétrico'] },
  { name: 'Magnemite', types: ['Elétrico', 'Acero'] },
  { name: 'Charizard', types: ['Fuego', 'Volador'] },
  { name: 'Flareon', types: ['Fuego'] },
  { name: 'Poliwrath', types: ['Agua', 'Lucha'] },
  { name: 'Slowpoke', types: ['Agua', 'Psíquico'] },
  // {name: 'Tentacool', types: ['Agua', 'Veneno']}
]

function getWaterPokemons() {
  return pokemons.fliter(pokemon => {
    return pokemon.types.includes('Agua')
  })
}

module.exports = { getWaterPokemons }
