// //strings in js
// let Name = 'Nikita'
// console.log(Name)
// console.log(typeof Name)

// let Name1 = "Nikita"
// console.log(Name1)
// console.log(typeof Name1)

// let Name2 = `Nikita`
// console.log(Name2)
// console.log(typeof Name2)
// console.log(Name2[3])


// //Backtics ``
// //string interpolation -->${}
// let Name = "Sameer"
// let age =22
// console.log(`my Name is ${Name} and my age is ${age}`)

// //string constructor:is the  process of creating sting into object
// let data=new String("Soni")
// console.log(data)
// console.log(typeof data)

// //length
// let name = "Sameeksha"
// console.log(name.length)

// //indecies
// let Name2 = `Nikita`
// console.log(Name2)
// console.log(Name2.length-1)

//*string methods
//*static methods
//*unicode
// let output = String.fromCharCode(74,97,118,97,83,99,114,105,112,116)
// console.log(output)

//*1.fromcharcode
// console.log(String.fromCharCode(128583))//-->it has limit above 65,000 it will not give proper 
//*2.fromcodepoint
// console.log(String.fromCodePoint(128583))

//*3.Raw 
// let str = String.raw`hello\nworld ${7+1}`
// console.log(str)

//&3.instance methods : at -->it also works wit negative indicies
// let a = "Nikita"
// console.log(a.at(-3))

//*charAt: it only work with positive indicies
// let s = "Mom"
// console.log(s.charAt(2))

//^charcode
// let d = "ZavaScript"
// console.log(d.charCodeAt(6))

// let d1 = "Z"
// console.log(d1.charCodeAt(0))

//~4.concat: one or more strings writtern new string
// let out1 = "hello"
// let out2 = "how are you"
// console.log(out1.concat(" ",out2))

//*5.Includes: accept substring, always written boolean data
// let greet = "welcome to class"
// console.log(greet.includes("to",9))

//*6.indexof
let greet1 = "welcome to class to"
console.log(greet1.indexOf("to",8))

//*7.lastIndexOf
// let data4 = "welcome to class  to"
// console.log(data4.lastIndexOf("to"))

//*split():convert the string into array wit the help of 
// let data5 = "welcome to class  to"
// console.log(data5.split())
// console.log(data5.split(""))
// console.log(data5.split(" "))
// console.log(data5.split("t"))

//*toUppercae
// let str = "millennium";
// console.log(str.toUpperCase());
// console.log(str)


//*toLowercase
// let str = "MILLENNIUM";
// console.log(str.toLowerCase());
//  console.log(str)

// trim: remove the whitespace in both, returns new sting
// let data=' React  '
// console.log(data.length)
// data.trim()
// console.log(data.length)

// let data=' React  '
// console.log(data.length)
// let res=data.trim()
// console.log(data.trim().length)

//Trimstart()
// let data='React  '
// console.log(data.trimStart().length)
// console.log(data.trimEnd())

//*startWith

// let data = "welcome to javaScript class"
// console.log(data.startsWith('ome',4))
// console.log(data.endsWith('class',22))

//*Repeat():
// let data = "welcome to javaScript class"
// console.log(data.repeat(10))

//!padStart
// let data = "React"
// console.log(data.padStart (11,"nikita"))

//*padEnd
// let data = "React"
// console.log(data.padEnd(20,"nikita"))

//&replace
// let data = "welcome to Bengaluru"
// console.log(data.replace("Bengaluru","Chennai"))

//!replaceAll
// let data = "welcome to Bengaluru Bengaluru"
// console.log(data.replaceAll("Bengaluru","Chennai"))

//&Regex
// let data = "welcome to careloan to careloan"
// console.log(data.search(/to/))//-->same as includes but here advantage is we can check some patterns like #
// console.log(data.match(/to/))
// console.log(data.matchAll("to"))

//^toString:it will convert object into string
// let str = new String("Hello")
// console.log(typeof str.toString())

//slice accept -ve index,if first index is greater thn second it will give empty string
// let str = "welcome to javascript life"
// console.log(str.slice(8))
// console.log(str.slice(8,21))
// console.log(str.slice(-5))
// console.log(str.slice(-5,-2))
//console.log(str.slice(21,8))


//~substring
// let str = "welcome to javascript life"
// console.log(str.substring(8))
// console.log(str.substring(8,21))
// console.log(str.substring(-5))
// console.log(str.substring(-5,-2))
// console.log(str.substring(21,8))

//!1.remove all the spaces from the strings
//^2.Remove wel from the string
//!3.remove first and last charcter from the string
//*4.check weather the first charcater and last character are same.
//&5.count how many a is occered
//~6.replace space with backslash
//^7.find the middle charcter of the string
//&8.change only the first charcater to uppercase.
//*9.swap the first character and last character.

// //!1.remove all the spaces from the strings
// let str = "welcome to javascript life"
// console.log(str.replaceAll(" ", ""))

// //^2.Remove wel from the string
// let str = "welcome to javascript life"
// console.log(str.slice(3))

// //!3.remove first and last charcter from the string
// let str = "welcome to javascript life"
// console.log(str.slice(1,25))

//*4.check weather the first charcater and last character are same.
// let str = "welcome to javascript life";

// if (str[0] == str[str.length - 1]){
//      console.log("Same");
// }   else {
//    console.log("Different");
// }

//&5.count how many a is occered
// let str = "welcome to javascript life";
// let ch = "a"
// let count = 0
// for(let c of str){
//     if (c==ch){
//         count++;
//     }  
// } 
// console.log(count)

//~6.replace space with backslash
// let str = "welcome to javascript life";
// console.log(str.replaceAll(" ", "\"));

//^7.find the middle charcter of the string
// let str = "welcome to javascript life";
// console.log(str.slice(str.length/2,str. length/2+1))

//&8.change only the first charcater to uppercase.
// let str = "welcome to javascript life";
// console.log(str.charAt(0).toUpperCase()+str.slice(1));

//*9.swap the first character and last character.
// let str = "welcome to javascript life";
// console.log(str.at(-1)+str.slice(1,-1)+str[0]);














//^if spaces bw keys directlu use square braces
//^method : which specifies only tht example:string
//^function :