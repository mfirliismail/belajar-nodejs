const cetakNama = (nama) => { 
    return `Hello nama saya ${nama}`
}


const PI = 3.14;




const manusia = {
    nama : 'Mang Pii',
    umur : 19,
    cetakManusia(){
        return `Halo, nama saya ${this.nama}. saya ${this.umur} tahun`
    }


}

class Mobil {
    constructor() {
        console.log(`Objek Mobil telah dibuat`);
    }
}


module.exports = { cetakNama, PI, manusia, Mobil}