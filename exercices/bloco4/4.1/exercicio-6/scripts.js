let chessPice = "RAINHA";
let lower = chessPice.toLowerCase();

switch (lower) {
    case "peão":
        console.log("anda pra frente e come na diagonal");
        break;
    case "cavalo":
        console.log("anda em 'L' pulando as outras peças");
        break;
    case "rei":
        console.log("anda em todas as direções uma casa por vez");
        break;
    case "torre":
        console.log("anda na vertical e horizontal");
        break;
    case "bispo":
        console.log("anda nas diagonais");
        break;
    case "rainha":
        console.log("anda em todas as direçoes inifnitamente, temerosa, gigolesca, a rainha, GOD SAVE THE QUEEN");
        break;                            
    default:
        console.log("isso não é uma peça de xadrez");        
}