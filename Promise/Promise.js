// & Api--https://fakestoreapi.com/docs
// it is not readable form

// let fetchingData = fetch("https://fakestoreapi.com/docs") 
//     .then((resp)=>{
//         console.log(resp);
// })

// redable form
// let fetchingData = fetch("https://fakestoreapi.com/Products") 
//     .then((resp)=>{
//         return resp.json();

//     }).then((data)=>{
//         console.log(data);
//     })
// https://fakestoreapi.com/users
// let fetchingData = fetch("https://fakestoreapi.com/users") 
//     .then((resp)=>{
//         console.log(resp);
// })

let fetchingData = fetch("https://fakestoreapi.com/users") 
    .then((resp)=>{
        return resp.json();

    }).then((data)=>{
        console.log(data);
    })