// if statement 

const tempreture = 42
const isUserloggedIn = true

if(tempreture < 50){
    console.log("less then 50")
}
else{

console.log("tempreture is greater than 50")
}



if( 2 === "2"){
    console.log("Executed")
}


const score = 200

if(score > 100){
    let power = "fly"
    console.log(`user power: ${power}`)
}

//console.log(`user power: ${power}`)

const balance = 1000

//if(balance > 500) console.log("test"), console.log("test2") (bad practice)


if(balance < 500){
     console.log("less then 500");
     
}
else if(balance < 750){
    console.log("less than 750")
}
else if(balance < 900){
    console.log("less than 900")
}

else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromemail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromemail){
    console.log("user logged in")
}