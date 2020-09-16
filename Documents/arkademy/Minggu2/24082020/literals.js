const bio = {
	nama: 'Jerry',
	alamat: 'Padang',
	hobi: ['pingpong', 'Sepakbola', 'Fotografi']
}

function checkHobi(hobi){
	if(hobi[1] === 'Sepakbola'){
		return 'hobi yang laki banget';
	}else{
		return 'hobi macam macam'
	}
}

const kata = `halo saya suka ${checkHobi(bio.hobi)}`;

console.log(kata);