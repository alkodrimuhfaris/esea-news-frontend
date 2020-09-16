//10 method array javascript

//1. method pop
const pop1 = ['kucing','domba','marmut'];
let popped = pop1.pop();
console.log('1');
console.log(popped);
console.log(pop1);
console.log('\n');
/*
method pop menghapus elemen terakhir dari sebuah array
dan me-return elemen yang dihapus
*/

//2. method push
const push1 = ['ayam','ikan','bebek'];
let pushed = push1.push('sapi','kambing','belalang');
console.log('2');
console.log(pushed);
console.log(push1);
console.log('\n');
/*
method push menambahkan elemen ke dalam Array ke belakang dan me-return
length dari array yang telah ditambahkan
*/

//3. method shift
const shift1 = ['ayam','ikan','bebek'];
let shifted = shift1.shift();
console.log('3');
console.log(shifted);
console.log(shift1);
console.log('\n');
/* 
method shift menghapus elemen pertama dari sebuah array
dan me-return elemen yang dihapus
*/

//4. method concat
const concat1 = ['ayam','ikan','bebek'];
const concat2 = ['kucing','domba','marmut'];
let concated = concat1.concat(concat2);
console.log('4');
console.log(concated);
console.log(concat1);
console.log('\n');
/* 
method menggabungkan dua atau lebih array ke dalam satu array yang baru
tidak akan terjadi apa-apa pada array yang ditambahkan
*/

//5. method slice
const slice1 = [5, 12, 8, 130, 44];
const sliced = slice1.slice(1,3);
console.log('5');
console.log(sliced);
console.log(slice1);
console.log('\n');
/* 
method untuk mengambil potongan array, pemotongan dilakukan dari index
yang diberikan pada nilai argumen pertama sampai dengan
index yang diberikan pada nilai argumen terakhir, return berupa array
potongan array, sedangkan array yang dipotong tidak berubah
*/

//6.method unshift
const unshift1 = ['ayam','ikan','bebek'];
let unshifted = unshift1.unshift('sapi','kambing','belalang');
console.log('6');
console.log(unshifted);
console.log(unshift1);
console.log('\n');
/* 
sama seperti push, method ini menambahkan elemen baru ke dalam
array dan mereturn length terbaru array, perbedaannya elemen
ditambahkan ke depan
*/

//7. method map
const map1 = [1,1,2,3,5,8,13,21,34,55];
const mapped = map1.map(el => el + 34);
console.log('7');
console.log(mapped);
console.log(map1);
console.log('\n');
/*
method ini akan mereturn array baru yang berisi elemen yang sudah
dioperasikan di dalam fungsi yang ada pada argumen map
*/

//8. method join
const join1 = ['ayam','ikan','bebek'];
let joined = join1.join();
console.log('8');
console.log(joined);
console.log(join1);
console.log('\n');
/* 
method ini akan mereturn hasil dari penggabungan semua elemen di dalamnya
masing masing elemen akan dipisahkan dengan string pemisah yang diberikan di
dalam argumen join
*/

//9. method find
const find1 = [1,2,3,4,5];
const found = find1.find(x => x>2);
console.log('9');
console.log(found);
console.log(find1);
console.log('\n');
/* 
method ini mereturn elemen pertama array yang memenuhi persyaratan pada
testing function di dalam argumen find
*/

//10. method filter
const filter1 = ['ayam', 'ikan', 'bebek', 'hiu', 'kambing'];
const filterred = filter1.filter(word => word.length === 4);
console.log('10');
console.log(filterred);
console.log(filter1);
console.log('\n');
/* 
method ini mereturn array yang berisi elemen yang telah memenuhi persyaratan
pada testing function di dalam argumen find
*/