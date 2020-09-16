let mtk = 80;
let bIndonesia = 90;
let bInggris = 89;
let ipa = 69;
let avg = 0;
let grade = '';

function  nilaiAvg(a,b,c,d) {
	if (typeof a === null || typeof b === null || typeof c === null || typeof d === null) {
		console.log(`Untuk menghitung nilai rata-rata nilai UN tidak boleh kosong!
			Cek dan masukkan nilai UN kembali!`);
	}

	else {
		return avg = (a+b+c+d)/4;
	}
}


// nilaiAvg(mtk,bIndonesia,bInggris,ipa)

function cekGrade(avg) {
		if (avg<=100&&avg>=90){
			grade = 'A';
		}

		else if (avg<=89&&avg>=80){
			grade = 'B';
		}

		else if (avg<=79&&avg>=70){
			grade = 'C';
		}

		else if (avg<=69&&avg>=60) {
			grade = 'D';
		}

		else {
			grade = 'E';
		}

		return grade;
}

console.log(`Nilai rata-rata UN adalah = ${nilaiAvg(mtk,bIndonesia,bInggris,ipa)}
Demgan grade sebesar = ${cekGrade(avg)}`);
