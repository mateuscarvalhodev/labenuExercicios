let balance = 15;
let income = 22.40;
let expense = 12.34;

let totalBalance = balance + income;
console.log(`22.40 adicionado ao saldo dá: R$${totalBalance}`);
totalBalance = totalBalance - expense;
console.log(`agora foram gastos 12.34, restou: R$${totalBalance}`);
totalBalance = totalBalance /2;
console.log(`agora o valor foi dividido com seu irmão, restou: R$${totalBalance}`);
totalBalance = totalBalance *3.40;
console.log(`agora o seu valor foi investido e rendeu 3.40x, agora você tem : R$${totalBalance}`);
totalBalance = (totalBalance /3) % 3
console.log(totalBalance);
