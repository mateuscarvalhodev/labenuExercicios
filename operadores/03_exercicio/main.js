// Exercício 3
// ----------------------------- Parte 1 -----------------------------
// Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeiro ou falso:

// a) 5 é maior que 20 e também é menor que 2;

// b) 5 é igual a 5 ou é igual a “5”;

// c) negação de (vinte é maior que cinquenta)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

// Exemplo:

// const operacao1 = 20 < 50 && 50 > 90;
// console.log(operacao1);
// /*false, porque 50 não é maior que 90, consequentemente temos true && false,
// que devolve false*/


console.log (5 > 20 && 5 < 2);
console.log(5 === 5 || 5 === 5);
console.log(!20 > 50);
console.log(!20 > 50 || 50 > 60);



// ----------------------------- Parte 2 -----------------------------
// Na aula passada começamos a implementar um sistema para o RH de uma empresa.

// Vamos continuar? Suponhamos que o exercício da aula passada tenha como resultado o relatório abaixo:

// O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.

// Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

// - Janeiro: R$ 5.784,50
// - Fevereiro: R$ 3.418,41
// - Março: R$ 4.124,10
// - Abril: R$ 1.874,00
// - Maio: R$ 7.000,00
// - Junho: R$ 9.450,00
// d)  Desconto do INSS 5% do salário

// Calcule:

// O salário fixo mais o auxílio creche

// Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

// Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas)

// Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

// A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. (Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)



const baseSalary = 2000;

const sales = {
    january: 5784.50,
    february: 3418.41,
    march: 4124.10,
    april: 1874,
    may: 7000,
    june: 9450,
}
const children = 2;
const childcareAllowancePerChildren = 45.50;

for(const month in sales) {
const comission = sales[month] * 0.1;
const totalSalary = baseSalary + comission;
const inssDiscount = totalSalary * 0.05;
const finalSalary = totalSalary - inssDiscount;
console.log(`Mês: ${month} - Salário Total: R$${totalSalary.toFixed(2)} - desconto do INSS: R$${inssDiscount.toFixed(2)} - Salário Final: R$${finalSalary.toFixed(2)}`);
};

// const comissionJanuary = sales.january * 0.1;
// const totalSalaryJanuary = baseSalary + comissionJanuary;
// const inssDiscountJanuary = totalSalaryJanuary * 0.05;
// const finalSalaryJanuary = totalSalaryJanuary - inssDiscountJanuary;

// const comissionFebruary = sales.february * 0.1;
// const totalSalaryFebruary = baseSalary + comissionFebruary;
// const inssDiscountFebruary = totalSalaryFebruary * 0.05;
// const finalSalaryFebruary = totalSalaryFebruary - inssDiscountFebruary;

// const comissionMarch = sales.march * 0.1;
// const totalSalaryMarch = baseSalary + comissionMarch;
// const inssDiscountMarch = totalSalaryMarch * 0.05;
// const finalSalaryMarch = totalSalaryMarch - inssDiscountMarch;

// const comissionApril = sales.april * 0.1;
// const totalSalaryApril = baseSalary + comissionApril;
// const inssDiscountApril = totalSalaryApril * 0.05;
// const finalSalaryApril = totalSalaryApril - inssDiscountApril;

// const comissionMay = sales.may * 0.1;
// const totalSalaryMay = baseSalary + comissionMay;
// const inssDiscountMay = totalSalaryMay * 0.05;
// const finalSalaryMay = totalSalaryMay - inssDiscountMay;

// const comissionJune = sales.june * 0.1;
// const totalSalaryJune = baseSalary + comissionJune;
// const inssDiscountJune = totalSalaryJune * 0.05;
// const finalSalaryJune = totalSalaryJune - inssDiscountJune;

// console.log(`O salario fixo + auxilio creche é: R$${baseSalary + (childcareAllowancePerChildren * children)}`);
// console.log(`fulano da silva receberá de comissão em Janeiro: R$${sales.january * 0.2}`);
// console.log(`Será descontado em janeiro pelo INSS o valor de R$${inssDiscountJanuary.toFixed(2)}`);
// console.log(`janeiro: R$${finalSalaryJanuary.toFixed(2)} Fevereiro: R$${finalSalaryFebruary.toFixed(2)} março: R$${finalSalaryMarch.toFixed(2)} abril: R$${finalSalaryApril.toFixed(2)} maio: R$${finalSalaryMay.toFixed(2)} junho: R$${finalSalaryJune.toFixed(2)}`);


