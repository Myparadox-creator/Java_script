const googleuser = new Object()  // singleton object
const googleuser2 = {}  // non-singleton object

googleuser.id = "1234dc"
googleuser.name = "Aditya"
googleuser.isLoggIn = false

//console.log(googleuser)

const regularuser = {
    email: "asis@example.com",
    fullname: {
        userfullname: {
        firstname: "Aditya",
        lastname: "Satapathy"
        }
    }
}


//console.log(regularuser.fullname.userfullname.lastname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
    id: 1,
    email: "aditya@ex.com"
},
{
    id: 1,
    email: "aditya@ex.com"
},
{
    id: 1,
    email: "aditya@ex.com"
},{
    id: 1,
    email: "aditya@ex.com"
}
]

users[1].email

console.log(googleuser)

console.log(Object.keys(googleuser))
console.log(Object.values(googleuser))
console.log(Object.entries(googleuser))

console.log(googleuser.hasOwnProperty('isLoggIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: dfs} = course

console.log(dfs);

/*

JSON format
{
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}*/

/*{
    "coursename": "js in hindi",
    "price": "999",
    "courseInstructor": "Hitesh"
}*/

/*[
    {},
    {},
]*/








