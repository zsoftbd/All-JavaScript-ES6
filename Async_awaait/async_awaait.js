
// async vs await
function getUser(userId){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve({
userId:userId,
username:'zeaul'
});
},1000);
})
}
function getServices(user){
return new Promise((resolve, reject)=>{
console.log(`Get services of ${user.username} from the API`);
setTimeout(()=>{
resolve(['Email','VPN','CDN'])
},2*1000);
});
}
function getServiceCost(services){
return new Promise((resolve,reject)=>{
console.log(`Calculate service costs of ${services}.`);
setTimeout(()=>{
resolve(services.length*100);
},3*1000);
});
}
// getUser(100)
// .then(getServices)
// .then(getServiceCost)
// .then(console.log);
async function lodData(){
let user= await getUser(100);
let service = await getServices(user);
let cost = await getServiceCost(service);
console.log(`The service cost is ${cost}`);
}
lodData()

