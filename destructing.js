// Destructing

const raceName = ["surya","ram","sita"];

const [gold,silver,bronze] =raceName;

// if it is array you have to assign it as a arrya []

console.log(gold);
console.log(bronze);
console.log("---------------------------------------------");

//=============================================

const bookingId = {
    first : 'Mr j',
    last: 'singh',
    title: "the order"
};

const runners = {
    first : 'Mr k',
    last: 'singhs',
    title: "the order of death"
};


// if it is a object you have to assign it as a object {}

const {names, sirName, title} = runners;
console.log("---------------------------------------------");

console.log(names);
console.log(title);
console.log("---------------------------------------------");

//error variable name should be from keys

const {first:name,last:sirname,title:order} =bookingId;
console.log("---------------------------------------------");

console.log(name);

///===================================================

const movieId = [{
    first : 'Mr j',
    last: 'singh',
    title: "the order"
},
{
    first : 'Mrs. S',
    last: 'arya',
    title: "the king"
},
{
    first : 'Mr varun',
    last: 'kumar',
    title: "the queen"
},
];

const [ {first:firstName,last:singh,title:orders}, {first:S,last:arya,title:king},{first:varun,last:ku,title:queen}] = movieId;

console.log(firstName);
console.log(arya);


//=============================================

// same rule for object {} and array []

const response= ["https","200","json","failed"]

function parseRes([protocol, status,type]){
console.log(status);
console.log(type);
console.log(arguments);
}

parseRes(response);

///===========================
const Names= ["rahul","kanchan","veena"];

const {Namess} = this;

console.log(Namess);