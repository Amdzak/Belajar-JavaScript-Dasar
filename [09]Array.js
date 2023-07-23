/* 
    Array 

    dalam javascript untuk melaukan inisisasi array tidaklah perlu melakukan inisasi objek baru jadi lansgusn saja di tulis
    didalam kurung siku contoh 
        var nilaiArray = ["Aku","Manusia",1,100,false,true];
    
        dan didalam penulisan array javascript bisa di isi oleh semua tipedata mau boolean/integer/String semuanya bisa

    Method dalam array di javascript
    length() : berfungsi sebagai menghitung jumlah index dalam array
    join() : akan menggabungkan seluruh array dan menjadikanya string, dapat diubah delimeternya didalam method join
    push() : untuk menambah emelmen array di akhir element atau di akhir index bisa langsung menmabhakan lebih dari 1
    pop() : menghilangkan nilai array di akhir
    unshift() : untuk menambah emelmen array di awal element atau di awal index bisa langsung menmabhakan lebih dari 1
    shift() : menghilangkan nilai array di awal
    slice(indexAwal,IndexAkhir) :  unutk mengambil beberapa bagian dari array untuk menjadi bagian yang baru, tetapi untuk index akhir tidak akan di bawa oleh metdoh slicenya
    splice(indexAwal,inginDihapusBrp,NilaiArray) : menambah atau menyisipkn nilai array di tengah,jika tidak ingin menghapus maka di beri nilai 0

*/

var nilaiArray = [1,2,"Kucing","Salto",false,true];

// .length()
console.log(nilaiArray.length);
console.log(nilaiArray.join()); // tanpa delimiter atau separator (pemisah)
console.log(nilaiArray.join("-")); // dengan pemisah

// .push()
nilaiArray.push("lucu"); //akan berada pada index terakhir
console.log(nilaiArray.join()); 

// .pop()
nilaiArray.pop()
console.log(nilaiArray.join()); 

// .unshift()
nilaiArray.unshift("SIAPA AKU","lulu")
console.log(nilaiArray.join()); 

// .shift()
nilaiArray.shift();
console.log(nilaiArray.join()); 

// .splice()
nilaiArray.splice(2,0,"lucu");
console.log(nilaiArray.join()); 

// .slice() mengambil index 2,3 dari array
var nilaiBaru = nilaiArray.slice(2,4);
console.log(nilaiBaru.join()); 


