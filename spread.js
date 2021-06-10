//Spread

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const obj = [1, 2, 3, ...num1];
console.log(obj);
console.log("--------------------------------------");
const obj1 = [...num2, "two", "three"];
console.log(obj1);

const num3 = [24, 43, 21, 54, 1234];

const maxi = Math.max(...num3);
console.log(maxi);

// ============================================================

function giveMe(a, b, c, d) {
   console.log("a", a);
   console.log("b", b);
   console.log("c", c);
   console.log("d", d);
}

const color = ["Red", "yellow", "green", "pink"];

giveMe(color);

console.log("--------------------------");
giveMe(...color);

//===================================================
console.log("==============================================");
const str = [..."suryadev"];
console.log(str);

const name = "suryadevsingh";

console.log(...name);

//================================================
console.log("--------------------------------------------------");
const wars = { foo: 4, bar: "indian", leg: 10 };

const leg = { leg: 6, family: "africa" };
const warleg = { leg: 8, family: "america" };

const cat = { ...wars, ...warleg };
const bird = { ...leg, ...warleg };
// const dog = [...wars]
// const maximi = Math.max(...wars)

// console.log(maximi);

console.log(cat);
console.log(bird);

//=========================================================================

const foo = [
   { name: "surya", age: 14 },
   { name: "ram", age: 14 },
   { name: "rahul", age: 14 },
];

function age(arr) {
   arr[0].age += 1;
}

console.log("---------------------------------------------");
console.log(foo);

console.log("---------------------------------------------");
const blah = [...foo];

// here blah is working as a refrence  ,
// foo having some memory location which consist of some data and blah is also pointing to it
// now blah is having new memory now

console.log("------------------blah---------------------------");
console.log(blah);

console.log("---------------------------------------------");
age(blah);
console.log(foo);

console.log("---------------------------------------------");
console.log("suryadevsingh");
console.log(blah);
