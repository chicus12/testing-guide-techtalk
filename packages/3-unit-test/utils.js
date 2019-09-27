function getWinner(pokemon1, pokemon2) {
  const winningNumber = Math.floor(Math.random() * (3 - 1)) + 1

  return winningNumber === 1 ? pokemon1 : pokemon2
}

module.exports = { getWinner }
