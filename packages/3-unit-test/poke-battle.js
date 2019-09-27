const utils = require('./utils')

function setUpPokemons(pokemons) {
  return pokemons.map(name => ({ name, defeated: false, win: 0 }))
}

function pokeBattle(poke1, poke2) {
  const numberToWin = 3
  let pokemonTrainer1Wins = 0
  let pokemonTrainer2Wins = 0
  const pokemonsTrainer1 = setUpPokemons(poke1.pokemons)
  const pokemonsTrainer2 = setUpPokemons(poke2.pokemons)

  let resume = '------ Resumen de la Batalla ------\n'
  let index = 0
  while (
    pokemonTrainer1Wins < numberToWin &&
    pokemonTrainer2Wins < numberToWin
  ) {
    const [pokemon1] = pokemonsTrainer1.filter(
      ({ defeated }) => defeated === false
    )
    const [pokemon2] = pokemonsTrainer2.filter(
      ({ defeated }) => defeated === false
    )

    index += 1
    const winner = utils.getWinner(pokemon1.name, pokemon2.name)
    resume += `\n-------------Batalla #${index}------------`
    resume += `\n${pokemon1.name} vs ${pokemon2.name}`
    resume += `\nGanador: ${winner}`

    if (winner === pokemon1.name) {
      const index = pokemonsTrainer1.findIndex(x => x.name === winner)
      pokemonsTrainer1[index] = {
        ...pokemonsTrainer1[index],
        win: pokemonsTrainer1[index].win + 1,
      }

      const indexLoser = pokemonsTrainer2.findIndex(
        x => x.name === pokemon2.name
      )
      pokemonsTrainer2[indexLoser] = {
        ...pokemonsTrainer2[indexLoser],
        defeated: true,
      }
      pokemonTrainer1Wins++
    } else if (winner === pokemon2.name) {
      const index = pokemonsTrainer2.findIndex(x => x.name === winner)
      pokemonsTrainer2[index] = {
        ...pokemonsTrainer2[index],
        win: pokemonsTrainer2[index].win + 1,
      }

      const indexLoser = pokemonsTrainer1.findIndex(
        x => x.name === pokemon1.name
      )
      pokemonsTrainer1[indexLoser] = {
        ...pokemonsTrainer1[indexLoser],
        defeated: true,
      }
      pokemonTrainer2Wins++
    }
    resume += `\n${poke1.pokemonTrainerName}: ${pokemonTrainer1Wins} | ${poke2.pokemonTrainerName}: ${pokemonTrainer2Wins}`
    resume += `\n-----------------------------------\n\n`
  }

  resume += `🎉  Ganador: ${
    pokemonTrainer1Wins > pokemonTrainer2Wins
      ? poke1.pokemonTrainerName
      : poke2.pokemonTrainerName
  } de ${
    pokemonTrainer1Wins > pokemonTrainer2Wins
      ? poke1.representing
      : poke2.representing
  } 🎉\n\n`

  return {
    winner:
      pokemonTrainer1Wins > pokemonTrainer2Wins
        ? poke1.pokemonTrainerName
        : poke2.pokemonTrainerName,
    resume,
  }
}

module.exports = pokeBattle
