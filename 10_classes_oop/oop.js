/** const user = {
    username: "Raj",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("got details");
        console.log(`username: ${this.username}`);
        console.log(this)  // prints the user as here this refers to the above
    }
}



console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // global context mein this cant reger anything so this refers to global window
*/

// const promiseOne = new Promise();  // new is the constructor function

function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this 
}

const userOne = User("hitesh", 2,true);
console.log(userOne);

