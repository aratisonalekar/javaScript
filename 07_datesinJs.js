// Dates

let myDate = new Date()
console.log(myDate);  //2024-09-10T12:38:25.938Z
console.log(myDate.toString()); //Tue Sep 10 2024 18:08:25 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());  //Tue Sep 10 2024
console.log(myDate.toISOString());  //2024-09-10T12:47:26.724Z
console.log(myDate.toJSON());  //2024-09-10T12:48:41.672Z
console.log(myDate.toLocaleDateString()); //9/10/2024
console.log(myDate.toLocaleString());  //9/10/2024, 6:20:21 PM
console.log(myDate.toLocaleTimeString());  //6:21:10 PM
console.log(myDate.toTimeString());  //18:21:59 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString());  //Tue, 10 Sep 2024 12:52:43 GMT
console.log(myDate.getTimezoneOffset());  //-330

console.log(typeof myDate);  //object

//let myCreatedDate = new Date(2024, 0, 28)
//console.log(myCreatedDate.toDateString());  //Sun Jan 28 2024

//let myCreatedDate = new Date(2024, 0, 28, 5, 9)
//console.log(myCreatedDate.toLocaleString());  //1/28/2024, 5:09:00 AM

let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleString());  //1/14/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1725973814541  time in minisecond
console.log(myCreatedDate.getTime());  //1705170600000
console.log(Math.floor(Date.now()/1000)); //1725974063

let newDate = new Date()
console.log(newDate); //2024-09-10T13:16:37.915Z
console.log(newDate.getDay());  //2
console.log(newDate.getMonth()); //8

newDate.toLocaleString('default',{
    weekday: "long",
})