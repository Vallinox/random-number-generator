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

function createRuotaCnt(ruotaName: string, estrazioni: number[]) {
  const routaDiv = document.createElement("div");
  routaDiv.className = `routa ${ruotaName.toLowerCase()}`;

  const nameH2 = document.createElement("h2");
  nameH2.innerText = ruotaName;
  nameH2.className = 'ruota-title';
  routaDiv.appendChild(nameH2);

  for (const num of estrazioni) {
    const numP = document.createElement("p");
    numP.innerText = '' + num;
    const numDiv = document.createElement('div');
    numP.className = 'ruota-estrazione';
    numDiv.appendChild(numP);
    routaDiv.appendChild(numDiv);
  }
  return routaDiv;
}

const container = document.getElementById("cnt");
if (container) {
  const pre = document.createElement("pre");
  // pre.innerText = JSON.stringify(estrazioni, null, 2);
  // container.appendChild(pre);

  for (const routa of route) {
    const routaEstrazioni = estrazioni[routa];
    const routaDiv = createRuotaCnt(routa, routaEstrazioni);
    container.appendChild(routaDiv);
  }
}

// function RNGDec(min:number, max:number, precision:number):number {
//     const multFactor = Math.pow(10, precision);
//     return RNG(min * multFactor, max * multFactor) / multFactor;
// }

// console.log(RNGDec(10, 100, 2));
// console.log(RNGDec(10, 100, 3));
// console.log(RNGDec(10, 100, 4));
