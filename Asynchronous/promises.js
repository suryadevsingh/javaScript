
/// promise
// good for api calls


const willGet = new Promise((resolve,reject) =>{

    const num = Math.random();
    if(num < 0.3){
        resolve();
    }
    reject()

})


const willGet =new Promise((surya,singh) =>{

    const num = Math.random();
    if(num < 0.3){
        surya();
    }
    singh()

})


willGet.then(()=>{
    console.log("dog");
})
.catch(()=>{
    console.log("no dog");
})


//============================================================
console.log("========================================================");

const fakeRequest = url =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
setTimeout(()=>{
    const pages ={
        '/user':[
            {id:1,user:"surya"},
            {id:2,user:"ram"}
        ],
        "/about":"this is about page"
    };
const data = pages[url];
if(data){
 resolve({status:200 ,data})
}
reject({status:404})
     })
},3000);
       
    })
}

fakeRequest("/about").then((res)=>{
    console.log(`status ${res.status}`);
    console.log(res.data);
}).catch((res)=>{
console.log(res.status);
})

fakeRequest("/about")