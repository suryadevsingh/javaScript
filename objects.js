 /// dynamic objects

 const role ="host"
 const person ="surya"
 const role1 ="director"
 const person2= "ram"

 const team ={}
//    object_Name [key] = value
     team[role]=person
     team[role1]= person2
     

     console.log(team);


     //==============================================



     const mathMathmaics = {
         number: [1,2,3,4,5],
         add(x,y){
             console.log(x+y);
             return x+y;
         },
         sub : function(x,y){
             console.log(x-y);
         },
         sum : (x,y) => console.log(x+y)
     }

     mathMathmaics.add(4,5)
     mathMathmaics.sub(4,4)
     

     mathMathmaics.sum(12,12)