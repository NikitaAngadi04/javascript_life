// //* uing Literals
// let userdata ={
//     name:"nikita",
//     age:22,
//     married:"unmarried",
//     Flag:"null",
//     "*":"data"
// }
// console.log(userdata)
// console.log(userdata.name)
// console.log(userdata["name"])


// let userdata1 ={
//     "first name":"BP",
//     age:22,
//     married:"unmarried",
//     Flag:"null",
//     "*":"data",
//     34 : "nikita",
//     skills : ["html","css","js"],
//     print:function(){
//         console.log("hello")                                             //iam not returning anything here tht's why output is undefined
//     },
//     address:{
//         pincode:581600,
//         houseNo:405
//     }
// }
// // console.log(userdata1.first name)
// // console.log(userdata1["first name"])
// // console.log(userdata1["*"])
// // console.log(userdata1[34])
// console.log(userdata1.skills[1])
// console.log(userdata1["skills"][2])
// userdata1.print()
// console.log(userdata1.address.houseNo)
// console.log(userdata1["address"]["pincode"])
// userdata1["print"]()


// //!Methods of objects
// let userdata2 ={
//     "first name":"BP",
//     age:22,
//     married:"unmarried",
//     Flag:"null",
//     "*":"data",
//     34 : "nikita",
//     skills : ["html","css","js"],
//     print:function(){
//         console.log("hello")                                            
//     },
//     address:{
//         pincode:581600,
//         houseNo:405
//     }
// }
// console.log(Object.keys(userdata2))
// console.log(Object.values(userdata2))


//*date --> 19th august

//* 3. OBJECT.ASSIGN()
// let person={
//     name : "priya",
//     age : 22,
//     flag : true,
//     a : "b"
// }
// let person1={
//     name : "lahari",
//     age : 21,
//     flag : true,
//     IsLoggedIn : true
// }
// let res = Object.assign({},person1,person);
// console.log(res);


// let person1={
//     name : "priya",
//     age : 22,
//     flag : true,
//     a : "b"
// }
// delete person1.a //*del
// person1.name = "rani"//*modification
// person1.address = "Bangalore"
// console.log(person1);


// //* 4. Object.preventExtensions

// Object.preventExtensions(person1)
// let secure = Object.isExtensible(person1)
// person1.address = "xyz"
// person1.address = fgfch = "gyhcn"
// delete person1.name
// console.log(person1);
// console.log(Object.isExtensible(person1));

// //! 5. Object.seal() ---> Only modification is possible
// person1.name = 'rai'
// console.log(person1)
// console.log(Object.isSealed(person1));
// console.log(Object.isFrozen(person1));


// person1.name = 'rai'
// console.log(person1)
// console.log(Object.isFrozen(person1));

// //* 5. Object.entries() --> Doesnt change the original object
// // console.log(Object.entries(person1));

// //* 6. Object.fromEntries() --> convert nested array object to an  actual object

// let person1={
//     name : "priya kunchigi",
//     age : 22,
//     flag : true,
//     a : "I am a Software Developer"
// }

// let NewNestedArray = Object.entries(person1)
// console.log(NewNestedArray);

// let data =  Object.fromEntries(NewNestedArray);
// console.log(data)


// //* 7. Object.defineProperty() --> we can target multiple propertiess
let person1={
    name : "priya kunchigi",
    age : 22,
    flag : true,
    a : "I am a Software Developer"
}

let data = Object.defineProperty(person1,"password",{
    value:"xyz",
    writable: true,
    enumerable: true,
    configurable: false
})
console.log(data.flag2);
data.flag2 = 'ramuu'
console.log(data.flag2);

console.log(Object.keys(data));
delete person1.flag2
console.log(person1.flag2);

// //* 8. Object.hasOwn() --> checks whether it is owning that property or not....
// let person1={
//     name : "priya kunchigi",
//     age : 22,
//     flag : true,
//     a : "I am a Software Developer"
// }
// console.log(Object.hasOwn(person1,"name"));
// console.log(Object.hasOwn(person1,"gender"));
// console.log(Object.hasOwn(person1,"age"));
// console.log(Object.hasOwn(person1,"flag"));

// //* 9. Object.is() -->  it basically helps us to compares property 1 with property 2
// let person1={
//     name : "priya kunchigi",
//     age : 22,
//     flag : true,
//     a : "I am a Software Developer"
// }
// console.log(Object.is(90,person1.age));
// console.log(Object.is(22,person1.age));