function sapa(nama){
	return `Halo, selamat siang ${nama}!`
}

function sapaSunda(nama){
	return `Wilujeng Sumping ${nama}!`;
}

function sapaDenganWaktu(waktu, nama, cb1, cb2){
	const sapaWaktu = `${cb1(nama)} ${cb2(nama)} Sekarang pukul ${waktu}`;
	return sapaWaktu;
}

console.log(sapaDenganWaktu('1:52 PM', 'Demy', sapaSunda, sapa));