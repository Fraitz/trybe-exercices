let salary = 8900;
let inss;
let ir;
let liquid;

if (salary < 0) {
    console.log("Tá de sacanagem!");  
}  else if (salary <= 1556.94) {
    inss = 0.08 * salary;
} else if (salary <= 2594.92) { 
    inss = 0.09 * salary;
} else if (salary <= 5189.82) {
    inss = 0.11 * salary;
} else {
    inss = 570.88;
}

liquid = salary - inss;

if (liquid <= 1903.98) {
    ir = 0;
} else if (liquid <= 2826.65) { 
    ir = 0.075 * liquid - 142.80;
} else if (liquid <= 3751.05) {
    ir = 0.15 * liquid - 354.80;
} else if (liquid <= 4664.68) {
    ir = 0.225 * liquid - 686.13;
} else {
    ir = 0.275 * liquid - 869.36;
}

liquid = salary - inss - ir
console.log(liquid);