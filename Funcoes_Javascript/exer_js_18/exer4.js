function multArray (array, factor) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= factor
  }

  return array
}

let a1 = [1,2,3]
console.log(multArray(a1, 2))
let a2 = [5,6,7,8,9,10]
console.log(multArray(a2, 3))
