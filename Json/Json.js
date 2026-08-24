//! objects are heavier not at all understnad by protocols tht's why we will make use of Json and it is lightweight
// we can't use date method and function and undefined
// ^Json Example
let jsondata={
    "name":"nikita",
    "age": "21",

}
console.log(jsondata)
console.log(typeof jsondata)


let jsondata1=[
    {
        "name":"Jhon",
        "age":30,
        "isStudent":false,
        "skills":["javascript","HTML","CSs"],
        print:function(){
         console.log("hello")                                            
    },
        "address":{
            "street":"123 main 2nd",
            "city":"Newyork",
            "zip":1001
        }
    }   
]
console.log(jsondata1)
// console.log(print())


//^ Two Methods in Json
//!1.Json.stringify
//&2.Json.Parse :json data into object
let userdata={
    name: "George",
    Age:22,
    Gender:"Male",
}
let jsonConvertdata=JSON.stringify(userdata)
console.log(typeof jsonConvertdata)
console.log(jsonConvertdata)

// ^2.Parse
let jsonparse = JSON.parse(jsonConvertdata)
console.log(jsonparse)
console.log(typeof jsonparse);




