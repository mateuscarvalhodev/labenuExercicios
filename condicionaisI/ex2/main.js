// Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um if para cada variável, checando as seguintes afirmacões:

// Se a pessoa tem 18 anos ou mais;
// Se a pessoa terminou o ensino médio;
// Se a pessoa NÃO está cursando alguma faculdade;
// Crie um if que imprima que a afirmacão é verdadeira, e um else para imprimir que a afirmacão não é verdadeira.

// Exemplo
// Caso a primeira pessoa tenha idade >= 18:

// "A pessoa é maior de idade"

// e caso não seja:

// "A pessoa é menor de idade"

const person = (age, finishedSchool, attendingCollege) => {
    if (age >= 18) {
        console.log('A pessoa é maior de idade');
        if (finishedSchool) {
            console.log('A pessoa concluiu o ensino médio');
            if (attendingCollege) {
                console.log('A pessoa está cursando faculdade \n -----------------------------------');
            } else {
                console.log('A pessoa não está cursando faculdade \n -----------------------------------');
            }
        } else {
            console.log('A pessoa não concluiu o ensino médio \n -----------------------------------');
        }
    } else {
        console.log('A pessoa é menor de idade\n -----------------------------------');
    }
}

person(26, true, true);
person(17, true, true);
person(18, false, true);
person(18, true, false);