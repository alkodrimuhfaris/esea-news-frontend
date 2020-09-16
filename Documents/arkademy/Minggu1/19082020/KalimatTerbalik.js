const kalimat1 = "aku suka sama dirimu";
let x = kalimat1.length;
let j = 0;
let i = 0;
let kalimat2 = "";
let kata = [] ;
let temp = "";

if (kalimat1 === null) {
    console.log("Ubah input menjadi kalimat!");
}

console.log(kalimat1);

while (i<=x) {
    if(i===x||kalimat1[i]===" "){
        kata[j] = temp;
        kalimat2 = kata[j]+" "+kalimat2;
        j++;
        i++;
        temp = "";
    }
    else{
        temp+=kalimat1[i];
        i++;
    }
}

console.log(kalimat2);