// Functions in Js

function print(){
    console.log("Hello Iam Function")
}
print()


// *arguments and parameteres
function print(Name){
    console.log("Hello Iam", Name)
}
print("Nikita")

// named function
function print(Name){
    console.log("Hello Iam", Name)
}
print("Nikita")

// Return keyword
function add(a,b){
    return a+b
}
let res = add(10,20)
console.log(res)


function add(a,b){
    return a+b
    // gbfhjeghukjvn           it will not return this value afetr return you can write anything, and also it will not give error if you define before it will throw error
}
let res = add(10,20)
console.log(res)

// anonymous function doesnot have any any name , and we are storing into variable and we able to call function
let print=function(){
    console.log("Hello Iam anonymous function");
}
print()


// arrow function (fat arrow function)

let adding = (a)=>{
    return a+100
}
console.log(adding(10))

// advantage
let adding=_=>10+100
console.log(adding(10))

let add = (a, b) => a+b
console.log (add (10,20))

//find a greatest of 6 numbers

let a = 10;
let b = 25;
let c = 15;
let d = 40;
let e = 30;
let f = 20;

let greatest =
    (a > b && a > c && a > d && a > e && a > f) ? a :
    (b > c && b > d && b > e && b > f) ? b :
    (c > d && c > e && c > f) ? c :
    (d > e && d > f) ? d :
    (e > f) ? e : f;

console.log("Greatest number is:", greatest);

//find a squre of number using arrow function
let square = (num) => num * num;

console.log(square(5));
console.log(square(12));

//find a given number is even and odd 
let even =(x)=>{
     if(x%2==0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
let res=even(6)
console.log(res) 

//using arrow function find greatest of 3
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


