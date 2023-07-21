/* 
    Function

    dalam javascript function boleh ditambahkan nilai return atau tidak
    didalam javascript function dapat menambahkan namaFunction atau tidak
    penulisan function dalam javascript:

        function namaFunction (parameter){
            
        }
*/

/* p,l,t yang ada di dalam kurungmemiliki nama parameter yang mana dia ada nilai yang akan di eksekusi */
function volumeKubus(p,l,t) {
    const nilai = p*l*t;

    return nilai;
}

function print(Greeting){
    tulisan = console.log(Greeting);

    return tulisan;
}

/* volumeKubus(3,3,3) nilai 3,3,3 merupakan sebuah argumen yang berfungsi untuk mengirimkan nilai kedalam parameter */
console.log("Volume kubus 3x3x3 = " + volumeKubus(3,3,3));
console.log("Volume kubus 2x2x2 = " , volumeKubus(2,2,2));

print("Halo dunia");



