// alert("It's working");
console.log("surya", 2 + 3, true);
let name = "Surya";
if (name === "Suryadev") {
   console.log("you are a superstan");
} else if (name === "Surya") {
   console.log("suryadev");
} else {
   console.log("not found");
}

let password = "surya dev";

if (password.length >= 6) {
   if (password.indexOf(" ") === -1) {
      console.log("Valid Password");
   } else {
      console.log(" Password is long enough, but connot contains speaces");
   }
} else {
   console.log("Password mush be longer!");
}

let flavour = "mango";

if (flavour !== "grape" && flavour !== "Orange") {
   console.log("we don't have that flavour");
}

if (!(flavour === "grape" && flavour === "Orange")) {
   console.log("we don't have that flavour");
}

let num = 2;
num === 3 ? console.log("good") : console.log("bad");

let status = "offline";

let color = status === "offline" ? "red" : "green";
console.log(color);

let aR = ["SURYA", "DEV", "SINGH"];
console.log(aR.join());
console.log(aR.join(""));
console.log(aR.join("-"));
let months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const Student = [
   {
      name: "surya",
      marks: 70,
   },
   {
      name: "ram",
      marks: 89,
   },
];

const myStudent = {
   Student: [{ firstname: ["surya", "dev"], grade: 89 }],
   Student1: [{ firstname: "ram", grade: 90 }],
};

for (let i = 0; i < myStudent.Student.length; i++) {
   console.log(
      `${myStudent.Student[i].firstname.join("")} marks ${
         myStudent.Student[i].grade
      }`
   );
}

for (let i = 0; i < Student.length; i++) {
   let myStudentDetails = Student[i];
   // let details = Student..firstname;
   console.log(" ---------------------------------------");
   // console.log(`${Student.name} marks ${Student.marks}`)
   console.log(
      `Student : ${myStudentDetails.name} grade ${myStudentDetails.marks}`
   );
}

//  for(let loopss =0;loopss <months.length;loopss++){
//     //  let details = Student.name[loopss];
//     console.log(months[loopss]);
// // console.log(`${Student.name} marks ${Student.marks}`)

// }

var myStringArray = ["Hello", "World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
   console.log(myStringArray[i]);
   //Do something
}

const sizes = ["extra-small", "small", "medium"];
const guests = [
   "Liz",
   "Margaret",
   "Jessica",
   "Amy",
   "Rob",
   "Tyler",
   "John",
   "Jacob",
   "Jingleheimer",
   "Schmidt",
];

// for(let l = 1 ;l<=10;l++){
//     console.log('Outer loop',l);
//         for(let m= 10;m >=0;m-=2){
//             console.log("   Inner Loop:",m);
//         }
// }

const game = [
   [1, 2, 3, 5],
   [4, 2],
   [2, 45, 3, 1],
];

let totalScore = 0;
for (let h = 0; h < game.length; h++) {
   // console.log(game[h])
   let row = game[h];
   for (let u = 0; u < row.length; u++) {
      // console.log(row[u]);
      totalScore = totalScore + row[u];
      console.log("totalScore :", totalScore);
   }
}

const movieReview = {
   A: 5,
   B: 7,
   C: 8,
};

for (let movie of Object.keys(movieReview)) {
   // console.log(movie);
   console.log(movie, movieReview[movie]);
}
console.log("--------------------");
for (let movie of Object.values(movieReview)) {
   // console.log(movie);
   console.log(movieReview[movie], movie);
}

console.log("-----------++++++++---------------");
for (let movie in movieReview) {
   // console.log(movie);
   console.log(movie, movieReview[movie]);
}

console.log("-----------+++++@@@@@@+++---------------");
for (let movie in [10, 22, 34, 41, 53, 64]) {
   console.log(movie);
   // console.log(movie,movieReview[movie]);
}

function makeBetween(min, max) {
   return function ram(val) {
      return val >= min && val <= max;
   };
}

const inAge = makeBetween(18, 60);
console.log(inAge(17));

function outer() {
   let name = "suryadev";

   function inner() {
      console.log(`${name}`);
   }
   inner();
}

console.log(outer());
