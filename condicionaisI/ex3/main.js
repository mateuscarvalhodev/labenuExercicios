// Crie uma função que recebe do usuário sua nacionalidade, utilizando um prompt com a seguinte mensagem: "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// brasileira;
// argentina;
// uruguaia;
// chilena;
// colombiana;
// Crie uma estrutura de if/else if/else que verifique se a nacionalidade guardada na const nacionalidade é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último else deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhuma das possibilidades acima.

const nationality = prompt('Qual a sua nacionalidade?').toLowerCase();

if(nationality === 'brasileira') {
    alert('Nacionalidade Brasileira');
} else if (nationality === 'argentina') {
    alert('Nacionalidade argentina');
} else if (nationality === 'uruguaia') {
    alert('Nacionalidade uruguaia');
} else if (nationality === 'chilena') {
    alert('Nacionalidade chilena');
} else if (nationality === 'colombiana') {
    alert('Nacionalidade colombiana');
} else {
    alert('Nacionalidade não encontrada');
}



