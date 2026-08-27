const user= {
    username: "Aditya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // this keyword refers the current context
        //console.log(this)
    }


}

user.welcomeMessage()

user.username = "Sam"
user.welcomeMessage()

//console.log(this)

/*function fx(){
    let username = "Aditya"
    console.log(this.username)
}*/

//fx()

const adi = () => {           // remove the function keyword and use the arrow afterr the ()
    let username = "Aditya"
    console.log(this)
}
 adi()

/* const addTwo = (num1, num2) => {
    return num1+num2
 }*/
// const addTwo = (num1, num2) => {
 //   return num1+num2
 //}

 //const addTwo = (num1, num2) => (num1 +num2) // used in react and return is optional

 const addTwo = (num1, num2) => ({username: "Aditya"})

 console.log(addTwo(9,10))


 const myArray = [2,3,5,6,7]

 //myArray.forEach(()=>)


