const fullName = prompt("Qual o seu nome completo?");
const birthDate = prompt("Qual a sua data de nascimento? (Utilize o formato dd/mm/aaaa)");
const adress = prompt("Qual o seu endereço?");
const cpf = prompt("Qual o seu CPF?");
const schooling = prompt("Qual a sua escolaridade?");
const hasCNH = prompt("Você possui CNH? (Digite 'sim' ou 'nao')");
const numChildren = parseInt(prompt("Quantos filhos você possui?"));


const currentPosition = prompt("Qual o seu cargo atual?");
const currentSalary = parseFloat(prompt("Qual o seu salário atual?"));
const comission = 0;

const receivesComission = prompt("Você recebe comissão? (Digite 'sim' ou 'nao')");
if (receivesComission.toLowerCase() === "sim") {
  comission = parseFloat(prompt("Qual é a porcentagem da sua comissão? (Digite um número entre 0 e 100)")) / 100;
};

const yearAdmission = parseInt(prompt("Em que ano você foi contratado?"));

console.log(typeof fullName);
console.log(typeof birthDate);
console.log(typeof adress);
console.log(typeof cpf);
console.log(typeof schooling);
console.log(typeof hasCNH);
console.log(typeof numChildren);
console.log(typeof currentPosition);
console.log(typeof currentSalary);
console.log(typeof comission);
console.log(typeof receivesComission);
console.log(typeof yearAdmission);


console.log(`Nome completo: ${fullName}`);
console.log(`Data de nascimento: ${birthDate}`);
console.log(`Endereço:  ${adress}`);
console.log(`CPF:  ${cpf}`);
console.log(`Escolaridade:  ${schooling}`);
console.log(`CNH: ${hasCNH}`);
console.log(`Número de filhos:  ${numChildren}`);
console.log(`Cargo atual: ${currentPosition}`);
console.log(`Salário atual: R$ ${currentSalary.toFixed(2)}`);
console.log(`Comissão: ${(comission * 100)}%`);
console.log(`Ano de admissão: ${yearAdmission}`);