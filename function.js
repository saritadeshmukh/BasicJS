// function addTwoNumbers(num1,num2){
//     if(num1>=num2){

//         return(num1-num2);
//     }
//     return(num1+num2);
    
// }
// console.log(addTwoNumbers(3,4));

// function loginUserMessage(username="Sam"){
//     // if(username===undefined){
//     //     console.log("Please enter your username"); //to avoid this situation we can give default value like username="Sam"
//     //     return
//     // }
//     return `${username} just logged in`
//    }
// //  console.log(loginUserMessage());

//  function calculateCartPrice(val1,val2,...num1){  //rest operator gives result of num1 in array,its always use in last,and assign val1=200,val2=300 and remaining convert in array for num1
//     return num1;
//  }

// console.log( calculateCartPrice(200,300,500,600,800));
 
///function for OBJECT

// const user ={
//    username:"sarita",
//    price: 199
// }
//  function handleObj(myObj){ //myObj is reference parameter
//    console.log(`${myObj.username} purchased course in ${myObj.price}`);

//  }
// //  caling function  this way
// //  handleObj(user)

// handleObj({
//    username:"sam",
//    price:89
// })


////FUNCTION FOR aRRAY

const myArr =[23,3,55,77]

function myFisrtArr(getArr){

   return(getArr[3]);

}
 console.log(myFisrtArr(myArr));


