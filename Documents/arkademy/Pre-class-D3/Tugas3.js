//nomor 1
/*kondisional if else sederhana dapat dibuat dengan menggunakan sintaks berikut 
if (kondisi 1) {
    kode program ketika kondisi 1 bernilai benar;
}
if (kondisi 2) {
    kode program ketika kondisi 2 bernilai benar;
}
if (kondisi n) {
    kode program ketika kondisi n bernilai benar;
}
else {
    kode program ketika semua kondisi bernilai salah;
}
*/

//nomor 2
let x;
function cekParameter(x) {
    if (x) {
        return console.log("Ini parameternya "+x);
    }
    else {
        return console.log("Tidak ada parameter yang diberikan!");
    }
}