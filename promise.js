// const promiseOne = new Promise(function(resolve,reject){
//     //do an Async task
//     //db calls
//     //cryptographty task,network calls
//     setTimeout(function(){
//         console.log(`Async task completed`);
//     },1000)
//     resolve();

// })
// promiseOne.then(function(){
//     console.log(`Promise consumed`);
// })

//-------------------------------------------------

// new Promise(function(resolve,reject){
//         setTimeout(function(){
//         console.log(`Async task2 completed`);
//     },1000)
//     resolve();

// }).then(function(){
//     console.log(`Async task2 RESOLVED`);
// })

//--------------------------Promise return object in resolve method----------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log(`Async task2 completed`);
// },1000)
// resolve({USERNAME:"SARITA", EMAILID: "SARI@GMAIL.COM"});

// }).then(function(user){
// console.log(user);
// })

//-------------------------------------Promise with then(),catch(),finally()----------------
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log(`Async task2 completed`);
//     let error=false;
//     if(!error){
//         resolve({username:"SARITA", emailid: "SARI@GMAIL.COM"});
//     }
//     else{
//         reject("ERROR:something wrong");
//     }

// },1000)

// })
// .then(function(user){
//     console.log(user);
//     return user.username
//     })
// .then(function(username){
//         console.log(username);
//         })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{console.log("The promise either resolved ot rejected")})

//--------------------------------------Promise Async await...it wait till process complete otherwise shows error-----------------------------------

//  const promiseFive = new Promise(function(resolve,reject){

//     setTimeout(function(){
//     console.log(`Async task2 completed`);
//     let error=true;
//     if(!error){
//         resolve({username:"SARITA", emailid: "SARI@GMAIL.COM"});
//     }
//     else{
//         reject("ERROR:JS something wrong");
//     }

// },1000)

// });

//  async function consumePromiseFive(){
//     const response= await promiseFive      //promiseFive is an abject so store in variable
//     //await always come with Async()
//     console.log(response);

//  }
   //async await can't handle error..thats why errors coming that
   // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR:JS something wrong".] {code: 'ERR_UNHANDLED_REJECTION'
//need to use try{} and catch{}

// async function consumePromiseFive(){
//     try {
//         const response= await promiseFive      //promiseFive is an abject so store in variable
//         console.log(response);
    
//     }
//     catch(error){
//       console.log(error);
//     }
  
//  }consumePromiseFive()

//..........................................................

// async function getAllUser(){
//         try {
//             const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//             //console.log(response);
//             const data = await response.json();     //response.json() takes time to convert the data thats why we write the await
//             console.log(data);      
//         }
//         catch(error){
//           console.log(error);
//         }
      
//      }getAllUser()
    

//-------------------------------------------to check API THROUGH then and catch -----------------

   fetch("https://api.github.com/users/hiteshchoudhary")
   .then((response)=> {
    return response.json();
 
   })
   .then((data)=>{
    console.log(data);
   })
   .catch((error)=>{
    console.log(error);
   })