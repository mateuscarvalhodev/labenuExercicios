const myAge = prompt(`Quantos anos você tem?`);
const yourAge = prompt(`Quantos anos seu amigo tem?`);
const biggerAge = Math.max(myAge, yourAge);
const smallerAge = Math.min(myAge, yourAge);
const ageGap = biggerAge - smallerAge;

if (myAge > yourAge) {
    console.log(`Sua idade é maior que a do seu amigo`);
    document.querySelector('.resultado').innerHTML = `Sua idade é maior que a do seu amigo`;
} else {
    console.log(`A idade do seu amigo é maior que a sua`);
    document.querySelector('.resultado').innerHTML = `A idade do seu amigo é maior que a sua`;
}
document.querySelector('.resultado').innerHTML = `A diferença entre a sua idade e a idade do seu amigo é de ${ageGap} anos`
