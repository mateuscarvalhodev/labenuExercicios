const playBlackJack = () => {
const values =['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['Hearts', 'diamonds', 'clubs', 'spades'];
console.log(values, suits);
}
const playNewGame = true;

if (playNewGame === false) {
  console.log('ok, game over');
} else {
  playBlackJack();
}

//const values=['2', '3', '4', '5', '6', '7','8', '9', '10', 'J', 'Q', 'K', 'A'];
//const suits = ['spodes', 'clubs', 'diamonds', 'hearts'];

// function playBlackJack() {
