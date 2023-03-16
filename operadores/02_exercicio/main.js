// O primeiro numero é maior que o segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// divisível = com resto zero

// Obs: A resposta (true ou false) vai depender dos números inseridos e do resultado das operações. As respostas colocadas acima são apenas exemplos!

const x = prompt(`Digite um numero:`);
const xNumber =  parseInt(x)
const y = prompt(`Digite outro numero:`);
const yNumber = parseInt(y)

console.log(`O primeiro numero é maior que o segundo? :${xNumber > yNumber}`);
console.log(`O primeiro número é igual ao segundo? :${xNumber === yNumber}`);
console.log(`O primeiro número é divisível pelo segundo?: ${xNumber % yNumber === 0}`)
console.log(`O segundo numero é divisível pelo primeiro?: ${yNumber % xNumber === 0}`)