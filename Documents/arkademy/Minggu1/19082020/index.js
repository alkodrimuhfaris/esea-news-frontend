const kata = "sussus";
let x = kata.length - 1;
let mid = (x-(x%2))/2;
console.log(x%2);

if(kata === null) {
    console.log("Ubah input!")
}

for(let i=0; i<=mid; i++) {
    if (kata[x] === kata[i] && i === mid) {
        console.log("Kata "+kata+" adalah Polindrom");
        break;
    }
    else if (kata[x] === kata[i]) {
        x--;
        continue;
    }
    else {
        console.log("Kata "+kata+" bukan Polindrom");
        break;
    }
}

/* const kalimat="Saya suka javascript";
const arr=[];
let count = 0;
let temp = "";

for(let i=0; i<=kalimat.length; i++) {
    if(kalimat[i]===" "||i>=kalimat.length) {
        arr[count] = temp;
        temp = "";
        count++;
        if(i>=kalimat.length) {
            let result = "";
            for(let j=arr.length-1; j>=0; j--){
                result+=arr[j];
                if(j!==0) {
                    result+=" ";
                }
                else{
                    console.log(result);
                }
            }
        }
    }
    else{
        temp += kalimat[i];
    }
}
 */