// Array dst
const arrayDst=[10,20,30,40,50,54,32,12,90]
console.log(arrayDst[0]);
console.log(arrayDst[1]);
console.log(arrayDst[2]);
console.log(arrayDst[3]);

// Array Destructuring
const arrayDest=[10,30,40,32,23,56];
let [a,b,c,...z]=arrayDest;
console.log(a,b,c,z)


// Object Destructuring
const obj={
    name:'zeaul',
    age:20,
    id:203
    }
console.log(obj.name);
console.log(obj.age);
console.log(obj.id);
const{name,age,id}=obj;
console.log(name,age,id)