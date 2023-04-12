// crie uma função que receba um array de numeros e retorne o primeiro e o ultimo numero desse array dividido por 2
const array = [100, 4, 6, 8, 10, 12, 14, 16, 18, 80];

const firstAndLast = (array) => {
const firstNumber = array[0] / 2;
const lastNumber = array[array.length - 1] / 2;
return {first : firstNumber, last : lastNumber};
}

console.log(firstAndLast(array));
