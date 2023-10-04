const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 30_000_00; //emCentavos

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA!");
} else if (totalDeRendimentos < 28_559_70) {
    console.log("VAZA LEÃO! JÁ ESTÁ DIFÍCIL SEM VOCÊ!");
} else {
    console.log("PEGA LEÃO!");
}
