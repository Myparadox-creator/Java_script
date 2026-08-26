function sayMyname(){
    console.log("A")
    console.log("d");
    console.log("i");
    console.log("t");
    console.log("y");
    console.log("a");
}

//sayMyname()

/*function addTwonum(num1, num2){   //num1 and num2 are parameters

    console.log(num1 + num2);

}*/

function addTwonum(num1, num2){   //num1 and num2 are parameters

    //let result = num1 +num2
    //return result
   // console.log("Aditya");
    return num1 +num2

}

addTwonum(4, 5)    //4, null are arguments


const result = addTwonum(4, 5)

//console.log("result: ", result)

function loginUserMessage(username = "Aditya"){
    if(!undefined){
        console.log("Please enter username!")
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage())

function calculateCardprice(val1, val2, ...num1){   // ... is a rest operator 
     return num1
}

console.log(calculateCardprice(200, 400, 500)) // output now [200, 400, 500]


const user = {
    username: "Aditya",
    prices: 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}

//handleObject(user)

handleObject({
    username: "Sam",
    price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray))