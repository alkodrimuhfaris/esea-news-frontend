const fetch = require('node-fetch');

if (!globalThis.fetch) {
    globalThis.fetch = fetch;
}

fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data =>{
		for (const element of data){
			console.log(`Name of id number: ${element.id} is ${element.name}`);
		}
	});

const urlEp = [
'https://rickandmortyapi.com/api/episode',
'https://rickandmortyapi.com/api/episode?page=2',
'https://rickandmortyapi.com/api/episode?page=3',
];

const req = (url) => fetch(url);


req(urlEp[0])
	.then(res =>{
	res.json().then(fin =>{
		console.log(fin.info.next)
	})
});