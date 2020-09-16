const fetch = require('node-fetch');
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let erCount = 0;

//pesan
const help = `To visit certain page type: number page'
To see details type: detail:id
To exit type: exit
Input your query here: `;
const noPage = `
Sorry the page you were asking for didn't exist
===============================================
`;
const wrongInput = `
Your query is invalid!!
=======================
`;

function getPage(n=1){
	fetch(`https://reqres.in/api/users?page=${n}`)
	.then(res=>{
		erCount=0;
		return res.json().then(fin=>{
			if(fin.data[0]){
				console.log(`\n===============Page ${fin.page}===============`)
				result=fin.data;
				for (user of result){
					console.log(`id: ${user.id} || Name: ${user.first_name} ${user.last_name}`);
				}
				console.log('====================================\n');
				message(help,getPage,getID);
			}else{
				message(`${noPage}${help}`,getPage,getID);
			}
		})
	})
	.catch((error) => {
		erCount++;
		console.log('Error :'+error.message);
		console.log(`process retry in ${erCount*3} seconds`);
		retry(n,getPage,erCount)
		.then(res => {
			if (erCount<=3){
				res
			}else {
				console.log('request timeout');
				process.exit(0)
			}
		})
	})
}

function getID(n=1){
	fetch(`https://reqres.in/api/users/${n}`)
	.then(res=>{
		erCount=0;
		return res.json().then(fin=>{
			if(fin.data){
				console.log(`\n==============================data for id: ${fin.data.id}==============================`)
				console.log(fin);
				console.log('==========================================================================\n');
				message(help,getPage,getID);		
			}else{
				message(`${noPage}${help}`,getPage,getID);
			}
		})
	})
	.catch((error) => {
		erCount++;
		console.log('Error :'+error.message);
		console.log(`process retry in ${erCount*3} seconds`);
		retry(n,getID,erCount)
		.then(res => {
			if (erCount<=3){
				res
			}else {
				console.log('request timeout');
				process.exit(0)
			}
		})
	})
}

function message(text,cb1,cb2){
	rl.question(text, input=>{
		let inputID = input.split(':');
		if (inputID[0]==='detail'){
			cb2(inputID[1]);
		}else if (inputID[0]==='exit'){
			console.log("\nBYE BYE !!!");
			process.exit(0);
		}else{
			if(Number(inputID[0])){
				cb1(input);
			}else{
				message(`${wrongInput}${help}`,getPage,getID);
			}
		}
	})
}

function retry(n,cb,t){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(cb(n));
		},(t*3000))
	});
}



getPage();