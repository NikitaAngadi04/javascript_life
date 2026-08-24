// // Functions in Js

// function print(){
//     console.log("Hello Iam Function")
// }
// print()


// // *arguments and parameteres
// function print(Name){
//     console.log("Hello Iam", Name)
// }
// print("Nikita")

// // named function
// function print(Name){
//     console.log("Hello Iam", Name)
// }
// print("Nikita")

// // Return keyword
// function add(a,b){
//     return a+b
// }
// let res = add(10,20)
// console.log(res)


// function add(a,b){
//     return a+b
//     // gbfhjeghukjvn           it will not return this value afetr return you can write anything, and also it will not give error if you define before it will throw error
// }
// let res = add(10,20)
// console.log(res)

// // anonymous function doesnot have any any name , and we are storing into variable and we able to call function
// let print=function(){
//     console.log("Hello Iam anonymous function");
// }
// print()


// // arrow function (fat arrow function)

// let adding = (a)=>{
//     return a+100
// }
// console.log(adding(10))

// // advantage
// let adding=_=>10+100
// console.log(adding(10))

// let add = (a, b) => a+b
// console.log (add (10,20))

// //find a greatest of 6 numbers

// let a = 10;
// let b = 25;
// let c = 15;
// let d = 40;
// let e = 30;
// let f = 20;

// let greatest =
//     (a > b && a > c && a > d && a > e && a > f) ? a :
//     (b > c && b > d && b > e && b > f) ? b :
//     (c > d && c > e && c > f) ? c :
//     (d > e && d > f) ? d :
//     (e > f) ? e : f;

// console.log("Greatest number is:", greatest);

// //find a squre of number using arrow function
// let square = (num) => num * num;

// console.log(square(5));
// console.log(square(12));

// //find a given number is even and odd 
// let even =(x)=>{
//      if(x%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }
// let res=even(6)
// console.log(res) 

// //using arrow function find greatest of 3
// let a = 90
// let b = 5
// let c =8
// let greatest=(a,b,c)=>(a>b & b>c)?a:(b>c)?b:c;
// console.log(greatest(10,40,90))



// //factorial
// let f =5;
// let ans = 1;
// let fact = (f)=>{
//     for (let i =2 ; i<=f; i++){
//         ans*=i
//     }
//     return ans;
// }
// console.log(fact(f))

//callback function: whenever a function is passed into another function as a argument
// function print(name, fun){
//     console.log(name);
//     fun();
// }
// function greet(){
//     console.log("welcome to party")
// }
// print("ramu",greet)


// function calci(num1,num2,task){
//     task(num1,num2)
// }
// function add(a,b){
//     console.log(a+b);
// }
// calci(10,20,add)


// function calci(num1,num2,task,task1){
//     task(num1,num2)
//     task1(num1,num2)
// }

// function add(a,b){
//     console.log(a+b);
// }
// function sub(a,b){
//     console.log(a-b);
    
// }
// calci(10,20,add,sub)


// higher order function : which accept another function as parameter
function main(callback){
    console.log("iam main function")
    callback()
}

main(function print(){
    console.log("iam callback function")
})

// function greet(name,callback){
//     console.log("Hello",name)
//     callback()
// }
// function saybye(){
//     console.log("Goodbye!");
// }
// greet("Nikita",saybye);

// function calculate(a, b, callback) {
//     callback(a, b);
// }
// calculate(10, 20, function(x, y) {
//     console.log(x + y);
// });




// function ordering(name, veg, Takeaway){
//     console.log("welcome to restorent")
//     veg(Takeaway)
// }
// function nonveg(){
//     console.log("...............");
//     console.log("your biriyani is getting ready"+name);
//     console.log("...............");
//     console.log("your biriyani is ready");
// }
// function veg(task){
//     console.log("...............")
//     console.log("your veg-biriyani is getting ready");
//     task()
// }
// function Takeaway(){
//     console.log("your Parcel is ready")
// }
// ordering('Zayan',veg,Takeaway)
 
// //^ ARRAY DESTRUCTURING
// let array = ['pink', 'blue', 'red', 'orange', 'yellow']
// console.log(array[2]);
// console.log(array[3]);
// let [p,b,r,o,y] = array
// console.log(p);
// console.log(b);
// console.log(y);

// let branch = ['ise','civil','mech']
// console.log(branch[2]);

// let[i,c,m] = branch
// let[,c,] = branch //&--> to get a particular value(works on positions)
// console.log(c);

// let [a,b] = [12,45] //& --> can also be done like this
// console.log(a,b);

// ! DEFAULT VALUE
// let [a,b,c = "35"] = [12,45]
// console.log(c);

// ~ SWAPPING using destructuring
// let a = 4;
// let b = 8;
// [b,a] = [a,b];
// console.log(b)
// console.log(a);

// ! NESTED ARRAY
// let array = ['pink', 'blue', 'red', ['orange', 'yellow']]
// let [p,b,r,[o,y]] = array
// console.log(p);
// console.log(y);

//  * OBJECT DESTRUCTURING
// let object = {
//     name : "purav",
//     age : 12,
//     flag : true,
//     address : {
//         city : 'Ballari'
//     }
// }
// let {name,age,flag,address} = object
// console.log(name);
// console.log(age);
// console.log(flag);
// console.log(address);
// console.log(address.city);

//  * NESTED OBJECT DESTRUCTURING
//  let object = {
//     name : "purav",
//     age : 12,
//     flag : true,
//     address : {
//          city : 'Ballari'
//     }
// }
// let {name,age,flag,address:{city}} = object
// console.log(name);
// console.log(age);
// console.log(flag);
// console.log(city);

// let{name:fullName} = object
// console.log(fullName) ;



// let userData = [
//     {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//             "rate": 3.9,
//             "count": 12,
//             "skills":['java','python','sql']
//         }
//     }
// ];
// let [{id,title,price,rating:{rating,count:[j,p,s]}}] = userData
// console.log(j);
// console.log(userData[1].rating.count);