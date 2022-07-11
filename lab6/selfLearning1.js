// const test = {
//     prop: 42,
//     func: function() {
//       return this.prop;
//     },
//   };
  
//   console.log(test.func());
  // expected output: 42

  // function myStrictFunction() {
  //   // Function-level strict mode syntax
  //   'use strict';
  //   function nested() { return 'And so am I!'; }
  //   return "Hi! I'm a strict mode function! " + nested();
  // }
  // function myNotStrictFunction() { return "I'm not strict."; }
  
  "use strict"
  
   function checking(a,b) {
    let sum = a + b;
    if (sum === 35){
      console.log('correct')
    }else{
      console.log('wrong')
    }
   };
   checking(15, 19);
   checking(15, 20);
   checking(10, 1);
