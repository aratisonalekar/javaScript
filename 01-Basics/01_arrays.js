//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["thor", "hulk", "rocket"]

const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[0]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//console.log(myArr);

//myArr.unshift(8)
//myArr.shift


//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));

const newArr = myArr.join()

//console.log(myArr);
//console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,4)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn1);
console.log("c ", myArr);

console.log(myn2);

// pop mwthod

const animal = ['donky', 'horse', 'cow', 'goat', 'buffelow']
console.log(animal.pop());
console.log(animal);
console.log(typeof(animal));
animal.pop();
console.log(animal);

