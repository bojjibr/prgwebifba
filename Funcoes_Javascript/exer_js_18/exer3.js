function max(...numbers) {
  let result = -Infinity
  for (let num of numbers ) {
    if (num > result) result = num
  }

  return result
}

console.log(max(5,8,5.6,9.9))

let numbers = [1,3,2]
console.log(max(...numbers))

