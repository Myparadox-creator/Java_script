// Immediately Invoked Function Expression(IIFE)


(function hell(){   //named iifi
    console.log(`DB CONNECTED`)
})

();  // ; ends the IIFE for one function

((name) => {// unnamed iifi
console.log(`DB CONNECTED TWO ${name}`)

})('Aditya')


