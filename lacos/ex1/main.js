/*Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma let conta para guardar o valor total.

Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for sim, devemos imprimir o valor total da conta.*/

let croquettes = prompt('Você quer coxinha? "S" ou "N".')

let amount = 0;

while(croquettes.toLowerCase() === 's') {
    amount += 2.50;
    croquettes = prompt('Você quer mais coxinhas? "S" ou "N".');
}
alert(`o valor a ser pago é R$ ${amount}`);
