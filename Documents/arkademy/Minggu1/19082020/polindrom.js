const kata = "sussus";
let x = kata.length - 1;
let mid = (x-(x%2))/2;

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