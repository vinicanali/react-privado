const person = {
    name: "Mary",
    lastName: "Smith"
};

/**
 * Exercicio:
 * 
 * 1. Criar uma constante clone que é igual a "person"
 * sem criar um novo objeto
 * 
 * 2. Alterar o último nome ("lastName") do clone para "Doe"
 * 
 * 3. Fazer um console.log(person) e console.log(clone)
 * 
 * 4. O resultado deverá ser objetos com o mesmo "name"
 * mas com lastName diferentes
 * 
 */

const clone = {...person, lastName: "Doe"};

//clone.lastName = "Doe";

console.log("Person :: ", person)
console.log("Clone :: ", clone);
