//* uing Literals
let userdata ={
    name:"nikita",
    age:22,
    married:"unmarried",
    Flag:"null",
    "*":"data"
}
console.log(userdata)
console.log(userdata.name)
console.log(userdata["name"])


let userdata1 ={
    "first name":"BP",
    age:22,
    married:"unmarried",
    Flag:"null",
    "*":"data",
    34 : "nikita",
    skills : ["html","css","js"],
    print:function(){
        console.log("hello")                                             //iam not returning anything here tht's why output is undefined
    },
    address:{
        pincode:581600,
        houseNo:405
    }
}
// console.log(userdata1.first name)
// console.log(userdata1["first name"])
// console.log(userdata1["*"])
// console.log(userdata1[34])
console.log(userdata1.skills[1])
console.log(userdata1["skills"][2])
userdata1.print()
console.log(userdata1.address.houseNo)
console.log(userdata1["address"]["pincode"])
userdata1["print"]()


//!Methods of objects
let userdata2 ={
    "first name":"BP",
    age:22,
    married:"unmarried",
    Flag:"null",
    "*":"data",
    34 : "nikita",
    skills : ["html","css","js"],
    print:function(){
        console.log("hello")                                            
    },
    address:{
        pincode:581600,
        houseNo:405
    }
}
console.log(Object.keys(userdata2))
console.log(Object.values(userdata2))