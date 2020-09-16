const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis','jumat'];
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek){
                resolve(cek);
            }else{
                reject(new Error('Hari ini bukan hari kerja'));
            }
        },3000)
    })
}


/*cekHariKerja('senin') //pemanggilan fungsi cekHariKerja, fungsi ini akan mereturn promise
.then(hasil=>{ //then digunakan untuk menghandle return untuk kondisi fulfilled pada promise
                //di dalam then berisi parameter callback yang akan dijalankan ketika kondisi fullfiled
                //hasil adalah return dari resolve pada fungsi promise
    console.log(`Selamat datang di kantor`)
    console.log(hasil);
})
.catch(hasil=>{ //then digunakan untuk menghandle return untuk kondisi rejected pada promise
                //di dalam then berisi parameter callback yang akan dijalankan ketika kondisi rejected
                //hasil adalah return dari reject pada fungsi promise
    console.log(`Silahkan pulang`)
    console.log(`${hasil}`)
})*/


async function cekHari(){
    let cekResult = 0;
    try{ 
       const result = await cekHariKerja('minggu'); //sintaks await akan mengembalikan kondisi fungsi promise setelah melewati masa pending
       console.log(`Selamat datang di kantor`); //ketika fulfilled block code di bawah await akan dijalankan
       cekResult = result; 
       console.log(cekResult);
    }catch(x){ //ketika promise mereturn hasil rejected, maka block code di dalam catch akan dijalankan
               //x adalah parameter yang berisi hasil/return dari fungsi promise ketika rejected
        console.log(x.message);
    }finally{ //block code di dalam finally akan tetap dijalankan setelah try atau catch dijalankan
              //finally ini dapat membaca keadaan promise setelah dijalankan apakah masuk ke dalam try atau catch
        if(cekResult!==0){
            console.log("masuk ke try");
        }else{
            console.log("masuk ke catch");
        }
    }
}

cekHari();
//console.log("testing")