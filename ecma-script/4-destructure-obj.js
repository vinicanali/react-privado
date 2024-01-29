function getStock () {
    return {
        symbol: "BTC",
        price: 40.5,
        createdAt: new Date(),
        limit: 15,
        data: {
            trend:1.2
        },
        printSymbol() {
            console.log("The symbol really is", this.symbol);
        }
    }
}

/* exercicio

desestrututar a função anterior para obter valores de cada chave do objeto retornado, em novas constantes


*/

const {
    symbol,
    price: value, //alterar o nome da constante
    createdAt,
    limit = 100, //valor por defeito
    data: { trend }, //desestruturar o objeto dentro do objeto
    printSymbol
} = getStock();

printSymbol();

getStock().printSymbol();


console.log(symbol);
console.log(price);
console.log(createdAt);
console.log(limit);
console.log(data.trend);


printSymbol();