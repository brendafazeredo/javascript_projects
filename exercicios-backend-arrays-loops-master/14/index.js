const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let numero = 0; numero < arrayA.length || numero < arrayB.length; numero++) {
    if (arrayA[numero] < arrayB[numero]) {
        console.log(arrayA[numero]);
    } else {
        console.log(arrayB[numero]);
    }
}
