/// this
//this have scope similar to let but when we are using object we can access the key by using it
// The JavaScript this keyword refers to the object it belongs to.

// this === window

// window only works in web browser
// It represents the browser's window.

this.b = "surya";
var software = "VScode";
// if you want a global object or variable ,etc which can be accessed by globally using window
//  you have to use var
// in var , functions have different scope but with the help of window we can access it

// let software ="golang"
console.log(this.b);

const bookingId = {
   first: "Mr j",
   last: "singh",
   title: "the order",
   software: "Android studio",
   fullname() {
      // const {first} =this;
      // console.log(first);
      console.log(this.first);
      const home = "delhi";
   },
   b() {
      // console.log(window.software);
      console.log(this.software);
      console.log(this.home);

      // you can't access it because it is not globally defined,

      // console.log(window.home);
   },
   bio: () => console.log(`=>  ${this.first}`),
};
// in => , it don't work here because of lexically binding this here already
console.log("----------------------surya---------------------");
bookingId.bio();
console.log("bio");
console.log("-------------surya-------------------------");
bookingId.b();

//----------------------------------------------

const annoy = {
   phases: ["surya", "lata", "ram", "veena", "kanchan", "jyoti"],
   pickPhases() {
      const { phases } = this;
      // const arr = this.phases;
      const idx = Math.floor(Math.random() * phases.length);
      // const idx= Math.floor(Math.random() * arr.length);
      // const idx= Math.floor(Math.random() * this.phases.length);
      return phases[idx];
   },
   start() {
      this.timerId = setInterval(() => {
         console.log(this.pickPhases());
      }, 3000);
   },
   stop() {
      clearInterval(this.timerId);
      // clearInterval(setInterval())
      console.log("its over");
   },
};

this.name = function user() {
   console.log("object");
};

this.userName = function (name) {
   console.log(`user name  : ${name}`);
};

this.obj = { name: "surya", age: 21 };
this.arr = [1, 2, 3, 4, 5, 6];

this.foo = [
   { name: "surya", age: 14 },
   { name: "ram", age: 14 },
   { name: "rahul", age: 14 },
];

console.log(this.name);
//when i directly call it it show only fuction name if there and function is not doing any operation
console.log(this.userName);
// when call it , but function have no name , it just give me details about that it is a function

console.log(this.userName("suryadevsingh"));

// when i pass some arugument to , get some operation it will same that value
console.log(this.obj);
// we can print object
console.log(this.arr);
// we can print array
console.log(this.foo);
// we can print any type of object

function sub() {
   //  let total;
   this.total;
   console.log(this.total);
   return (total = 4 + 5);
   // if you want to use this here the variable should be declared with the help of this
}
// when be declare any variable using this inside any function or any wear else ,
//  we can not use it untill we do some operation with it
// it will show undefined of different scope

//  if we use let or var or const inside any function , we can't access them using this .(difference in scope)
console.log(this.total);
sub();
