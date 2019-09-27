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
  return fruits.filter(fruit => fruit.indexOf(search) < -1).join(', ') || null
}
