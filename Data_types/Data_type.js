// //number
// let number = 10;
// console.log(number)
// console.log(typeof (number))

// //String
// let name = "nikita"
// console.log(name)
// console.log(typeof (name))

// //Boolean
// let a = true;
// console.log(a)
// console.log(typeof (a))

// //null
// let b = null;
// console.log(b)
// console.log(typeof (b))

// //undefined
// let N;
// console.log(N)
// console.log(typeof (N))

// //Bigint
// let f = 12345n;
// console.log(f)
// console.log(typeof (f))

// //Symbol
// let d = Symbol("Hello!")
// let d2 = Symbol("Hello")
// console.log(d == d2)
// console.log(typeof d)


// //1.Arthimetic operator
// let a = 3;
// console.log("a+b =", a + 2);
// console.log("a-b =", a - 2)
// console.log("a*b =", a * 2)
// console.log("a/b =", a / 2)
// console.log("a%b =", a % 2)
// console.log("++a=", ++a)
// console.log("--a=", --a)

// //Assignment opertator
// let x = 3;
// let y = 5;
// console.log(x = y)
// console.log(x += y)
// console.log(x -= y)
// console.log(x *= y)
// console.log(x /= y)
// console.log(x % y)

// //comaparasion operator

// let d = 9;
// let y = 7;
// console.log("d==y", d == y);
// console.log("d!=y", d != y);
// console.log("d===y", d === y);
// console.log("d>y", d > y);
// console.log("d<y", d < y);
// console.log("d>=y", d >= y);
// console.log("d<=y", d <= y);

// //logical operators
//  let a =9;
//  let b= 10;
//  let cond3 = a<b;//true
//  let cond4 = (a===b);//false
//  console.log("cond3 && cond3 =", cond3&&cond4)
//  console.log("cond3 || cond4 =", cond3||cond4)
//  console.log(!(a===b))



// Ternary operators
let age =18;
let output =  age>=18 ? "can Vote" : "can't vote"
console.log(output)


let a = 50;
let b = 70;
let c = 90;
let output =
    a > b && a > c ? "a is greater" :
    b > a && b > c ? "b is greater" :
    "c is greater";
console.log(output);