const age = Number(prompt('Quantos anos você tem?'));
const height = Number(prompt('Quanto de altura você tem?'));
const heartIssues = prompt('Tem problemas cardiacos? "s" ou "n"');
// const age = 18;
// const height = 1.61;
// const heartIssues = 'n';

if(age >= 18 && height > 1.60 && heartIssues === 'n') {
  console.log('Você pode brincar no brinquedo');
} else {
  console.log('Você não pode brincar no brinquedo');
}