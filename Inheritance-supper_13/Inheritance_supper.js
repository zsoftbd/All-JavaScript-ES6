// inharitance supper
class parson{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    gratting(){
        console.log(`I am a ${this.name} and I am ${this.age} years old`);
    }
}
class customer extends parson{
    constructor(name,age,Id,address,salary){
        super(name,age);
        this.Id = Id;
        this.address = address;
        this.salary = salary;  
    }
}
let parson1=new parson('hossin','roddrow');
console.log(parson1)

let customerDetils= new customer('taraMia',43,2032,'Dhaka','13000')
console.log(customerDetils)