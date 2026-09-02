/*const coding = ["js", "ruby", "java", "cpp", "py"]


const values =coding.forEach((item)=>{
    //console.log(item);
    return item
})

console.log(values);*/

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num > 5 )

//console.log(newNums);  // basics of filter method

const newNums2 = myNums.filter((num) => {
    return num > 5
} )

//console.log(newNums2);  


// using forEach method 

const newNums3 = []

myNums.forEach((num) => {
    if(num > 5){
        newNums3.push(num)
    }
})

//console.log(newNums3);

// working on filters

const books = [
    {title: "book1", author: "author1", price: 100},
    {title: "book2", author: "author2", price: 200},
    {title: "book3", author: "author3", price: 300},
    {title: "book4", author: "author4", price: 400},
]

let userBooks = books.filter((bk) => bk.price === 200)
userBooks = books.filter((bk) => bk.author === "author3")

userbooks = books.filter((bk) => {
    return bk.price > 200
})

console.log(userBooks);






