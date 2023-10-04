let m = 90_000;
let c = 60_000;
let t = 24;
let i = (m / c) ** (1/t) - 1;

console.log(`A taxa foi de ${i * 100}%.`)
