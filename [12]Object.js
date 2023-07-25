/* 
    Object

    pada Javascript penmahaman terkati objek tidaklah jauh beda dengan bahasa pemrograman java yang sebelumnya sudah di pelajari
    tetapi perbedaan nya terdapat pada penulisan setiap code dan syntax 

        contoh pembuatan object baru dalam bahasa pemrograman java 
            public class Angkot{
                public String nama;
                
                public Angkot(Stirng nama){
                    this.nama = nama;
                }
            }

            Angkot kendaraan1 = new Angkot("Kendaraaan kucing"); disini code new berfungsi sebagai pembuatan object baru dari class angkot
            System.out.print(kendaraan1); // ini unutk menampilkan hasil nya
            
        contoh pembuatan object baru dalam bahasa pemrograman javaScript
            var Angkot = {
                nama : "Angkot 1",
                warna : "putih"
            };

            Angkot.nama; // untuk memanggil atribut dari angkot

*/
// pembuatan objek literal dalam javascript
var Anggota = {
    nama : "AMDZAK x JIFU/FUJI",
    jenisKelamin : undefined,
    umr : [20,19],
    Alamat : {
        kota : "Malang",
        Kecamatan : ["Pakis","Blimbing"],
        prov : "Jatim"
    }
};

// pemanggilan object

console.log("Nama : " + Anggota.nama);
console.log("Jeniskelamin : " + Anggota.jenisKelamin);
console.log("Umr : " + Anggota.umr[0]);
console.log("Umr : " + Anggota.umr[1]);
console.log("Alamat : " + Anggota.Alamat.Kecamatan[0]);
console.log("Alamat : " + Anggota.Alamat.kota);
console.log("Alamat : " + Anggota.Alamat.prov);

// pembuatan object dengan menggunakan function
function buatObject(nama,usia,alamat){
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.usia = usia;
    mahasiswa.alamat = alamat;
    return mahasiswa;
}

//pemanggilan object
var mahaiswa1 = buatObject("Fuji",17,"Jl Malang no 11");
console.log(mahaiswa1.nama);
console.log(mahaiswa1.usia);
console.log(mahaiswa1.alamat);

/* 
 pembuatan object dengan menggunakan constructor sama seperti dengan membuat class di java
 dan isinya memekai dengan this lalu pembuatan objectnya di tanai dengan code new
 */

function Mahasiswa(nama,usia,alamt){
    this.nama = nama;
    this.usia = usia;
    this.alamat = alamt;
}

// pemanggilan dari object dengan menggunakan code new
var mahasisswa = new Mahasiswa("JiFu",20,"Jl Malang no 22");