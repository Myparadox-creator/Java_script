// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());


let myCreateddate = new Date("2026-01-15")
console.log(myCreateddate.toLocaleString());

let mytimeStamp = Date.now()
console.log(mytimeStamp)


console.log(myCreateddate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth());

newDate.totalString('default', {})
