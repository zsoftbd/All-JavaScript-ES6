let fun1=()=>{
console.log('This is function 1');
}

let lodingTime=()=>{
console.log('This is function 2')
}

let fun2=()=>{
   setTimeout(lodingTime,2000)
}

let fun3=()=>{
console.log('This is function 3');
}

fun1()
fun2()
fun3()