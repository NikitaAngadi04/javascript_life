//logival and operator
let result = false && "hai"
console.log(result)

let result = "Hello" && "hai"
console.log(result)

let result = true && "hai" && "Hello" && "ramu" 
console.log(result)

//logical OR operator 
let result = false || "hello"
console.log(result)

let result = true || "hello"
console.log(result)

let result = false || undefined ||false || "hello"||"hai"||false
console.log(result)

//Logical nullish -->only null and undefine 
let username = "Hello" ?? "Guest";
console.log(username)

let username = Null ?? "Guest";
console.log(username)