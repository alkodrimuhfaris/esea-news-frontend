const arrNumb =  [2, 25, 4, 14, 17, 30, 8];

function seleksiNilai (nilaiAwal,nilaiAkhir,dataArray) {
    if (nilaiAwal>=nilaiAkhir){
        return console.log("Nilai akhir harus lebih besar dari nilai awal");
    }else if(dataArray.length<=5){
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }else {
        const filterred = dataArray.filter(x => x>nilaiAwal&&x<nilaiAkhir);
        return console.log(filterred.sort((a,b) => b-a));
    }
}

seleksiNilai(5,20,arrNumb);