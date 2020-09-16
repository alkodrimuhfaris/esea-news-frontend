//fungsi untuk log-in

function logIn(id,pass){
	return new Promise((resolve, reject) => {
		let idAcc = 'aku';
    	let passAcc = '123';
        setTimeout(() => {
        	function cekCred(id,pass,id1,pass2) {
        		if(id===id1&&pass===pass2){
        			return true;
        		}else{
        			return false;
        		}
        	}
            if (cekCred(id,pass,idAcc,passAcc)){
                resolve(true);
            }else{
                reject(new Error("Password dan Id salah!"));
            }
        },3000)
    })
}

const id = "aku";
const pass = '123';

logIn(id,pass)
.then(result => console.log("log in berhasil!"))
.catch(result => console.log(result.message));