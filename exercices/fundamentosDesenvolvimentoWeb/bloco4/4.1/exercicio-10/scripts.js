let units = 1000;
let custo = 1 * units;
let venda = 2 * units;

const custoTotal = 1.20 * custo;
const lucro = venda - custoTotal;

if (units < 0 || custo < 0 || venda < 0){
    console.log("thats not possible sir!");
} else {
    console.log(lucro);
}