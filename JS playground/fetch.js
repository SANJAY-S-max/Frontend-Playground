// console.log(fetch("https://dummyjson.com/users"));
// old method() promise handing
// => then, catch

// fetch("https://dummyjson.cocm/users").then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(`Internal server error ${error}`);
// })

// new method  async and await and handing error using try , catch method to handle error

// async function fetchdata(){
//     const res = await fetch("https://dummyjson.com/users");
//     console.log(await res.json());
// }
// fetchdata();


// try , catch method to handing fail in new method
async function fetchdata(){
    try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        console.log(data.users);
    } catch (error) {
        console.log(`Internal server error ${error}`);
    }   
}
fetchdata();