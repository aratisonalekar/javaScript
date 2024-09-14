function sayMyName () {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("M");
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("I");   
}
//sayMyName() /* refrence=> sayMyName ()=> exiction */

//function addTwoNumbers(Number1, Number2){
 //   console.log(Number1 + Number2);
//}

//function addTwoNumbers(Number1, Number2){
//    let result = Number1 + Number2
//    return result
//}

const result = addTwoNumbers(3, 4)
//console.log("Result: ", result);

function addTwoNumbers(Number1, Number2){
    //let result = Number1 + Number2
   // console.log("Natash"); // return nunter function kam nahi krt tye tithech close hote return chya adhich pirnt honr nunterch nahi
    return result
}

function addTwoNumbers(Number1, Number2){
    //let result = Number1 + Number2
    //return result
    return Number1 + Number2

};
//const result = addTwoNumbers(3, 4)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Natash"));
//console.log(loginUserMessage());//undefined just logged in

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Natash"));
//console.log(loginUserMessage()); 

function loginUserMessage(username = "Tonny"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Natash"));
//console.log(loginUserMessage("Thor")); //Thor just logged in
//console.log(loginUserMessage());//Tonny just logged in

function calculateCartPrise(...num1){ //(...  )=> reast operator
    return num1
}

//console.log(calculateCartPrise(200, 400, 234, 2899))

function calculateCartPrise(val1, val2, ...num1){ //(...  )=> reast operator
    return num1
}

console.log(calculateCartPrise(200, 400, 234, 2899)) //[ 234, 2899 ] because 200=val1 400-val2


const customer = {
    customername: "Vision",
    customerfee: 999
}

function handleobject(anyobject){
    console.log(`customer name is ${anyobject.customername} and there cource fee ${anyobject.customerfee}`);
}

//handleobject(customer)

handleobject({
    customername: "Wonda",
    customerfee: 1999
})

const myNewArray = [288, 300, 450, 294]

function returnSecondValu(getArray){
    return getArray[3]
}

//console.log(returnSecondValu(myNewArray));
console.log(returnSecondValu([288, 300, 450, 294]));