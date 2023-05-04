// forEach function

let array=[10,20,30,40,50]
let result=array.forEach((element,index)=>{
    console.log(element,index)
})

//value convert duble 
let array1=[30,20,10,5,4,2,1]
let blanckArryWithPush=[];
array1.forEach(myfunction);
 function myfunction(x){
    blanckArryWithPush.push(x*2)
 }
 console.log(blanckArryWithPush);


//  smae thing but map also do the that kindof work
 let array2=[2,4,6,8,10,12,14]
 let mayArray=array2.map(mapFunc);
 function mapFunc(x){
    return x*2;
 }
console.log(mayArray)