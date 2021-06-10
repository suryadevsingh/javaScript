
const sub= () => 3+4;

console.log(sub);

// const ram = function addss(x=3,y){
//     return x+y;
// }
// console.log(ram(3));


// const name ="suryadevsingh";

// console.log(...name);

// console.log(name);


const names =["surya","lata","ram","rita"];
const name =[1,2,3,...names]
const [first,second,...fourth] = names;

// console.log(name);
// console.log(fourth);

function fullName(a,b,c,d){
console.log("1",a);
console.log("2",b);
console.log("3",c);
console.log("4",d);
}

// fullName(names)


const str ="Surya"

fullName(...str)

const lastName =[...'LATA']

console.log(lastName);


const sample ={
    value: "four",
    rating:3
}

const sample1 ={
    value: "one",
    rating:4
}

const sample3 =[{...sample,...sample1}]
console.log(sample3);

function sumAll(){
    console.log(arguments);
 let total =0;
 for(let i =0;i <arguments.length;i++){
     total =total +arguments[i]
 }
 console.log(total);
 return total;
    
}
sumAll(1,2,3,4,5)

const obj ={
    name:"suryadev",
    sirName:"singh",
    // add : function(x,y){
    //     return x+y;
    // },
    add(x,y){
        return x+y;
    },
    printBio(){
        // const userName =this.name
       return `${this.name}`
    },
    laugh: ()=> {
        console.log('------------------------------');
        // console.log(this.printBio());
        console.log(obj.sirName);
        console.log('-------------------------------');
    }
}
console.log(obj.name);
console.log(obj.add(4,4));
console.log(obj);

this.a="MDN";
console.log(this.a);
console.log(this);
// console.log(window);


console.log(obj.printBio());

const Bio = obj.printBio()
console.log(Bio);

console.log(obj.laugh());





const annoy ={
    phases:["surya","lata","ram","veena","kanchan","jyoti"],
    pickPhases(){
        const {
            phases
        } =this;
        const idx= Math.floor(Math.random() * phases.length);
        return phases[idx]
    },
    start(){
        this.timerId = setInterval(()=>{
            console.log(this.pickPhases())
        },3000)
    },
    stop(){
        clearInterval(this.timerId);
        console.log("its over");
    }
}