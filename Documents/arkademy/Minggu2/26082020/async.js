//async await!!

/*
cara untuk menghandle promise, membuat janji menjadi synchronous

async=> mengubah fungsi menjadi synchronous
await=> menunda eksekusi hingga proses asynchronous selesai
*/

const traktiran = new Promise((resolve, reject)=>{
	// for (let i = 0; i<100; i++){
	// 	if(i===50){
	// 		reject(new Error("Unexpected Error"))
	// 	}
	// 	if(i===99){
	// 		resolve(`${i}: Traktir!`)
	// 	}
	// }
	setTimeout(()=>{
		resolve("Traktir")
	},1000)
});


/*
async itu bisa dipakai di fungsi jadi makanya ditaruh di kurung
dalam kurung
*/

// async function tampilkanPesan(){
// 	const result = await traktiran
// 	return result
// }

// tampilkanPesan().then(function(hasil){
// 	console.log(hasil);
// });

//di bawah ini adalah anonymous/self invoke function!!
//jadi akan menjalankan kodenya sendiri tanpa dipanggil
//bentuk umum self invoke function (function(){})()
(async function(){
	let hasil = 0;
	try{ //try itu kalau di traktiran masuknya resolve
		//validasi data dilakukan di try!
		const result = await traktiran;
		hasil = result;
		console.log(result);
	}catch(x){ //catch kalau di traktiran reject
		console.log("Error bro, traktiran gagal!");
		console.log(x.message);
	}finally{			//block code di dalam finally akan tetap dijalankan setelah try atau catch dijalankan!
		if(hasil!==0){
			console.log("masuk ke try");
		}else{
			console.log("masuk ke catch");
		}
	}
})()

//di bawah ini adalah anonymous/self invoke function!!
//jadi akan menjalankan kodenya sendiri tanpa dipanggil
//ini contoh arrow function
// (async()=>{
// 	const result = await traktiran;
// 	console.log(result);
// })()


