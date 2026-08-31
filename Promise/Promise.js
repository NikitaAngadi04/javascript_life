// & Api--https://fakestoreapi.com/docs
// it is not readable form using then method
//! traditional way
//!then
// let fetchingData = fetch("https://fakestoreapi.com/docs") 
//     .then((resp)=>{
//         console.log(resp);
// })

// redable form using json method
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

// let fetchingData = fetch("https://fakestoreapi.com/users") 
//     .then((resp)=>{
//         return resp.json();

//     }).then((data)=>{
//         console.log(data);
    // })


//^ catch
    // let fetchingData = fetch("https://fakespi.com/Products") 
    // .then((resp)=>{
    //     return resp.json();

    // }).then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     // console.log(err.msg);
    //     console.log("something went wrong😑")
    // })

    //! Finally

    //  let fetchingData = fetch("https://fakestoreapi.com/Products") 
    // .then((resp)=>{
    //     return resp.json();

    // }).then((data)=>{
    //     console.log(data);
    // }).catch((err)=>{
    //     // console.log(err.msg);
    //     console.log("something went wrong😑")
    // }).finally(()=>{
    //     console.log("done withe exection....")
    // })


    //&modern way using async and await
    // let Data = await fetch("https://fakestoreapi.com/Products")
    // let finalData = await Data.json()
    // console.log(finalData)

    //* can we use async with normal variable -->yes in Es6 feature it is possible
    // async function fetchingData(){
    //     let Data = await fetch("https://fakestoreapi.com/Products")
    //     let finalData = await Data.json()
    //     console.log(finalData)

    // }
    // fetchingData()

    //  async function fetchingData(){
    //     let Data = await fetch("https://fakestoreapi.com/users")
    //     let finalData = await Data.json()
    //     console.log(finalData)

    // }
    // fetchingData()

//^try and catch : if any error occures catch block will execute (it is modern approach)
//  async function fetchingData(){
//     try{
//         let Data = await fetch("https://fakeseapi.com/users")
//         let finalData = await Data.json()
//         console.log(finalData);
//     }catch(err){
//         console.log(err.message)
//         console.log("something went wrong")
//     }
// }
// fetchingData()

//*FetchingData
//  async function fetchingData(){
    
//         let Data = await fetch("https://fakestoreapi.com/users")
//         let finalData = await Data.json()
        
//         finalData.map((items)=>console.log(items.id))
// }
// fetchingData();

// using destructure

//  async function fetchingData(){
    
        let Data = await fetch("https://fakestoreapi.com/users")
        let finalData = await Data.json()
        
        finalData.map((items)=>{
            let{id,title}=items

            console.log(id,title)
        })
    }
fetchingData();

//  async function fetchingData(){
    
//         let Data = await fetch("https://fakestoreapi.com/users")
//         let finalData = await Data.json()
        
//         finalData.map(({id,title,rating})=>{
//             console.log(id,title,rating)
//         })
//     }
// fetchingData();
