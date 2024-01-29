const sum = (initialValue, array) => {
    
    const reducer = (sum, value) => sum + value;
    return array.reduce(reducer, initialValue);
}

console.log(sum(0, [1, 3, 5, 7, 9]));

/* exercicio
1.utilizando reduce, obtem o preço total do array "lineItems"
2. tem em conta a quantidade de cada item 


*/

const lineItems = [
    { description: "Eggs (Dozen)", quantity: 1, price: 3 },
    { description: "Cheese", quantity: 0.5, price: 5 },
    { description: "Butter", quantity: 2, price: 6 }
];

function caixa(total, item) {
    return total + item.price * item.quantity;
}

console.log(lineItems.reduce(caixa, 0));


 





