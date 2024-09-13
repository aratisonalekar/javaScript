//# Objects Singleton/Constroctor #

//const tinderUser = new Object() //singleton object

const tinderUser = {} //non-singletone objects

tinderUser.id = "345abcd"
tinderUser.name = "Durga"
tinderUser.email = "durga@gmail.com"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//object in object
const instaUser = {
    id: "342dfg",
    email: "cat@google.com",
    username: {
        userfullname: {
            firstname: "Tonny",
            lastname: "Starck"
        }
    }
}
//console.log(instaUser.username.userfullname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2} //{ obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign(obj1, obj2)//{ '1': 'A', '2': 'B', '3': 'a', '4': 'b' }

//const obj3 = Object.assign({}, obj1, obj2) //{ '1': 'A', '2': 'B', '3': 'a', '4': 'b' }
                    //target=> {} / obj1, obj2=>source

const obj3 = {...obj1, ...obj2} //% this is mwthod mostly used spread method
//console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//return boolean madhe yenr
