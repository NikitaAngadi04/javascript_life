//Decisional staemets
//if , else if, elif, switch

//if statement
let isLoggedin=true
if(isLoggedin){
    console.log("welcome to office")
}else{
    console.log("something went wrong")
}
//else if
let age = 10
if (age>=18){
    console.log("we dont allow you")
}else if(age>18){
    console.log("welcome to party")
}else if(age==50){
    console.log("not allowed")
}else{
    console.log("get lost")
}
//switch 
let day = 30
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    default:
        console.log("invallid day")

}


//Looping statements
///for loop
for(let i=0 ; i<10; i++){
    console.log("Hello")
}

for(let i=1; i<=10; i++){
    console.log("2*"+i+"="+(2*i));
}

for (let table = 5; table <= 11; table++) {
    console.log("Table of " + table);

    for (let i = 1; i <= 10; i++) {
        console.log(table + " * " + i + " = " + (table * i));
    }

    console.log("--------------------");
}

//while loop
let i =1
while(i<=10){
     console.log("2*"+i+"="+(2*i));
     i++
}

//Do-while loop
let i = 1
do{
    console.log("10*"+i+"="+(10*i));
    i++;
}while(i<=10)

//& continue
for (let i =1; i<=5; i++)
{
    if(i==3)continue
    console.log("i=",i)
}
for (let i =1; i<=5; i++)
{
    if(i==3)break
    console.log("i=",i)
}

