const biodata = {
	firstName: 'Ayu',
	lastName: 'Azkhari',
	fullName: () function(){
		return `${this.firstName} ${this.lastName}`;
	}
}

console.log(biodata.fullName());