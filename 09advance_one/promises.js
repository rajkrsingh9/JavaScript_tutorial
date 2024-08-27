const promiseOne = new Promise(function(resolve, reject){
    // Do an Async Task
    // DB tasks, calls, cryptography, networkcall
    setTimeout(function(){
        console.log('Async task is complete')
        resolve() // confirmation function connected to .then... when this promise gets executed then automatically resolve takes to the .then() to run the function
    },1000)
})

promiseOne.then(function(){ // then directly is connected to resolve
    console.log("Promise consumed");
    
})

// without storing inside a reference
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("resolved async 2")
})


const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"hui@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"raj", password: "abc123"})
        }
        else{
            reject('ERROR: Wrong')
        }
    }, 1000)
})

// Chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.username 
})
.then((username)=>{
    console.log(username);
    
}).catch(function(err){
    console.log(err);
    
}).finally(()=> console.log("resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"js", password: "abc123"})
        }
        else{
            reject('ERROR: JS went Wrong')
        }
    }, 1000)
})

async function consumeproFive(){
    try { 
        const response = await promiseFive
        console.log(response)
    } catch (error){
        console.log(error);
         
    }
}

consumeproFive()

/**

async function getAlluser() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response); ---> hume response mill rha h but kyuki yeh timed process h toh without await hume result nhi milega
              
        const data = await response.json()
        console.log(data);
    } catch (error){
        console.log("E: ", error);
    }
} 
getAlluser()
 */

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> {
        return response.json()
    })
    .then((data)=>{ // yaha await nhi lagega kyuki ek hoga uske baad hi niche wla execute hoga
        console.log(data);
        
    })
    .catch((error) => console.log(error))



