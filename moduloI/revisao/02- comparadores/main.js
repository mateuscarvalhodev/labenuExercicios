const randomNumber = Math.floor(Math.random() * 10);

const userNumber = Number(prompt('Digite um numero entre 1 e 10'));


if (userNumber <= 10) {
  if (randomNumber === userNumber) {
    console.log('O numero que você chutou é igual ao numero aleatório');
  } else if (randomNumber > userNumber) {
    console.log('O numero que você chutou é menor que o numero aleatório');
  } else if (randomNumber < userNumber) {
    console.log('O numero que você chutou é maior que o numero aleatório');
  };
};
