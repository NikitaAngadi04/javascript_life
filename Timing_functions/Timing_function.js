// timing_functions after certain time it will execute.
// 1.SetTime: after certain delay set timeout will execute.

// console.log("started")
// console.log("fetching data")
// setTimeout(()=>{
    // },timeout);

// setTimeout(()=>{
    // console.log("fetching Data..");
//     alert("fetching data")
// },1000)
// console.log("ended..")
// console.log("fegyhjgfey") 

//*2.SetInterval : it will execute same function at a certain delay
// setInterval(()=>{
//     console.log("fetching Data..");
        // alert("fetching data")
// },200)
// console.log("ended...");
// console.log("hfnjknh");

//& 3.cleartimeout: it will clearout the timeout, if user click login cleartimeout not required , if he didn't clicked this will pop up over their.

// setTimeout(()=>{
//     alert("login page alert..(after 5sec delay)")
// },5000)

// let login=true
// console.log("started");
// let logintimer = setTimeout(()=>{
//     alert("login page alert...(after 5sec delay)");
// },5000)
// login ? clearTimeout(logintimer):""

//! 4. clearinterval : 
// let login=false
// console.log("started...");

// let logintimer = setInterval(()=>{
//     alert("login page alert...(after 3sec delay)");
// },3000)

// setTimeout(()=>{
//     clearInterval(logintimer)
// },6000)
// login ? clearInterval(logintimer):""

//*using global variable 
let login=false
let count = 0;

let logintimer = setInterval(()=>{
    alert("login page alert");
    count++;

    if (count == 3){
        clearInterval(logintimer)
    }
},3000);
login ? clearInterval(logintimer):""
