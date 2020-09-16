const binatangTernak = ['domba', 'sapi', 'ayam'];
const binatangBuas = ['harimau', 'kalajengking'];

const newBinatang = ['bebek',...binatangTernak,...[binatangBuas[1]],'ikan'];

console.log(newBinatang);


const contact = {
	phone: '08963449007'
}

const bio = {
	nama: 'Ayu',
	kelas: 1,
	citaCita: 'Dokter'
};

const contactPribadi = {
	phone: '089633449008',
	email: 'ayu@mail.com'
}

const newData = {
	...bio,
	...contactPribadi
}

console.log(newData);