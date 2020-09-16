if (1==="1"){
	console.log("sama");
}else if(1=="1"){
	console.log("alternative");
}
else{
	console.log("tidak sama");
}

console.log(1==="1");

const str = "world";


switch(str){
	case "hello":
		console.log("hello world");
		break;
	case "world":
		console.log("world hello");
	default:
		console.log("other");
		break;
}

//switch untuk kasus yang diketahui secara rigid nilai dari argumen di deklarasi switch

const sum = 13-13;
const nama = typeof num === "number"  ? "match" : "not match";

function sum(a, b) {
	return a+b;
}

const angkaNegatif = !(sum(1, -12) > 0) && "angka positif"


console.log(angkaNegatif);