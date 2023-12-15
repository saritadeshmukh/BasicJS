// inside object----------------

// const user={
//     username:"sarita",
//     price:199,
//     welcomeMsg: function(){
//         console.log(`${this.username} welcome to website at cost ${this.price}`)
//         //here this refere the value of current object user  
//         console.log(this);   //return current object
//     }
// }
// user.welcomeMsg();
// user.username="sam";  //we can Assign diffent value
// user.price=900
// user.welcomeMsg();

/////////inside function----------------
// function chai(){
//     console.log(this);
// } chai()          //IIFF DECLARATION


///ARROW FUNCTION--------------------

const myArr =[23,3,55,77]

function myFisrtArr(getArr){

   console.log(getArr[3]);

}myFisrtArr(myArr);



