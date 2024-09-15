//  Primitive

//  8 types : String, Number, Boolean, null, undefined, Symbol, BigInt, object

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harry",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//====================================

// stack (primitive),  Heap (non-primitive)

//stack:- jo pn variable decliear krnr tyacha copy milanr ani copy madhe change honr original tasach rahnr
//heap :- yat milanr reference tr jo pn change krnr to original memory madhech change honar

// stack
let myAccountname = "Harry Potter"

let anotherAccountname = myAccountname
anotherAccountname = "Harmaini"

console.log(myAccountname);
console.log(anotherAccountname);

// heap
let accountOne = {
    email: "harry@google.com"
}

let accountTwo = accountOne

accountTwo.email = "potter@google.com"

console.log(accountOne.email);
console.log(accountTwo.email);
