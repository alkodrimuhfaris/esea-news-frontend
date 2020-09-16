const contact = {
	phone: '08963449008'
}

const bio = {
	pribadi: {
		...contact,
		nama: 'Ayu',
		kelas: 1,
		citaCita: 'Dokter',
		hobi: ['Berenang', 'Bermain', 'Memasak']
	}
};

const {nama, kelas, citaCita, phone} = bio.pribadi;

const [hobiPertama, hobiKedua, hobiKetiga] = bio.pribadi.hobi;

const kata = `halo saya ${nama},
saya kelas ${kelas}, cita-cita saya menjadi seorang ${citaCita},
dan saya memiliki hobi ${hobiKetiga}
nomor telepon saya adalah ${phone}`;

console.log(kata);