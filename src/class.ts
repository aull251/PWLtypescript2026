class Hewan {
    constructor(public nama: string, private umur: number) {}

    public info(): string {
        return `${this.nama} berumur ${this.umur} tahun.`;
    }
}

const kucing = new Hewan("Kitty", 3);
console.log(kucing.info());
// Jika Anda mencoba mengetik: console.log(kucing.umur); 
// TypeScript akan memberikan error karena 'umur' bersifat private