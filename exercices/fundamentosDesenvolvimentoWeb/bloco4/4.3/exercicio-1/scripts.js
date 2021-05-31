let n = 5;
let asterisco = "*";
let linhaQuad = "";

for (let linhas = 1; linhas <= n; linhas += 1) {
    for (let colunas = 1; colunas <= n; colunas += 1) {
        linhaQuad += asterisco;
    }
    console.log(linhaQuad);   
    linhaQuad = "";
}

