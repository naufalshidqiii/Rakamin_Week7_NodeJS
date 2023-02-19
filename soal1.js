const { Bentuk } = require("./rumus.js");

class PersegiPanjang extends Bentuk {
	constructor() {
		//constructor(panjang, lebar, luas, keliling);
		super(10, 20);
	}
}

class Persegi extends Bentuk {
	constructor() {
		//constructor(panjang, lebar, luas, keliling);
		super(10, 10);
	}
}

// Deklarasi objek
let persegi = new Persegi();
let persegiPanjang = new PersegiPanjang();

// Cari parameter persegi
persegi.CariLuas();
persegi.CariKeliling();

// Cari parameter persegi panjang
persegiPanjang.CariLuas();
persegiPanjang.CariKeliling();

console.log("Luas persegi adalah " + persegi.luas);
console.log("Keliling persegi adalah " + persegi.keliling);
console.log("\n");
console.log("Luas persegi panjang adalah " + persegiPanjang.luas);
console.log("Keliling persegi panjang adalah " + persegiPanjang.keliling);
