let initialPhrase = ' Hoje vou comer cenoura, eeeba ';

console.log(initialPhrase, '|', initialPhrase.length);
console.log(initialPhrase.trim());
console.log(initialPhrase.toLowerCase());
console.log(initialPhrase.includes('comer'));
console.log(initialPhrase.includes('batata'));

initialPhrase = initialPhrase.replace('cenoura', 'batata');

console.log(initialPhrase.includes('comer'));
console.log(initialPhrase.includes('batata'));