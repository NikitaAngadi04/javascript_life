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
function print(){
    const Name="Aruna"
    //console.log(Name)
}
console.log(Name)
print()

