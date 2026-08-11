//Functions in Js

// function print(){
//     console.log("Hello Iam Function")
// }
// print()


//*arguments and parameteres
// function print(Name){
//     console.log("Hello Iam", Name)
// }
// print("Nikita")

//named function
// function print(Name){
//     console.log("Hello Iam", Name)
// }
// print("Nikita")

//Return keyword
// function add(a,b){
//     return a+b
// }
// let res = add(10,20)
// console.log(res)


// function add(a,b){
//     return a+b
//     gbfhjeghukjvn           it will not return this value afetr return you can write anything, and also it will not give error if you define before it will throw error
// }
// let res = add(10,20)
// console.log(res)

//anonymous function doesnot have any any name , and we are storing into variable and we able to call function
// let print=function(){
//     console.log("Hello Iam anonymous function");
// }
// print()


//arrow function (fat arrow function)
//single line of code no need of curly braces
//sinle line line of code no need of parenthesis
//parameter handle
// let adding = (a)=>{
//     return a+100
// }
// console.log(adding(10))

//advantage
// let adding=_=>10+100
// console.log(adding(10))

// let add = (a, b) => a+b
// console.log (add (10,20))

//find a given number is even and odd
//using arrow function find greatest of 3
//using arrow function get a factorial of number
//

let even =(x)=>{
     if(x%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
let res=even(6)
console.log(res) 


let a = 90
let b = 5
let c =8
let greatest=(a,b,c)=>(a>b & b>c)?a:(b>c)?b:c;
console.log(greatest(10,40,90))



//factorial
let f =5;
let ans = 1;
let fact = (f)=>{
    for (let i =2 ; i<=f; i++){
        ans*=i
    }
    return ans;
}
console.log(fact(f))


