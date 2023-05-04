// Static-methods
class myStatic{
    funct(){
        console.log("static");
    }
}
let result= new myStatic()
result.funct()

class myStatic2{
    static functi(){
        console.log("static2");
    }
}
myStatic2.functi()

class parson{
    constructor(name,age,id){
        this.name=name;
        this.age=age;
        this.id=id;
    }
    getNameGae(){
        console.log(`my id is ${this.name} my age is ${this.age} and this is my id ${this.id}`)
    }
    static test(){
        console.log('hello i m static')
    }  
}
let parson1=new parson('zeaul',20,'V23')
console.log(parson1.getNameGae())
console.log(parson.test())
//console.log(parson1.test())this is are not working becouse of staric mathod work only class not other....