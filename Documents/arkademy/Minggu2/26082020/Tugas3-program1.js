//membuat pembacaan file contoh.txt dijalankan secara synchronous

const fs = require('fs');

const bacaFileText = new Promise((resolve, reject) => {
  fs.readFile('contoh.txt', 'utf8', (err, data) => {
    if (data){
    	resolve(data);
    }else;
    	reject(new Error('File tidak bisa terbaca!'));
  });
});
bacaFileText
.then(res => console.log('hasil pembacaan file: '+res))
.catch(err => console.log('Error: '+err.message));