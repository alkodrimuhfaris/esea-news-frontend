let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: 
	{
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};

//ubah jadi data diri sendiiri
let dataDiri = {
	...data,
	name: "M Faris Alkodri",
	email: 'farisalkodri@gmail.com',
	hobbies: ['watching', 'reading', 'chatting','cooking']
};

//menampilkan data diri
console.log(dataDiri);

//mengambil data street and city melalui destruktur
const {street, suite, city, zipcode} = dataDiri.address;

//menampilkan data street and city dari data yang didestrukturisasi
console.log(street);
console.log(city);