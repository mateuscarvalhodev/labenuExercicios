const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const pokemonVida = (poke) => {
  poke.vida = 100;
}

const pokemonVidaCheia = pokemons.map(pokemonVida)
  console.log(pokemons)


const firePokemon = pokemons.filter((fogo) => {
  return fogo.tipo === 'fogo';
})
console.log(firePokemon);

// const multiplyThree = (array) => {
//   const newArray = [];
//   for(let i = 0; i < array.length; i++) {
//     const multiplyNumber = array[i] * 3
//     newArray.push(multiplyNumber);
//     console.log(newArray);
//   }
//   return array;
// }

// const numbersArray = [0, 8, 5, 7, 2, 1];
// console.log(numbersArray);
// console.log(multiplyThree(numbersArray));



// const returnEven = (array) => {
//   const newArray = []
//   for(let element of array) {
//     if(element % 2 === 0) {
//       console.log(element);
//     }
//   }
//   return newArray;
// }

