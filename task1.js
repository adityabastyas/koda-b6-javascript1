// hitung luas dan keliling lingkaran

// let r = 15;
// const phi = 3.14;

// const luasLingkaran = phi * r * r;
// console.log("luas lingkaran adalah " + luasLingkaran);

// const kelilingLingkaran = 2 * phi * r;
// console.log("keliling lingkaran adalah " + kelilingLingkaran);

let r = 15;
let phi = 0;

if (r % 7 === 0) {
  phi = 22 / 7;
} else {
  phi = 3.14;
}

const luasLingkaran = phi * r * r;
const kelilingLingkaran = 2 * phi * r;
console.log(luasLingkaran);
console.log(kelilingLingkaran);
