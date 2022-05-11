// Desafio 10
function techList(techs = [], name) {
  // seu código aqui
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

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
