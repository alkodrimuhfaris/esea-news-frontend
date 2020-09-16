let printSegitiga = 6;

function print(a) {
	if (typeof a === 'number') {
		for (let i = printSegitiga; i>0; i--){
			let angka=``;
			for (let j = i; j>0; j--){
				angka=`${j}`+angka;
			}
			console.log(angka);
		}	
	}
	else {
		console.log("Data harus number!");
	}
}

print(printSegitiga);