// let a=10;
// var b=20;
// const c=30;

// console.log(a);
// console.log(b);
// console.log(c);
// ----------------------------------------------------
// if(true){
//     let a=10;
//     var b=20;         //global scope...it run outside of block
//     const c=30;
//     }
// //console.log(a);
// console.log(b);
// // console.log(c);

// //...........................................
// var b=200;
// if(true){
//     let a=10;
//     var b=20;         //global scope...it override inner block var variable value, run first inner block
//     const c=30;
//     }
// console.log(b);

//scope clouser-----------------------

// function One(){
//     const username="sarita"
//     console.log(`This is  ${username}`);  

//     function Two(){
//      const website="youtube";
//      console.log(`user is ${username} logged in ${website}`);
//     }
//     // console.log(website);        //can not print as out of scope of TWo()
//     Two();
// }
//  One();

 //-------------------------scope in If-Else------------------
//  if(true){
//     const username="sarita";
//     if (username==="sarita"){
//         const website ="youtube";
//         console.log(website+ " " + username);
//     }
//     //console.log(`your website is ${website}`);   
//     console.log(`The login user is ${username}`);      //cant run out of scope
//  }

//  /////-----------------function Hoisting------------------
//  console.log(addOne(5));      

//  function addOne(num){ //this type of function we can use anywhere where we want to use below or top anywhere
//   return num +1
//  }
// //  console.log(addOne(5));


// //console.log(addTwo(4));        //error Cannot access 'addTwo' before initialization
//  const addTwo = function(num){  //onec we store the function in any variable ,we can not use that variable naywhere...there agin scope issue.
//     return num+2
//  }
// //  console.log(addTwo(4));