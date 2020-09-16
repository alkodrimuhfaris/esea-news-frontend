const fetch = require('node-fetch');
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

//pesan
const help = `To visit certain page type: number page
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
		res.json().then(fin=>{
			if(fin.data[0]){
				console.log(`\n===============Page ${fin.page}===============`)
				let result=fin.data;
				for (user of result){
					console.log(`id: ${user.id} || Name: ${user.first_name} ${user.last_name}`);
				}
				console.log('====================================\n');
				message(help);
			}else{
				message(`${noPage}${help}`);
			}
		})
	})
	.catch((error) => {
		console.log('\nError :'+error.message);
		process.exit(0)
	})
}

function getID(n=1){
	fetch(`https://reqres.in/api/users/${n}`)
	.then(res=>{
		erCount=0;
		res.json().then(fin=>{
			if(fin.data){
				console.log(`\n==============================data for id: ${fin.data.id}==============================`)
				console.log(fin);
				console.log('==========================================================================\n');
				message(help);		
			}else{
				message(`${noPage}${help}`);
			}
		})
	})
	.catch((error) => {
		console.log('\nError :'+error.message);
		process.exit(0)
	})
}

function message(text=help){
	rl.question(text, input=>{
		let inputID = input.split(':');
		if (inputID[0]==='detail'&&inputID.length<=2){
			getID(inputID[1]);
		}else if(Number(inputID[0])&&inputID.length<=1){
			getPage(input);
		}else if (inputID[0]==='exit'&&inputID.length<=1){
			console.log("\nBYE BYE !!!");
			process.exit(0);
		}else{
			message(`${wrongInput}${help}`);
		}
	
	})
}

getPage();