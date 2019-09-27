const { add, remove, filter } = require('./fruits')

test('agregar una fruta', () => {
  const result = add('pera')
  const expected = 'manzana, fresa, kiwi, piña, pera'
  expect(result).toBe(expected)
})

test('buscar una fruta', () => {
  const result = filter('ki')
  const expected = 'kiwi'
  expect(result).toBe(expected)
})
