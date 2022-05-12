// Desafio 10
function techList(techs = [], name) {
//   // seu código aqui
  if (techs.length === 0) {
    return 'Vazio!';
  }

  let list = [];
  let sortList = techs.sort();
  for (let tech = 0; tech < sortList.length; tech += 1) {
    let objetos = {
      tech: sortList[tech],
      name,
    };
    list.push(objetos);
  }
  return list;
}

console.log(techList());

const arrayIncorrect = (array = []) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
};

let phNumber = '';
const verifyNumber = (genNumber) => {
  for (let i = 0; i < genNumber.length; i += 1) {
    let countNumber = 0;
    for (let y = 0; y < genNumber.length; y += 1) {
      if (genNumber[y] === genNumber[i]) {
        countNumber += 1;
      }
    }
    
    if (genNumber[i] < 0 || genNumber[i] > 9 || countNumber >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    phNumber = phNumber.substr(0, i) + genNumber[i] + phNumber.substr(i + 1);
  }
  phNumber = '(' + phNumber.substr(0, 2) + ') ' + phNumber.substr(2, 5) + '-' + phNumber.substr(7);
  return phNumber;
}
// Desafio 11
function generatePhoneNumber(number = []) {
  // seu código aqui
  if (number.length !== 11) {
    return arrayIncorrect(number);
  }
  return verifyNumber(number);
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 0, 0]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < Math.abs(lineB + lineC)
    && lineB < Math.abs(lineA + lineC)
    && lineC < Math.abs(lineA + lineB)) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(drinkString) {
  // seu código aqui
  let drinkNum = drinkString.match(/\d/g);
  let waterNum = 0;
  for (let i = 0; i < drinkNum.length; i += 1) {
    waterNum += parseInt(drinkNum[i], 10);
  }
  let waterS = ' copo de água';
  let waterM = ' copos de água';
  if (waterNum === 1) {
    return waterNum + waterS;
  }
  return waterNum + waterM;
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
