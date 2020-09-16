const fetch = require('node-fetch');
const req = (url) => fetch(url);
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(){
	rl.question("pilih page mana?", function(n){
		if(n<4&&n!==0){
			req(`https://rickandmortyapi.com/api/episode?page=${n}`)
			.then(res=>{
				res.json().then(fin => {
					result = fin.results
					console.log(`ini page ${n}`)
					for (const element of result){
						console.log(`Episode: ${element.episode} berjudul: ${element.name}`);	
					}
					tanya();
				})
			})
		}else if (n==='exit'){
			keluar();
		}else{
			console.log('salah pilih page!');
			tanya();
		}
	}) 
}

function keluar(){
	console.log("\nBYE BYE !!!");
	process.exit(0);
}

tanya();
