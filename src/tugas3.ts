class Lingkaran {

    constructor(public jariJari: number) {}

    public hitungLuas(): number {
        return Math.PI * (this.jariJari * this.jariJari);
    }
}

const lingkaranIni = new Lingkaran(7);
console.log(`Luas lingkaran dengan jari-jari ${lingkaranIni.jariJari} adalah: ${lingkaranIni.hitungLuas()}`);