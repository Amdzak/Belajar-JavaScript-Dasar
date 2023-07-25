/* 
    FIlter dan FInd pada array

    Filter  mengembalikan banyak nilai, penulisan filter bisa di berikan function yang mengembalikan nilai return untuk mencari sebauh nilai dengan beberapa syarat

    Find mengembalikan 1 nilai


*/

var nilai = [1,2,3,10,11,4,5,3,34,2,6,6,3];

//menggunakan filter menemukan banyak nilai
var nilai2 = nilai.filter(function(e){return e === 3}); // akan memfilter nilai sesuai dengan kriterianya
var nilai3 = nilai.filter(function(e){return e > 3});
console.log(nilai2);
console.log(nilai3.join());

//menggunakan find hanya menemukan 1 nilai saja
var nilai4 = nilai.find(function(a){return a > 3});
console.log(nilai4);