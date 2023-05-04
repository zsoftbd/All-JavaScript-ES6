// For…of for...in Loop
const myarray=[10,20,30,40,50,60]
for(newArray of myarray){  //for of given array elements
    console.log(newArray)
}
for(newArray1 in myarray){  //for in given array index
    console.log(newArray1)
}
const objParson={ //for in using object
    name:'zeaul',
    age:'20',
    id:2034
}
for (newParson in objParson){
    console.log(newParson)
}