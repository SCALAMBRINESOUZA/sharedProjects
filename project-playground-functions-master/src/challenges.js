// Desafio 1
function compareTrue(n1, n2) {
  if (n1 > 5 && n2 > 10) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const triangle = (base * height) / 2;
  return triangle;
}

// Desafio 3
function splitSentence(phrase) {
  const wordWithSplit = phrase.split(' ');
  return wordWithSplit;
}

// Desafio 4
function concatName(arrayOfString) {
  // const lastPosition = arrayOfString[arrayOfString.length - 1];
  // const firstPosition = arrayOfString[0];
  // const nameConcat = `${lastPosition}, ${firstPosition} `;
  // return nameConcat;

  // const first = [...arrayOfString].shift();
  // const last = [...arrayOfString].pop();
  // return `${last}, ${first}`;

  const { length, 0: first, [length - 1]: last } = arrayOfString;
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
