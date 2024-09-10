const name = "Harry"
const repoCount = 21

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('supermario')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(-9, 6)
console.log(anotherString);

const newStringOne = "   Harry   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harry.com/harry%50potter"

console.log(url.replace('%50', '_'))

console.log(url.includes('harry'))

// comparing srtings
const a = "a"
const b = "b"
if (a < b) {
    console.log(`${a} is less than ${b}`);
    } else if (a > b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${a} and ${b} are equal.`);
    }


    // character search sring using [.charAt()]
const user = "harmaini"
console.log("harmaini".charAt(2));

const menu = "Biryani"
console.log("Biryani"[0]);
console.log("Biryani".indexOf('y'));
