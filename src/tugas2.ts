interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

const bukuPraktikum: Buku = {
    judul: "Panduan Sistem Informasi",
    pengarang: "Tim Dosen Sistem informasi",
    tahunTerbit: 2026,
    tersedia: true
};

console.log("Detail Buku:");
console.log(`Judul: ${bukuPraktikum.judul}`);
console.log(`Pengarang: ${bukuPraktikum.pengarang}`);
console.log(`Tahun Terbit: ${bukuPraktikum.tahunTerbit}`);
console.log(`Status Tersedia: ${bukuPraktikum.tersedia}`);