interface Mahasiswa {
    nama: string;
    umur: number;
    jurusan: string;
}

function cetakMahasiswa(mhs: Mahasiswa): void {
    console.log(`${mhs.nama} - ${mhs.umur} - ${mhs.jurusan}`);
}

const dataMahasiswa: Mahasiswa = {
    nama: "Siti",
    umur: 21,
    jurusan: "Sistem Informasi"
};

cetakMahasiswa(dataMahasiswa);