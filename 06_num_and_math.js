const score = 500

const balance = new Number(400)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
//console.log(balance.toFixed(1));

const accountNumber = 313.897
//console.log(accountNumber.toPrecision(3)); //314

const accountBalance = 25.897
//console.log(accountBalance.toPrecision(3)); //25.9

const account = 1225.897
//console.log(account.toPrecision(3)); //1.23e+3
//console.log(account.toPrecision(4)); // 1226

const currentBalance = 1000000
//console.log(currentBalance.toLocaleString()); // us type
//console.log(currentBalance.toLocaleString('en-IN')); // indian type

// +++++++++++++++++++++++++++MATHS LIBRARI++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6)); // 6
console.log(Math.round(7.8)); //8
console.log(Math.ceil(5.1)); //6
console.log(Math.floor(7.9)); //7
console.log(Math.min(4, 6, 3, 7)); //3
console.log(Math.max(4, 6, 3, 7));  //7
console.log(Math.random()); //0.7686288063085749
console.log((Math.random()*10) +1);  //9.994867968066302

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

function calculateCircumference(redius) {
    return 2 * Math.PI * redius;
}
console.log(Math.PI);
console.log(calculateCircumference(6));

function calculateCircumference(redius) {
    return Math.PI * (redius + redius);
}

console.log(calculateCircumference(2))