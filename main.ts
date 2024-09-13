import { error } from "console";

console.log("hello world!");

function RNG(min: number, max: number): number {
  const rng = Math.random();
  return Math.trunc(rng * (max - min) + min);
}

function RNGSequence(len: number, min: number, max: number) {
  if (len > max - min) {
    throw new Error(`connot find ${len} numbers between ${min} and ${max}`);
  }
  const res: number[] = [];
  while (res.length < len) {
    const rn = RNG(min, max);
    if (res.includes(rn)) {
      continue;
    }
    res.push(rn);
  }
  return res;
}

const route = [
  "Bari",
  "Cagliari",
  "Firenze",
  "Genova",
  "Milano",
  "Napoli",
  "Palermo",
  "Roma",
  "Torino",
  "Venezia",
  "Nazionale",
];

const estrazioni: { [ruota: string]: number[] } = {};

for (const routa of route) {
  const estrazione = RNGSequence(5, 0, 100);
  estrazioni[routa] = estrazione;
}

console.dir(JSON.stringify(estrazioni, null, 2));

// function RNGDec(min:number, max:number, precision:number):number {
//     const multFactor = Math.pow(10, precision);
//     return RNG(min * multFactor, max * multFactor) / multFactor;
// }

// console.log(RNGDec(10, 100, 2));
// console.log(RNGDec(10, 100, 3));
// console.log(RNGDec(10, 100, 4));
