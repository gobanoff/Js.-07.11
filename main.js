function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 4 Uzduotis
let x = "Once upon a time in holywood";
x = x.replaceAll("o", "*");
console.log(x.replace("O", "*"));

// 5 Uzduotis

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);
console.log(a, b, c, d);
let digit0 = 0;
let digit1 = 0;
let digit2 = 0;
if (a === 0) {
  ++digit0;
} else if (a === 1) {
  ++digit1;
} else if (a === 2) {
  ++digit2;
}

if (b === 0) {
  ++digit0;
} else if (b === 1) {
  ++digit1;
} else if (b === 2) {
  ++digit2;
}

if (c === 0) {
  ++digit0;
} else if (c === 1) {
  ++digit1;
} else if (c === 2) {
  ++digit2;
}

if (d === 0) {
  ++digit0;
} else if (d === 1) {
  ++digit1;
} else if (d === 2) {
  ++digit2;
}

console.log(`nuliu: ${digit0},vienetu: ${digit1},dvejetu: ${digit2}`);

// 6 Uzduotis

let one = rand(0, 4);
let two = rand(0, 4);
console.log(one, two);
if (one > two) {
  console.log((one / two).toFixed(2));
} else {
  console.log((two / one).toFixed(2));
}

// 7 Uzduotis
let y = rand(0, 25);
let z = rand(0, 25);
let w = rand(0, 25);
console.log(y, z, w);

const min = Math.min(y, z, w);
const max = Math.max(y, z, w);

console.log(`middle value:`);
if (y !== max && y !== min) {
  console.log(y);
} else if (z !== max && z !== min) {
  console.log(z);
} else if (w !== max && w !== min) {
  console.log(w);
}

// 8 Uzduotis

let name = "Donatas";
let lastName = "Banionis";
let rez = name[0] + lastName[0];
console.log(rez);

// 9 Uzduotis

let abc = "abcdefghiyjklmnopqrstuvwxz";

let lt1 = rand(0, abc.length);
let lt2 = rand(0, abc.length);
let lt3 = rand(0, abc.length);

let randLetters = abc[lt1] + abc[lt2] + abc[lt3];

console.log(randLetters);
