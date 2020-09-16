const getmonth = callback => {
	setTimeout(()=>{
		let error = false;
		let month = ['January','February','March','April','May',
		'June', 'July', 'September','October','November','December'];
		if(!error){
			callback(null, month);
		}else{
			callback(new Error('Sorry Data Not Found', []))
		}
	},4000)
}

const tampilBulan = (result,bulan) => {
	if (result===null){
		let bulanBaru = bulan.map(el => ' '+el);
		return console.log(`Nama-nama bulan adalah sebagai berikut:${bulanBaru}`);
	}else{
		return console.log(result.message);
	}
}

getmonth(tampilBulan);
