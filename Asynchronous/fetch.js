// ///fetch


// fetch('https://icanhazdadjoke.com/',{
//     headers: {Accept: "application/json"}
// })
// .then((res)=>{
//     if(res.status !==200){
//         console.log("problem",res.status);
//         return;
//     }
// }).catch(function(err){
//     console.log("error :",err);
// });

///=============================================================


fetch('https://swapi.dev/api/planets/').then((Response)=>{
    if(Response.ok){
        // throw new Error('status code: ',Response.status);
        Response.json().then((data)=>{
            for(let planet of data.results){
                console.log(planet.name);
            }
        });
    }
}).catch((err)=>{

console.log("something went wrong");
console.log(err);

})

///=============================================================
// fetch('https://icanhazdadjoke.com/')
// .then(res => res.json())
// .then(data => console.log(data))