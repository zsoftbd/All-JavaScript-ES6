try{
}catch{
}finally{
}

try{
    console.log('The name is error')
    console.log(num)
    let age=20;
    if(age>10){
    throw('you are older')
    }
    else if(age<17){
    throw('you are a Baby')
    }
}catch(myError){
    console.log(myError.name)
}finally{
    console.log('This is last comment')
    }
    