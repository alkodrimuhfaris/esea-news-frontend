
const balikKalimat = (kalimat) => {
	let potong = kalimat.split(' ');
	let balik = potong.reverse();
	let gabung = balik.join(' ');

	console.log(`${gabung}`);
}

let kalimat = 'nanti kita cerita tentang hari ini';

balikKalimat(kalimat);