let mass = Number(prompt('digite peso em kg:'))
let height = Number(prompt('digite altura em centímetros:'))

let result1 = mass * 10000 
let result2 = height * height
let result3 = result1 / result2

if (result3 < 18) {
  alert("IMC - magreza leve")
} else if (result3 == 18 || result3 <= 25) {
  alert("IMC - Saudável")
} else if (result3 == 25 || result3 <= 30) {
  alert("IMC - Sobrepeso")
} else {
  alert("IMC " + result3 + " - Obesidade")
}

