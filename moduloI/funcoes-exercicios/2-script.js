const sum = (num1, num2) => console.log(num1 + num2);

sum(10, 20);



const isBigger = (num1, num2) => console.log(`o numero 1 é maior que o numero 2?: ${num1 > num2}`);

isBigger(20, 10);


const oddOrEven = (number) => {
    console.log(number % 2 === 0);
}

oddOrEven(3);


const amountSalary = (salary) => {
    const discountSalary = salary * 0.1;
    const totalSalary = (salary - discountSalary);
    return console.log(`O salário com desconto é ${totalSalary}`);
}
amountSalary(2000);

