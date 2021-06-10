
// XMLHttpRequsts
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var XMLHttpRequest = require('xhr2');
const myRe = new XMLHttpRequest();

myRe.onload = function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
};
myRe.onerror = function(err){
    console.log("error :",err);
}
myRe.open("GET","https://icanhazdadjoke.com/",true);
myRe.setRequestHeader("Accept","application/json");
myRe.send();