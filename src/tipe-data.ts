let namaLatihan: string = "Andi";
let umurLatihan: number = 20;
let isMahasiswa: boolean = true;
let random: any = "bisa string"; // tidak disarankan

console.log(`Nama: ${namaLatihan}, Umur: ${umurLatihan}, Mahasiswa: ${isMahasiswa}`);

let id: string | number;
id = "123";
console.log(`ID String: ${id}`);
id = 123;
console.log(`ID Number: ${id}`);

type ID = string | number;
let userId: ID = "user01";
console.log(`User ID: ${userId}`);