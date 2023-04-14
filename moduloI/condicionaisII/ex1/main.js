/* Crie um código que receba um número por prompt e verifique se esse número é divisível por 2 ou por 3.

Faça isso:

a) Utilizando ifs aninhados

    if(expressao){
        if(expressao){

        }
    }
b) Utilizando um operador lógico para unir duas operações relacionais

    if(expressao && expressao){
         utilizamos && para E

    }

    if(expressao || expressao){
         utilizamos o II para OU
    }
    */



    // --------------------------------------------------------------------------------------------------
    const isDivisible = prompt('Digite um numero para verificar se ele é divisível por 2 ou 3');

    if(!isNaN(isDivisible)) {
        if(isDivisible % 2 === 0) {
            alert('O numero que você digitou é divisível por 2');
        } else if(isDivisible % 3 === 0) {
            alert('O numero que você digitou é divisível por 3');
        } else {
            alert('O numero que você digitou não é divisível nem por 2 nem por 3');
        }
    } else {
        alert('meu filho você tem que digitar é um numero');
    }


    // --------------------------------------------------------------------------------------------------

const isDivisibleB = prompt('Digite um numero para verificar se ele é divisível por 2 ou 3');

if(isDivisibleB % 2 === 0 && isDivisibleB % 3 === 0) {
    alert('fizzBuzz')
}
if(isDivisibleB % 2 === 0 || isDivisibleB % 3 === 0) {
    alert('fizz');
}


switch (resposta) {
    case 1:
    console.log('cartão fácil');
    case 2:
        console.log('cartão black');
    case 3:
    console.log('cartão platinum');
    break;
}