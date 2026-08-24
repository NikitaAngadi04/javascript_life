// //!Array iterations methods
// let Array = [12,3,5,7,89,90,800]
// let newArray = Array.map((value,index,array)=>{
//     return value+1

// })
// console.log(newArray)
// console.log(Array)


// //*accessing 10 in the array
// // let Array1 = [12,3,5,10,89,90,800]
// // let newArray1 = Array1.map((value,index)=>{
// //     return index,value(10)
// // })
// // console.log(newArray1)


// //^usecase of mapfunction
// //^using for loop
// let array = [10,7,30,40,50,60]
// let result = []
// for(let i=0; i<array.length;i++){
//     result.push(array[i]*2)
// }
// console.log(result);

// //^by using map()
// let res1 = array.map((value)=>value*2)
// console.log(res1)

// //^return odd numbers from the map
// let res2 = array.map((value)=>value%2!=0)
// console.log(res2)

// //^convert a number into string
// let res3 = array.map((value)=>array.toString())
// console.log(res3)


// map--> used to iterate over the array,,,,it does not modify the original array
//& map(value,index,originalarray)
// let array=[1,2,65,4,'aruna'];
// let newArray=array.map((value,index,array)=>{
    // console.log(Array);
//     console.log(value, index, array);
// })

// let newArray=array.map((value,index,array)=>{
//     return value+1
// })
// console.log("old array: " , array);
// console.log("new array: ",newArray);


// let newArray=array.map((value)=>{
//     return value+10
// })
// console.log(array);
// console.log(newArray);


// let arr=[10,2,20,30,40];
// let result=[];
// for (let i=0; i<arr.length; i++){
//     result.push(arr[i]*2)
// }
// console.log(result);
// //* using map
// let res=arr.map((value)=>value*2)
// console.log(res);

//~ return odd numbers by map
ar=[1,2,4,5,8,3]
let odd=ar.map((value)=>value%2!=0)
console.log(odd);

//~ this is using by for loop
// let dummyarray=[]
// for (let i=0; i<ar.length; i++){
//     dummyarray.push(ar[i].toString())
//     return i%2 ==0    
// }
// console.log(dummyarray);

// let ar1 = [10, 15, 20, 25, 30];

// for (let i = 0; i < ar.length; i++) {
//     if (ar1[i] % 2 != 0) {
//         console.log(ar1[i]);
//     }
// }




//~ using map 
// console.log("using map: ", ar.map((item)=> item.toString()));


// let array1=['red','pink','yellow','green','white'];
// console.log("using map: ", array1.map((value)=> value.padStart( 5 , '**')));

//~ using map
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newArray=arr.map((item)=> {
//     if (item>6){
//         return item
//     }
// })
// console.log(arr);
// console.log(newArray);


//~  filter-----> if the condition is true then only it will execute
// let result= arr.filter((item)=> item>6)
// console.log(result);



//! even and odd using filter
// let res= arr.filter((item)=> item%2==0 )
// let res1= arr.filter((item)=> item%2==1)
// console.log("even:", res);
// console.log("odd: ", res1 );

//^ get a even numbers from the array and square it
// let res=arr.filter((item)=> item%2==0).map((item)=> item*2);
// console.log(res);


// //* get sum of array
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// let res1=arr.map((items)=> sum += items);
// console.log(sum);

//~ using reduce
// let res1=arr.reduce((prev,current,index)=>{
//     console.log(prev);
//     console.log(current);
//     console.log("********",index);
//     return prev*current 
// },10)
// console.log(res1);

// let arr=[1,2,3,4,5,66,7,8,9,10];
// let res1=arr.reduce((prev,current,index)=>{
//     return prev+current 
// })
// console.log(res1);

// //~find a max of an array
// let max=arr.reduce((prev,current)=>(current>prev)?current: prev);
// console.log(max);

// //~find a min of an array
// let min=arr.reduce((prev,current)=>(current<prev)?current: prev);
// console.log(min);


// //~find a product of an array
// let pro=arr.reduce((prev,current)=>(current*prev));
// console.log(pro);