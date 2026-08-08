//Global scope

//var Name ="Hy iam js"

//function print(){
//console.log(Name)
//}
//print()       //calling function


//script scope or block scope  -->by using let and const keyword we cannot able to acess variable outside the block scope where as var keyword we can access anywhere 
{
    //let Name= "nikita"
    //const Name="dad"
    //var Name="Reema"
    //console.log(Name) 
}
//console.log(Name)



//Function scope -->if it is defined any keyword(let,var,const) cannot access outside the function
//function print(){
//let Age=20
//console.log(Age)
//}
//console.log(Name)
//print()



//Data types in js
//1.Number
//2.String
//3.Boolean
//4.null
//5.undefined
//6.Bigint
//7.Symbol

/*1.Number
let Age = 20
2.string
let Name = "Mayur"
3.Boolean
let a = true;
4.null
let x = null
5.undefined
let y;
6.BigInt
let f = BigInt("1234");
7.Symbol
let d = Symbol("Hello!");*/

/*objects(Arrays,Function)
it is a collection of values*/
/*const Student = {
    Name:"Kaji",
    age:22,
    Cgpa:8.8,
};
Student["age"]=Student["age"]+1
//console.log(Student.Name)
console.log(Student["age"])*/


/*operators in js used to perform some operation on data
Arthimetic operators
modules operator
exponentiation
increment 
decrement*/
// 1.Arthimetic operator
//  let a = 3;
//  let b = 2;
// console.log("a+b =", a+b);
//  console.log("a-b =", a-b)
//  console.log("a*b =", a*b)
// console.log("a/b =", a/b)
// console.log("a%b =", a%b)
// console.log("a**b =", a**b)

//unary operator
// let a = 5;
// let b = 2;
// console.log("a =",a, "& b =",b)
// a++;                //++a (pre increment) a++(post increment)
// a--;
//console.log("a++ =", a++)
//console.log("++a =", ++a )



//Assignment operator
// let a = 9;
// let b =1;
// a+=1;
// a**=a
// console.log("a = ", a)


//comparasion operator
// 1.equal to (==) checks only value
// 2.equal to & type(===)  checks datatype
// 3.not equal to (!=)
// 4.not equal to &type(!==)

// let x =7;
// let y =7;
// console.log("x == y", x == y)
// console.log("x != y", x != y)

// let x =9;
// let y = "7";
// console.log("x==y",x==y);
// console.log("x!=y",x!=y);
// console.log("x===y",x===y);
// console.log("x!==y",x!==y);
// console.log("x>y",x>y);
// console.log("x<y",x<y);
// console.log("x>=y",x>=y);
// console.log("x<=y",x<=y);

//logival operators
// let a =9;
// let b= 10;
// let cond1 = a<b;//true
// let cond2 = !(a===b);//false
// console.log("cond1 && cond2 =", cond1&&cond2)
// console.log("cond1 || cond2 =", cond1||cond2)
// console.log(!(a===b))

//conditional statements
// let age = 21;           //declared ouside the function can access ,,, if variable declared inside the function we cannot able to access outside the function
// if(age>18){
// }
// console.log("you can vote")

//if statement
// let mode="light";
// let color;
// if (mode==="dark"){
//     color="black";
// }
// if (mode==="light"){
//     color="white";
// }
// console.log(color)

//if-else
// let mode="light";
// let color;
// if (mode==="dark"){
//     color="black";
// }else{
//     color="white";
// }
// console.log(color)

// let age =18;
// if (age>18){
//     console.log("vote");
// }else{
//     console.log("not vote");
// }

// //even odd
// let a =4;
// if (a%2==0){
//     console.log("num is even")
// }else{
//     console.log("num is odd")
// }

//else-if
// let age =18;
// if (age<18){
//     console.log("junior");
// }else if(age>18){
//     console.log("senior");
// }else{
//     console.log("middle");
// }

// let mode="yellow"
// let color;

// if (mode=="dark"){
//     color="black";
// }else if(mode==="blue"){
//     color="blue";
// }else if(mode=="pink"){
//     color="pink";
// }else{
//     color="white";
// }
// console.log(color);

// //trnary operator
// let age = 16;
// age >=18 ? console.log("adult") : console.log("not adult");

//alert("hello!");
// let name = prompt("Nikita")
// console.log(name)
// let num = prompt("enetr a number");
// if (num%5==0){
//     console.log("num is divisible by 5")
// }else{
//     console.log("num id not divisible by 5")
// }
//Grade
// let score = prompt("enetr a score here")
// if (score >=90 && score <=100 ){
//     console.log("grade A");
// }else if (score>=70 && score <= 89){
//     console.log("grade B");
// }else if (score >=60 && score<=69){
//     console.log("grade C");
// }else if(score>=50 && score <=59){
//     console.log("grade D");
// }else{
//     console.log("grade f");
// }


//loops piece of code executes code again and again
//for loop
// for (let i = 1; i<5; i++){ //initialization , stopping condition, updation
// console.log("hello")
// }
//sum of 1 to 5
// let sum =0;
// for (i=1; i<=5; i++){
//     sum=sum+i;
//}
//console.log("sum=",sum);

// for (let i = 1; i<=5; i++){
//     console.log("i=",i)
// }
//console.log("i=",i)



//infinite loop
//a loop never ends

//while loop
// while(condition){
//     //do some work
// }

let i = 1;
while (i<=10);{
    console.log("Hello js");
    i++;
}