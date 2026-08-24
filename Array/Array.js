//*Arrays in JavaScript
let a = [1,2,3,4,50]
console.log(a)
console.log(typeof a)

//&heterogenous and homogenous Array
let arr = [1,2,"nikita",true,function(){console.log("hello")}]
console.log(arr.length)
console.log(typeof arr)

//!by using constructor 
//^if we are having a single value in the array it consider a length of array
//*if we have multiple values it consider items
let arr1 = new Array(5)
console.log(arr1)
console.log(typeof arr1)

//*accessing the array using indicies
let arr2 = ["nikita","aruna","bhavya","bp"]
console.log(arr2[3])

//!truncate the array
let arr3 = [1,2,3,4,5]
arr3.length = 3
console.log(arr3)
arr3[0]="zayan"
console.log(arr3)


//^Static method
//^1.from
//^using from we can iterate over the data
let data = Array.from("nikita")
console.log(data)

//*we cannot iterate the obj
let data1 = Array.from({
    name : "bp",
    age: 22
})
console.log(data1)

//*2.isArray :will check given value Array or not
let data2 = "Mayur"
console.log(Array.isArray(data2))

let data3 = [6,"nikita",5869]
console.log(Array.isArray(data3))

//!3.Arrayof : it will not consider length of array instead of that it will consider item
let Arr = Array.of(2,3,4,5,6)
console.log(Arr)

let Arr1 = Array.of(2)
console.log(Arr1)

//~Instance methods of Array
//^.Push : it will add the element at the last of array
let Arr2 = [1,2,335,9]
Arr2.push("chinni")
console.log(Arr2)

//^2.Pop() : it will remove the last element
let Arr3 = [1,2,335,9]
Arr3.pop()
console.log(Arr3)

//^3.shift() : it will remove the first element of array
let Arr4 = [1,2,335,9]
Arr4.shift()
console.log(Arr4)

//^4.unshift(): it will add the element at the first
let Arr5 = [1,2,335,9,"nikita"]
Arr5.unshift("chinni")
console.log(Arr5)

//^5.slice() :
//let newArray = Arr5.slice(0,2)
let newArray = Arr5.slice(-3)
console.log(newArray)

//^6.splice():change original array(add, remove, replace), it always return deleted item.
let Arr6 = ["bmw","supra","fortunar","hundy","ford","RR"]
let deletedData = Arr6.splice(1,2)
console.log(deletedData);
console.log(Arr6)

//*you can add the values
let Arr7 = ["bmw","supra","fortunar","hundy","ford","RR"]
let AddData = Arr7.splice(2,4,"lamborginni")
console.log(AddData);
console.log(Arr7);

//!7.concat()
let Arr8 = ["bmw","supra","fortunar","hundy","ford","RR"]
let Arr9 = ["thar"]
console.log(Arr8.concat(Arr9))

// let newArray = Array8.concat(5,["somu","rani"])
// console.log(newArray)

//~8.Reverse()
let Arr10=[1,34,78,90,100]
console.log(Arr10.reverse())

//^join():
let Arr11 = [1,2,3,4,5]
let newData =Arr11.join("$")
console.log(newData)

//^indexof():
// let Arr12 = [1,2,3,4,51,34,78,90,10]
//console.log(Arr12.indexOf(78,5))
//console.log(Arr12.lastIndexOf(2,5))
//onsole.log(Arr11.includes(2,1))

//!for of using object creation
// let Arr13 = [1,2,3,4,51,34,78,90,10]
// console.log(Arr13.entries());

// for(let data of Arr13.entries()){
//     console.log(data)
// }

// for(let data of Arr13.keys()){
//     console.log(data)
// }

// for(let data of Arr13.values()){
//     console.log(data)
// }

// //^sort():
// let color = ["red","white","yellow","blue"]
// console.log(color.sort())
// let Arr13= [10,15,90,2,7,8,300]
// console.log(Arr13.sort())

// let arr14 = [1,5,9,2,4,8,10,7]
// console.log(arr14.sort((a,b)=>a-b))             //a-b< 0 thn same a/b, a-b > 0 then swap  b/a

// //^find()
// let arr15 = [1,5,9,2,4,8,10,7]
// console.log(arr15.find((num)=> num>2))
// console.log(arr15.findIndex((num)=> num>2))



//*1.sort a number in desecending order
let arr16 =  [1,5,9,2,4,8,10,7]                                                             //b - a > 0   → b comes before a // b - a < 0   → a comes before b //// b - a = 0   → their order doesn't need to change
console.log(arr16.sort((a,b)=>b-a))

//&2.find the largest number using sort
let arr17 =  [1,5,9,2,4,8,10,7] 
console.log(arr17.sort((a,b)=>b-a,arr17[0]))

let p = [1, 5, 9, 2, 4, 8, 10, 7];
arr.sort((a, b) => b - a);
console.log("Largest Number:", p[0]);


//!3.Reverse a string
let str1 = "JavaScript"
let reverse = str1.split("").reverse().join("");
console.log(reverse)


//^4.convert a string into array
let str2 = "Hello JavaScript"
console.log(str2.split(""))

//*5.convert a array into string
let Arr17 = ["hello","nikita","how","how are you"]
let str = Arr17.join(" ")
console.log(str);
console.log(typeof str)

//&6.count the vowels in string


//^7.remove duplicates from the array
let arr20 = [2,1,4,6,9,90,2,5,6,1,]
let newArr12 =[new Set(arr20)]
console.log(newArr12)





















