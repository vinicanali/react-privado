const line = [0, 0, 2, 0, 2];
const newLine = [2, 4, ...line, 12];

/**
 * Exercicio:
 *
 * 1. Cria um novo array numa nova constante em que os
 * valores iguais a 0 aparecem nos índices iniciais do array
 * e os valores diferentes de 0 nos índices seguintes
 *
 */

const sorted = [...newLine].sort();

const filtered = [
  ...newLine.filter((n) => n === 0),
  ...newLine.filter((n) => n !== 0),
];

console.log("NEW LINE :: ", newLine);
console.log("SORT :: ", sorted);
console.log("FILTER :: ", filtered);
