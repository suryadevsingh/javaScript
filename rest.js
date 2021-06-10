// Rest 


// here javascript is a dynamic programming language ,
//  it does not know what type of value will come to that argument
// it can work with any number of arugments
// and if we pass multipe arugments but do not give them value then will set to undefined

function sumAll(){
    let total =0;
    for(let i =0; i< arguments.length;i++){
        total += arguments[i];
    }
    console.log(total);
    return total;
}

sumAll(12,34,43,53,543,32)


///===================================

function fullName(first,last){
    console.log(arguments);
}

fullName("tom","jo","mic","surya")

function fullBio(first,last,...nums){
    console.log(`1  ${first}`);
    console.log(`2  ${last}`);
    console.log(`3  ${nums}`);
}

fullBio("tom","jo","mic","surya")
//==========================================================================


console.log("------------------------------------------------------------");
const obj ={first:"tom",sirName:"jo",age:"13",code:"js"}
const foo =[{name:"surya",age:14},{name:"ram",age:14},{name:"rahul",age:14}];
const sample = [{a:1,b:2,c:3}]



fullBio(...foo)
console.log("---------------------------------------------");
fullBio(obj)

console.log("==================================");
sumAll(sample)


///  rest with object , object is converted into strings and there is no way to get info from the original object

