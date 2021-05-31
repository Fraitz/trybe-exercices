let ang1 = 60;
let ang2 = 60;
let ang3 = -70;
const somaAng = ang1 + ang2 + ang3;

if (ang1 < 0) {
    console.log("erro");
} else if (ang2 < 0) {
    console.log("erro");
} else if (ang3 < 0) {
    console.log("erro");
} else if (somaAng == 180) {
    console.log("true");
} else {
    console.log("false")
}