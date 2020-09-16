//Deteksi polindrom

const cekPalindrom = kata => {
	let potong = kata.split('');
	let balik = potong.reverse();
	let gabung = balik.join('');

	if(gabung === kata){
        console.log("Kata "+kata+" adalah palindrom");
	}else{
        console.log("Kata "+kata+" bukan palindrom");
	}
}

cekPalindrom('malam');
