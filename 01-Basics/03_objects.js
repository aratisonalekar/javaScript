// singletone (jewha apn litrals use krnr tewha singltone nasne 
//Singletone fakt constructor madhe banato ex: object.create)

// object literals

// symbol
const mySym = Symbol("key1")

const jsUser = {
    [mySym]: "myKey1",
    name: "hulk",
    "full name": "hulk Banner",
    age: 20,
    location: "mannar",
    email: "hulk@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Sunday"]
} // object mhntat yala   name=key "hulk": value

//console.log(jsUser.email);
//console.log(jsUser["email"]);
//console.log(jsUser["full name"]);
//console.log(typeof jsUser[mySym]); // string (symbol converted to string) # interview madhe Que ahe

jsUser.email = "hulk@microsoft.com"
//Object.freeze(jsUser) // warcha purn const jsUser ata freeze zala ata tyat change nai honr.
jsUser.email = "hulk@iconic.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS users");   
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`); // name la refrence karaych ahe tya sathi  
}

console.log(jsUser.greetingTwo());
console.log(jsUser.greeting); //[Function (anonymous)] fuction exicute nahi zala bas fun ch return aala ahe
console.log(jsUser.greeting()); 