function hai(data: string | number): string {
    if (typeof data === "string") {
        return `Halo, ${data}`;
    } else {
        return `Umur: ${data} tahun`;
    }
}

console.log(hai("Syafira Aulianisa"));
console.log(hai(19));