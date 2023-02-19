class Bentuk {
	constructor(panjang, lebar, luas, keliling) {
		this.panjang = panjang;
		this.lebar = lebar;
		this.luas = luas;
		this.keliling = keliling;
	}

	CariLuas() {
		this.luas = this.panjang * this.lebar;
	}

	CariKeliling() {
		this.keliling = 2 * (this.panjang + this.lebar);
	}
}

module.exports = { Bentuk };
