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
*/

var nilaiArray = [1,2,"Kucing","Salto",false,true];

console.log(nilaiArray.length);
console.log(nilaiArray.join()); // tanpa delimiter atau separator (pemisah)
console.log(nilaiArray.join("-")); // dengan pemisah
nilaiArray.push("lucu"); //akan berada pada index terakhir
console.log(nilaiArray.join()); 
nilaiArray.pop()
console.log(nilaiArray.join()); 
nilaiArray.unshift("SIAPA AKU","lulu")
console.log(nilaiArray.join()); 
nilaiArray.shift();
console.log(nilaiArray.join()); 
