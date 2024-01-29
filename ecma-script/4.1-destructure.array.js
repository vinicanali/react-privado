const names = ["John", "Mary"];

const [name1, name2] = names;

const customers = [...names, "Jane", "Lou"];

// desestrutura o array de customers para obter apenas o nome "Jane" numa constante//


const [, , name3] = customers;
const { 2: customer2 } = customers;
console.log(customer2);

