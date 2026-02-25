// src/index.ts

function alo(name: string, umur: number): string {
    return `Halo,` +name+ ` Selamat belajar TypeScript di PWL Pak Syahru, umur kamu ` +umur+ ` tahun yaa` ;
}

const namaMahasiswa = "Syafira Aulianisa";
const umur = 18;
console.log(alo(namaMahasiswa, umur));
