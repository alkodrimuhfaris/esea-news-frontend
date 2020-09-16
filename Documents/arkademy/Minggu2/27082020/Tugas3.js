const divideAndSort = number =>{
	let cek = Number.isSafeInteger(number);
	if(cek===true){
		if(number<0){
			number=number*(-1);
		}
		let stringNum=String(number);
		let potong=stringNum.split('0');
		let susun=potong.map(function(el){
			let potong = el.split('');
			let susun = potong.sort();
			let gabung = susun.join('');
			return gabung;
		});
		let gabung=susun.join('');
		let numString = Number(gabung)
		console.log(numString);
		return numString;
	}else{
		console.log(`Input yang anda berikan bukan integer!
Silahkan masukkan nilai integer yang kurang dari ((2^53)-1) atau lebih dari -((2^53)-1)` )
	}
}

let number=1424112515825810580135818501585801510581051810281258;


divideAndSort(number);