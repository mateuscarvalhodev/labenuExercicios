// ----------------- EXERCICIO 01 -----------------

const productName = prompt('Qual o nome do produto?');
let productPrice = Number(prompt('Qual o preço do produto?'));

productPrice -= 1;

console.log(`Seu produto ${productName} com desconto é: ${productPrice}`);

