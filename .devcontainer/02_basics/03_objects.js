// singleton

// object literals 
//Object.create

const mysm = Symbol("Key1")


const jsuser = {
    name: "aditya",
    "Full name": "Aditya Ranjan Satapathy",
    [mysm]: "Mykey1",
    age: 21,
    location: "BBSR",
    email: "adityaranjanwxd@gmail.com",
    isLoggedin: false,
    lastLoggeinDays: ["Monday", "Saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])// alternative 

console.log(jsuser["Full name"])

console.log(jsuser[mysm])

jsuser.email = "aditya@example.com"

//Object.freeze(jsuser)

jsuser.email = "aditya@dxt.com"


console.log(jsuser)

// functions

jsuser.greetings1 = function(){
    console.log("Hey jsuser!!!")
}
jsuser.greetings = function(){
    console.log(`Hey jsuser!!!, ${this.name}`)
}

console.log(jsuser.greetings1())
console.log(jsuser.greetings())