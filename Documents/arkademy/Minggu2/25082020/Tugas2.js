const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];


const searchName = (cariKata,numb,callback) => {
    let filterred = []; 
    filterred = name.filter(el => el.toLowerCase().indexOf(cariKata.toLowerCase()) !== -1)
    return console.log(callback(filterred,numb));
}

function potong (arr, n) {
    return arr.slice(0,n);
}

searchName('an',3,potong);