// let janjian = new Promise(function (resolve, reject) {
// 	let success = false;
// 	if (success){
// 		resolve('berhasil');
// 	}else{
// 		reject(new Error('janji dibatalkan'));
// 	}
// })

// janjian
// .then ((result)=>{
// 	console.log(result);
// })
// .catch((error)=>{
// 	console.log(error);
// })

// setTimeout(()=>{
// 	console.log("Hello world")
// },1000)
// console.log("This is synchronous code");

const asemik =(b)=>{
	let a = 5*b;
	console.log(a);
	return a;
}

const janji = (n) => new Promise( function(resolve, reject){
	setTimeout(()=>{
		console.log("Hello World");
		resolve(asemik(n))
	},1000)
})

function halini(d){
	janji(d)
	.then(function(result){
		result;
	// 	if(a=15){
	// 		asemik(4)
	// 		console.log(`ini yang if pertama`)
	// 	}
	// 	else{
	// 		janji(2)
	// 		.then(result => console.log(`ini hasilnyo: ${result}`));
	// 	}
	// })
	// .catch(result=>{
	// 	console.log(`${result}`);
	})
}

halini(3);

// const ucapanSelamat = () => {
// 	console.log("Selamat ulang tahun bro!")
// }

// const janji = (cb) => new Promise ((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve(true);
// 		cb();
// 	},1000)
// })

// janji(ucapanSelamat).then(result=>{
// 	if (result){
// 		console.log("Janji dipenuhi!");
// 	}
// })
