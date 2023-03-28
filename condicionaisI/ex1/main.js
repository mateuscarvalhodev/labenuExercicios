// Crie uma função que receba uma const numérica qualquer. Crie um if para verificar se o número guardado na const é par. Caso seja, a função deve retornar a mensagem: "o número é par". Depois disso, imprima o retorno no console.


const evenOrOdd = (n) => {
    if (n % 2 === 0) {
        console.log('numero par');
    } else {
        console.log('numero impar');
    }
}

evenOrOdd(5);
evenOrOdd(2);
evenOrOdd(4);