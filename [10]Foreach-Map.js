/* 
    Foreach dan map dalam array

    foreach merupakan sebuah cara unutk melakukan looping dalam array yang lebih simpel secara umum cara kerjanya sama seperti for
    untuk penulisan array forEach sebagai berikut

        var aray1 = [1,2,3,4];

        aray1.forEach(function(element){    kegunaan fungsi ini merupakan untk menampilkan didalam onsole saja
            console.log(e);
        });

    Map
    map merupkana sebuh fungsi sama seperti foreach konseopnya sama seperti foreach tetapi ini mengembalikan nilai dari array nya jadi ada returnnya
    dan dapat lebih simpel
    
        var aray1 = [1,2,3,4];
        var nilaiBaru = aray1.map(function(e){
            return e+3;
        });
        console.log(aray1.join());
*/

var nilai = [1,2,30,11,10,4,3,6,7,8,9];
var nama = ["mamad","itung","wawa","zeze"];

// looping menggunakan for biasa
// for (let i = 0; i < nilai.length; i++) {
//     console.log(nilai[i]);
// }

// looping menggunakan foreach

nilai.forEach(function(e) {
  console.log(e)  ;
});

// looping dengan foreach dan memanfaatkan nilai index dari elementnya
nama.forEach(function(element,index){
    console.log("Nama ke " + (index+1) + " adalah " + element);
});

var nilaiAray = nilai.map(function(e){
    return e + 2;
});

console.log(nilaiAray.join());

// sort dalam array
nilai.sort();
console.log(nilai.join());

// jika ingin sortingnya sesuai dengan nilainya maka kita perlu tambahkaan sebuah function
nilai.sort(function(a,b){return a-b});
console.log(nilai.join());
