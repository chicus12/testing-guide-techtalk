// https://jestjs.io/docs/en/expect

let fruits = ['manzana', 'fresa', 'kiwi', 'piña']

function add(fruit) {
  fruits.push(fruit)
  return fruits.join(', ')
}

function remove(fruitToRemove) {
  fruits = fruits.filter(fruit => fruit !== fruitToRemove)
  return fruits.join(', ')
}

// funcion con error
function filter(search) {
  return fruits.filter(fruit => fruit.indexOf(search) > -1).join(', ') || null
}

function filterTest() {
  let result = filter('ki')
  let expected = 'kiwi'
  expect(result).toBe(expected)
}
test('Filtrar una fruta', filterTest)

function addTest() {
  const result = add('pera')
  const expected = 'manzana, fresa, kiwi, piña, pera'
  expect(result).toBe(expected)
}
test('Agregar una fruta', addTest)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`✖ ${actual} is not equal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title} passed`)
  } catch (error) {
    console.error(`✖ ${title}`)
    console.error(error)
  }
}
