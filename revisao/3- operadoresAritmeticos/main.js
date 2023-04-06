// const num1 = 10
// const num2 = 20
const num1 = prompt(Number('Digite um número'));
const num2 = prompt(Number('Digite um outro número'));

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
}

const division = (num1, num2) => {
  return num1 / num2;
}

const remainder = (num1, num2) => {
  return num1 % num2;
}

console.log(add(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(division(num1, num2));
console.log(remainder(num1, num2));