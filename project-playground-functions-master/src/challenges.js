// Desafio 1

function compareTrue(n1, n2, n3 = 5) {
  if (n1 > n3 && n2 > n3) {
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
// arrayOfString.splice(1, 1);
// arrayOfString.splice(1, 2);
// arrayOfString.reverse();
// return arrayOfString;
// const lastPosition = arrayOfString[arrayOfString.length - 1];
// const firstPosition = arrayOfString[0];
// const nameConcat = `${lastPosition}, ${firstPosition} `;
// return nameConcat;

  // const first = [...arrayOfString].shift();
  // const last = [...arrayOfString].pop();
  // return `${last}, ${first}`;

  // const { length, 0: first, [length - 1]: last } = arrayOfString;
  // return `${last}, ${first}`;
  return arrayOfString;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pointWin = wins * 3;
  const pointTie = ties * 1;
  const points = pointWin + pointTie;
  return points;
  // const points = (wins * 3) + ties;
  // return points;
}
// console.log(footballPoints(0, 0));

// Desafio 6, the equality function it's a function assistant for question of complexity

const equality = (numbers) => {
  let maxNumber = numbers[0];
  for (let number in numbers) {
    if (numbers[number] > maxNumber) {
      maxNumber = numbers[number];
    }
  }
  return maxNumber;
};

function highestCount(numbers) {
  // seu código aqui
  let count = 0;
  for (let index in numbers) {
    if (numbers[index] === equality(numbers)) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([9, 1, 13, 13, 13, 9, 5, 7]));

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // let positionCat1 = Math.abs(cat1 - mouse);
  // let positionCat2 = Math.abs(cat2 - mouse);

  // if (positionCat1 < positionCat2) {
  //   return 'cat1';
  // }

  // if (positionCat2 < positionCat1) {
  //   return 'cat2';
  // }
  // return 'os gatos trombam e o rato foge.';
  cat1 -= mouse;
  cat2 -= mouse;
  if (Math.abs(cat1) === Math.abs(cat2)) {
    return 'Os gatos trombam e o rato foge';
  }

  return Math.abs(cat1) < Math.abs(cat2) ? 'cat1' : 'cat2';
}

console.log(catAndMouse(-1, -16, -18));
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
