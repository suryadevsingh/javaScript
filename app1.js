let a = 5;

function val() {
   //  let a = 10;
   // console.log(a);
   function inner() {
      console.log(a);
   }
   inner();
}

val();
//  val();
//  console.log(a);
