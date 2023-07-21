/* 
    Popup box merupakan sebuah dialog b ox yang akan muncul di halaman web yang ada 
    ada 3 jenis popup box 
        alert   = Merupakan sebuah popUP melayang berfungsi untuk memberi pesan sederhana kepada user
        prompt  = Merupakan sebuah popUp melayang yang mana bisa membuat masukan kepada sisi user 
        confirm =  untuk meminta konfirmasi dari user memiliki value true dan false
    
        syntax:
        alert("Pesan yang akan di tampilkan"); bisa dengan kutip 2 atau 1 
        prompt("masukan nama"); maka nanti akan ada popup yg bisa di isi
*/

alert("INI MERUPAKAN POPUPBOX ALERT");
alert("Halo pengunjung :3");

var x = prompt("Masukan nama");

alert("Selamat datang " + x + " !");

var coba = confirm("Apakah kamu ingin masuk?");

if (coba == true) {
    alert("halo " + x);
} else {
    alert("bye " + x);
}