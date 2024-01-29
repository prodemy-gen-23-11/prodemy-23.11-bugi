function luasPersegi(sisi) {
    return sisi*sisi;
}

function luasPersegiPanjang(panjang, lebar) {
    return panjang*lebar;
}

function luasSegitiga(alas, tinggi) {
    return (alas*tinggi)/2;
}

function luasJajarGenjang(alas, tinggi) {
    return alas*tinggi;
}

function luasLingkaran(radius) {
    return Math.PI*radius*radius;
}

console.log("Luas persegi: ", luasPersegi(5));
console.log("Luas persegi panjang: ", luasPersegiPanjang(4, 5));
console.log("Luas segitiga: ", luasSegitiga(5, 4));
console.log("Luas jajar genjang: ", luasJajarGenjang(5, 4));
console.log("Luas persegi: ", luasLingkaran(7).toFixed(2));