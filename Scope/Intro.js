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

//logical operators
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

// let i = 1;
// while (i<=10);{
//     console.log("Hello js");
//     i++;
// }

// //do while loop
// do{
//     //do some work
// }while(condition);
//let i =20;
// do{
//     console.log("Apna college");
//     i++;
// }while(i<=10);

// let i = 1;
// do{
//     console.log("Apna college");
//     i++;
// }while(i<=5);

//for-of loop
//for(let val of strVar){
// do some work
//}
// let str = "JavaScript"
// let size = 0;
// for(let i of str){ //iterates characters
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =", size);

//for-in loop it will return only keys in object.
// for(let key in objVar){
//     do some work
// }
// let Student={
//     name = "saikumar",
//     age = 26,
//     cgpa = 8.8,
//     ispass:true,
// };
// for(let key in Student){
//     console.log("key=",key ,"value=", Student[key])
// }


//Print all even numbers from 0 to 100.
// for(let num = 0; num<=100; num++){
//     if(num%2==0){
//         console.log("num=", num);
//     }
// }

//create a game where you satart with any random number.ask the user to keep
//guessing the game number untill the user enters correct value.
// let gameNum = 25;
// let userNum = prompt("Guess the game number:");
// while(userNum != gameNum){
//     userNum=prompt("you entered wrong number, guess again:");
// }
// console.log("Congratulations, you entered the the right number");


//Strings in js
//string is a sequence of characters used to reprent text
//create string
//let str = "Apna college";
//string length
//str.length
//string indices
//str[0],str[1],str[2]
//indices (position)-->pural
//singular(position)-->singular

//strings
// let str ="somu priya";
// let str2 ="shraddhha";
// console.log(str[3]);//u

//Template letrals
// let specialstring = `this is a template litral`;
// console.log(typeof specialstring)

// let obj ={
//     item :"pen",
//     price:10
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// template literals in js
// a way to have embedded expressions in strings
// `this is a template literal`

// //string interpolation
// //`string text${expression} string text`  //expression is called string interpolation


// let str = "nikkita\angadi";
// console.log(str.length)
// string in method in js
// these are built in functions to manipulate s String
// str.toUpperCase()
// str.toLowerCase()
// str.trim()#removes whitespace

// let str = "millennium";
// str.toUpperCase();
// console.log(str)

// let str ="miennium";
// str.UpperCase();
// console.log()



//Arrays

// let marks = [99,100,80,56,67];
// console.log(marks);
// console.log(marks.length); //property

// let marks = ["Nikita","Aruna","Heera"];
// console.log(marks)

//looping over an array
// let marks= [85,97,44,37,76,60];
// let sum =0;
// for(let val of marks){
//     sum =sum+val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


// let items=[12,34,5,67,89,90,80]
// let idx = 0;
// for(let val of items){
//     console.log(`value at index ${idx}=${val}`);
//     id++;
// }

//array methods for example amezon website some sort of data stored in array
//push():add to end
//pop():delete from end and return
//toString():converts array to string

// //push
// let items = ["poatao","chili", "mango"]
// items.push("chips");
// console.log(items)

//pop
// let items = ["poatao","chili", "mango"]
// let deleteditem = items.pop();
// console.log(items)
// console.log("deleted",deleteditem)

// let items = ["poatao","chili", "mango"]
// console.log(items);
// console.log(items.toString());

//concat():joins multiple elements and returns result
// let marvelHeros  = ["thor","spiderman","ironman"]
// let dcHeros = ["superman","batman"]
// let heros= marvelHeros.concat(dcHeros);
// console.log(heros)

//unshift():add to start like push
// let marvelHeros  = ["thor","spiderman","ironman"]
// marvelHeros.unshift("antman");

//shit
// let marvelHeros  = ["thor","spiderman","ironman"]
// let val= marvelHeros.shift();
// console.log("deleted",val);

// //slice():returns a piece of the array
// //slice(startidx,endidx)
// let marvelHeros  = ["thor","spiderman","ironman","superman","batman"]
// console.log(marvelHeros);
// console.log(marvelHeros.slice(1,3))

//splice():change original array(add, remove, replace)
//spilce(startidx,delcount,newel1...)
// let marvelHeros  = ["thor","spiderman","ironman","superman","batman"]
// console.log(marvelHeros.splice(2,2))

//add elemet
//arr.spilce(2,0,101);

//delete elemet
//arr.spilce(3,1)

//replace elemet
//arr.splice(3,1,101)

// let array  = [1,2,3,4,5,6,7]
// array.splice(4,1);
// console.log(array)

// let companies = ["Bloomberg","microsoft","IBM","google","Netflix","uber"]
// // companies.shift();
// //companies.splice(2,1,"ola")
// companies.push("amezon") ///add at the end


//Functions in js
//block of code that performs a specific task, can be invoked whenever needed
// function myFunction(){
//     console.log("welcome to apna college");
//     console.log("we are learning js:")
// }
// myFunction();

// function myFunction(msg){           //parametr-->input
//     console.log(msg)
// }
// myFunction("Pavan is my BestFriend😍");

// function add(a,b){
//     console.log(a+b)
// }
// add(2,10);

//Function parametrs like local variables of function.(block function)
//Arrow Function: 
// function sum(a,b){
//     return a+b;
// }

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(2,3);

// const arrowMul=(a,b)=>{
//     return a*b 
// }
let printHello = () => {
    console.log("Hello");
}

//number of vowels
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }
    console.log(count);
}


//For-each loop: arr.forEach(callbackFunction)
// let arr=["pune","delhi","mumbai"];
// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

// let num = [1,2,3,4,5];
// num.forEach((val)=>{
//     console.log(val*val)
// })

//array iteration methods
//1)Map():it will return new array the value its callback returns are used to form new array
//Array.map(useCallbackfunction(Value,index,array))
// let nums = [67,52,39];
// nums.map((val)=>{
//     console.log(val);
// });


// let nums = [67,52,39];
// let newArr=nums.map((val)=>{
//     return val * val;
// });
// console.log(newArr)

// let numbers = [10,20,30,40,50]
// let updatednumbers=numbers.map((value)=>value+10)
//     console.log(updatednumbers);


// let numbers = [10,20,30,40,50]
// let updatednumbers=numbers.map((value)=>value*2)
// console.log(updatednumbers);
// console.log(numbers)

// let arr=[10,20,30,40,50]
// let arr2=arr.map((value)=>value+1)
// console.log(arr2)

// let arr1=[3,4,56,7];
// let newarr=arr1.map((val)=>{
//     return val/4
// });
// console.log(newarr);


//filter():creates a new array of elemts that gives true for a condition/filter.
//example:all even elements
//syntax
//let newarr=arr.filter((val)=>{
//     return val%2===0;
// })

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let evenarr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenarr)

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let newarr=arr.filter((val)=>{
//     return val%2!=0;
// });
// console.log(newarr)


//reduce():performs some operations and reduces the array to a single value. it returns that singlevalue.
// let arr = [1,2,3,4]
// let sum = arr.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue
// },2);
// console.log(sum)

//max
// let arr = [1,2,3,4]
// let sum = arr.reduce((accumulator, currentValue)=>{
//     return accumulator > currentValue ? accumulator : currentValue;
// });
// console.log(sum)

// let arr = [12,34,67,90,99,89,79,109]
// let newArr=arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr)

//window object automaticallly created by browser
//DOM: when a web page is loaded , the browser creates a document object model of the page